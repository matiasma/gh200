# Lab 10 — Security hardening (D5)

## Objetivo
Aplicar todo o pacote de hardening: SHA pinning, least-privilege permissions, OIDC, masking, Dependabot, CodeQL.

## Setup
1. No repo: **Settings → Code security** → habilite:
   - Dependabot alerts
   - Dependabot security updates
   - CodeQL analysis (default setup serve)
2. **Settings → Actions → General** → Allowed actions: "Allow select actions" → liste `actions/*` e `github/*`.
3. Copie a pasta inteira para o repo.

## Conteúdo
- `.github/workflows/secure.yml` — workflow com hardening completo
- `.github/dependabot.yml` — atualiza npm e github-actions semanal
- `.github/workflows/codeql.yml` — análise de código

## Auditoria (passe a checklist no exame)
- [ ] Todas as actions de terceiros pinadas por **commit SHA** (40 chars)
- [ ] `permissions:` declarado explicitamente em workflow ou job (least privilege)
- [ ] Secrets nunca em `echo`; uso de `::add-mask::` para valores derivados
- [ ] OIDC para clouds (sem secrets long-lived)
- [ ] `timeout-minutes` declarado (max 360 em hosted)
- [ ] Dependabot configurado (3 features: alerts, security updates, version updates)
- [ ] CodeQL ativo
- [ ] `pull_request_target` nunca combinado com checkout do head do fork

## Pontos de exame
- Hierarquia de permissions: declarar reseta tudo não listado para `none`
- `id-token: write` para OIDC
- GITHUB_TOKEN é read-only em PR de fork (forçado)
- `::add-mask::` mascara nos logs
