import React from "react";
import { NextPage } from "next";
import Link from "next/link";
import { GeShell } from "../features/ge/components/GeShell";
import { GeSEO } from "../features/ge/components/GeSEO";
import { GeFaqJsonLd } from "../features/ge/components/GeFaqJsonLd";
import { useGeT } from "../features/ge/i18n/useGeT";

// ChatGPT Ads service landing. Facts sourced from OpenAI's ads product as
// described by mainstreethost.com, gptadsai.com and klikkprofit.hu (2026);
// availability dates are the expected rollout, revisit when OpenAI announces EU.
const ChatgptAds: NextPage = () => {
  const t = useGeT();
  return (
    <GeShell page="chatgpt-ads">
      <GeFaqJsonLd prefix="cg.faq." count={8} />
      <GeSEO
        title={t("mt.cgads", "ChatGPT Ads hirdetéskezelés: hirdess az AI-keresésben | Growth Engineering")}
        description={t("md.cgads", "A ChatGPT Ads szponzorált ajánlásként jelenik meg a releváns beszélgetések alatt. Kampánytervezés, context hintek, mérés és optimalizálás egy csapattól.")}
        ogTitle={t("mt.cgads", "ChatGPT Ads hirdetéskezelés: hirdess az AI-keresésben | Growth Engineering")}
        ogDescription={t("od.cgads", "Egyre többen kérdezik a ChatGPT-t vásárlás előtt. Ott leszel, amikor rólad kérdeznek?")}
      />
      <section className="phero">
        <div className="wrap">
          <div className="phero-grid">
            <div>
              <div className="crumbs rv">
                <Link href="/" dangerouslySetInnerHTML={{ __html: t("crumb.home", "Főoldal") }} />
                <span>/</span>
                <span dangerouslySetInnerHTML={{ __html: t("cg.crumb", "ChatGPT Ads") }} />
              </div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("cg.hero.eyebrow", "AI-hirdetés · ChatGPT Ads") }} />
              <h1 className="rv" dangerouslySetInnerHTML={{ __html: t("cg.hero.h1", "Hirdess ott, ahol a vevőid <mark>kérdeznek</mark>") }} />
              <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("cg.hero.lede", "Egyre többen kérdezik a ChatGPT-t a Google helyett, mielőtt vásárolnak. A ChatGPT Ads szponzorált ajánlásként jelenik meg a releváns beszélgetések alatt. Mi megtervezzük, felépítjük és számokkal optimalizáljuk a kampányodat.") }} />
              <div className="hero-cta rv">
                <Link href="/kapcsolat" className="btn">
                  <span dangerouslySetInnerHTML={{ __html: t("cg.hero.cta1", "Kérj konzultációt") }} />
                  <span className="ar">→</span>
                </Link>
                <a href="#hogyan" className="btn btn-line" dangerouslySetInnerHTML={{ __html: t("cg.hero.cta2", "Hogyan működik?") }} />
              </div>
              <div className="trust rv">
                <span dangerouslySetInnerHTML={{ __html: t("cg.hero.trust1", "<b>900+ millió</b> heti ChatGPT-felhasználó") }} />
                <span dangerouslySetInnerHTML={{ __html: t("cg.hero.trust2", "<b>PPC-csapat</b> Google- és Meta-tapasztalattal") }} />
              </div>
            </div>
            <div className="phero-art rv" aria-hidden="true">
              <div style={{ padding: "1.6rem 1.5rem", fontSize: ".85rem", lineHeight: 1.5 }}>
                <div style={{ background: "#fff", border: "1px solid var(--rule)", borderRadius: "14px", padding: ".8rem 1rem", maxWidth: "85%" }}>
                  <span dangerouslySetInnerHTML={{ __html: t("cg.mock.q", "Milyen CRM-et ajánlanál egy 10 fős magyar szolgáltatócégnek?") }} />
                </div>
                <div style={{ margin: "1rem 0 0 auto", background: "var(--navy)", color: "#fff", borderRadius: "14px", padding: ".8rem 1rem", maxWidth: "88%" }}>
                  <span dangerouslySetInnerHTML={{ __html: t("cg.mock.a", "Ekkora csapatnál a legfontosabb szempont az egyszerű bevezetés és a magyar számlázás-integráció. Íme három irány…") }} />
                </div>
                <div style={{ marginTop: "1.1rem", background: "#fff", border: "1px solid var(--rule)", borderRadius: "14px", padding: ".9rem 1rem" }}>
                  <div style={{ fontSize: ".68rem", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--muted)", fontWeight: 700, marginBottom: ".45rem" }} dangerouslySetInnerHTML={{ __html: t("cg.mock.tag", "Szponzorált") }} />
                  <div style={{ fontWeight: 700, color: "var(--ink)" }} dangerouslySetInnerHTML={{ __html: t("cg.mock.ad.h", "A te márkád · CRM kis csapatoknak") }} />
                  <div style={{ color: "var(--body)", marginTop: ".2rem" }} dangerouslySetInnerHTML={{ __html: t("cg.mock.ad.p", "Bevezetés 2 hét alatt, magyar támogatással. Próbáld ki ingyen.") }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="band">
        <div className="wrap">
          <div className="shead">
            <div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("cg.what.eyebrow", "Az alapok") }} />
              <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("cg.what.h", "Mi az a ChatGPT Ads?") }} />
            </div>
            <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("cg.what.lede", "Fizetett, jelölt hirdetési blokk, ami a releváns ChatGPT-beszélgetések alatt jelenik meg: a hirdető neve és logója, egy cím, rövid szöveg, kép és a landing oldal linkje. Azt, hogy melyik beszélgetésnél melyik hirdetés fut, az OpenAI dönti el a téma alapján, relevancia szerint súlyozott aukcióban.") }} />
          </div>
          <div className="cards4 rv">
            <article className="pcard">
              <h4 dangerouslySetInnerHTML={{ __html: t("cg.what1.h", "Nem kulcsszó, hanem kontextus") }} />
              <p dangerouslySetInnerHTML={{ __html: t("cg.what1.p", "Kulcsszavak helyett úgynevezett context hinteket adsz meg: leírod, milyen típusú beszélgetésekhez kapcsolódik az ajánlatod. Ez irány a rendszernek, nem garantált pozíció.") }} />
            </article>
            <article className="pcard">
              <h4 dangerouslySetInnerHTML={{ __html: t("cg.what2.h", "A válaszokat nem befolyásolja") }} />
              <p dangerouslySetInnerHTML={{ __html: t("cg.what2.p", "A hirdetés külön, jelölt blokkban fut. Pénzért nem lehet megvenni, hogy a ChatGPT a válaszában ajánljon: a hirdetés és a válasz két külön dolog.") }} />
            </article>
            <article className="pcard">
              <h4 dangerouslySetInnerHTML={{ __html: t("cg.what3.h", "Ki látja egyáltalán?") }} />
              <p dangerouslySetInnerHTML={{ __html: t("cg.what3.p", "Csak a bejelentkezett, 18 év feletti, ingyenes (Free és Go) csomagos felhasználók. Aki fizet a ChatGPT-ért, az nem lát hirdetést.") }} />
            </article>
            <article className="pcard">
              <h4 dangerouslySetInnerHTML={{ __html: t("cg.what4.h", "Formátumok") }} />
              <p dangerouslySetInnerHTML={{ __html: t("cg.what4.p", "Állókép, videó és beszélgetésbe illeszkedő kreatív. Webshopoknak termékfeed-alapú kampány is van, katalógussal.") }} />
            </article>
          </div>
        </div>
      </section>
      <section>
        <div className="wrap">
          <div className="shead">
            <div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("cg.why.eyebrow", "Miért éri meg") }} />
              <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("cg.why.h", "A vásárlás előtti kérdések már a chatben hangzanak el") }} />
            </div>
            <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("cg.why.lede", "„Melyiket vegyem?”, „Mennyiből jön ki?”, „Mire figyeljek szolgáltatóválasztásnál?” Ezekre a kérdésekre régen a Google adott találati listát. Ma egyre gyakrabban a ChatGPT ad választ, több mint 900 millió heti felhasználónak.") }} />
          </div>
          <div className="cards3 rv">
            <article className="pcard">
              <h3 dangerouslySetInnerHTML={{ __html: t("cg.why1.h", "A döntés pillanatában") }} />
              <p dangerouslySetInnerHTML={{ __html: t("cg.why1.p", "A hirdetésed akkor jelenik meg, amikor valaki éppen összehasonlít, mérlegel vagy tanácsot kér, nem pedig utólag próbálod utolérni.") }} />
            </article>
            <article className="pcard">
              <h3 dangerouslySetInnerHTML={{ __html: t("cg.why2.h", "Korai előny") }} />
              <p dangerouslySetInnerHTML={{ __html: t("cg.why2.p", "Kevés a hirdető, ezért olcsóbb a figyelem. Aki most tanulja meg a csatornát, előnyben lesz, amikor beindul a verseny.") }} />
            </article>
            <article className="pcard">
              <h3 dangerouslySetInnerHTML={{ __html: t("cg.why3.h", "Márkavédelem") }} />
              <p dangerouslySetInnerHTML={{ __html: t("cg.why3.p", "Nincs alapértelmezett márkakizárás: a versenytársad is célozhatja azokat a beszélgetéseket, ahol rólad kérdeznek. Jobb, ha ott te jelensz meg.") }} />
            </article>
          </div>
        </div>
      </section>
      <section className="band" id="hogyan">
        <div className="wrap">
          <div className="shead">
            <div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("cg.how.eyebrow", "A technika") }} />
              <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("cg.how.h", "Hogyan működik a gyakorlatban?") }} />
            </div>
            <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("cg.how.lede", "A kampányok az OpenAI saját felületén, az Ads Managerben futnak (ads.openai.com). Két kampánycél közül választasz: elérés (CPM-alapú) vagy kattintás (CPC-alapú). A mérést az OpenAI Pixel és a Conversions API adja, ami összeköthető a GA4-gyel is.") }} />
          </div>
          <div className="stat-row rv" style={{ marginTop: "1rem" }}>
            <div className="k">25 USD<small dangerouslySetInnerHTML={{ __html: t("cg.how.k1", "minimum napi büdzsé kampányonként") }} /></div>
            <div className="k">3–5 USD<small dangerouslySetInnerHTML={{ __html: t("cg.how.k2", "ajánlott induló kattintási ár (CPC)") }} /></div>
            <div className="k">CTR · CPC · CPM<small dangerouslySetInnerHTML={{ __html: t("cg.how.k3", "mérőszámok az Ads Managerben, konverziókkal") }} /></div>
          </div>
        </div>
      </section>
      <section>
        <div className="wrap">
          <div className="shead solo">
            <div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("cg.proc.eyebrow", "Folyamat") }} />
              <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("cg.proc.h", "Így visszük a kampányodat") }} />
            </div>
          </div>
          <div className="steps s4 rv">
            <div className="step">
              <div className="n" dangerouslySetInnerHTML={{ __html: t("cg.proc1.k", "1. LÉPÉS") }} />
              <h4 dangerouslySetInnerHTML={{ __html: t("cg.proc1.h", "Stratégia és terv") }} />
              <p dangerouslySetInnerHTML={{ __html: t("cg.proc1.p", "Megismerjük a céljaidat, a vevőidet és a számaidat. Eldöntjük, milyen beszélgetésekben és milyen ajánlattal érdemes megjelenned.") }} />
            </div>
            <div className="step">
              <div className="n" dangerouslySetInnerHTML={{ __html: t("cg.proc2.k", "2. LÉPÉS") }} />
              <h4 dangerouslySetInnerHTML={{ __html: t("cg.proc2.h", "Kampány-setup és kreatív") }} />
              <p dangerouslySetInnerHTML={{ __html: t("cg.proc2.p", "Felépítjük a kampánystruktúrát, megírjuk a hirdetéseket és a context hinteket a vevőid természetes nyelvén, és igazítjuk a landing oldalt az üzenethez.") }} />
            </div>
            <div className="step">
              <div className="n" dangerouslySetInnerHTML={{ __html: t("cg.proc3.k", "3. LÉPÉS") }} />
              <h4 dangerouslySetInnerHTML={{ __html: t("cg.proc3.h", "Mérés és indítás") }} />
              <p dangerouslySetInnerHTML={{ __html: t("cg.proc3.p", "Bekötjük az OpenAI Pixelt és a konverziómérést, összekapcsoljuk a GA4-gyel, és csak ezután indítunk. Mérés nélkül nem költünk.") }} />
            </div>
            <div className="step">
              <div className="n" dangerouslySetInnerHTML={{ __html: t("cg.proc4.k", "4. LÉPÉS") }} />
              <h4 dangerouslySetInnerHTML={{ __html: t("cg.proc4.h", "Folyamatos optimalizálás") }} />
              <p dangerouslySetInnerHTML={{ __html: t("cg.proc4.p", "Figyeljük, melyik kontextus és kreatív hozza a legolcsóbb konverziót, a nyerteseket skálázzuk, a tanulságot visszaforgatjuk.") }} />
            </div>
          </div>
        </div>
      </section>
      <section className="band">
        <div className="wrap">
          <div className="shead">
            <div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("cg.svc.eyebrow", "Szolgáltatás") }} />
              <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("cg.svc.h", "Mit tartalmaz a ChatGPT Ads kezelés?") }} />
            </div>
            <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("cg.svc.lede", "Nem csak a hirdetési fiókot kezeljük: a teljes utat visszük a kampánytervtől a landing oldalig, egy csapatban a PPC-, kreatív- és fejlesztő-kollégákkal.") }} />
          </div>
          <div className="cards3 rv">
            <article className="pcard">
              <h4 dangerouslySetInnerHTML={{ __html: t("cg.svc1.h", "Kampánystruktúra") }} />
              <p dangerouslySetInnerHTML={{ __html: t("cg.svc1.p", "Témák köré szervezett kampányok, tiszta felépítéssel, hogy látszódjon, mi működik és mi nem.") }} />
            </article>
            <article className="pcard">
              <h4 dangerouslySetInnerHTML={{ __html: t("cg.svc2.h", "Hirdetésszövegek") }} />
              <p dangerouslySetInnerHTML={{ __html: t("cg.svc2.p", "Rövid, fókuszált üzenetek, amik illeszkednek a beszélgetés hangulatához, és nem reklámszagúak.") }} />
            </article>
            <article className="pcard">
              <h4 dangerouslySetInnerHTML={{ __html: t("cg.svc3.h", "Context hint fejlesztés") }} />
              <p dangerouslySetInnerHTML={{ __html: t("cg.svc3.p", "A vevőid tényleges kérdéseiből és nyelvéből dolgozunk, hogy a rendszer a jó beszélgetésekhez társítsa a hirdetést.") }} />
            </article>
            <article className="pcard">
              <h4 dangerouslySetInnerHTML={{ __html: t("cg.svc4.h", "Landing oldal igazítás") }} />
              <p dangerouslySetInnerHTML={{ __html: t("cg.svc4.p", "A kattintás utáni oldal ugyanazt ígéri, mint a hirdetés. Ha kell, meg is építjük: házon belül fejlesztünk.") }} />
            </article>
            <article className="pcard">
              <h4 dangerouslySetInnerHTML={{ __html: t("cg.svc5.h", "Pixel és konverziómérés") }} />
              <p dangerouslySetInnerHTML={{ __html: t("cg.svc5.p", "OpenAI Pixel, Conversions API és GA4-összekötés, hogy forintra lásd, mit hoz a csatorna.") }} />
            </article>
            <article className="pcard">
              <h4 dangerouslySetInnerHTML={{ __html: t("cg.svc6.h", "Folyamatos menedzsment") }} />
              <p dangerouslySetInnerHTML={{ __html: t("cg.svc6.p", "Heti riport, tesztek, büdzsé-átcsoportosítás. A fiók és az adat végig a tiéd marad.") }} />
            </article>
          </div>
        </div>
      </section>
      <section>
        <div className="wrap">
          <div className="shead">
            <div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("cg.geo.eyebrow", "Fizetett és organikus") }} />
              <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("cg.geo.h", "ChatGPT Ads vagy AI-keresőoptimalizálás?") }} />
            </div>
            <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("cg.geo.lede", "A kettő nem egymás helyett van, hanem együtt működik, ugyanúgy, mint a Google Ads és a SEO.") }} />
          </div>
          <div className="cards2 rv">
            <article className="pcard">
              <h3 dangerouslySetInnerHTML={{ __html: t("cg.geo1.h", "ChatGPT Ads: fizetett") }} />
              <p dangerouslySetInnerHTML={{ __html: t("cg.geo1.p", "Szponzorált, jelölt megjelenés, ami azonnal indul, és pontosan mérhető. Arra jó, hogy gyorsan teszteld, mit hoz az AI-csatorna a márkádnak.") }} />
            </article>
            <article className="pcard">
              <h3 dangerouslySetInnerHTML={{ __html: t("cg.geo2.h", "AIO / GEO: organikus") }} />
              <p dangerouslySetInnerHTML={{ __html: t("cg.geo2.p", "A tartalmad úgy strukturálod, hogy az AI-modellek megértsék és idézzék, így a válaszokban hirdetés nélkül is megjelensz. Lassabban épül, de tartós. Ezzel már ma tudunk dolgozni: <a href=\"/ai-seo\">SEO és AI keresőoptimalizálás →</a>") }} />
            </article>
          </div>
        </div>
      </section>
      <section className="band" id="mikor">
        <div className="wrap">
          <div className="shead">
            <div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("cg.when.eyebrow", "Elérhetőség") }} />
              <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("cg.when.h", "Mikor hirdethetsz Magyarországon?") }} />
            </div>
            <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("cg.when.lede", "A ChatGPT Ads ma az USA-ban, az Egyesült Királyságban, Kanadában, Ausztráliában, Új-Zélandon, Japánban, Koreában, Brazíliában és Mexikóban él. A következő körben 31 európai ország jön, Magyarország várhatóan 2026 vége és 2027 eleje között csatlakozik.") }} />
          </div>
          <div className="cards3 rv">
            <article className="pcard">
              <h4 dangerouslySetInnerHTML={{ __html: t("cg.when1.h", "Ha angol piacra adsz el") }} />
              <p dangerouslySetInnerHTML={{ __html: t("cg.when1.p", "Már most indulhatsz: a nyitott piacokon futó kampányokat innen, Budapestről is teljes körűen visszük.") }} />
            </article>
            <article className="pcard">
              <h4 dangerouslySetInnerHTML={{ __html: t("cg.when2.h", "Ha magyar piacra dolgozol") }} />
              <p dangerouslySetInnerHTML={{ __html: t("cg.when2.p", "Most éri meg felkészülni: rendbe tesszük a mérést és az AI-kereshetőséget, hogy az induláskor elsőként hirdethess, olcsó kattintásokkal.") }} />
            </article>
            <article className="pcard">
              <h4 dangerouslySetInnerHTML={{ __html: t("cg.when3.h", "Értesítünk az indulásról") }} />
              <p dangerouslySetInnerHTML={{ __html: t("cg.when3.p", "Írj nekünk, és szólunk, amint az OpenAI megnyitja a magyar piacot, a kampányterved addigra készen áll.") }} />
            </article>
          </div>
        </div>
      </section>
      <section id="gyik">
        <div className="wrap">
          <div className="shead">
            <div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("cg.faq.eyebrow", "GYIK") }} />
              <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("cg.faq.h", "Gyakori kérdések a ChatGPT Ads-ről") }} />
            </div>
          </div>
          <div className="faq rv">
            <details open>
              <summary dangerouslySetInnerHTML={{ __html: t("cg.faq.q1", "Ki látja a ChatGPT-hirdetéseket?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("cg.faq.a1", "A bejelentkezett, 18 év feletti felhasználók az ingyenes Free és Go csomagokon. A fizetős csomagok (Plus, Pro, Business, Enterprise, Edu) hirdetésmentesek.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("cg.faq.q2", "Bármelyik cég hirdethet?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("cg.faq.a2", "Nem automatikusan: a hirdetőknek meg kell felelniük az OpenAI követelményeinek, a fiók és a kampány jóváhagyáson megy át, és a hirdetési szabályzat végig érvényes.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("cg.faq.q3", "Meg tudom mondani, pontosan melyik beszélgetésnél jelenjen meg a hirdetésem?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("cg.faq.a3", "Nem. Azt, hogy hol fut a hirdetés, az OpenAI dönti el a kampánybeállítások, a beszélgetés témája és a felhasználói szándék alapján. A context hintekkel irányt adsz, de konkrét megjelenést nem tudsz garantálni.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("cg.faq.q4", "A context hint ugyanaz, mint a kulcsszó?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("cg.faq.a4", "Nem. A kulcsszó egy konkrét keresőkifejezésre licitál, a context hint pedig beszélgetéstípusokat ír le: azt mondja meg a rendszernek, milyen témájú beszélgetésekhez releváns az ajánlatod.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("cg.faq.q5", "Mérhető, hogy mit hoz a kampány?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("cg.faq.a5", "Igen. Az OpenAI Ads Manager mutatja a megjelenéseket, kattintásokat, költést, CTR-t, CPC-t és CPM-et, a Pixel és a Conversions API pedig a konverziókat is méri. Mindezt összekötjük a GA4-gyel, így egy helyen látod a többi csatornáddal együtt.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("cg.faq.q6", "A hirdetés befolyásolja a ChatGPT válaszait?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("cg.faq.a6", "Nem. A hirdetés fizetett, jelölt blokkban jelenik meg, és nincs hatása arra, mit válaszol vagy ajánl a ChatGPT. A válaszokban való organikus megjelenésen az AI-keresőoptimalizálás (AIO/GEO) dolgozik.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("cg.faq.q7", "Kiváltja a Google Ads-et vagy a SEO-t?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("cg.faq.a7", "Nem, kiegészíti őket. A ChatGPT Ads egy új felület a vásárlás előtti kutatás pillanataira, a Google, a Meta és az organikus csatornák mellett érdemes futtatni, közös méréssel.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("cg.faq.q8", "Mennyi büdzsé kell hozzá?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("cg.faq.a8", "A minimum napi büdzsé kampányonként 25 dollár, az ajánlott induló kattintási ár 3–5 dollár. Értelmes teszthez havi néhány ezer dolláros keretben érdemes gondolkodni, komoly skálázásnál a tapasztalt külföldi ügynökségek 10 000 dollár körüli havi médiabüdzsét ajánlanak.") }} />
            </details>
          </div>
        </div>
      </section>
      <section className="on-navy">
        <div className="wrap">
          <div className="cta">
            <div className="eyebrow" dangerouslySetInnerHTML={{ __html: t("fc.eyebrow", "Beszéljünk") }} />
            <h2 dangerouslySetInnerHTML={{ __html: t("cg.fc.h", "Legyél az elsők között az AI-hirdetésben") }} />
            <p className="lede" dangerouslySetInnerHTML={{ __html: t("cg.fc.p", "Egy 30 perces híváson megnézzük, mit jelent a ChatGPT Ads a te piacodon: mikor indulhatsz, mennyiből, és mit érdemes addig előkészíteni.") }} />
            <div className="btns">
              <Link href="/kapcsolat" className="btn">
                <span dangerouslySetInnerHTML={{ __html: t("cg.fc.cta1", "Kérj konzultációt") }} />
                <span className="ar">→</span>
              </Link>
              <Link href="/ai-seo" className="btn btn-line" dangerouslySetInnerHTML={{ __html: t("cg.fc.cta2", "Addig is: AI-kereshetőség") }} />
            </div>
          </div>
        </div>
      </section>
    </GeShell>
  );
};

export default ChatgptAds;
