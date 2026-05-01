# Lab 03 — Composite Action (D3)

## Objetivo
Criar uma composite action local (no mesmo repo) e consumi-la num workflow.

## Estrutura
```
.github/
  actions/
    greet/
      action.yml      # composite action
  workflows/
    use-greet.yml
```

## Passos
1. Copie tudo para o repo de teste.
2. Push em `main` → veja `use-greet.yml` rodar.
3. Confirme nos logs:
   - Inputs `who` e `times` recebidos
   - Output `greeting` consumido pelo step seguinte
   - Cada step da composite executou (note `shell:` obrigatório)

## Critério de sucesso
- Workflow verde, output exibido no job `consume`

## Pontos de exame
- `using: "composite"` em `action.yml`
- `shell:` é OBRIGATÓRIO em cada step `run:` de composite
- Inputs sempre são strings (mesmo declarados como number/boolean)
- Outputs definidos em `outputs:` e referenciados via `steps.<id>.outputs.<name>`
