# TBD Fitness — To Be Determined

React + TypeScript + Vite + Tailwind CSS site for TBD Fitness Dubai.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Stack

- React 19
- TypeScript
- Vite 8
- Tailwind CSS v4
- Framer Motion + Lenis

## Project structure

```
src/
  core/              # Reusable UI (Button, ScoreRing, FadeInView, …)
  components/
    layout/          # Nav
    sections/        # Hero, Story, Train, Recover, Visit, …
  design/
    palette/         # Color tokens (colors.ts)
    typography/      # Font tokens (fonts.ts)
    theme/           # tailwind.css (@theme + base styles)
  hooks/             # Scroll & motion hooks
  data/              # Site content
  motion/            # Framer Motion variants
  lib/               # cn() helper
  App.tsx
  main.tsx
```

Design tokens are defined in `src/design/theme/tailwind.css` via `@theme` and mirrored in TypeScript under `palette/` and `typography/`.
