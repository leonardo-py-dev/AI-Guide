# AI Guide — Cheatsheets para Estudantes

Material de estudo com cheatsheets sobre programação com IA, Git e GitHub.

## Conteúdo

- **IDEs com IA** — Cursor, Google Antigravity e Trae
- **Modelos Open Source** — Ollama e OpenRouter
- **CLIs Open Source** — OpenCode e OpenClaude
- **Comandos Git** — referência rápida
- **Guia GitHub** — como manter repositórios

## Desenvolvimento

```bash
npm install
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Deploy no GitHub Pages

1. Descomente e ajuste `base` em `vite.config.ts`:

```ts
base: "/nome-do-repositorio/",
```

2. Faça o build e publique a pasta `dist/`:

```bash
npm run build
```

3. Configure GitHub Pages para servir a pasta `dist` (via Actions ou branch `gh-pages`).

## Stack

- Vite + React + TypeScript
- React Router
- Tailwind CSS
- shadcn/ui (componentes manuais)
- Lucide React
