/**
 * Routes served by the Growth Engineers pages (ported from
 * growth-engineers-v4). These pages carry their own <GeSEO>, so the generic
 * site-wide SEO block in _document must not render for them.
 */
export const GE_ROUTES = [
  "/",
  "/growth-marketing",
  "/webfejlesztes",
  "/email-automatizacio",
  "/tartalomgyartas",
  "/ux-ui-design",
  "/ai-seo",
  "/ecommerce-skalazas",
  "/esettanulmanyok",
  "/esettanulmany-plantart",
  "/esettanulmany-szamlabridge",
  "/esettanulmany-vezessjol",
  "/rolunk",
  "/kapcsolat",
  "/index-en",
  "/contact-en",
];

export const isGeRoute = (pathname: string): boolean =>
  GE_ROUTES.includes(pathname);

/**
 * Home of the Emergence Engineering (software) site. The site root "/" now
 * serves the Growth Engineers landing page, so the legacy EE pages (blog,
 * team, references, opensource) link here instead.
 */
export const EE_HOME = "/index-en";
