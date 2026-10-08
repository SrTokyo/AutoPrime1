# AutoPrime

O **AutoPrime** é um projeto que estou desenvolvendo para criar uma experiência simples de consulta de veículos pela **Tabela FIPE**.

A ideia é que o usuário consiga escolher um veículo e descobrir seu valor de referência sem precisar ficar procurando essas informações manualmente.

## Como funciona?

Você escolhe:

* o tipo do veículo (carro, moto ou caminhão);
* a marca;
* o modelo;
* o ano e combustível.

Depois, o sistema consulta os dados e mostra o valor do veículo na tela.

## O que usei no projeto?

* **HTML** para montar a estrutura da página;
* **CSS** para criar o visual;
* **JavaScript** para fazer o site funcionar;git
* **BrasilAPI** para buscar os dados da Tabela FIPE;
* **Git e GitHub** para versionar e publicar o projeto.

## O que estou praticando?

Esse projeto faz parte do meu aprendizado em desenvolvimento web. Nele estou praticando principalmente **JavaScript, manipulação de elementos HTML, consumo de APIs e Git/GitHub**.

Também estou usando o projeto para aprender, na prática, como transformar uma ideia em um site que realmente funciona.

## Estrutura
```text
autoprime/
├── index.html
├── css/style.css
├── js/app.js
└── README.md
```

## BrasilAPI usada
- `/fipe/marcas/v1/{vehicleType}`
- `/fipe/veiculos/v1/{vehicleType}/{makerCode}`
- `/fipe/anos/v1/{vehicleType}/{makerCode}/{modelCode}`
- `/fipe/detalhes/v1/{vehicleType}/{makerCode}/{modelCode}/{yearCode}`