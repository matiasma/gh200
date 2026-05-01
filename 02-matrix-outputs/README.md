# Lab 02 — Matrix strategy + outputs (D1)

## Objetivo
- Construir matrix com `include`/`exclude`
- Controlar `fail-fast` e `max-parallel`
- Passar dados entre jobs via `outputs` + `needs`

## Passos
1. Copie `.github/workflows/` para o repo de teste.
2. Push em `main` → veja a matrix expandir em 6 combos (3 OS × 2 Node).
3. Verifique que combo `windows + node 18` foi excluído.
4. Verifique que `include` adicionou um combo extra com env diferente.
5. Job `report` consome output do `build`.

## Critério de sucesso
- 6 jobs paralelos visíveis na UI
- `report` mostra a versão capturada de `build`

## Pontos de exame
- Limite 256 jobs por matrix
- `fail-fast: false` mantém runs após falha
- Sintaxe `needs.<job>.outputs.<name>`
- Uso de `$GITHUB_OUTPUT` (não `::set-output::` deprecated)
