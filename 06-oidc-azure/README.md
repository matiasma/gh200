# Lab 06 — OIDC → Azure (D5)

## Objetivo
Autenticar um workflow no Azure **sem secrets long-lived** usando OpenID Connect (OIDC) federation.

## Pré-requisitos
- Azure subscription (free tier serve)
- Permissões para criar App Registration no Entra ID e atribuir role na subscription
- Azure CLI instalada localmente

## Setup (executar localmente — **uma vez**)

```bash
# Variáveis
SUB_ID=$(az account show --query id -o tsv)
TENANT_ID=$(az account show --query tenantId -o tsv)
GH_ORG="<seu-usuario-ou-org>"
GH_REPO="gh-200-labs"

# 1. Cria App Registration
APP_ID=$(az ad app create --display-name "gh-200-oidc" --query appId -o tsv)
SP_ID=$(az ad sp create --id "$APP_ID" --query id -o tsv)

# 2. Federated Credential — autoriza workflows da branch main
az ad app federated-credential create --id "$APP_ID" --parameters "{
  \"name\": \"gh-main\",
  \"issuer\": \"https://token.actions.githubusercontent.com\",
  \"subject\": \"repo:${GH_ORG}/${GH_REPO}:ref:refs/heads/main\",
  \"audiences\": [\"api://AzureADTokenExchange\"]
}"

# 3. RBAC: Reader na subscription (ajuste conforme necessidade)
az role assignment create --assignee "$APP_ID" --role "Reader" --scope "/subscriptions/$SUB_ID"

# 4. Anote os 3 valores e crie como GitHub Variables (não secrets — não são sensíveis)
echo "AZURE_CLIENT_ID=$APP_ID"
echo "AZURE_TENANT_ID=$TENANT_ID"
echo "AZURE_SUBSCRIPTION_ID=$SUB_ID"
```

No GitHub: **Settings → Secrets and variables → Actions → Variables tab → New repository variable** para os 3.

## Passos no repo
1. Copie `.github/workflows/oidc-azure.yml`.
2. Push em `main` → veja login OIDC funcionar e listar resource groups.

## Subject claim — formatos importantes para o exame
| Contexto | Formato |
|---|---|
| Branch | `repo:O/R:ref:refs/heads/<branch>` |
| Tag | `repo:O/R:ref:refs/tags/<tag>` |
| Pull request | `repo:O/R:pull_request` |
| Environment | `repo:O/R:environment:<env>` |
| Reusable workflow | `repo:O/R:workflow:<workflow>` |

## Pontos de exame
- `permissions: id-token: write` é **obrigatório**
- Sem secrets armazenados → reduz blast radius
- Federated credential é por (issuer, subject) único
