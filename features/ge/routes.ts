/**
 * Routes served by the Growth Engineering pages (ported from
 * growth-engineers-v4). These pages carry their own <GeSEO>, so the generic
 * site-wide SEO block in _document must not render for them.
 */
export const GE_ROUTES = [
  "/",
  "/ppc-hirdeteskezeles",
  "/webfejlesztes",
  "/email-automatizacio",
  "/kreativ-es-videogyartas",
  "/ux-ui-design",
  "/ai-seo",
  "/cro-es-ecommerce",
  "/esettanulmanyok",
  "/esettanulmany-plantart",
  "/esettanulmany-szamlabridge",
  "/esettanulmany-vezessjol",
  "/rolunk",
  "/kapcsolat",
  "/adatkezeles",
  "/aszf",
  "/growth",
  "/contact-en",
];

export const isGeRoute = (pathname: string): boolean =>
  GE_ROUTES.includes(pathname);

/**
 * Home of the Emergence Engineering (software) site: the site root. The
 * Growth Engineering landing page lives at /growth (and /hu/growth).
 */
export const EE_HOME = "/";
