import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { GeShell } from "../features/ge/components/GeShell";
import { GeSEO } from "../features/ge/components/GeSEO";
import { GeFaqJsonLd } from "../features/ge/components/GeFaqJsonLd";
import { GeTestimonials } from "../features/ge/components/GeTestimonials";
import { useGeT } from "../features/ge/i18n/useGeT";
import { LeadFormGuards } from "../features/ge/components/LeadFormGuards";
import { useLeadForm } from "../features/ge/hooks/useLeadForm";

// Ported from growth-engineers-v4/index.html; DOM structure intentionally
// mirrors the static original (see features/ge/README.md).
const Index: NextPage = () => {
  const t = useGeT();
  const auditForm = useLeadForm({ kind: "capture", source: "/ growth audit" });
  return (
    <GeShell page="index">
      <GeFaqJsonLd prefix="faq." count={9} />
      <GeSEO
        title={t("mt.home", "Growth Engineering | Növekedési rendszerek webshopoknak és B2B cégeknek")}
        description={t("md.home", "A belső growth csapatod: e-mail automatizáció, teljesítménymarketing, fejlesztés és design egy helyen. Minden partnerünknél 16% fölé ment a profitnövekedés az első fél évben.")}
        ogTitle={t("ot.home", "Growth Engineering | Mi fogja vissza a céged növekedését?")}
        ogDescription={t("od.home", "Rendszert építünk a cégedbe, ami a kampányok lefutása után is termel.")}
      />
      <section className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <h1 className="rv" dangerouslySetInnerHTML={{ __html: t("hero.title", "Mi fogja vissza a céged<br>növekedését?") }} />
              <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("hero.lede", "Üzletfejlesztő partnerként építjük meg a marketingrendszered.") }} />
              <div className="hero-cta rv">
                <Link href="/kapcsolat" className="btn">
                  <span dangerouslySetInnerHTML={{ __html: t("hero.cta1", "Foglalj hívást") }} />
                </Link>
                <Link href="/kapcsolat" className="tlink" dangerouslySetInnerHTML={{ __html: t("hero.cta2", "Kérj ingyenes auditot") }} />
              </div>
              <div className="badges rv">
                <div className="cap" dangerouslySetInnerHTML={{ __html: t("hero.badges.cap", "Tanúsított partnerek") }} />
                <div className="badgestrip">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/ge/img/badge-stripe.svg" alt="Stripe Verified Partner" width={150} height={30} />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/ge/img/badge-klaviyo.svg" alt="Klaviyo Advisor Silver" width={137} height={46} />
                </div>
              </div>
              <p className="rv" style={{ marginTop: "1.4rem", fontSize: ".85rem", color: "var(--muted)" }} dangerouslySetInnerHTML={{ __html: t("hero.brand", "A Growth Engineering az <b style=\"color:var(--ink)\">Emergence Engineering Kft.</b> üzletfejlesztési csapata.") }} />
            </div>
            <Link className="hp-shot rv" href="/esettanulmany-vezessjol">
              <span className="hp-shot-frame">
                <Image src="/ge/img/cover-vezessjol.webp" width={1500} height={1002} alt={t("alt10", "VezessJól autósiskola weboldal és akvizíciós tölcsér")} priority />
              </span>
              <span className="hp-chip"><b>+93%</b> <span dangerouslySetInnerHTML={{ __html: t("case.vj.m2", "Több konverzió") }} /></span>
              <span className="hp-shot-cap">VezessJól <span dangerouslySetInnerHTML={{ __html: t("hp.shotcap", "autósiskola, esettanulmány") }} /></span>
            </Link>
          </div>
        </div>
      </section>
      <div className="hp-results">
        <div className="wrap">
          <ul className="hp-results-in">
            <li><b>3×</b><span dangerouslySetInnerHTML={{ __html: t("case.pa.m1", "Bevételnövekedés négy év alatt") }} /><small>Plantart</small></li>
            <li><b dangerouslySetInnerHTML={{ __html: t("res.revnum", "1,9 Mrd Ft") }} /><span dangerouslySetInnerHTML={{ __html: t("res.rev", "Éves árbevétel négy év után") }} /><small>Plantart</small></li>
            <li><b>+93%</b><span dangerouslySetInnerHTML={{ __html: t("case.vj.m2", "Több konverzió") }} /><small>VezessJól</small></li>
            <li><b>−50%</b><span dangerouslySetInnerHTML={{ __html: t("case.vj.m3", "Érdeklődőszerzési költség") }} /><small>VezessJól</small></li>
          </ul>
        </div>
      </div>
      <section id="rolunk">
        <div className="wrap">
          <div className="hp-manifesto">
            <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("pr.title", "Growth engineering alapelvek") }} />
            <ol className="hp-claims rv">
            <li>
              <h3 dangerouslySetInnerHTML={{ __html: t("pr.1.h", "A kampány kifut, a rendszer marad") }} />
              <p dangerouslySetInnerHTML={{ __html: t("pr.1.p", "Rendszerben gondolkozunk, nem kampányokban.") }} />
            </li>
            <li>
              <h3 dangerouslySetInnerHTML={{ __html: t("pr.2.h", "A belső csapatod") }} />
              <p dangerouslySetInnerHTML={{ __html: t("pr.2.p", "Egy külsős cég sokszor nem tudja megérteni a céged működését egy kitöltött formból és pár meetingből.") }} />
            </li>
            <li>
              <h3 dangerouslySetInnerHTML={{ __html: t("pr.3.h", "Üzletfejlesztés, nem marketing") }} />
              <p dangerouslySetInnerHTML={{ __html: t("pr.3.p", "Üzletfejlesztőként gondolkozunk, nem marketingesként, így nem biztos, hogy a hirdetés skálázását fogjuk tanácsolni.") }} />
            </li>
            </ol>
          </div>
        </div>
      </section>
      <section className="band" id="szolgaltatasok">
        <div className="wrap">
          <div className="shead solo">
            <div><h2 className="rv" dangerouslySetInnerHTML={{ __html: t("svc.title", "Növekedési kompetenciák") }} /></div>
          </div>
          <div className="hp-bento rv">
              <Link className="hp-cb hp-cb-wide" href="/webfejlesztes">
                <span className="hp-cb-media"><Image src="/ge/img/vj-desktop-top.png" width={1296} height={505} alt={t("alt14", "VezessJól autósiskola weboldal")} /></span>
                <span className="hp-cb-txt">
                  <h3 dangerouslySetInnerHTML={{ __html: t("tab.web", "Webshop- és webfejlesztés") }} />
                  <p dangerouslySetInnerHTML={{ __html: t("p3.h", "Amit a marketing megígér, azt valakinek meg is kell építenie.") }} />
                </span>
              </Link>
              <Link className="hp-cb" href="/kapcsolat">
                <span className="hp-cb-txt">
                  <h3 dangerouslySetInnerHTML={{ __html: t("tab.biz", "Üzletfejlesztés") }} />
                  <p dangerouslySetInnerHTML={{ __html: t("p6.h", "A növekedés legtöbbször nem marketingkérdés.") }} />
                </span>
              </Link>
              <Link className="hp-cb" href="/cro-es-ecommerce">
                <span className="hp-cb-txt">
                  <h3 dangerouslySetInnerHTML={{ __html: t("tab.ecom", "CRO és E-commerce") }} />
                  <p dangerouslySetInnerHTML={{ __html: t("p8.h", "Az e-commerce értékesítés rendszerben működik jól.") }} />
                </span>
              </Link>
              <Link className="hp-cb" href="/ppc-hirdeteskezeles">
                <span className="hp-cb-txt">
                  <h3 dangerouslySetInnerHTML={{ __html: t("tab.growth", "PPC hirdetéskezelés") }} />
                  <p dangerouslySetInnerHTML={{ __html: t("p2.h", "Egy csatorna teljesítménye önmagában semmit nem mond el.") }} />
                </span>
              </Link>
              <Link className="hp-cb" href="/email-automatizacio">
                <span className="hp-cb-txt">
                  <h3 dangerouslySetInnerHTML={{ __html: t("tab.email", "E-mail marketing és automatizáció") }} />
                  <p dangerouslySetInnerHTML={{ __html: t("p1.h", "A meglévő vevőidben van a legolcsóbb bevétel.") }} />
                </span>
              </Link>
              <Link className="hp-cb hp-cb-img" href="/kreativ-es-videogyartas">
                <span className="hp-cb-media"><Image src="/ge/img/vj-social.webp" width={760} height={810} alt={t("alt21", "Social hirdetéskreatívok, amelyeket egy ügyfélkampányhoz gyártottunk")} /></span>
                <span className="hp-cb-txt">
                  <h3 dangerouslySetInnerHTML={{ __html: t("tab.video", "Kreatív- és videógyártás") }} />
                  <p dangerouslySetInnerHTML={{ __html: t("p7.h", "A kreatív ma a legnagyobb növekedési kar.") }} />
                </span>
              </Link>
              <Link className="hp-cb" href="/ux-ui-design">
                <span className="hp-cb-txt">
                  <h3 dangerouslySetInnerHTML={{ __html: t("tab.ux", "UX/UI design") }} />
                  <p dangerouslySetInnerHTML={{ __html: t("p4.h", "Design, ami összeköti a vásárlót a termékkel.") }} />
                </span>
              </Link>
              <Link className="hp-cb" href="/ai-seo">
                <span className="hp-cb-txt">
                  <h3 dangerouslySetInnerHTML={{ __html: t("tab.seo", "SEO és AI keresőoptimalizálás") }} />
                  <p dangerouslySetInnerHTML={{ __html: t("p5.h", "Mi van, ha a következő vevőd már nem Google-n keres rád?") }} />
                </span>
              </Link>
          </div>
        </div>
      </section>
      <section id="esettanulmanyok">
        <div className="wrap">
          <div className="shead solo">
            <div><h2 className="rv" dangerouslySetInnerHTML={{ __html: t("case.title", "Növekedési történetek") }} /></div>
          </div>
          <div className="hp-stories">
            <Link className="hp-story rv" href="/esettanulmany-plantart">
              <span className="hp-story-img"><Image src="/ge/img/cover-plantart.webp" width={1500} height={1000} alt={t("alt9", "Plantart weboldal, webshop és social kampányok")} /></span>
              <span className="hp-story-body">
                <h3 dangerouslySetInnerHTML={{ __html: t("case.pa.h", "Plantart piacvezető és digitális bajnok") }} />
                <dl className="hp-nums">
                  <div><dt>3×</dt><dd dangerouslySetInnerHTML={{ __html: t("case.pa.m1", "Bevételnövekedés négy év alatt") }} /></div>
                  <div><dt>+45M Ft</dt><dd dangerouslySetInnerHTML={{ __html: t("case.pa.m2", "Webshop-bevétel az első évben") }} /></div>
                  <div><dt>−67%</dt><dd dangerouslySetInnerHTML={{ __html: t("case.pa.m3", "Alacsonyabb konverziós költség") }} /></div>
                </dl>
                <span className="tlink" dangerouslySetInnerHTML={{ __html: t("case.pa.read", "Esettanulmány elolvasása") }} />
              </span>
            </Link>
            <Link className="hp-story hp-story-flip rv" href="/esettanulmany-vezessjol">
              <span className="hp-story-img"><Image src="/ge/img/cover-vezessjol.webp" width={1500} height={1002} alt={t("alt10", "VezessJól autósiskola weboldal és akvizíciós tölcsér")} /></span>
              <span className="hp-story-body">
                <h3 dangerouslySetInnerHTML={{ __html: t("case.vj.h", "Felpörgetett konverziók vezetésoktatásban") }} />
                <dl className="hp-nums">
                  <div><dt>+35%</dt><dd dangerouslySetInnerHTML={{ __html: t("case.vj.m1", "Bevételnövekedés") }} /></div>
                  <div><dt>+93%</dt><dd dangerouslySetInnerHTML={{ __html: t("case.vj.m2", "Több konverzió") }} /></div>
                  <div><dt>−50%</dt><dd dangerouslySetInnerHTML={{ __html: t("case.vj.m3", "Érdeklődőszerzési költség") }} /></div>
                </dl>
                <span className="tlink" dangerouslySetInnerHTML={{ __html: t("case.vj.read", "Esettanulmány elolvasása") }} />
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section id="folyamat">
        <div className="wrap">
          <div className="shead solo">
            <div>
              <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("proc.title", "A növekedésed útvonala") }} />
              <p className="lede rv" style={{ marginTop: "1rem" }} dangerouslySetInnerHTML={{ __html: t("proc.foot", "A legtöbb cég tudja, hogy valami nem stimmel, de nem tudja, hol. Az első hívás erről szól.") }} />
            </div>
          </div>
          <ol className="proc-tl rv">
            <li>
              <span className="proc-n" aria-hidden="true">1</span>
              <h4 dangerouslySetInnerHTML={{ __html: t("proc.s1.h", "Első hívás") }} />
              <p dangerouslySetInnerHTML={{ __html: t("proc.s1.p", "Harminc perc. Megnézzük, hol tartasz, és hogy van-e értelme közösen dolgozni.") }} />
            </li>
            <li>
              <span className="proc-n" aria-hidden="true">2</span>
              <h4 dangerouslySetInnerHTML={{ __html: t("proc.s2.h", "Audit és diagnózis") }} />
              <p dangerouslySetInnerHTML={{ __html: t("proc.s2.p", "Üzleti modell, tölcsér, mérés és csatornák átvilágítása a saját adataitokból.") }} />
            </li>
            <li>
              <span className="proc-n" aria-hidden="true">3</span>
              <h4 dangerouslySetInnerHTML={{ __html: t("proc.s3.h", "Stratégia és sorrend") }} />
              <p dangerouslySetInnerHTML={{ __html: t("proc.s3.p", "Mi az a három dolog, ami a legtöbb bevételt hozza a következő negyedévben?") }} />
            </li>
            <li>
              <span className="proc-n" aria-hidden="true">4</span>
              <h4 dangerouslySetInnerHTML={{ __html: t("proc.s4.h", "Építés és futtatás") }} />
              <p dangerouslySetInnerHTML={{ __html: t("proc.s4.p", "Fejlesztés, kampányok és flow-k, heti sprintekben, demókkal.") }} />
            </li>
            <li>
              <span className="proc-n" aria-hidden="true">5</span>
              <h4 dangerouslySetInnerHTML={{ __html: t("proc.s5.h", "Optimalizálás és skálázás") }} />
              <p dangerouslySetInnerHTML={{ __html: t("proc.s5.p", "A működő dolgokat felszorozzuk, a többit leállítjuk. Erről negyedévente közösen döntünk.") }} />
            </li>
          </ol>
        </div>
      </section>
      <GeTestimonials />
      <section id="arak">
        <div className="wrap">
          <div className="shead solo">
            <div>
              <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("col.title", "Hogyan dolgozunk együtt") }} />
            </div>
          </div>
          <div className="hp-auditbar rv">
            <div>
              <span className="hp-ab-k" dangerouslySetInnerHTML={{ __html: t("col.start", "Kiindulópont") }} />
              <h3 dangerouslySetInnerHTML={{ __html: t("audit.h", "Mély audit") }} />
            </div>
            <div className="price" dangerouslySetInnerHTML={{ __html: t("audit.price", "490 000 Ft <small>egyszeri, fix díj</small>") }} />
            <p dangerouslySetInnerHTML={{ __html: t("audit.p", "Egyszeri, fix díjas átvilágítás az üzletről és a marketingről.") }} />
            <Link href="/kapcsolat" className="btn">
              <span dangerouslySetInnerHTML={{ __html: t("audit.cta", "Kérem az auditot") }} />
            </Link>
          </div>
          <div className="hp-plans rv">
            <div className="hp-plan">
              <h3 dangerouslySetInnerHTML={{ __html: t("t1.h", "Tanácsadói előfizetés") }} />
              <div className="price" dangerouslySetInnerHTML={{ __html: t("t1.price", "650 000 Ft-tól / hó<small>*minimálár, a hatókör függvényében</small>") }} />
              <p dangerouslySetInnerHTML={{ __html: t("t1.p", "Havi stratégiai ülés, priorizálás és folyamatos elérhetőség.") }} />
              <ul className="checks on-light">
                <li dangerouslySetInnerHTML={{ __html: t("t1.l1", "Havi stratégiai ülések és növekedési audit") }} />
                <li dangerouslySetInnerHTML={{ __html: t("t1.l2", "Hirdetési struktúra felépítése") }} />
                <li dangerouslySetInnerHTML={{ __html: t("t1.l3", "KPI-követés és optimalizálási javaslatok") }} />
              </ul>
              <Link href="/kapcsolat" className="btn btn-line">
                <span dangerouslySetInnerHTML={{ __html: t("hero.cta1", "Foglalj hívást") }} />
              </Link>
            </div>
            <div className="hp-plan hp-plan-featured">
              <h3 dangerouslySetInnerHTML={{ __html: t("t2.h", "Szakértői menedzsment") }} />
              <div className="price" dangerouslySetInnerHTML={{ __html: t("t2.price", "1 450 000 Ft-tól / hó<small>*minimálár, a hatókör függvényében</small>") }} />
              <p dangerouslySetInnerHTML={{ __html: t("t2.p", "Átvesszük a stratégiát, a végrehajtást és a riportolást.") }} />
              <ul className="checks on-light">
                <li dangerouslySetInnerHTML={{ __html: t("t2.l1", "Gyorsan megszüntetett szűk keresztmetszetek") }} />
                <li dangerouslySetInnerHTML={{ __html: t("t2.l2", "Skálázható rendszerek építése") }} />
                <li dangerouslySetInnerHTML={{ __html: t("t2.l3", "Napi szintű közös munka a csapatoddal") }} />
              </ul>
              <Link href="/kapcsolat" className="btn">
                <span dangerouslySetInnerHTML={{ __html: t("hero.cta1", "Foglalj hívást") }} />
              </Link>
            </div>
            <div className="hp-plan">
              <h3 dangerouslySetInnerHTML={{ __html: t("t3.h", "Growth inkubátor") }} />
              <div className="price" dangerouslySetInnerHTML={{ __html: t("t3.price", "Bevételmegosztás vagy részesedés<small>egyedi megállapodás alapján</small>") }} />
              <p dangerouslySetInnerHTML={{ __html: t("t3.p", "Bevételmegosztásos partnerség.") }} />
              <ul className="checks on-light">
                <li dangerouslySetInnerHTML={{ __html: t("t3.l1", "Teljesítményalapú partnerség") }} />
                <li dangerouslySetInnerHTML={{ __html: t("t3.l2", "Folyamatos optimalizálás") }} />
                <li dangerouslySetInnerHTML={{ __html: t("t3.l3", "Skálázható eredmény fix retainer nélkül") }} />
              </ul>
              <Link href="/kapcsolat" className="btn btn-line">
                <span dangerouslySetInnerHTML={{ __html: t("hero.cta1", "Foglalj hívást") }} />
              </Link>
            </div>
          </div>
          <p className="fine rv" dangerouslySetInnerHTML={{ __html: t("price.fine", "*A feltüntetett ár a szolgáltatás minimumára. A végleges ár a projekt hatókörétől, méretétől és összetettségétől függ.") }} />
        </div>
      </section>
      <section className="tight-bottom">
        <div className="wrap">
          <div className="news rv">
            <div>
              <div className="eyebrow" dangerouslySetInnerHTML={{ __html: t("lm.eyebrow", "Ingyenes növekedési audit") }} />
              <h2 dangerouslySetInnerHTML={{ __html: t("lm.h", "Találd meg, hol szivárog el a bevétel") }} />
              <p dangerouslySetInnerHTML={{ __html: t("lm.p", "Átnézzük a márkádat, az üzleti modelledet és a marketinged, aztán kapsz egy listát arról, mit javíts először.") }} />
            </div>
            <form id="lmForm" onSubmit={auditForm.onSubmit}>
              <LeadFormGuards />
              <div className="field">
                <input type="email" name="email" aria-label="E-mail" required placeholder={t("lm.ph", "te@ceged.hu")} />
                <button className="btn" type="submit" disabled={auditForm.state === "sending"} dangerouslySetInnerHTML={{ __html: auditForm.state === "sending" ? t("form.sending", "Küldés…") : t("lm.btn", "Kérem az auditot") }} />
              </div>
              <label className="consent">
                <input type="checkbox" name="consent" required />
                <span dangerouslySetInnerHTML={{ __html: t("lm.consent", "Hozzájárulok, hogy e-mailben megkeressetek, és az Emergence Engineering Kft. az <a href=\"/adatkezeles\">adatkezelési tájékoztató</a> szerint kezelje az adataimat.") }} />
              </label>
              <p className="ok" hidden={auditForm.state !== "ok"} style={{ marginTop: ".9rem", fontSize: ".85rem", color: "var(--coral-d)", fontWeight: "600" }} dangerouslySetInnerHTML={{ __html: t("lm.ok", "Köszönjük! Hamarosan jelentkezünk az e-mail címeden.") }} />
              <p className="err" hidden={auditForm.state !== "error"} style={{ marginTop: ".9rem", fontSize: ".85rem", color: "var(--coral-d)", fontWeight: "600" }} dangerouslySetInnerHTML={{ __html: t("form.err", "Valami hiba történt nálunk. Írj közvetlenül: <a href=\"mailto:contact@emergence-engineering.com\">contact@emergence-engineering.com</a>.") }} />
            </form>
          </div>
        </div>
      </section>
      <section id="gyik">
        <div className="wrap">
          <div className="shead">
            <div>
              <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("faq.sub", "Maradt kérdésed?") }} />
            </div>
            <div className="rv">
              <Link href="/kapcsolat" className="btn btn-line" dangerouslySetInnerHTML={{ __html: t("faq.cta", "Foglalj hívást") }} />
            </div>
          </div>
          <div className="faq rv">
            <details open>
              <summary dangerouslySetInnerHTML={{ __html: t("faq.q1", "Miben vagytok mások, mint egy ügynökség?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("faq.a1", "Az ügynökség kívülről dolgozik, és egy-egy csatornáért felel. Mi beépülünk a csapatba, látjuk a margint, az értékesítést és a működést is, és a bevételért felelünk, nem a kampánystatisztikáért. Ha az derül ki, hogy a probléma nem a hirdetés, hanem az árazás vagy a checkout, akkor azt mondjuk meg, még ha nekünk kevesebb hirdetéskezelést is jelent.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("faq.q2", "Lehet kicsiben kezdeni?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("faq.a2", "Igen. A legtöbb együttműködés egy mély audittal indul: ez egyszeri, fix díjas, és a végén akkor is használható útitervet kapsz, ha utána nem velünk dolgozol tovább. Innen lehet tanácsadói előfizetésre vagy teljes menedzsmentre váltani.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("faq.q3", "Mikor látunk eredményt?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("faq.a3", "Az első nyereségek jellemzően 1–2 hónapon belül jönnek: mérés rendbetétele, ajánlat élesítése, e-mail flow-k indítása. Ezek gyorsan hatnak. A nagyobb változások, új tölcsér, új kreatív rendszer, platformfejlesztés: 3–6 hónap alatt épülnek fel, és onnantól kamatosan hoznak.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("faq.q4", "Garantáljátok az eredményt?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("faq.a4", "Számokat nem garantálunk, mert az tisztességtelen lenne: a piac, a termék és a verseny nem a mi kezünkben van. Amit garantálunk, az a folyamat és az átláthatóság, előre definiált KPI-ok, heti riport, és negyedéves felülvizsgálat, ahol őszintén megbeszéljük, mi működik. A growth inkubátor modellben pedig a saját bevételünket is az eredményhez kötjük.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("faq.q5", "Dolgoztok belsős csapattal együtt?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("faq.a5", "Rendszeresen. Van, ahol mi vagyunk a teljes marketing- és fejlesztőcsapat, és van, ahol a meglévő csapat fölé kerülünk senior rétegként: stratégia, kódreview, kampánystruktúra, mérés. A közös munka a ti eszközeitekben zajlik: Slack, Jira, Notion, ami nálatok van.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("faq.q6", "Mennyi a tipikus szerződéses időtáv?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("faq.a6", "Az audit egyszeri. A hosszú távú modellek jellemzően 6 hónapos minimummal indulnak, mert ennél rövidebb idő alatt a rendszerépítés nem tud megtérülni. Utána havi felmondással folytatódnak.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("faq.q7", "Mi van, ha a nulláról indulunk?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("faq.a7", "Akkor is tudunk dolgozni. Mindent fel tudunk építeni: mérést, tölcsért, kreatívot, hirdetést, CRM-et, landing oldalakat, SEO-t és az e-mail rendszert. Nulláról indulva jellemzően az első 4–6 hét a mérésről és az ajánlatról szól, mert enélkül minden más találgatás.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("faq.q8", "Dolgoztok nemzetközi piacra?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("faq.a8", "Igen. A csapat magyar és angol nyelven is dolgozik, és több EU-s, illetve amerikai ügyfelünk van. Több nyelvű Klaviyo-fiókokat, nemzetközi kampánystruktúrákat és lokalizált tartalmat is kezelünk.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("faq.q9", "Hogyan mérjük a sikert?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("faq.a9", "Bevétel, profit, CAC, ROAS, LTV és működési hatékonyság. Minden együttműködés elején közösen definiáljuk, melyik számnak kell mozdulnia, és milyen mértékben. A riport ezekre épül, nem megjelenésre és like-ra.") }} />
            </details>
          </div>
        </div>
      </section>
      <section className="band" id="csapat">
        <div className="wrap">
          <div className="shead solo">
            <div><h2 className="rv" dangerouslySetInnerHTML={{ __html: t("wwd.h", "Termékeket és vállalkozásokat építünk") }} /></div>
          </div>
          <div className="hp-founders rv">
            <div className="hp-founder">
              <Image src="/ge/img/viktor-vaczi.jpg" alt="Viktor Váczi" width={225} height={219} />
              <div>
                <div className="nm">Viktor Váczi</div>
                <div className="rl">CTO &amp; Co-CEO, Emergence Engineering</div>
                <div className="hp-links">
                  <Link href="/cv/viktor" locale="en" rel="noopener">CV</Link>
                  <a href="https://www.linkedin.com/in/viktor-v%C3%A1czi-58054ba0" rel="noopener">LinkedIn</a>
                  <a href="https://github.com/emergence-engineering" rel="noopener">GitHub</a>
                </div>
              </div>
            </div>
            <div className="hp-founder">
              <Image src="/ge/img/greg-gillay.jpg" alt="Greg Gillay" width={640} height={640} />
              <div>
                <div className="nm">Greg Gillay</div>
                <div className="rl">COO &amp; Co-CEO, Growth Engineering</div>
                <div className="hp-links">
                  <a href="https://www.linkedin.com/in/greggillay/" rel="noopener">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="on-navy" id="kapcsolat">
        <div className="wrap">
          <div className="cta">
            <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("fc.title", "Mi fogja vissza a növekedésed?") }} />
            <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("fc.lede", "Beszéljünk arról, hol tartasz, hova akarsz eljutni, és mi áll az útban. Egyetlen hívással kezdődik.") }} />
            <div className="btns rv">
              <a href="mailto:info@emergence-engineering.com" className="btn">
                <span dangerouslySetInnerHTML={{ __html: t("fc.cta1", "Foglalj hívást") }} />
              </a>
              <a href="mailto:info@emergence-engineering.com" className="btn btn-line" dangerouslySetInnerHTML={{ __html: t("fc.cta2", "Inkább e-mailben kezdenél?") }} />
            </div>
            <p className="rv" style={{ fontSize: ".88rem", color: "#8FA0B8" }} dangerouslySetInnerHTML={{ __html: t("fc.fine", "Harminc perc, prezentáció nélkül. Ha nem látunk közös munkát, a hívás végén ezt mondjuk.") }} />
          </div>
        </div>
      </section>
    </GeShell>
  );
};

export default Index;
