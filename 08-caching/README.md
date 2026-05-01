# Lab 08 — Caching + Artifacts (D2)

## Objetivo
- `actions/cache@v4` para acelerar instalação de deps
- `actions/upload-artifact@v4` + `download-artifact@v4` (com nomes únicos por matrix)
- `fail-on-cache-miss` em job restore-only

## Passos
1. Copie `.github/workflows/cache-artifacts.yml`.
2. Push pela primeira vez → cache miss → instala deps → upload do artifact.
3. Push novamente → cache hit → instalação rápida.
4. Veja a aba **Actions → Caches** mostrar o cache armazenado.
5. Veja artifacts disponíveis para download em **Summary** do run.

## Cache vs Artifact — pegadinha do exame
| | Cache | Artifact |
|---|---|---|
| Persiste | Entre runs (até 7 dias sem uso, max 10 GB/repo) | Durante e após o run (default 90 dias) |
| Propósito | Acelerar (deps, build cache) | Compartilhar entre jobs / disponibilizar download |
| Compartilhamento | Por branch (com fallback hierárquico) | Por run |

## Pontos de exame
- v4 do `upload-artifact` exige **nomes únicos** por matrix combo (breaking change do v3)
- Restauração hierárquica de cache via `restore-keys`
- `fail-on-cache-miss: true` → falha o step se não houve hit
