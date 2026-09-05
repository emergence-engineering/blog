import { NextRequest, NextResponse } from "next/server";

/**
 * Locale routing for the site root.
 *
 * The root (/) is the English-only engineering page; the Growth Engineering
 * marketing site lives at /growth (en) and /hu/growth (hu). A Hungarian
 * visitor arriving at / from outside (search, typed URL) is redirected to
 * /hu/growth — but only on first contact. Once someone is inside the site,
 * links go exactly where they say: a visitor on /hu/growth who clicks
 * "For startups →" (/) must get the engineering page, never bounce back.
 *
 * With Pages Router i18n, client-side <Link> navigations also pass through
 * middleware (as normalized /_next/data requests), so "document load only"
 * is not a usable distinction. First contact is detected with two guards:
 *
 * - a `ge_seen` session cookie, set on the redirect itself and on every
 *   /hu/growth response (someone landing there straight from a Hungarian
 *   SERP is also "inside");
 * - a same-origin Referer, which covers in-site navigation before any
 *   cookie exists.
 *
 * Hungarian-ness is IP country (x-vercel-ip-country, set by Vercel's edge —
 * no browser permission involved; Cloudflare's equivalent is cf-ipcountry)
 * OR the browser's Accept-Language. The NEXT_LOCALE cookie written by the
 * HU/EN toggle always wins over both.
 */

const SEEN_COOKIE = "ge_seen";
const HU_GROWTH = "/hu/growth";

const isHungarian = (req: NextRequest): boolean => {
  // req.geo is populated by Vercel in production; empty under `next dev`,
  // so fall back to the raw header (works when spoofed locally too).
  const country =
    req.geo?.country ?? req.headers.get("x-vercel-ip-country") ?? "";
  if (country.toUpperCase() === "HU") return true;
  const lang = req.headers.get("accept-language") ?? "";
  return lang.trim().toLowerCase().startsWith("hu");
};

const isInternalReferer = (req: NextRequest): boolean => {
  const referer = req.headers.get("referer");
  if (!referer) return false;
  try {
    return new URL(referer).host === req.nextUrl.host;
  } catch {
    return false;
  }
};

const markSeen = (res: NextResponse): NextResponse => {
  // Session cookie (no Max-Age): "first contact" resets when the browser
  // closes, so a fresh arrival from search is redirected again.
  res.cookies.set(SEEN_COOKIE, "1", { path: "/", sameSite: "lax" });
  return res;
};

export function middleware(req: NextRequest): NextResponse {
  // i18n routing strips the locale prefix: /hu/growth arrives with
  // pathname "/growth" and locale "hu".
  const { pathname, locale } = req.nextUrl;

  if (pathname === "/growth") {
    // Being on the Hungarian marketing page counts as inside the site.
    return locale === "hu" ? markSeen(NextResponse.next()) : NextResponse.next();
  }

  // From here on pathname === "/" (the matcher allows nothing else).

  if (locale === "hu") {
    // /hu was the Hungarian marketing homepage before the root swap; its
    // content lives at /hu/growth now. A URL move, not locale detection —
    // permanent, and unconditional.
    return NextResponse.redirect(new URL(HU_GROWTH, req.url), 308);
  }

  const seen = req.cookies.get(SEEN_COOKIE)?.value;
  const chosen = req.cookies.get("NEXT_LOCALE")?.value;

  if (seen || isInternalReferer(req) || chosen === "en") {
    return NextResponse.next();
  }

  if (chosen === "hu" || isHungarian(req)) {
    // 307, deliberately: a permanent redirect would tell crawlers the
    // homepage itself has moved.
    return markSeen(NextResponse.redirect(new URL(HU_GROWTH, req.url), 307));
  }

  return NextResponse.next();
}

export const config = {
  // "/" also matches /hu, and "/growth" also matches /hu/growth (the locale
  // prefix is stripped before matching). Static assets and /api never match.
  matcher: ["/", "/growth"],
};
