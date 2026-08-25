import React from "react";
import { NextPage } from "next";
import Link from "next/link";
import { GeShell } from "../features/ge/components/GeShell";
import { GeSEO } from "../features/ge/components/GeSEO";
import { useGeT } from "../features/ge/i18n/useGeT";

// Ported from growth-engineers-v4/kapcsolat.html; DOM structure intentionally
// mirrors the static original (see features/ge/README.md).
const Kapcsolat: NextPage = () => {
  const t = useGeT();
  return (
    <GeShell page="kapcsolat">
      <GeSEO
        title={t("mt.contact", "Kapcsolat | Growth Engineering")}
        description={t("md.contact", "Kezdjük egy 30 perces beszélgetéssel. Elmondod, hol tartasz és mit szeretnél elérni, mi megmondjuk, látunk-e reális utat odáig. Egy munkanapon belül válaszolunk.")}
        ogTitle={t("mt.contact", "Kapcsolat | Growth Engineering")}
        ogDescription={t("od.contact", "Kezdjük egy 30 perces beszélgetéssel. Prezentáció és sales script nélkül.")}
      />
      <section className="phero" id="urlap">
        <div className="wrap">
          <div className="phero-grid">
            <div>
              <div className="crumbs rv">
                <Link href="/" dangerouslySetInnerHTML={{ __html: t("crumb.home", "Főoldal") }} />
                <span>/</span>
                <span dangerouslySetInnerHTML={{ __html: t("kap.crumb", "Kapcsolat") }} />
              </div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("nav.contact", "Kapcsolat") }} />
              <h1 className="rv" dangerouslySetInnerHTML={{ __html: t("kap.h1", "Kezdjük egy <mark>30 perces</mark> beszélgetéssel") }} />
              <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("kap.lede", "Elmondod, hol tartasz és mit szeretnél elérni. Mi megmondjuk, látunk-e reális utat odáig, és mi lenne az első három lépés. Ha nem mi vagyunk a jó partner, azt is.") }} />
              <ul className="checklist rv" style={{ marginTop: "1.4rem" }}>
                <li dangerouslySetInnerHTML={{ __html: t("kap.c1", "Nincs prezentáció és nincs sales script") }} />
                <li dangerouslySetInnerHTML={{ __html: t("kap.c2", "A hívás után írásban is megkapod, amit javasoltunk") }} />
                <li dangerouslySetInnerHTML={{ __html: t("kap.c3", "Ha van adathozzáférés, előtte ránézünk a számokra") }} />
              </ul>
              <div className="cards2 rv" style={{ marginTop: "2rem", gridTemplateColumns: "1fr" }}>
                <article className="pcard">
                  <h4 dangerouslySetInnerHTML={{ __html: t("kap.direct.h", "Közvetlen elérhetőség") }} />
                  <p style={{ marginTop: ".6rem" }}>
                    <a href="mailto:info@emergence-engineering.com" className="tlink">info@emergence-engineering.com</a>
                  </p>
                  <p className="muted" style={{ marginTop: ".5rem", fontSize: ".88rem" }} dangerouslySetInnerHTML={{ __html: t("kap.direct.hours", "Emergence Engineering Kft. · Budapest · Hétfőtől péntekig 9:00–17:00") }} />
                </article>
              </div>
            </div>
            <div className="rv">
              <div className="formcard audit-mini">
                <h4 dangerouslySetInnerHTML={{ __html: t("kap.audit.h", "Ingyenes audit") }} />
                <form onSubmit={(e) => { e.preventDefault(); const ok = e.currentTarget.querySelector<HTMLElement>(".ok"); if (ok) ok.hidden = false; }}>
                  <div className="fld">
                    <label htmlFor="fat" dangerouslySetInnerHTML={{ __html: t("kap.audit.type", "Milyen auditot kérsz?") }} />
                    <select id="fat" name="audit">
                      <option value="ux-audit" dangerouslySetInnerHTML={{ __html: t("kap.audit.o1", "UX audit") }} />
                      <option value="novekedesi-audit" dangerouslySetInnerHTML={{ __html: t("kap.audit.o2", "Növekedési (üzleti) audit") }} />
                      <option value="seo-ai-audit" dangerouslySetInnerHTML={{ __html: t("kap.audit.o3", "SEO és AI-láthatósági audit") }} />
                      <option value="klaviyo-audit" dangerouslySetInnerHTML={{ __html: t("kap.audit.o4", "Klaviyo e-mail audit") }} />
                      <option value="kreativ-audit" dangerouslySetInnerHTML={{ __html: t("kap.audit.o5", "Kreatív audit") }} />
                    </select>
                  </div>
                  <div className="frow">
                    <div className="fld">
                      <label htmlFor="fae" dangerouslySetInnerHTML={{ __html: t("kap.f.email", "E-mail*") }} />
                      <input id="fae" type="email" name="email" required placeholder={t("kap.f.emailph", "te@ceged.hu")} />
                    </div>
                    <div className="fld">
                      <label htmlFor="faw" dangerouslySetInnerHTML={{ __html: t("kap.audit.web", "Weboldal*") }} />
                      <input id="faw" name="website" required placeholder="https://" />
                    </div>
                  </div>
                  <button className="btn" type="submit">
                    <span dangerouslySetInnerHTML={{ __html: t("audit.cta", "Kérem az auditot") }} />
                    <span className="ar">→</span>
                  </button>
                  <p className="ok" hidden style={{ marginTop: ".8rem", fontSize: ".88rem", color: "var(--coral-d)", fontWeight: "600" }} dangerouslySetInnerHTML={{ __html: t("kap.audit.ok", "Köszönjük! Hamarosan jelentkezünk az audit részleteivel.") }} />
                </form>
              </div>
              <div className="formcard">
                <h3 style={{ marginBottom: "1.4rem" }} dangerouslySetInnerHTML={{ __html: t("kap.form.h", "Írj nekünk") }} />
                <form onSubmit={(e) => { e.preventDefault(); const ok = e.currentTarget.querySelector<HTMLElement>(".ok"); if (ok) ok.hidden = false; }}>
                  <div className="frow">
                    <div className="fld">
                      <label htmlFor="fn" dangerouslySetInnerHTML={{ __html: t("kap.f.name", "Neved*") }} />
                      <input id="fn" name="name" required />
                    </div>
                    <div className="fld">
                      <label htmlFor="fc" dangerouslySetInnerHTML={{ __html: t("kap.f.company", "Cég") }} />
                      <input id="fc" name="company" />
                    </div>
                  </div>
                  <div className="frow">
                    <div className="fld">
                      <label htmlFor="fe" dangerouslySetInnerHTML={{ __html: t("kap.f.email", "E-mail*") }} />
                      <input id="fe" type="email" name="email" required placeholder={t("kap.f.emailph", "te@ceged.hu")} />
                    </div>
                    <div className="fld">
                      <label htmlFor="fw" dangerouslySetInnerHTML={{ __html: t("kap.f.web", "Weboldal") }} />
                      <input id="fw" name="website" placeholder="https://" />
                    </div>
                  </div>
                  <div className="fld">
                    <label htmlFor="fs" dangerouslySetInnerHTML={{ __html: t("kap.f.topic", "Miben segítsünk?") }} />
                    <select id="fs" name="subject">
                      <option value="email-automatizacio" dangerouslySetInnerHTML={{ __html: t("kap.opt1", "E-mail marketing és automatizáció (Klaviyo)") }} />
                      <option value="ppc" dangerouslySetInnerHTML={{ __html: t("kap.opt2", "PPC hirdetéskezelés / teljes tölcsér") }} />
                      <option value="webfejlesztes" dangerouslySetInnerHTML={{ __html: t("kap.opt3", "Webshop- és webfejlesztés") }} />
                      <option value="ux-ui" dangerouslySetInnerHTML={{ __html: t("kap.opt4", "UX/UI design") }} />
                      <option value="seo-ai" dangerouslySetInnerHTML={{ __html: t("kap.opt5", "SEO és AI keresőoptimalizálás") }} />
                      <option value="kreativ-video" dangerouslySetInnerHTML={{ __html: t("kap.opt6", "Kreatív- és videógyártás") }} />
                      <option value="mely-audit" dangerouslySetInnerHTML={{ __html: t("kap.opt7", "Mély audit") }} />
                      <option value="egyeb" dangerouslySetInnerHTML={{ __html: t("kap.opt8", "Még nem tudom, beszéljük meg") }} />
                    </select>
                  </div>
                  <div className="fld">
                    <label htmlFor="fm" dangerouslySetInnerHTML={{ __html: t("kap.f.msg", "Rövid leírás") }} />
                    <textarea id="fm" name="message" placeholder={t("kap.f.msgph", "Hol tartasz most, és mit szeretnél elérni a következő 6 hónapban?")} />
                  </div>
                  <label className="consent" style={{ marginBottom: "1.3rem" }}>
                    <input type="checkbox" required />
                    <span dangerouslySetInnerHTML={{ __html: t("kap.f.consent", "Hozzájárulok, hogy az Emergence Engineering Kft. az <a href=\"/adatkezeles\">adatkezelési tájékoztató</a> szerint kezelje az adataimat, és megkeressen a megkeresésemmel kapcsolatban.") }} />
                  </label>
                  <button className="btn" type="submit">
                    <span dangerouslySetInnerHTML={{ __html: t("kap.f.submit", "Küldés") }} />
                    <span className="ar">→</span>
                  </button>
                  <p className="ok" hidden style={{ marginTop: "1rem", fontSize: ".9rem", color: "var(--coral-d)", fontWeight: "600" }} dangerouslySetInnerHTML={{ __html: t("kap.f.ok", "Köszönjük! Ez egy demó űrlap, éles környezetben ide kerül a CRM-beküldés. Egy munkanapon belül válaszolunk.") }} />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="on-navy">
        <div className="wrap">
          <div className="shead">
            <div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("kap.proc.eyebrow", "Mi történik ezután") }} />
              <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("kap.proc.h", "Mi történik a hívás után?") }} />
            </div>
            <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("kap.proc.lede", "Egy héten belül tudni fogod, van-e itt valódi lehetőség, és mibe kerülne kiaknázni.") }} />
          </div>
          <div className="steps s4 rv">
            <article className="step">
              <div className="n" dangerouslySetInnerHTML={{ __html: t("kap.s1.k", "1. NAP") }} />
              <h4 dangerouslySetInnerHTML={{ __html: t("kap.s1.h", "Hívás") }} />
              <p dangerouslySetInnerHTML={{ __html: t("kap.s1.p", "Harminc perc, kötetlenül. Megnézzük, hol vannak a szűk keresztmetszetek.") }} />
            </article>
            <article className="step">
              <div className="n" dangerouslySetInnerHTML={{ __html: t("kap.s2.k", "2–3. NAP") }} />
              <h4 dangerouslySetInnerHTML={{ __html: t("kap.s2.h", "Rövid összefoglaló") }} />
              <p dangerouslySetInnerHTML={{ __html: t("kap.s2.p", "Írásban megkapod, amit láttunk, és mit javaslunk elsőként.") }} />
            </article>
            <article className="step">
              <div className="n" dangerouslySetInnerHTML={{ __html: t("kap.s3.k", "1. HÉT") }} />
              <h4 dangerouslySetInnerHTML={{ __html: t("kap.s3.h", "Ajánlat") }} />
              <p dangerouslySetInnerHTML={{ __html: t("kap.s3.p", "Ha van közös munka, konkrét hatókört, időtervet és árat kapsz.") }} />
            </article>
            <article className="step">
              <div className="n" dangerouslySetInnerHTML={{ __html: t("kap.s4.k", "2. HÉT") }} />
              <h4 dangerouslySetInnerHTML={{ __html: t("kap.s4.h", "Indulás") }} />
              <p dangerouslySetInnerHTML={{ __html: t("kap.s4.p", "Kickoff, hozzáférések, első mérföldkő. Innentől heti ritmus.") }} />
            </article>
          </div>
          <p className="lede rv" style={{ textAlign: "center", marginTop: "2rem" }} dangerouslySetInnerHTML={{ __html: t("kap.proc.note", "Prezentáció és sales script nélkül. Ha nem látunk közös munkát, a hívás végén ezt mondjuk.") }} />
        </div>
      </section>
      <section className="band" id="gyik">
        <div className="wrap">
          <div className="shead">
            <div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("faq.title", "GYIK") }} />
              <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("kap.faq.h", "Mielőtt írsz") }} />
            </div>
            <div className="rv">
              <a href="#urlap" className="btn btn-line" dangerouslySetInnerHTML={{ __html: t("faq.cta", "Foglalj hívást") }} />
            </div>
          </div>
          <div className="faq rv">
            <details open>
              <summary dangerouslySetInnerHTML={{ __html: t("kap.q1", "Miben vagytok mások, mint egy hagyományos ügynökség?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("kap.a1", "Az ügynökség deliverable-öket ad el; mi az eredményért vállalunk felelősséget. Beépülünk a csapatba, Slack, CRM, működés, és a teljes rendszert építjük, nem külön csatornákat futtatunk. Az érdekeltségünk a bevételhez, a marginhoz és az LTV-hez kötődik, nem egy szolgáltatási szerződés fenntartásához.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("kap.q2", "Mindent ti visztek, vagy nekünk is dolgoznunk kell rajta?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("kap.a2", "Mindkét modell létezik. Tanácsadói előfizetésnél a végrehajtás nálatok van, az irányt mi adjuk. Szakértői menedzsmentnél a stratégiát, a végrehajtást és a riportolást is átvesszük. A legtöbb együttműködés valahol a kettő között indul, és a csapatotok növekedésével változik.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("kap.q3", "Mi van, ha a nulláról indulunk?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("kap.a3", "Rendszeresen építünk nulláról: pozicionálás, márka, weboldal, tölcsérek, mérés és akvizíció. Amire szükségünk van: valódi termék és valódi kereslet. Ha ez a kettő megvan, a kiindulópont másodlagos.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("kap.q4", "Mikor látunk eredményt?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("kap.a4", "Az első gyors nyereségek jellemzően 30–60 napon belül jönnek. A kamatozó eredmények általában az első fél éven belül jelennek meg a számokban. Minden partnerünknél legalább 16%-os profitnövekedés volt ebben az ablakban.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("kap.q5", "Hogyan mérjük a sikert?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("kap.a5", "Bevétel és profit. A CTR, a megjelenés és az elköteleződés diagnosztika, nem eredmény. A riport a bevételre, a marginra, az LTV-re és az akvizíciós költségre épül, azokra a számokra, amelyek a jövedelmezőségedet mozgatják, nem a marketing-dashboardodat.") }} />
            </details>
          </div>
        </div>
      </section>
    </GeShell>
  );
};

export default Kapcsolat;
