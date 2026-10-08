/*  endereço da BrasilAPI */
const API = "https://brasilapi.com.br/api";

/* elementos da página */
const tipo = document.querySelector("#tipo");
const marca = document.querySelector("#marca");
const modelo = document.querySelector("#modelo");
const ano = document.querySelector("#ano");
const consultar = document.querySelector("#consultar");
const status = document.querySelector("#status");
const resultado = document.querySelector("#resultado");

/* função que faz uma requisição */
async function buscar(url){
  const resposta = await fetch(url);

  if(!resposta.ok){
    throw new Error(`Erro ${resposta.status}`);
  }

  return resposta.json();
}

/* mensagens */
function mensagem(texto, classe=""){
  status.textContent = texto;
  status.className = "status " + classe;
}

/* coloca dados dentro de um select */
function preencher(select, lista, texto, campoTexto, campoValor){
  select.innerHTML = `<option value="">${texto}</option>`;
  lista.forEach(item=>{
    const option = document.createElement("option");
    option.value = item[campoValor];
    option.textContent = item[campoTexto];
    select.appendChild(option);
  });
  select.disabled = false;
}

/* tipo -> marcas */
tipo.addEventListener("change", async ()=>{
  const tipoVeiculo = tipo.value;
  marca.disabled = true; modelo.disabled = true; ano.disabled = true;
  consultar.disabled = true; resultado.hidden = true;
  if(!tipoVeiculo) return;
  try{
    mensagem("Carregando marcas...");
    const dados = await buscar(`${API}/fipe/marcas/v1/${tipoVeiculo}`);
    preencher(marca,dados,"Selecione a marca","nome","valor");
    mensagem("Escolha uma marca.","sucesso");
  }catch(e){ mensagem("Não foi possível carregar as marcas. Verifique sua internet ou tente novamente.","erro"); }
});

/* marca -> modelos */
marca.addEventListener("change", async ()=>{
  const tipoVeiculo = tipo.value, codigoMarca = marca.value;
  modelo.disabled = true; ano.disabled = true; consultar.disabled = true; resultado.hidden = true;
  if(!codigoMarca) return;
  try{
    mensagem("Carregando modelos...");
    const dados = await buscar(`${API}/fipe/veiculos/v1/${tipoVeiculo}/${codigoMarca}`);
    preencher(modelo,dados,"Selecione o modelo","modelo","valor");
    mensagem("Escolha um modelo.","sucesso");
  }catch(e){ mensagem("Não foi possível carregar os modelos. Tente novamente.","erro"); }
});

/* modelo -> anos e combustíveis
   A BrasilAPI retorna os dois juntos no campo "nome",
   por exemplo: "2020 Gasolina". */ 
modelo.addEventListener("change", async ()=>{
  const tipoVeiculo = tipo.value, codigoMarca = marca.value, codigoModelo = modelo.value;
  ano.disabled = true; consultar.disabled = true; resultado.hidden = true;
  if(!codigoModelo) return;
  try{
    mensagem("Carregando anos...");
    const dados = await buscar(`${API}/fipe/anos/v1/${tipoVeiculo}/${codigoMarca}/${codigoModelo}`);
    preencher(ano,dados,"Selecione o ano e combustível","nome","valor");
    consultar.disabled = false;
    mensagem("Agora consulte o valor.","sucesso");
  }catch(e){ mensagem("Não foi possível carregar os anos. Tente novamente.","erro"); }
});

/* ano -> detalhes e preço */
consultar.addEventListener("click", async ()=>{
  if(!ano.value) return;
  try{
    consultar.disabled = true;
    mensagem("Consultando valor FIPE...");
    const dados = await buscar(`${API}/fipe/detalhes/v1/${tipo.value}/${marca.value}/${modelo.value}/${ano.value}`);

    document.querySelector("#codigoFipe").textContent = `Código FIPE: ${dados.codigoFipe || "-"}`;
    document.querySelector("#nomeVeiculo").textContent = `${dados.marca} ${dados.modelo}`;
    document.querySelector("#preco").textContent = dados.valor || "Valor não informado";
    document.querySelector("#detMarca").textContent = dados.marca || "-";
    document.querySelector("#detAno").textContent = dados.anoModelo || "-";
    document.querySelector("#detCombustivel").textContent = dados.combustivel || "-";
    document.querySelector("#detReferencia").textContent = dados.mesReferencia?.trim() || "-";

    resultado.hidden = false;
    mensagem("Consulta realizada com sucesso.","sucesso");
  }catch(e){
    mensagem("Não foi possível consultar esse veículo.","erro");
  }finally{ consultar.disabled = false; }
});
