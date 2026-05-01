# Lab 09 — Environments com approval (D1/D4)

## Objetivo
Criar um environment `production` com **required reviewers** e usar em job de deploy.

## Setup
1. No repo: **Settings → Environments → New environment** → nome `production`.
2. Marque **Required reviewers** → adicione você mesmo (ou outro user).
3. (Opcional) Marque **Wait timer: 1 minute**.
4. Adicione um environment secret `DEPLOY_TOKEN` com valor qualquer.

## Passos
1. Copie `.github/workflows/deploy-with-approval.yml`.
2. Push em `main`.
3. Job `build` roda imediatamente.
4. Job `deploy-prod` fica **waiting for approval** → vá em Actions → Review pending deployment → Approve.
5. Job continua e usa o secret do environment.

## Pontos de exame
- Environment-scoped secrets têm precedência sobre repo e org
- Approval gates pausam o job (não o workflow inteiro)
- `environment:` no job pode ter `name` + `url`
- OIDC subject de environment: `repo:O/R:environment:production`
