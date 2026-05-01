# Lab 05 — Reusable Workflow (D4)

## Objetivo
Criar um workflow reutilizável com `workflow_call`, inputs, secrets e outputs; chamar de outro workflow.

## Estrutura
```
.github/workflows/
  reusable-build.yml    # callee
  caller.yml            # caller que invoca o reusable
```

## Passos
1. Copie para o repo.
2. Adicione um secret de teste em **Settings → Secrets → Actions** chamado `MY_TOKEN` com valor qualquer.
3. Push em `main` → veja `caller.yml` rodar e invocar o reusable.
4. Verifique nos logs:
   - Input recebido pelo callee
   - Output retornado para o caller
   - Secret mascarado nos logs (aparece como `***`)

## Pontos de exame
- `on: workflow_call` torna o workflow reusable
- `secrets: inherit` passa todos os secrets do caller (sem listar)
- Limite de aninhamento: **4 níveis**
- Ref obrigatória no `uses:` (`@main`, `@v1`, ou SHA)
- Outputs definidos em `outputs:` no nível do workflow
