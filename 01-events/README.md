# Lab 01 — Events e triggers (D1)

## Objetivo
Praticar todos os principais triggers e seus filtros: `push`, `pull_request`, `workflow_dispatch`, `schedule`, `workflow_run`.

## Pré-requisitos
- Repo de teste no GitHub
- Branch `main` + criar uma branch `feature/test`

## Passos
1. Copie `.github/workflows/` para o repo.
2. Push em `main` → veja `events-demo.yml` rodar (filtra paths).
3. Abra um PR para `main` → veja `events-demo.yml` rodar (job `pr-only`).
4. Vá em **Actions → Manual Dispatch → Run workflow** → preencha inputs → execute.
5. Push uma tag `v1.0.0` → veja `tag-release.yml` disparar.
6. Aguarde até o próximo horário do cron (ou ajuste para 5 min à frente) → veja `scheduled.yml` rodar.

## Critério de sucesso
- Todos os 4 workflows aparecem em Actions com pelo menos 1 run cada.
- `manual-dispatch.yml` mostra o input `environment` no log.

## Pontos de exame validados
- Sintaxe de filtros `branches`, `paths`, `tags`
- `workflow_dispatch` com inputs tipados (max 10)
- Cron syntax UTC
- Diferença `push` vs `pull_request` em forks
