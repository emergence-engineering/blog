# CLAUDE.md — Emergence Engineering website

## Always do first

- **Invoke the `frontend-design` skill** before writing or changing any UI. Every session, no exceptions.
- Read the section of this file that matches the task: **Reference match** or **Design from scratch**. They have different rules.

## Project facts

- Next.js 14 (pages router), TypeScript, React 18. Node 20.
- Dev server: `npm run dev` → http://localhost:3000. Do not start a second instance if one is running.
- Check before finishing: `npm run lint` (runs `tsc --noEmit` and `next lint`). Prettier with the Tailwind class-sorting plugin is configured; keep class order as Prettier emits it.
- i18n: pages are authored in Hungarian inline via `t("key", "hungarian fallback")`; English lives in `features/ge/i18n/en.ts`. Any copy you add or change must be updated in both places.
- Images: use `next/image` with explicit width and height. Real assets live in `public/`. Never use placeholder image services when a real asset exists.

## Two design systems live here. Do not mix them.

1. **Growth Engineering pages** (`GeShell`, most marketing pages): styles are scoped under `.ge` in `features/ge/styles/ge.css` and per page under `.ge-p-<page>` in `ge-pages.css`. Tokens are CSS variables: `--navy`, `--paper`, `--coral`, `--ink`, `--body`, `--muted`, `--rule`, `--display` (Archivo), `--sans` (InterV), `--r` (18px radius). Use these classes and variables, not Tailwind, inside GE pages.
2. **Legacy Tailwind pages** (blog, team, references, opensource, cv): Tailwind 3 with the theme in `tailwind.config.js` (`ink`, `coral`, `paper`, `orange-button` gradient, `productCard` shadow, `font-montserrat`, `font-sans` = PT Sans). Fonts are loaded through `next/font` in `utils/fonts.ts`.

- New marketing pages follow the GE system. Blog and article UI follows the Tailwind system. Ask if unsure.
- Never load Tailwind, fonts, or icons from a CDN. Never add a Google Font that is not already in `utils/fonts.ts` without asking.

## Brand source of truth

- Colors and type are defined, not invented: `ge.css` tokens and `tailwind.config.js`. If a design needs a color or font that is not there, propose it and wait for approval before adding it.
- The hard-offset black `productCard` shadow and the orange gradient button are deliberate brand choices. Do not "fix" them.
- Logo and brand SVGs are in `public/`. Use them as-is; do not redraw or recolor.

## Mode A — Reference match (a screenshot, Figma export, or mockup was provided)

- Match layout, spacing, typography, and color exactly. Do not improve, add, or omit anything.
- Map the reference onto existing tokens where they match within a few percent; otherwise use the exact values from the reference and flag the mismatch.
- The **Design guardrails** below do not apply in this mode. The **Quality floor** does.

## Mode B — Design from scratch (no reference)

- Follow the `frontend-design` skill's process: identify subject, audience, and the page's one job; write a short plan (palette from existing tokens, type roles, ASCII layout, one principle that makes this page specific); review it against the brief; then build.
- Spend boldness in one place. One memorable element, everything else quiet.
- The **Design guardrails** and the **Quality floor** both apply.

## Design guardrails (Mode B)

These are the tells of generated design. Avoid them unless the brief asks for one explicitly.

- No default Tailwind blue, indigo, or purple as an accent. No warm-cream plus terracotta, no black plus acid green. Use brand tokens.
- No SaaS card kit: content chopped into identical rounded cards with the same soft grey shadow. Cards must earn their border. Never nest a card inside a card.
- No tracked-out ALL-CAPS eyebrow on every heading, no `A · B · C` meta strings, no `→` glued to every link, no numbered `01 / 02 / 03` markers unless the content is a real sequence. (The GE `.eyebrow` class exists; use it once per section at most, where the section genuinely needs a label.)
- No single italic or colored word inside a headline as the only "design".
- No fade-and-slide-up entrance on every section and hover lift on every card. One orchestrated moment per page at most. Motion that answers a user action is welcome.
- No gradient overlay plus `mix-blend-multiply` applied to every image, no grain textures, no stacked radial gradients as decoration.
- No bounce or elastic easing. No pure `#000` or untinted grey; tint neutrals toward the page hue.
- Headline copy is specific to Emergence Engineering's work. No "Elevate your business", no "Seamless", no "Unlock".
- Line length under 80 characters. Body line-height 1.5 to 1.7. Large headings get tight tracking; the GE system already sets `-0.035em`.

## Quality floor (always)

- Responsive at 390, 768, 1440, and 1920 wide. No horizontal scroll at any width.
- Every interactive element has hover, `:focus-visible`, and active states, and increases contrast on those states. Never `outline: none` without a visible replacement.
- Hit targets at least 24px, 44px on touch. Inputs at least 16px font on mobile.
- Navigation uses `next/link` or `<a>`, never a `div` with `onClick`.
- Animate only `transform` and `opacity`. List properties explicitly; never `transition: all`. Honor `prefers-reduced-motion`.
- Heading hierarchy is real (`h1` once, then `h2`, `h3`). Icon-only buttons have `aria-label`. Decorative SVGs are `aria-hidden`.
- Text contrast passes at least WCAG AA; prefer checking with APCA. Status is never color-only.
- Text containers survive long Hungarian words: `break-words`, `min-w-0` on flex children, `text-wrap: balance` on headings.
- Every `next/image` has dimensions so nothing shifts. Above-the-fold images are `priority`.
- Empty, loading, and error states are designed, not left as blank space.

## Verify with screenshots. Never trust the first render.

1. Make sure the dev server is running on port 3000 (`npm run dev`).
2. Screenshot with the repo script. It captures desktop (1440) and mobile (390), forces reduced motion so scroll-reveal sections are visible, and saves to `screenshots/` (gitignored, auto-numbered, never overwritten):
   ```
   npm run screenshot -- /PATH            # both viewports
   npm run screenshot -- /PATH label      # adds a label to the file name
   npm run screenshot -- /PATH --desktop-only
   ```
   First run on a new machine: `npx playwright install chromium`.
   Do not use `npx playwright screenshot` directly on GE pages: sections revealed on scroll come out blank.
3. Read each PNG with the Read tool and critique it. Be numeric: "h1 is 64px but the reference shows about 48px", "card gap is 16px, should be 24px".
4. Fix, re-screenshot, repeat. Minimum two rounds. Stop only when no visible differences remain (Mode A) or the self-critique finds nothing to cut (Mode B).
5. For GE pages, check both locales: `/PATH` and `/hu/PATH`.
6. Also check 1920 wide once before finishing a new page (`SCREENSHOT_BASE_URL` and viewport are in `scripts/screenshot.mjs` if you need to adjust).

## Never

- Never use `transition: all`.
- Never use default Tailwind blue or indigo as a primary color.
- Never import Tailwind or a font from a CDN.
- Never add sections, features, or copy that the reference or brief did not ask for.
- Never stop after one screenshot pass.
- Never leave English or Hungarian copy out of sync.
- Never edit `ge.css` tokens or `tailwind.config.js` colors without asking first.
