# Growth Engineering pages (`features/ge`)

Port of the `growth-engineers-v4` static HTML bundle into this Next.js app.
The Growth Engineering pages replaced the previous homepage; the legacy pages
(blog, team, references, opensource, …) are untouched.

## How it works

- **Pages** (`pages/*.tsx`, e.g. `index`, `growth-marketing`, `kapcsolat`) were
  machine-converted from the static HTML with a converter that preserves the
  DOM structure 1:1 while swapping in `next/image`, `next/link` and the i18n
  helper. Verified against the originals with DOM-structure diffs and
  screenshot comparisons.
- **i18n**: Native Next.js i18n routing (`en` default, `hu` under `/hu`).
  Hungarian visitors hitting `/` are redirected by `Accept-Language`
  detection; everyone else gets English — same intent as the static site's
  timezone/locale sniffing, but server-side and SEO-visible. The i18n model
  mirrors the original: pages are authored in Hungarian inline, and
  `useGeT()(key, huFallback)` overrides with the English dictionary
  (`i18n/en.ts`, extracted from `site.js` + the per-page dictionaries).
  The header's HU/EN toggle switches the locale and persists it via the
  `NEXT_LOCALE` cookie.
- **Styles**: the original stylesheet is auto-scoped under `.ge`
  (`styles/ge.css`); per-page `<style>` blocks are scoped under
  `.ge-p-<page>` (`styles/ge-pages.css`). Both are imported in `_app.tsx`.
  The scoping (and a couple of host-app integration fixes at the bottom of
  `ge.css`) means GE styles can't leak into legacy pages and vice versa.
- **Shared components**: `GeHeader`/`GeFooter` (HU pages) and
  `EnHeader`/`EnFooter` (the English-only startup pages `index-en`,
  `contact-en`), plus `GeShell`/`EnShell` wrappers and `GeSEO`.
  `aria-current` in the nav is computed from the route.
- **Behaviours**: `hooks/useGeSite.ts` is a 1:1 port of the static bundle's
  `site.js` (sticky header, mobile nav, dropdown, scroll reveal, tabs,
  case-study filter), attached per-route in the shells.
- **SEO**: `_document.tsx` renders the generic `GeneralSEO` only on legacy
  routes (see `routes.ts`); GE pages emit their own localized meta via
  `GeSEO`, including hreflang alternates.

## Editing content

Hungarian copy lives inline in the page JSX (as `t("key", "hungarian…")`
fallbacks); English copy lives in `i18n/en.ts`. Keep the two in sync when
editing.

## Known intentional deviations from the static bundle

- Footer normalized to one shared component (the originals had per-page
  drift: a missing UX/UI link on one page, FAQ vs Contact link on three).
- `aria-current` is set consistently (two originals forgot it).
- English meta descriptions actually work (the original JS never swapped
  `data-i18n-content` attributes).
- Links to emergence-engineering.com are internal now.
