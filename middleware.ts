import { NextRequest, NextResponse } from "next/server";

/**
 * Locale routing for the site root while the Growth Engineering side is
 * hidden (see the GE redirect block in next.config.js).
 *
 * The root (/) is the English-only engineering page. /hu used to forward to
 * the Hungarian marketing homepage (/hu/growth); with the GE side hidden it
 * goes back to the root instead. Temporary (307) on purpose: when GE returns,
 * crawlers must not have cached a permanent move. The original first-contact
 * geo/language routing lives in git history — restore it together with the
 * GE pages.
 */

export function middleware(req: NextRequest): NextResponse {
  // i18n routing strips the locale prefix: /hu arrives with pathname "/"
  // and locale "hu".
  const { pathname, locale } = req.nextUrl;

  if (pathname === "/" && locale === "hu") {
    return NextResponse.redirect(new URL("/", req.url), 307);
  }

  return NextResponse.next();
}

export const config = {
  // "/" also matches /hu (the locale prefix is stripped before matching).
  matcher: ["/"],
};
