import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { GeShell } from "../features/ge/components/GeShell";
import { GeSEO } from "../features/ge/components/GeSEO";
import { useGeT } from "../features/ge/i18n/useGeT";

// Ported from growth-engineers-v4/ux-ui-design.html; DOM structure intentionally
// mirrors the static original (see features/ge/README.md).
const UxUiDesign: NextPage = () => {
  const t = useGeT();
  return (
    <GeShell page="ux-ui-design">
      <GeSEO
        title={t("mt.ux", "UX/UI design, ami a kutatást eredménnyé fordítja, Growth Engineering")}
        description={t("md.ux", "UX kutatás, audit, információs architektúra, prototípus, arculat és tesztelés. A design nálunk konverzió, nem dekoráció.")}
        ogTitle={t("mt.ux", "UX/UI design, ami a kutatást eredménnyé fordítja, Growth Engineering")}
        ogDescription={t("od.ux", "Kutatással kezdünk, hipotézist írunk, és mérjük, hogy bejött-e. A design nálunk konverzió, nem dekoráció.")}
      />
      <section className="phero">
        <div className="wrap">
          <div className="phero-grid">
            <div>
              <div className="crumbs rv">
                <Link href="/" dangerouslySetInnerHTML={{ __html: t("crumb.home", "Főoldal") }} />
                <span>/</span>
                <span dangerouslySetInnerHTML={{ __html: t("ux.crumb", "UX/UI design") }} />
              </div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("ux.hero.eyebrow", "UX/UI design") }} />
              <h1 className="rv" dangerouslySetInnerHTML={{ __html: t("ux.hero.h1", "A <mark>design</mark>, ami a kutatást eredménnyé fordítja") }} />
              <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("ux.hero.lede", "A vásárló nem különíti el a hirdetést, a weboldalt és a terméket. Egyben éli meg, és ott dönt, ahol a legnagyobb a súrlódás. Mi ott kezdünk, ahol a bevétel elszivárog.") }} />
              <p className="lede rv muted" dangerouslySetInnerHTML={{ __html: t("ux.hero.sub", "Kutatással kezdünk, hipotézist írunk, és mérjük, hogy bejött-e. Ha nem, azt is leírjuk.") }} />
              <div className="hero-cta rv">
                <Link href="/kapcsolat" className="btn">
                  <span dangerouslySetInnerHTML={{ __html: t("ux.hero.cta1", "Kérj ingyenes UX auditot") }} />
                  <span className="ar">→</span>
                </Link>
                <a href="#folyamat" className="btn btn-line" dangerouslySetInnerHTML={{ __html: t("ux.hero.cta2", "Hogyan dolgozunk") }} />
              </div>
              <div className="trust rv">
                <span dangerouslySetInnerHTML={{ __html: t("ux.hero.trust1", "<b>Kutatásvezérelt</b> folyamat") }} />
                <span dangerouslySetInnerHTML={{ __html: t("ux.hero.trust2", "<b>Saját</b> fejlesztőcsapat") }} />
                <span dangerouslySetInnerHTML={{ __html: t("ux.hero.trust3", "<b>Mérhető</b> eredmény, nem ízlésvita") }} />
              </div>
            </div>
            <div className="phero-art rv">
              <Image src="/ge/img/vj-phone.webp" width={720} height={900} style={{ height: "900px" }} alt={t("alt23", "Mobil UI képernyő terv")} />
            </div>
          </div>
        </div>
      </section>
      <section className="band">
        <div className="wrap">
          <div className="shead solo">
            <div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("ux.plan.eyebrow", "Kompetenciák") }} />
              <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("ux.plan.h", "Mit tervezünk") }} />
              <p className="lede rv" style={{ marginTop: "1rem" }} dangerouslySetInnerHTML={{ __html: t("ux.plan.lede", "A legtöbb projekt egy területtel indul, aztán kibővül. Ezért minden komponens újrahasználható rendszerbe kerül, nem egyszeri képernyőbe.") }} />
            </div>
          </div>
          <div className="pills rv">
            <span className="pill" dangerouslySetInnerHTML={{ __html: t("ux.plan.p1", "Weboldal design") }} />
            <span className="pill" dangerouslySetInnerHTML={{ __html: t("ux.plan.p2", "Landing oldal") }} />
            <span className="pill" dangerouslySetInnerHTML={{ __html: t("ux.plan.p3", "E-commerce élmény") }} />
            <span className="pill" dangerouslySetInnerHTML={{ __html: t("ux.plan.p4", "Termékdesign") }} />
            <span className="pill" dangerouslySetInnerHTML={{ __html: t("ux.plan.p5", "Mobilalkalmazás") }} />
            <span className="pill" dangerouslySetInnerHTML={{ __html: t("ux.plan.p6", "Arculat") }} />
            <span className="pill" dangerouslySetInnerHTML={{ __html: t("ux.plan.p7", "Újrapozicionálás") }} />
            <span className="pill" dangerouslySetInnerHTML={{ __html: t("ux.plan.p8", "Vizuális rendszerek") }} />
            <span className="pill" dangerouslySetInnerHTML={{ __html: t("ux.plan.p9", "Social média grafika") }} />
            <span className="pill" dangerouslySetInnerHTML={{ __html: t("ux.plan.p10", "Marketing vizuálok") }} />
          </div>
        </div>
      </section>
      <section>
        <div className="wrap">
          <div className="shead">
            <div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("ux.proc.eyebrow", "A folyamat") }} />
              <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("ux.proc.h", "Kutatás, design, tesztelés, egy körben") }} />
            </div>
            <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("ux.proc.lede", "Minden szakasz egy konkrét kérdésre válaszol: mit akar a felhasználó, hogyan éri el, és tényleg működik-e. A design a kettő között történik.") }} />
          </div>
          {/* RESEARCH */}
          <div className="sblock rv">
            <div>
              <div className="eyebrow" dangerouslySetInnerHTML={{ __html: t("ux.r.eyebrow", "1. Kutatás") }} />
              <h3 dangerouslySetInnerHTML={{ __html: t("ux.r.h", "Előbb megértés, aztán design") }} />
              <p dangerouslySetInnerHTML={{ __html: t("ux.r.p", "Mielőtt bármit rajzolnánk, megnézzük az analitikát és beszélünk öt-tíz felhasználóval. A legtöbb konverziós probléma már itt kiderül.") }} />
              <Link className="btn" href="/kapcsolat" dangerouslySetInnerHTML={{ __html: t("ux.r.cta", "Kérem az auditot") }} />
            </div>
            <div className="ilist">
              <article className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("ux.r1.h", "Felhasználói interjúk") }} />
                <p dangerouslySetInnerHTML={{ __html: t("ux.r1.p", "Valódi felhasználókkal beszélgetünk, hogy kiderüljenek az igényeik, motivációik és frusztrációik.") }} />
              </article>
              <article className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("ux.r2.h", "Design probe-ok") }} />
                <p dangerouslySetInnerHTML={{ __html: t("ux.r2.p", "Naplók, csomagok és feladatok, amikkel a mindennapi szokásokat és érzelmeket térképezzük fel.") }} />
              </article>
              <article className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("ux.r3.h", "Versenytárs- és trendelemzés") }} />
                <p dangerouslySetInnerHTML={{ __html: t("ux.r3.p", "Piaci mintázatok vizsgálata a megkülönböztetés és a növekedés lehetőségeiért.") }} />
              </article>
              <article className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("ux.r4.h", "Viselkedéselemzés és hőtérkép") }} />
                <p dangerouslySetInnerHTML={{ __html: t("ux.r4.p", "A felhasználói viselkedés követése: mi ragadja meg a figyelmet, és hol kell javítani.") }} />
              </article>
            </div>
          </div>
          {/* DESIGN */}
          <div className="sblock rv">
            <div>
              <div className="eyebrow" dangerouslySetInnerHTML={{ __html: t("ux.d.eyebrow", "2. Design") }} />
              <h3 dangerouslySetInnerHTML={{ __html: t("ux.d.h", "Intuitív, emberközpontú design") }} />
              <p dangerouslySetInnerHTML={{ __html: t("ux.d.p", "A kutatásból prototípus lesz, a prototípusból fejleszthető képernyő. Minden döntéshez tartozik egy hipotézis, amit később ellenőrizni lehet.") }} />
            </div>
            <div className="ilist">
              <article className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("ux.d1.h", "Információs architektúra és wireframe") }} />
                <p dangerouslySetInnerHTML={{ __html: t("ux.d1.p", "A tartalom logikus, könnyen bejárható szerkezetbe rendezése.") }} />
              </article>
              <article className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("ux.d2.h", "Prototípus és felhasználói útvonalak") }} />
                <p dangerouslySetInnerHTML={{ __html: t("ux.d2.p", "Interaktív modellek az ötletek teszteléséhez és az útvonalak finomításához.") }} />
              </article>
              <article className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("ux.d3.h", "UI design és vizuális rendszerek") }} />
                <p dangerouslySetInnerHTML={{ __html: t("ux.d3.p", "Egységes felületek, amik kifejezik a márkádat és következetesek maradnak.") }} />
              </article>
              <article className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("ux.d4.h", "Ügyfélút-térkép") }} />
                <p dangerouslySetInnerHTML={{ __html: t("ux.d4.p", "Az érintkezési pontok láthatóvá tétele, hogy megtaláljuk a fejlesztési lehetőségeket.") }} />
              </article>
            </div>
          </div>
          {/* TESTING */}
          <div className="sblock rv">
            <div>
              <div className="eyebrow" dangerouslySetInnerHTML={{ __html: t("ux.t.eyebrow", "3. Tesztelés") }} />
              <h3 dangerouslySetInnerHTML={{ __html: t("ux.t.h", "Finomítás, tesztelés, növekedés") }} />
              <p dangerouslySetInnerHTML={{ __html: t("ux.t.p", "Az élesítés után derül ki, mennyit ért az egész. Ezért az első hónapokban mérünk, tesztelünk és javítunk.") }} />
              <a className="tlink" href="#folyamat">
                <span dangerouslySetInnerHTML={{ __html: t("ux.t.cta", "Nézd meg a teljes folyamatot") }} />
                <span className="ar">→</span>
              </a>
            </div>
            <div className="ilist">
              <article className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("ux.t1.h", "Használhatósági tesztelés") }} />
                <p dangerouslySetInnerHTML={{ __html: t("ux.t1.p", "Megfigyeljük, hogyan használják, hogy lássuk, hol akadnak el.") }} />
              </article>
              <article className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("ux.t2.h", "A/B tesztelés") }} />
                <p dangerouslySetInnerHTML={{ __html: t("ux.t2.p", "Design-variánsok összehasonlítása, hogy kiderüljön, melyik működik jobban.") }} />
              </article>
              <article className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("ux.t3.h", "Fake door tesztelés") }} />
                <p dangerouslySetInnerHTML={{ __html: t("ux.t3.p", "Könnyű tesztek az érdeklődés mérésére, mielőtt új funkciót építenénk.") }} />
              </article>
              <article className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("ux.t4.h", "Kártyarendezés és fastruktúra-teszt") }} />
                <p dangerouslySetInnerHTML={{ __html: t("ux.t4.p", "A tartalom rendezése úgy, ahogy a felhasználók gondolkodnak róla.") }} />
              </article>
            </div>
          </div>
        </div>
      </section>
      <section className="band">
        <div className="wrap">
          <div className="split">
            <div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("ux.audit.eyebrow", "UX audit") }} />
              <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("ux.audit.h", "Két hét, egy priorizált lista, konkrét bevételi hatással") }} />
              <p className="lede rv" style={{ margin: "1.1rem 0" }} dangerouslySetInnerHTML={{ __html: t("ux.audit.lede", "Végigmegyünk az analitikán, a tölcséren és a kritikus útvonalakon. A végén pontosan tudod, mi hozza a legtöbbet a következő 90 napban, és mennyit.") }} />
              <Link className="btn rv" href="/kapcsolat">
                <span dangerouslySetInnerHTML={{ __html: t("ux.audit.cta", "Kérj ingyenes UX auditot") }} />
                <span className="ar">→</span>
              </Link>
            </div>
            <div className="panel panel-peach rv">
              <h4 dangerouslySetInnerHTML={{ __html: t("ux.audit.list.h", "Mit tartalmaz az audit") }} />
              <ul className="checklist">
                <li dangerouslySetInnerHTML={{ __html: t("ux.au1", "<strong>Analitika- és tölcsér-átvilágítás</strong>, hol és mennyi bevétel szivárog el") }} />
                <li dangerouslySetInnerHTML={{ __html: t("ux.au2", "<strong>5–10 moderált felhasználói interjú</strong>, a valódi elakadások feltárása") }} />
                <li dangerouslySetInnerHTML={{ __html: t("ux.au3", "<strong>Hőtérkép- és session-felvétel elemzés</strong>: mit néznek, mit hagynak ki") }} />
                <li dangerouslySetInnerHTML={{ __html: t("ux.au4", "<strong>Használhatósági teszt a kulcsútvonalakon</strong>, a kritikus lépések ellenőrzése") }} />
                <li dangerouslySetInnerHTML={{ __html: t("ux.au5", "<strong>Priorizált, becsült hatású lista</strong>, mit érdemes először javítani") }} />
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="wrap">
          <div className="split flip">
            <div className="split-media rv">
              <Image src="/ge/img/pa-site.webp" width={900} height={640} style={{ height: "640px" }} alt={t("alt24", "Weboldal wireframe és információs architektúra")} />
            </div>
            <div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("ux.ia.eyebrow", "Információs architektúra") }} />
              <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("ux.ia.h", "A szerkezet, amit a felhasználó fejével rajzolunk") }} />
              <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("ux.ia.lede", "A jó felület a jó szerkezeten múlik. Előbb a tartalom és a navigáció áll össze, aztán jön a látvány, nem fordítva.") }} />
              <ul className="bullets rv">
                <li dangerouslySetInnerHTML={{ __html: t("ux.ia.b1", "Kártyarendezés és fastruktúra-teszt valós felhasználókkal") }} />
                <li dangerouslySetInnerHTML={{ __html: t("ux.ia.b2", "Logikus navigáció és útvonalak a fő célokhoz") }} />
                <li dangerouslySetInnerHTML={{ __html: t("ux.ia.b3", "Wireframe, ami a tartalomról szól, nem a díszítésről") }} />
                <li dangerouslySetInnerHTML={{ __html: t("ux.ia.b4", "Prototípus, amin mérni lehet, mielőtt fejlesztenénk") }} />
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="band">
        <div className="wrap">
          <div className="shead solo">
            <div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("ux.brand.eyebrow", "Arculat és vizuális rendszerek") }} />
              <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("ux.brand.h", "A márka minden felületen ugyanaz marad") }} />
              <p className="lede rv" style={{ marginTop: "1rem" }} dangerouslySetInnerHTML={{ __html: t("ux.brand.lede", "Nem egy logó, hanem egy rendszer: színek, tipográfia, komponensek és szabályok, amikkel a csapatod is konzisztens marad, a landing oldaltól a termékfelületig.") }} />
            </div>
          </div>
          <div className="logo-cards rv">
            <article className="lcard">
              <Image src="/ge/img/l-axdraft.webp" width={800} height={452} alt={t("alt25", "Design system komponensek")} />
              <div className="lbody">
                <div className="kick" dangerouslySetInnerHTML={{ __html: t("ux.b1.k", "Design system") }} />
                <h4 dangerouslySetInnerHTML={{ __html: t("ux.b1.h", "Komponenskönyvtár") }} />
                <p dangerouslySetInnerHTML={{ __html: t("ux.b1.p", "Újrahasználható komponensek, tokenek és szabályok, amikre a fejlesztés is közvetlenül építhet.") }} />
              </div>
            </article>
            <article className="lcard">
              <Image src="/ge/img/l-memrise.webp" width={800} height={452} alt={t("alt26", "Vizuális nyelv és arculat")} />
              <div className="lbody">
                <div className="kick" dangerouslySetInnerHTML={{ __html: t("ux.b2.k", "Arculat") }} />
                <h4 dangerouslySetInnerHTML={{ __html: t("ux.b2.h", "Vizuális nyelv") }} />
                <p dangerouslySetInnerHTML={{ __html: t("ux.b2.p", "Színek, tipográfia és motívumok, amik minden csatornán azonnal felismerhetők.") }} />
              </div>
            </article>
            <article className="lcard">
              <Image src="/ge/img/l-skiff.webp" width={800} height={452} alt={t("alt27", "Interaktív prototípusok")} />
              <div className="lbody">
                <div className="kick" dangerouslySetInnerHTML={{ __html: t("ux.b3.k", "Prototípus") }} />
                <h4 dangerouslySetInnerHTML={{ __html: t("ux.b3.h", "Interaktív modellek") }} />
                <p dangerouslySetInnerHTML={{ __html: t("ux.b3.p", "Kattintható prototípusok, amelyeken a döntéseket még fejlesztés előtt tesztelni tudjuk.") }} />
              </div>
            </article>
          </div>
        </div>
      </section>
      <section id="folyamat">
        <div className="wrap">
          <div className="shead solo">
            <div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("ux.steps.eyebrow", "Hogyan dolgozunk") }} />
              <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("ux.steps.h", "A design folyamatunk öt lépésben") }} />
            </div>
          </div>
          <div className="steps rv">
            <div className="step">
              <span className="n">01</span>
              <h4 dangerouslySetInnerHTML={{ __html: t("ux.s1.h", "Felfedezés") }} />
              <p dangerouslySetInnerHTML={{ __html: t("ux.s1.p", "Hallgatással kezdünk. Kutatással és beszélgetéssel megismerjük a célokat, a felhasználókat és a piacot.") }} />
            </div>
            <div className="step">
              <span className="n">02</span>
              <h4 dangerouslySetInnerHTML={{ __html: t("ux.s2.h", "Fókusz") }} />
              <p dangerouslySetInnerHTML={{ __html: t("ux.s2.p", "A felismerésekből priorizált útiterv lesz, ahol minden döntés üzleti célt szolgál.") }} />
            </div>
            <div className="step">
              <span className="n">03</span>
              <h4 dangerouslySetInnerHTML={{ __html: t("ux.s3.h", "Tervezés") }} />
              <p dangerouslySetInnerHTML={{ __html: t("ux.s3.p", "Wireframe, prototípus és látványterv: mérhető hipotézisekkel, nem ízlésvitával.") }} />
            </div>
            <div className="step">
              <span className="n">04</span>
              <h4 dangerouslySetInnerHTML={{ __html: t("ux.s4.h", "Átadás") }} />
              <p dangerouslySetInnerHTML={{ __html: t("ux.s4.p", "Fejleszthető képernyők, dokumentált komponensek, és támogatás az implementáció alatt.") }} />
            </div>
            <div className="step">
              <span className="n">05</span>
              <h4 dangerouslySetInnerHTML={{ __html: t("ux.s5.h", "Növekedés") }} />
              <p dangerouslySetInnerHTML={{ __html: t("ux.s5.p", "Mérés, tesztelés, iteráció. A design akkor kész, ha a szám is mozdul.") }} />
            </div>
          </div>
        </div>
      </section>
      <section className="band">
        <div className="wrap">
          <div className="cases">
            <article className="case rv">
              <div className="case-media">
                <Image src="/ge/img/cover-plantart.webp" width={1500} height={1000} alt={t("alt28", "Plantart, UX/UI és tölcsér design")} />
              </div>
              <div className="case-body">
                <div className="eyebrow" dangerouslySetInnerHTML={{ __html: t("ux.cs.eyebrow", "Esettanulmány") }} />
                <h3 dangerouslySetInnerHTML={{ __html: t("ux.cs.h", "Plantart, a designból mérhető akvizíciós motor lett") }} />
                <p dangerouslySetInnerHTML={{ __html: t("ux.cs.p", "A Plantartnál a designra épülő tölcséreket és landing oldalakat szegmensenként terveztük meg, kutatásból kiindulva. A kiszámíthatatlan, esetleges érdeklődés helyét egy mérhető, ismételhető rendszer vette át, a webshop az első évében több mint 100 millió forint bevételt termelt.") }} />
                <div className="metrics">
                  <div className="m">
                    <div className="dnum">+45M Ft</div>
                    <div className="d" dangerouslySetInnerHTML={{ __html: t("ux.cs.m1", "webshop-bevétel az első évben") }} />
                  </div>
                  <div className="m">
                    <div className="dnum">3</div>
                    <div className="d" dangerouslySetInnerHTML={{ __html: t("ux.cs.m2", "fázis: stratégia, fejlesztés, tölcsér") }} />
                  </div>
                </div>
                <Link href="/esettanulmanyok" className="tlink">
                  <span dangerouslySetInnerHTML={{ __html: t("ux.cs.read", "Teljes esettanulmány") }} />
                  <span className="ar">→</span>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section id="gyik">
        <div className="wrap">
          <div className="shead">
            <div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("faq.title", "GYIK") }} />
              <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("faq.sub", "Maradt kérdésed?") }} />
            </div>
            <div className="rv">
              <Link href="/kapcsolat" className="btn btn-line" dangerouslySetInnerHTML={{ __html: t("faq.cta", "Foglalj hívást") }} />
            </div>
          </div>
          <div className="faq rv">
            <details open>
              <summary dangerouslySetInnerHTML={{ __html: t("ux.faq.q1", "Milyen designprojekteket vállaltok?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("ux.faq.a1", "Széles skálán dolgozunk: teljes weboldal-újratervezés, digitális termékfelületek, arculati rendszerek és marketing design. A legtöbb ügyfelünk egy területtel indul, majd bővíti az együttműködést.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("ux.faq.q2", "Fejlesztést is csináltok, vagy csak designt?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("ux.faq.a2", "Fejlesztést is, saját csapattal. A projektet koncepciótól élesítésig visszük, így a design és a fejlesztés kéz a kézben halad, nem külön beszállítóknál.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("ux.faq.q3", "Mennyi ideig tart egy tipikus designprojekt?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("ux.faq.a3", "A hatókörtől függ. Egy kisebb weboldal vagy landing oldal 4–6 hét, egy teljes termékdesign vagy márkaújratervezés több hónap. Az elején világos időtervet adunk, és végig nyitottan kommunikálunk.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("ux.faq.q4", "Mi van, ha már van belső designcsapatunk?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("ux.faq.a4", "Az teljesen rendben van. Gyakran dolgozunk együtt belső csapatokkal kutatásban, stratégiában vagy design system támogatásban. A folyamatunk rugalmas, alkalmazkodunk a ti eszközeitekhez.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("ux.faq.q5", "Hogyan mérjük egy designprojekt sikerét?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("ux.faq.a5", "A siker mutatóit közösen határozzuk meg az elején: bevonódás, konverzió, feladat-végrehajtási idő vagy kvalitatív visszajelzés. A cél olyan design, ami mérhető különbséget hoz.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("ux.faq.q6", "Miben más a ti megközelítésetek?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("ux.faq.a6", "Kreatív designt kombinálunk kutatással, teszteléssel és folyamatos fejlesztéssel. Minden döntés bizonyítékon és empátián alapul, nem feltételezésen. Partnernek tekintjük magunkat, nem beszállítónak, és a folyamatért és az eredményért is felelősséget vállalunk.") }} />
            </details>
          </div>
        </div>
      </section>
      <section className="on-navy" id="kapcsolat">
        <div className="wrap">
          <div className="cta">
            <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("fc.eyebrow", "Beszéljünk") }} />
            <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("ux.fc.h", "Építsünk jobb élményeket") }} />
            <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("ux.fc.lede", "Te ismered a vállalkozásod. Mi tudjuk, hogyan lesz belőle teljesítő UX/UI design. Beszéljük meg, és csináljunk olyan élményt, ami szépen és jól is működik.") }} />
            <div className="btns rv">
              <Link href="/kapcsolat" className="btn">
                <span dangerouslySetInnerHTML={{ __html: t("ux.fc.cta1", "Foglalj hívást") }} />
                <span className="ar">→</span>
              </Link>
              <a href="mailto:info@emergence-engineering.com" className="btn btn-line" dangerouslySetInnerHTML={{ __html: t("ux.fc.cta2", "Inkább e-mailben kezdenél?") }} />
            </div>
            <p className="rv" style={{ fontSize: ".88rem", color: "#8FA0B8" }} dangerouslySetInnerHTML={{ __html: t("ux.fc.fine", "Harminc perc, prezentáció nélkül. Ha nem látunk közös munkát, a hívás végén ezt mondjuk.") }} />
          </div>
        </div>
      </section>
    </GeShell>
  );
};

export default UxUiDesign;
