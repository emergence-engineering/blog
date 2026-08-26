import React, { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGeT } from "../i18n/useGeT";

/**
 * Shared Growth Engineering footer, ported from the static pages. Minor per-page drift in the originals (missing UX/UI item on one page, FAQ vs Contact link on three) was normalized to the dominant variant.
 */
export const GeFooter: FunctionComponent = () => {
  const t = useGeT();
  return (
      <footer>
        <div className="wrap">
          <div className="fgrid">
            <div>
              <Link href="/growth" className="logo">
                <Image className="logo-flower" src="/ge/img/logo-emergence.png" alt="" width={30} height={30} />
                <span className="logo-wm">Growth<i>/</i><span className="w2">Engineering</span></span>
              </Link>
              <p style={{ maxWidth: "32ch", lineHeight: "1.6" }} dangerouslySetInnerHTML={{ __html: t("ft.tag", "A belső growth csapatod: stratégia, marketing, design és fejlesztés egy helyen.") }} />
              <p style={{ fontSize: ".9rem", marginTop: ".6rem" }} dangerouslySetInnerHTML={{ __html: t("ft.company", "Az Emergence Engineering Kft. üzletfejlesztési csapata · Budapest") }} />
            </div>
            <div>
              <h5 dangerouslySetInnerHTML={{ __html: t("ft.services", "Szolgáltatások") }} />
              <ul>
                <li>
                  <Link href="/ppc-hirdeteskezeles" dangerouslySetInnerHTML={{ __html: t("nav.growth", "PPC hirdetéskezelés") }} />
                </li>
                <li>
                  <Link href="/webfejlesztes" dangerouslySetInnerHTML={{ __html: t("nav.web", "Webshop- és webfejlesztés") }} />
                </li>
                <li>
                  <Link href="/email-automatizacio" dangerouslySetInnerHTML={{ __html: t("nav.email", "E-mail marketing és automatizáció") }} />
                </li>
                <li>
                  <Link href="/kreativ-es-videogyartas" dangerouslySetInnerHTML={{ __html: t("nav.content", "Kreatív- és videógyártás") }} />
                </li>
                <li>
                  <Link href="/ux-ui-design" dangerouslySetInnerHTML={{ __html: t("nav.ux", "UX/UI design") }} />
                </li>
                <li>
                  <Link href="/ai-seo" dangerouslySetInnerHTML={{ __html: t("nav.seo", "SEO és AI keresőoptimalizálás") }} />
                </li>
                <li>
                  <Link href="/cro-es-ecommerce" dangerouslySetInnerHTML={{ __html: t("nav.ecom", "CRO és E-commerce") }} />
                </li>
              </ul>
            </div>
            <div>
              <h5 dangerouslySetInnerHTML={{ __html: t("ft.company.h", "Cég") }} />
              <ul>
                <li>
                  <Link href="/rolunk" dangerouslySetInnerHTML={{ __html: t("ft.about", "Rólunk") }} />
                </li>
                <li>
                  <Link href="/esettanulmanyok" dangerouslySetInnerHTML={{ __html: t("ft.cases", "Esettanulmányok") }} />
                </li>
                <li>
                  <Link href="/growth#arak" dangerouslySetInnerHTML={{ __html: t("col.eyebrow", "Együttműködés") }} />
                </li>
                <li>
                  <Link href="/growth#gyik" dangerouslySetInnerHTML={{ __html: t("ft.faq", "GYIK") }} />
                </li>
              </ul>
            </div>
            <div>
              <h5 dangerouslySetInnerHTML={{ __html: t("ft.contact.h", "Kapcsolat") }} />
              <ul>
                <li>
                  <a href="mailto:info@emergence-engineering.com">info@emergence-engineering.com</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/emergence-engineering/" rel="noopener">LinkedIn</a>
                </li>
                <li>Budapest, EU</li>
              </ul>
            </div>
          </div>
          <div className="fbot">
            <div dangerouslySetInnerHTML={{ __html: t("ft.rights", "© 2026 Emergence Engineering Kft. Minden jog fenntartva.") }} />
            <ul>
              <li>
                <Link href="/adatkezeles" dangerouslySetInnerHTML={{ __html: t("ft.privacy", "Adatkezelési tájékoztató") }} />
              </li>
              <li>
                <Link href="/aszf" dangerouslySetInnerHTML={{ __html: t("ft.terms", "ÁSZF") }} />
              </li>
              <li>
                <Link href="/adatkezeles#sutik" dangerouslySetInnerHTML={{ __html: t("ft.cookies", "Süti-beállítások") }} />
              </li>
            </ul>
          </div>
        </div>
      </footer>
  );
};
