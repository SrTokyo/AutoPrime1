# AutoPrime — Consulta FIPE

Projeto acadêmico de uma concessionária digital usando HTML, CSS e JavaScript.

## Estrutura
```text
autoprime-fipe/
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

## Fluxo
Tipo → Marca → Modelo → Ano → Valor FIPE.

## Publicação no GitHub Pages
Envie a pasta para um repositório, depois em **Settings > Pages** escolha a branch `main` e a pasta `/root`.

O JavaScript foi mantido propositalmente simples e comentado por etapas.
