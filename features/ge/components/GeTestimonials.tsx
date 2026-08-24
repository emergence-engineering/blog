import React, { FunctionComponent } from "react";
import Link from "next/link";

import { useCarousel } from "../hooks/useCarousel";
import { useGeT } from "../i18n/useGeT";

/**
 * The testimonial section of the Growth Engineering homepage. Quotes are
 * localized like the rest of the page (Hungarian inline, English from the
 * dictionary); the arrows flank the quote and the "Kikkel dolgozunk?" side
 * panel stays fixed while the quotes swipe.
 */
export interface GeTestimonialsProps {
  /** Drop the tight-top spacing when the preceding section is not navy. */
  tightTop?: boolean;
}

export const GeTestimonials: FunctionComponent<GeTestimonialsProps> = ({
  tightTop = true,
}) => {
  const t = useGeT();
  const { track, step } = useCarousel();

  const slides = [
    {
      quote: t("ts.quote", "<em>“</em>Az Emergence Engineering kivételes. Bármilyen új projektnél és terméknél ők az első választásom. Gyorsan és nagyon magas minőségben dolgoznak. Ritka képességük, hogy értik a korai fázisú termékfelfedezés igényeit, és közben robusztus, skálázható alkalmazásokat is építenek.<em>”</em>"),
      initials: "BW",
      name: "Ben Whately",
      role: t("ts.role", "vállalkozó &amp; startup-befektető"),
    },
    {
      quote: t("ts.q2", "<em>“</em>Az elmúlt három nagy projektemhez mind az Emergence Engineeringet választottam. Hihetetlenül okosak, megbízhatóak, és nagyszerű velük dolgozni. Nem tudom őket eléggé ajánlani.<em>”</em>"),
      initials: "GD",
      name: "Greg Detre",
      role: t("ts.r2", "tanácsadó, vezető adattudós &amp; CTO"),
    },
    {
      quote: t("ts.q3", "<em>“</em>Három éve dolgozunk együtt az EE-vel, és végig nagyszerű volt. Egy egyszerű prototípusból építettünk velük teljes vállalati SaaS-terméket – gyorsan, magas minőségben, jó hangulatban.<em>”</em>"),
      initials: "MZ",
      name: "Marc Zao-Sanders",
      role: t("ts.r3", "vezérigazgató, Filtered"),
    },
    {
      quote: t("ts.q4", "<em>“</em>Emergence Engineering was a fantastic partner for us to collaborate with on our collaborative editor and workspace. We had a great experience working on tough issues, from code editing to image embedding.<em>”</em>"),
      initials: "AM",
      name: "Andrew Milich",
      role: t("ts.r4", "társalapító &amp; CEO, Skiff"),
    },
    {
      quote: t("ts.q5", "<em>“</em>Az Emergence Engineering segített, hogy a csapatunk gyorsabban haladjon a termékfejlesztés egy kritikus szakaszában. A ProseMirror-szakértelmük és a remek kommunikációjuk kiváló együttműködést eredményezett.<em>”</em>"),
      initials: "OZ",
      name: "Oleg Zaremba",
      role: t("ts.r5", "CTO, Axdraft"),
    },
    {
      quote: t("ts.q6", "<em>“</em>Fantasztikus volt az EE-vel dolgozni! Lenyűgözött a mérnökeik technikai tudása és kommunikációja. Részletes specifikációk nélkül is határidőre, magas minőségben szállítottak.<em>”</em>"),
      initials: "AS",
      name: "Achilles Schmelzer",
      role: t("ts.r6", "CTO, relay.cc"),
    },
    {
      quote: t("ts.q7", "<em>“</em>The Emergence Engineering team was very helpful in developing a Node.js script for a manufacturing test system for a Bluetooth product.<em>”</em>"),
      initials: "SK",
      name: "Sandeep Kamath",
      role: t("ts.r7", "alapító, Swaralink"),
    },
  ];

  const arrowClass =
    "h-10 w-10 shrink-0 rounded-full border border-white/25 text-white transition hover:border-coral hover:text-coral";

  return (
    <section className={tightTop ? "on-navy tight-top" : "on-navy"}>
      <div className="wrap">
        <div className="eyebrow rv in" dangerouslySetInnerHTML={{ __html: t("ts.eyebrow", "Vélemények") }} />
        <div className="quote-grid">
          {/* min-w-0: grid items default to min-width auto, which would let
              the scroll track blow the column open */}
          <div className="flex min-w-0 items-center gap-4">
            <button
              type="button"
              aria-label={t("ts.prev", "Előző vélemény")}
              onClick={() => step(-1)}
              className={arrowClass}
            >
              ←
            </button>
            <div
              ref={track}
              className="flex min-w-0 flex-1 snap-x snap-mandatory overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {slides.map((s) => (
                <div key={s.name} className="w-full shrink-0 snap-start">
                  <blockquote dangerouslySetInnerHTML={{ __html: s.quote }} />
                  <div className="attrib">
                    <div className="av">{s.initials}</div>
                    <div>
                      <div className="who">{s.name}</div>
                      <div className="role" dangerouslySetInnerHTML={{ __html: s.role }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              type="button"
              aria-label={t("ts.next", "Következő vélemény")}
              onClick={() => step(1)}
              className={arrowClass}
            >
              →
            </button>
          </div>
          <div className="qside rv in">
            <h4 dangerouslySetInnerHTML={{ __html: t("ts.title", "Kikkel dolgozunk?") }} />
            <p style={{ color: "#A9B9CE", fontSize: ".92rem", lineHeight: "1.6", marginBottom: "1.4rem" }} dangerouslySetInnerHTML={{ __html: t("ts.lede", "Olyan cégekkel dolgozunk, ahol valódi skálázási potenciál van, és a vezetés kész nagyobb stratégiai döntéseket is meghozni. Mivel mélyen beépülünk, egyszerre csak néhány partnert vállalunk.") }} />
            <Link href="/kapcsolat" className="tlink">
              <span dangerouslySetInnerHTML={{ __html: t("ts.cta", "Foglalj hívást") }} />
              <span className="ar">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
