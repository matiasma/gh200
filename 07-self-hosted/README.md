# Lab 07 — Self-hosted runner ephemeral (D4)

## Objetivo
Registrar um runner self-hosted **ephemeral** (auto-remove após 1 job) e direcioná-lo via labels.

## Pré-requisitos
- Uma máquina Linux x64 (VM, container ou WSL)
- Acesso de admin ao repo

## Setup do runner

1. No repo: **Settings → Actions → Runners → New self-hosted runner** → escolha Linux x64.
2. Na VM, execute os comandos exibidos pela UI; **modifique `config.sh` para incluir `--ephemeral` e labels customizadas**:

```bash
mkdir actions-runner && cd actions-runner

# (download conforme UI)
curl -o actions-runner-linux-x64.tar.gz -L https://github.com/actions/runner/releases/download/v2.317.0/actions-runner-linux-x64-2.317.0.tar.gz
tar xzf ./actions-runner-linux-x64.tar.gz

# Registra como ephemeral, com labels custom
./config.sh \
  --url https://github.com/<owner>/<repo> \
  --token <REGISTRATION_TOKEN_DA_UI> \
  --name "ephemeral-1" \
  --labels "self-hosted,linux,x64,gh-200-lab" \
  --ephemeral \
  --unattended

# Inicia (consome 1 job e sai)
./run.sh
```

3. Copie `.github/workflows/self-hosted.yml` para o repo e dê push em `main`.
4. O workflow rodará na sua VM. Após terminar, o runner se desregistra. Para outro job: rode `./run.sh` novamente (ou automatize via systemd / ARC).

## Hardening — críticos para o exame
- **Nunca em repos públicos sem proteções**: forks podem submeter workflows arbitrários
- Use `--ephemeral` para evitar persistência de estado entre jobs
- **Runner groups** (org-level) restringem quais repos/workflows podem usar o runner
- Aplique princípio do menor privilégio: usuário não-root, isolado, sem credenciais persistentes
- Em PR de fork: setting "Require approval for first-time contributors"

## Pontos de exame
- 3 níveis: repo / org / enterprise
- `--ephemeral` vs persistente
- ARC (Actions Runner Controller) para autoscale em K8s
- Risco de RCE em repos públicos
