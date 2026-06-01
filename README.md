# Yos Rio Puraga — Portfolio

Personal portfolio website. Built with Vue 3, TypeScript, Vite, and Tailwind CSS v4.

## Stack

- **Framework:** Vue 3 (Composition API)
- **Language:** TypeScript
- **Build tool:** Vite 6
- **Styling:** Tailwind CSS v4 (with custom design tokens)
- **Icons:** lucide-vue-next
- **Utilities:** @vueuse/core

## Getting started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Type-check
npx vue-tsc --noEmit

# Production build
npm run build

# Preview production build locally
npm run preview
```

## Project structure

```
src/
├── components/       # Reusable UI components (NavBar, ThemeToggle)
├── composables/      # Composition utilities (useTheme, useReveal)
├── data/             # Typed content (personal, projects, experience, skills)
├── sections/         # Page sections (Hero, About, Stack, Experience, Projects…)
├── styles/           # Global CSS and design tokens
├── App.vue
└── main.ts
```

## Deployment (GitHub Pages)

The site deploys automatically via GitHub Actions on every push to `main`.

**Manual setup steps (one-time):**

1. Push the repo to `github.com/<username>/<username>.github.io`
2. Go to **Settings → Pages**
3. Set **Source** to **GitHub Actions**
4. Push to `main` — the workflow handles the rest

The live site will be at `https://<username>.github.io/`.

## Customisation

All content lives in `src/data/`. Edit the typed exports there to update:

| File | Controls |
|------|----------|
| `personal.ts` | Name, bio, email, social links, education |
| `projects.ts` | Featured client and personal projects |
| `experience.ts` | Work history |
| `skills.ts` | Tech stack groups |

Design tokens (colors, spacing) are defined as CSS custom properties in `src/styles/main.css` under `:root` (light) and `.dark`.
