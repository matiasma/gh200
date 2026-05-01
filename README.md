# 🧪 Labs GH-200

10 labs prontos para clonar em um repositório de teste e rodar. Cada lab tem `README.md` + arquivos executáveis.

| # | Lab | Domínio | Foco |
|---|---|---|---|
| 01 | [events](01-events/) | D1 | Triggers (push, PR, schedule, dispatch, workflow_run) |
| 02 | [matrix-outputs](02-matrix-outputs/) | D1 | Matrix strategy + job outputs + needs |
| 03 | [composite-action](03-composite-action/) | D3 | Custom composite action local |
| 04 | [js-action](04-js-action/) | D3 | Custom JavaScript action com `@actions/core` |
| 05 | [reusable-workflow](05-reusable-workflow/) | D4 | `workflow_call` + secrets inherit |
| 06 | [oidc-azure](06-oidc-azure/) | D5 | OIDC federation → Azure (sem secrets) |
| 07 | [self-hosted](07-self-hosted/) | D4 | Registrar runner ephemeral + runner groups |
| 08 | [caching](08-caching/) | D2 | `actions/cache` + artifacts (v4) |
| 09 | [environments](09-environments/) | D1 | Environment com approval gate |
| 10 | [security](10-security/) | D5 | Permissions, SHA pinning, Dependabot, CodeQL |

## Como usar

1. Crie um repo de teste pessoal no GitHub (ex.: `gh-200-labs`).
2. Copie a pasta `labs/NN-<slug>/` inteira para a raiz do repo (preservando `.github/workflows/`).
3. Commit + push.
4. Acompanhe a aba **Actions** do repo.
5. Após validar, limpe e parta para o próximo lab.

> Alguns labs (06, 07) exigem recursos externos (Azure subscription, máquina Linux). Veja o `README.md` de cada um.
