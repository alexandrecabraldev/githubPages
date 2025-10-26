# Projeto Básico: HTML + CSS + JavaScript + CI/CD (GitHub Actions)

Este repositório contém um site estático simples e um pipeline de CI/CD usando GitHub Actions para publicar no GitHub Pages automaticamente.

## Estrutura
- `index.html` — Página inicial com conteúdo de exemplo.
- `styles.css` — Estilos básicos.
- `script.js` — Interatividade simples.
- `.github/workflows/pages.yml` — Workflow do GitHub Actions para build e deploy no GitHub Pages.

## Como usar
1. Crie um repositório no GitHub e envie estes arquivos (git init, commit e push para a branch `main`).
2. Verifique se a branch padrão do repositório é `main` (ou ajuste o workflow).
3. Vá em Settings → Pages e selecione "Deploy from a branch" com a origem como "GitHub Actions".
4. Vá em Actions e verifique se o workflow "Deploy GitHub Pages" executou com sucesso após o push. Ele fará o deploy para o GitHub Pages.

A URL final ficará como:
- `https://<seu-usuario>.github.io/<seu-repo>/` (padrão)

> Observação: Em organizações, pode ser necessário habilitar GitHub Pages/Actions nas políticas.

## Executar localmente
Basta abrir `index.html` no navegador.

## Pipeline CI/CD (GitHub Actions)
O arquivo `.github/workflows/pages.yml` faz:
- Roda em push na branch `main` e em execuções manuais (workflow_dispatch)
- Faz checkout do código
- Configura permissões e ambiente de Pages
- Faz upload do artefato com o site estático
- Publica no GitHub Pages

## Ajustes comuns
- Caso use outra branch principal, altere `branches: [ main ]` no YAML.
- Para adicionar uma etapa de build (por exemplo, bundlers), inclua passos antes do upload do artefato e ajuste o caminho `upload-pages-artifact`.

## Suporte
Se precisar, abra uma Issue descrevendo o problema ou a melhoria desejada.
