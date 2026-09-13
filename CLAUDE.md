# CLAUDE.md — Emergence Engineering website

## Any UI work: load the `web-design` skill first

Before creating or changing pages, sections, components, styling, or layout, invoke the project skill `web-design` (`.claude/skills/web-design/SKILL.md`). It holds the design systems, brand tokens, guardrails, and the screenshot review loop. Nothing in this file repeats it.

## Project facts

- Next.js 14 (pages router), TypeScript, React 18. Node 20.
- Dev server: `npm run dev` → http://localhost:3000. Do not start a second instance if one is running.
- Check before finishing: `npm run lint` (runs `tsc --noEmit` and `next lint`). Prettier with the Tailwind class-sorting plugin is configured; keep class order as Prettier emits it.
- Screenshots for visual review: `npm run screenshot -- /PATH` (see the `web-design` skill).

## Code layout

- `pages/`: routes. Most marketing pages are Growth Engineering pages wrapped in `GeShell` (`features/ge`). Blog, team, references, opensource, and cv are legacy Tailwind pages.
- `features/`: page-level features. `features/ge/README.md` explains the GE port, its scoped CSS, and its i18n.
- `ui/components/`: shared components. `utils/`: fonts, theme, helpers. `public/`: static assets.

## i18n

- GE pages are authored in Hungarian inline via `t("key", "hungarian fallback")`; English lives in `features/ge/i18n/en.ts`.
- Any copy you add or change must be updated in both places. Never leave the two out of sync.
- Routes: `/PATH` is English, `/hu/PATH` is Hungarian.

## Never

- Never commit `screenshots/` or `.env` files.
- Never edit `ge.css` tokens or `tailwind.config.js` colors without asking first.
