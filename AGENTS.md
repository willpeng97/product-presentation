# AGENTS.md

## Project

A single-page marketing/education site (Traditional Chinese) explaining Power Automate vs Copilot Studio for non-technical readers. Built with Vite + React 19 + Tailwind CSS v4 + Framer Motion. All illustrations are inline SVG. Section components live in `src/components/` and are composed in `src/App.jsx`.

## Cursor Cloud specific instructions

- Dependencies are installed by the startup update script (`npm install`); you normally don't need to run it manually.
- Standard commands (see `package.json` scripts): `npm run dev` (Vite dev server on port 5173, bound to `0.0.0.0`), `npm run build`, `npm run preview`, `npm run lint`.
- Tailwind v4 has no `tailwind.config.js`; it is wired via the `@tailwindcss/vite` plugin in `vite.config.js`, and theme tokens are declared in the `@theme` block inside `src/index.css`. Edit CSS/theme there, not a JS config.
- There is no test suite; `npm run lint` and `npm run build` are the programmatic checks.
