# Lab 04 — JavaScript Action (D3)

## Objetivo
Criar uma JS action local em Node 20 com `@actions/core`, bundlar com `@vercel/ncc` e consumir.

## Estrutura
```
.github/
  actions/
    sum/
      action.yml
      package.json
      src/index.js
      dist/index.js   # gerado por ncc — DEVE ser commitado
  workflows/
    use-sum.yml
```

## Passos
1. Copie tudo para o repo (incluindo `dist/index.js` pré-gerado).
2. (Opcional, para reproduzir o build) dentro de `.github/actions/sum/`:
   ```bash
   npm install
   npm run build   # roda ncc e regenera dist/
   ```
3. Push em `main` → veja `use-sum.yml` somar 7+5 e imprimir 12.

## Por que commitar `dist/`?
O runner faz checkout da action e executa `main` direto, **sem `npm install`**. Sem o bundle, deps não estão disponíveis. `ncc` empacota tudo num arquivo único.

## Pontos de exame
- `runs.using: node20` (atual; `node16` deprecated, `node12` removido)
- `core.getInput()`, `core.setOutput()`, `core.setFailed()`
- Bundling obrigatório (ou commitar `node_modules`, mas é antipattern)
