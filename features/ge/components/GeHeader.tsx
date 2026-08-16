import React, { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useGeT } from "../i18n/useGeT";

/**
 * Shared Growth Engineers header (ported from the static pages, where each
 * page carried a copy differing only in which link had aria-current).
 * The language toggle switches the Next.js locale instead of swapping
 * strings client-side like the original site.js did.
 */
export const GeHeader: FunctionComponent = () => {
  const t = useGeT();
  const router = useRouter();
  const { pathname, asPath, locale } = router;

  const cur = (route: string): "page" | undefined => {
    if (pathname === route) return "page";
    if (route === "/esettanulmanyok" && pathname.startsWith("/esettanulmany"))
      return "page";
    return undefined;
  };

  const switchLocale = (next: "hu" | "en") => {
    document.cookie = `NEXT_LOCALE=${next}; path=/; max-age=31536000; samesite=lax`;
    router.push(asPath, asPath, { locale: next });
  };

  return (
    <header id="hdr">
      <div className="wrap nav">
        <Link href="/" className="logo">
          <Image className="logo-flower" src="/ge/img/logo-emergence.png" alt="" width={30} height={30} />
          <span className="logo-wm">Growth<i>/</i><span className="w2">Engineers</span></span>
        </Link>
        <nav className="nav-links" id="navLinks">
          <div className="has-sub">
            <button type="button" className="subtoggle" aria-expanded="false" aria-haspopup="true">
              <span dangerouslySetInnerHTML={{ __html: t("nav.services", "Szolgáltatások") }} />
              <span className="caret" aria-hidden="true">▾</span>
            </button>
            <div className="submenu">
              <Link href="/growth-marketing" aria-current={cur("/growth-marketing")} dangerouslySetInnerHTML={{ __html: t("nav.growth", "Teljesítménymarketing") }} />
              <Link href="/webfejlesztes" aria-current={cur("/webfejlesztes")} dangerouslySetInnerHTML={{ __html: t("nav.web", "Web- és appfejlesztés") }} />
              <Link href="/email-automatizacio" aria-current={cur("/email-automatizacio")} dangerouslySetInnerHTML={{ __html: t("nav.email", "E-mail automatizáció") }} />
              <Link href="/tartalomgyartas" aria-current={cur("/tartalomgyartas")} dangerouslySetInnerHTML={{ __html: t("nav.content", "Tartalomgyártás") }} />
              <Link href="/ux-ui-design" aria-current={cur("/ux-ui-design")} dangerouslySetInnerHTML={{ __html: t("nav.ux", "UX/UI design") }} />
              <Link href="/ai-seo" aria-current={cur("/ai-seo")} dangerouslySetInnerHTML={{ __html: t("nav.seo", "AIO") }} />
              <Link href="/ecommerce-skalazas" aria-current={cur("/ecommerce-skalazas")} dangerouslySetInnerHTML={{ __html: t("nav.ecom", "E-commerce skálázás") }} />
            </div>
          </div>
          <Link href="/esettanulmanyok" aria-current={cur("/esettanulmanyok")} dangerouslySetInnerHTML={{ __html: t("nav.cases", "Esettanulmányok") }} />
          <Link href="/#arak" dangerouslySetInnerHTML={{ __html: t("col.eyebrow", "Együttműködés") }} />
          <Link href="/rolunk" aria-current={cur("/rolunk")} dangerouslySetInnerHTML={{ __html: t("nav.about", "Rólunk") }} />
          {/* deliberately English in both locales: it points English-speaking
              visitors to the startup-facing site */}
          <Link href="/index-en" className="brandlink">For startups →</Link>
          <div className="lang" role="group" aria-label="Language / Nyelv">
            <button type="button" data-lang="hu" aria-pressed={locale === "hu"} onClick={() => switchLocale("hu")}>HU</button>
            <button type="button" data-lang="en" aria-pressed={locale !== "hu"} onClick={() => switchLocale("en")}>EN</button>
          </div>
        </nav>
        <button className="nav-toggle" id="navToggle" aria-expanded="false">
          <span dangerouslySetInnerHTML={{ __html: t("nav.menu", "Menü") }} />
          <span className="burger" aria-hidden="true" />
        </button>
        <Link href="/kapcsolat" className="btn" aria-current={cur("/kapcsolat")} dangerouslySetInnerHTML={{ __html: t("nav.cta", "Foglalj hívást") }} />
      </div>
    </header>
  );
};
