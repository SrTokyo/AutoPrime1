# AutoPrime — Consulta FIPE

Projeto de uma concessionária digital usando HTML, CSS e JavaScript.

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

## Fluxo
Tipo → Marca → Modelo → Ano → Valor FIPE.
