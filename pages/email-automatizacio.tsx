import React from "react";
import { NextPage } from "next";
import Link from "next/link";
import { GeShell } from "../features/ge/components/GeShell";
import { GeSEO } from "../features/ge/components/GeSEO";
import { GeFaqJsonLd } from "../features/ge/components/GeFaqJsonLd";
import { useGeT } from "../features/ge/i18n/useGeT";

// Ported from growth-engineers-v4/email-automatizacio.html; DOM structure intentionally
// mirrors the static original (see features/ge/README.md).
const EmailAutomatizacio: NextPage = () => {
  const t = useGeT();
  return (
    <GeShell page="email-automatizacio">
      <GeFaqJsonLd prefix="em.faq." count={8} />
      <GeSEO
        title={t("mt.email", "E-mail marketing és automatizáció webshopoknak | Growth Engineering")}
        description={t("md.email", "A legtöbb webshopnál az e-mail a bevétel 5–8%-át hozza. Egy jól felépített e-mail rendszerben 25–35%. Flow-k, szegmentáció, integráció és GDPR-tiszta felépítés.")}
        ogTitle={t("mt.email", "E-mail marketing és automatizáció webshopoknak | Growth Engineering")}
        ogDescription={t("od.email", "A bevétel harmada e-mailből jöhet. Nálad most mennyi?")}
      />
      <section className="phero">
        <div className="wrap">
          <div className="phero-grid">
            <div>
              <div className="crumbs rv">
                <Link href="/" dangerouslySetInnerHTML={{ __html: t("crumb.home", "Főoldal") }} />
                <span>/</span>
                <span dangerouslySetInnerHTML={{ __html: t("em.crumb", "E-mail marketing és automatizáció") }} />
              </div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("em.eyebrow", "E-commerce · E-mail marketing") }} />
              <h1 className="rv" dangerouslySetInnerHTML={{ __html: t("em.h1", "A bevétel harmada <mark>e-mailből</mark> jöhet. Nálad most mennyi?") }} />
              <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("em.lede", "A legtöbb magyar webshopnál az e-mail a bevétel 5–8%-át hozza. Egy rendesen felépített e-mail rendszerben 25–35%. A különbséget a mögötte lévő rendszer adja, nem a küldési gyakoriság.") }} />
              <div className="hero-cta rv">
                <Link href="/kapcsolat" className="btn">
                  <span dangerouslySetInnerHTML={{ __html: t("em.cta1", "Kérj ingyenes e-mail auditot") }} />
                  <span className="ar">→</span>
                </Link>
                <a href="#folyamat" className="btn btn-line" dangerouslySetInnerHTML={{ __html: t("em.cta2", "Hogyan zajlik?") }} />
              </div>
              <div className="trust rv">
                <span dangerouslySetInnerHTML={{ __html: t("em.trust1", "<b>Klaviyo</b> Silver Partner") }} />
                <span dangerouslySetInnerHTML={{ __html: t("em.trust3", "<b>GDPR</b>-tiszta felépítés") }} />
              </div>
            </div>
            <div className="flow-chips rv">
              <div className="fchip">
                <span className="ic">👋</span>
                <span className="tx">
                  <b dangerouslySetInnerHTML={{ __html: t("em.chip2.h", "Köszöntő flow") }} />
                  <small dangerouslySetInnerHTML={{ __html: t("em.chip2.s", "Új feliratkozók jutalmazása + brand bemutatása") }} />
                </span>
                <span className="gain" dangerouslySetInnerHTML={{ __html: t("em.chip2.g", "8–18% konverzió") }} />
              </div>
              <div className="fchip">
                <span className="ic">🛒</span>
                <span className="tx">
                  <b dangerouslySetInnerHTML={{ __html: t("em.chip1.h", "Kosárelhagyó flow") }} />
                  <small dangerouslySetInnerHTML={{ __html: t("em.chip1.s", "Szerezd vissza az elveszett vásárlásokat") }} />
                </span>
                <span className="gain" dangerouslySetInnerHTML={{ __html: t("em.chip1.g", "+35% visszatérés") }} />
              </div>
              <div className="fchip">
                <span className="ic">🔄</span>
                <span className="tx">
                  <b dangerouslySetInnerHTML={{ __html: t("em.chip3.h", "Újravásárlási flow") }} />
                  <small dangerouslySetInnerHTML={{ __html: t("em.chip3.s", "Emlékeztető, pont mielőtt a vásárlónak elfogyna") }} />
                </span>
                <span className="gain" dangerouslySetInnerHTML={{ __html: t("em.chip3.g", "8–15% újravásárlás") }} />
              </div>
              <div className="fchip">
                <span className="ic">🔔</span>
                <span className="tx">
                  <b dangerouslySetInnerHTML={{ __html: t("em.chip4.h", "Back-in-stock") }} />
                  <small dangerouslySetInnerHTML={{ __html: t("em.chip4.s", "Értesítsd az érdeklődőket, ha újra van raktáron") }} />
                </span>
                <span className="gain" dangerouslySetInnerHTML={{ __html: t("em.chip4.g", "5–12% konverzió") }} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="band">
        <div className="wrap">
          <div className="shead solo">
            <div>
              <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("em.why.h", "Miért ez a leghatékonyabb bevételi csatorna?") }} />
              <p className="lede rv" style={{ marginTop: "1rem" }} dangerouslySetInnerHTML={{ __html: t("em.why.lede", "A hirdetési költségek évek óta nőnek, a pénzed pedig jórészt az átláthatatlan algoritmus működésére van bízva. Itt valós aktivitási adatok alapján tudsz skálázható és önműködő rendszert építeni, ahol az ügyfél-érintkezési pontok jól időzített és személyre szabott üzenetekkel vannak lefedve. Itt nem a több e-mail küldése a fókusz, hanem a vásárlói élettartam-érték növelése.") }} />
            </div>
          </div>
          <div className="stats3 rv">
            <div className="bigstat">
              <b>30–45%</b>
              <span dangerouslySetInnerHTML={{ __html: t("em.why.s1", "a visszatérési arány jól felépített automatizációkkal. Nélkülük ez átlagosan 18–25%.") }} />
            </div>
            <div className="bigstat">
              <b>40–50%</b>
              <span dangerouslySetInnerHTML={{ __html: t("em.why.s2", "az e-mailekből jött bevételből automatizált, ráadásul ez az összes kiküldés csupán 5,3%-a. Ez a skálázható személyre szabás a gyakorlatban.") }} />
            </div>
            <div className="bigstat">
              <b>5–7×</b>
              <span dangerouslySetInnerHTML={{ __html: t("em.why.s3", "drágább új vevőt szerezni, mint visszahozni egy meglévőt") }} />
            </div>
          </div>
          <p className="fine rv" style={{ textAlign: "center" }} dangerouslySetInnerHTML={{ __html: t("em.why.note", "A számok iparági nagyságrendek, nem ígéretek. Az auditban a te saját adataidból számolunk konkrét célt.") }} />
        </div>
      </section>
      <section>
        <div className="wrap">
          <div className="shead">
            <div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("em.sys.eyebrow", "A rendszer") }} />
              <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("em.sys.h", "Mit építünk fel?") }} />
            </div>
            <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("em.sys.lede", "Automatizált flow-kat, szegmentációt és adatgyűjtést, kampánynaptárat és tartalmat: egy összefüggő rendszert, ahol minden e-mail egy konkrét viselkedésre válaszol.") }} />
          </div>
          <h3 className="rv" style={{ marginBottom: "1.4rem" }} dangerouslySetInnerHTML={{ __html: t("em.sys.g1", "<span class=\"gno\">1/3</span> Automatizált flow-k") }} />
          <div className="cards4 rv" style={{ marginBottom: "3rem" }}>
            <article className="pcard">
              <h4 dangerouslySetInnerHTML={{ __html: t("em.f1.h", "Köszöntő flow") }} />
              <p dangerouslySetInnerHTML={{ __html: t("em.f1.p", "Új feliratkozóidat automatikus üdvözlő e-maillel fogadjuk, amelyben akár kedvezményt is kínálhatsz. Ezt egy 3–4 részes sorozat követi, amely bemutatja a márkádat és a termékeidet, miközben világossá teszi, milyen értékes tartalomra számíthatnak tőled. Így már az első pillanattól elkötelezett, hűséges közösséget építhetsz.") }} />
            </article>
            <article className="pcard">
              <h4 dangerouslySetInnerHTML={{ __html: t("em.f2.h", "Elhagyott pénztár flow") }} />
              <p dangerouslySetInnerHTML={{ __html: t("em.f2.p", "A vásárlók átlagosan 25–30%-a közvetlenül a fizetés előtt hagyja el a webshopot. Ők már eljutottak a döntési folyamat utolsó lépéséig, így velük van a legnagyobb esélyed a konverzióra. Néhány pontosan időzített, meggyőző emlékeztető e-mail segítségével a kosárelhagyási arány akár a felére is csökkenthető, közvetlenül növelve a bevételedet. Hozzájárult vásárlóknál ez SMS-értesítéssel is kiegészülhet.") }} />
            </article>
            <article className="pcard">
              <h4 dangerouslySetInnerHTML={{ __html: t("em.f3.h", "Elhagyott kosár flow") }} />
              <p dangerouslySetInnerHTML={{ __html: t("em.f3.p", "A webshopok látogatóinak átlagosan 70%-a otthagyja a kosarát anélkül, hogy véglegesítené a vásárlást. Ezek a vásárlók már kifejezték az érdeklődésüket, így egy rövid, célzott emlékeztető e-maillel könnyen visszacsábíthatod őket, és komoly bevételt menthetsz meg. Emellett ez a flow tökéletes arra is, hogy korábbi vásárlásaik alapján kiegészítő termékeket ajánlj, így növelve az átlagos kosárértéket.") }} />
            </article>
            <article className="pcard">
              <h4 dangerouslySetInnerHTML={{ __html: t("em.f4.h", "Vásárlás utáni flow") }} />
              <p dangerouslySetInnerHTML={{ __html: t("em.f4.p", "A vásárlás utáni kapcsolattartás az egyik legfontosabb eleme annak, hogy a vásárló később visszatérjen hozzád. Köszönetnyilvánítás, részletes útmutató, vélemény kérése, a korábbi vásárláshoz kapcsolódó termékek ajánlása. Mintha minden vásárlás után te magad gondoskodnál arról, hogy a vásárlód a legjobb élményben részesüljön.") }} />
            </article>
            <article className="pcard">
              <h4 dangerouslySetInnerHTML={{ __html: t("em.f5.h", "Visszacsábítási flow") }} />
              <p dangerouslySetInnerHTML={{ __html: t("em.f5.p", "Vannak vásárlók, akik már jó pár hónapja nem rendeltek? Kapd el őket újdonságokkal vagy egy személyes kedvezménnyel, mielőtt teljesen megfeledkeznének rólad. Eddig vajon hány vásárlód veszett el, mert egyszerűen megfeledkeztek rólad?") }} />
            </article>
            <article className="pcard">
              <h4 dangerouslySetInnerHTML={{ __html: t("em.f6.h", "Áresés- és készletértesítő") }} />
              <p dangerouslySetInnerHTML={{ __html: t("em.f6.p", "Van olyan termék, amit egy vásárló gyakran néz, de mégsem vásárolja meg? Azonnal értesítőt kap róla, ha csökkent az ára. Esetleg nincs raktáron a vágyott szín vagy méret? Egy gombnyomással kérhet értesítést, amint a termék ismét elérhető. Csupán 1–1 e-mail, ami erős vásárlói igényre válaszol. Emellett ez kifejezetten jól működik SMS-en keresztül is! Alacsony kiküldés, magas konverzió, és a vásárlók is imádják!") }} />
            </article>
            <article className="pcard">
              <h4 dangerouslySetInnerHTML={{ __html: t("em.f7.h", "E-mail-lista tisztántartása") }} />
              <p dangerouslySetInnerHTML={{ __html: t("em.f7.p", "Van, hogy bizonyos feliratkozók egy idő után nem kíváncsiak rád. Ez teljesen normális. Ha hosszabb idő után sem nyitották meg az e-mailjeidet, kérdezd meg tőlük, hogy érdekled-e még őket. Ha erre sem reagálnak, automatikusan leiratkoztathatod őket. Javul a kézbesítési arány, tiszta marad a listád, nem fizetsz inaktív profilokért, és az érdektelen vásárlók sem kapnak tőled kelletlen üzeneteket. Win-win szituáció, mindez automatizálva.") }} />
            </article>
            <article className="pcard">
              <h4 dangerouslySetInnerHTML={{ __html: t("em.f8.h", "Egyéb életciklus-események") }} />
              <p dangerouslySetInnerHTML={{ __html: t("em.f8.p", "Ajándék kupon a vásárlódnak pont a születésnapja előtt? Vagy személyre szabott ajánlat az első vásárlás ünneplésére? Ki ne örülne ezeknek! Ez és még sok más olyan vásárlói életciklus-értesítő, amivel mosolyt csalhatsz vásárlóid arcára, és magas konverziós arányt is érhetsz el!") }} />
            </article>
          </div>
          <h3 className="rv" style={{ marginBottom: "1.4rem" }} dangerouslySetInnerHTML={{ __html: t("em.sys.g2", "<span class=\"gno\">2/3</span> Szegmentáció és adat") }} />
          <div className="panel panel-navy rv" style={{ marginBottom: "3rem" }}>
            <div className="cards2" style={{ gap: "0 clamp(1.5rem,4vw,3.5rem)" }}>
              <ul className="checklist">
                <li dangerouslySetInnerHTML={{ __html: t("em.seg1", "<strong>RFM-szegmensek</strong>: mikor vásárolt utoljára, milyen gyakran, mekkora értékben") }} />
                <li dangerouslySetInnerHTML={{ __html: t("em.seg2", "<strong>Termékkategória-affinitás</strong>, ki mit néz és mit vesz valójában") }} />
                <li dangerouslySetInnerHTML={{ __html: t("em.seg3", "<strong>Engagement-szintek</strong>: aktív, lanyhuló, alvó, halott lista") }} />
                <li dangerouslySetInnerHTML={{ __html: t("em.seg4", "<strong>Prediktív adatok</strong>, várható következő rendelés és becsült élettartam-érték") }} />
              </ul>
              <ul className="checklist">
                <li dangerouslySetInnerHTML={{ __html: t("em.seg5", "<strong>Saját adatgyűjtés</strong>: kvíz, preferenciaközpont, profilbővítés") }} />
                <li dangerouslySetInnerHTML={{ __html: t("em.seg6", "<strong>Egyedi események</strong>, a saját rendszeredből küldött viselkedésadat") }} />
                <li dangerouslySetInnerHTML={{ __html: t("em.seg7", "<strong>Tiszta katalógusfeed</strong>, hogy a dinamikus termékblokkok tényleg jó terméket mutassanak") }} />
                <li dangerouslySetInnerHTML={{ __html: t("em.seg8", "<strong>Bevétel-attribúció</strong>: melyik flow mennyit hozott, önámítás nélkül") }} />
              </ul>
            </div>
          </div>
          <h3 className="rv" style={{ marginBottom: "1.4rem" }} dangerouslySetInnerHTML={{ __html: t("em.sys.g3", "<span class=\"gno\">3/3</span> Kampányok és tartalom") }} />
          <div className="cards3 rv">
            <article className="pcard">
              <h4 dangerouslySetInnerHTML={{ __html: t("em.c3.h", "Stratégia") }} />
              <p dangerouslySetInnerHTML={{ __html: t("em.c3.p", "Hogyan építünk feliratkozói listát, milyen rendszerességgel és milyen üzenetekkel keressük fel a vásárlókat, és hogyan teremtünk értéket az ügyfeleidnek úgy, hogy közben a bevétel is nő.") }} />
            </article>
            <article className="pcard">
              <h4 dangerouslySetInnerHTML={{ __html: t("em.c1.h", "Kampánynaptár") }} />
              <p dangerouslySetInnerHTML={{ __html: t("em.c1.p", "Havi terv szezonalitásra, akciókra és tartalomra bontva. Ha minden kampány akció, a lista megtanulja, hogy kedvezmény nélkül nem érdemes nyitni.") }} />
            </article>
            <article className="pcard">
              <h4 dangerouslySetInnerHTML={{ __html: t("em.c2.h", "Sablonrendszer") }} />
              <p dangerouslySetInnerHTML={{ __html: t("em.c2.p", "Moduláris, márkakonzisztens sablonkészlet, ami mobilon is jól néz ki, és a te csapatod is tudja szerkeszteni.") }} />
            </article>
          </div>
        </div>
      </section>
      <section className="band">
        <div className="wrap">
          <div className="sblock" style={{ borderTop: "0", paddingTop: "0" }}>
            <div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("em.int.eyebrow", "Integrációk") }} />
              <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("em.int.h", "A legtöbb webshop-motorra fel vagyunk készülve") }} />
              <p className="rv" dangerouslySetInnerHTML={{ __html: t("em.int.lede", "Piacvezető révén leginkább a Klaviyót ajánljuk e-commerce webshopokhoz, de szükség esetén más platformokkal is dolgozunk. Hosszú távú megoldást keresünk, ami skálázható, és a legjobban kiegészíti az üzletedet.") }} />
              <Link className="btn rv" href="/kapcsolat" dangerouslySetInnerHTML={{ __html: t("em.int.cta", "Nézzük meg a rendszeredet") }} />
            </div>
            <div className="ilist rv">
              <article className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("em.int1.h", "Shopify") }} />
                <p dangerouslySetInnerHTML={{ __html: t("em.int1.p", "A Klaviyo a kezdetektől arra lett építve, hogy a Shopify-jal a lehető legjobban működjön együtt, így ez a legjobb választás ilyen alapú webshopokhoz.") }} />
              </article>
              <article className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("em.int4.h", "WooCommerce") }} />
                <p dangerouslySetInnerHTML={{ __html: t("em.int4.p", "Népszerű webshop-motor a magyar piacon, és a Klaviyóval is natívan integrálódik. Remek kombináció, jól működnek együtt.") }} />
              </article>
              <article className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("em.int5.h", "Egyedi rendszer") }} />
                <p dangerouslySetInnerHTML={{ __html: t("em.int5.p", "Amennyiben egyedi fejlesztésű a rendszered, meg tudjuk építeni hozzá a szükséges API-integrációt.") }} />
              </article>
              <article className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("em.int6.h", "Egyéb kiegészítők") }} />
                <p dangerouslySetInnerHTML={{ __html: t("em.int6.p", "Számlázóprogram, hűségprogram, kiszállítási értesítések, Meta és Google Ads közönségek szinkronizálása? Ezek mind integrálhatók, és a Klaviyóval együtt használva sokat hozzátesznek.") }} />
              </article>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="wrap">
          <div className="shead">
            <div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("em.gdpr.eyebrow", "Jogi és technikai alap") }} />
              <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("em.gdpr.h", "Értékteremtés és hosszú távú vevőkapcsolat") }} />
            </div>
            <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("em.gdpr.lede", "A legfontosabb a fenntartható és értékteremtő folyamatok felépítése: a rendszer csak akkor működik, ha az ügyfél nem spamelve érzi magát, hanem értéket kap tőlünk.") }} />
          </div>
          <div className="split">
            <div>
              <ul className="checklist rv">
                <li dangerouslySetInnerHTML={{ __html: t("em.gdpr1", "<strong>Hozzájárulás kezelése</strong>, külön a hírlevélre és a profilalkotásra, időbélyeggel és forrással együtt") }} />
                <li dangerouslySetInnerHTML={{ __html: t("em.gdpr2", "<strong>Dupla opt-in</strong> ott, ahol a lista minősége vagy a jogi kockázat indokolja") }} />
                <li dangerouslySetInnerHTML={{ __html: t("em.gdpr3", "<strong>Leiratkozás</strong> egy kattintással, preferenciaközponttal, hogy ne a teljes leiratkozás legyen az egyetlen opció") }} />
                <li dangerouslySetInnerHTML={{ __html: t("em.gdpr4", "<strong>Kézbesíthetőség</strong>: SPF, DKIM, DMARC beállítás, saját küldődomain bemelegítése") }} />
                <li dangerouslySetInnerHTML={{ __html: t("em.gdpr5", "<strong>Adatminimalizálás</strong>: csak azt gyűjtjük, aminek tényleges felhasználása van") }} />
              </ul>
            </div>
            <div className="panel panel-navy rv">
              <h4 dangerouslySetInnerHTML={{ __html: t("em.gdpr.no.h", "Amit nem csinálunk") }} />
              <ul className="checklist no">
                <li dangerouslySetInnerHTML={{ __html: t("em.no1", "Vásárolt vagy scrape-elt listára küldés") }} />
                <li dangerouslySetInnerHTML={{ __html: t("em.no2", "Hozzájárulás nélküli hideg e-mail B2C-ben") }} />
                <li dangerouslySetInnerHTML={{ __html: t("em.no3", "Kedvezmény minden egyes küldésben, amíg a lista már csak akciót vár") }} />
                <li dangerouslySetInnerHTML={{ __html: t("em.no4", "Megtévesztő tárgysor a nyitási arány feltornászásáért") }} />
                <li dangerouslySetInnerHTML={{ __html: t("em.no5", "„Attribúciós” bevétel, ami valójában amúgy is megtörtént volna") }} />
              </ul>
              <p className="muted" style={{ fontSize: ".88rem", marginTop: "1.2rem", color: "#A9B9CE" }} dangerouslySetInnerHTML={{ __html: t("em.no.note", "Rövid távon mindegyik növelné a számokat. Fél év múlva viszont a lista fele nem nyit meg semmit.") }} />
            </div>
          </div>
        </div>
      </section>
      <section className="band" id="folyamat">
        <div className="wrap">
          <div className="shead solo">
            <div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("em.proc.eyebrow", "Folyamat") }} />
              <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("em.proc.h", "Az első élő flow-tól a teljes rendszerig") }} />
            </div>
          </div>
          <div className="tl rv">
            <div className="tlrow">
              <div className="dot">1</div>
              <div className="sub" dangerouslySetInnerHTML={{ __html: t("em.proc.p1.k", "0–1. hét") }} />
              <h3 dangerouslySetInnerHTML={{ __html: t("em.proc.p1.h", "Audit és adat") }} />
              <p dangerouslySetInnerHTML={{ __html: t("em.proc.p1.p", "Átnézzük a jelenlegi fiókot, a listát, a kézbesíthetőséget és a bevétel-attribúciót. Megnézzük a webshop adatait: mi az újravásárlási ciklus, mik a legjobb belépő termékek, hol a legnagyobb kosárelhagyás. Ebből jön ki, milyen sorrendben építünk. A sablonrendszert is már itt állítjuk fel, még mielőtt bármilyen e-mail készülne.") }} />
            </div>
            <div className="tlrow">
              <div className="dot">2</div>
              <div className="sub" dangerouslySetInnerHTML={{ __html: t("em.proc.p2.k", "1–2. hét") }} />
              <h3 dangerouslySetInnerHTML={{ __html: t("em.proc.p2.h", "Alapok és első flow-k") }} />
              <p dangerouslySetInnerHTML={{ __html: t("em.proc.p2.p", "Integráció, katalógusfeed, események, domain-beállítás. Élesedik az elhagyott kosár és az üdvözlő sorozat, ez a két flow adja jellemzően az automatizált bevétel felét.") }} />
            </div>
            <div className="tlrow">
              <div className="dot">3</div>
              <div className="sub" dangerouslySetInnerHTML={{ __html: t("em.proc.p3.k", "2–5. hét") }} />
              <h3 dangerouslySetInnerHTML={{ __html: t("em.proc.p3.h", "Teljes flow-készlet") }} />
              <p dangerouslySetInnerHTML={{ __html: t("em.proc.p3.p", "Elhagyott pénztár, vásárlás utáni sorozat, winback, készletértesítő, sunset. Szegmensek felépítése, szövegezéssel.") }} />
            </div>
            <div className="tlrow">
              <div className="dot">4</div>
              <div className="sub" dangerouslySetInnerHTML={{ __html: t("em.proc.p4.k", "5–8. hét") }} />
              <h3 dangerouslySetInnerHTML={{ __html: t("em.proc.p4.h", "Kampányritmus és mérés") }} />
              <p dangerouslySetInnerHTML={{ __html: t("em.proc.p4.p", "Kampánynaptár, riportsablon, a csapatod betanítása. Innentől vagy ti viszitek tovább, vagy mi futtatjuk havi együttműködésben.") }} />
            </div>
            <div className="tlrow">
              <div className="dot">5</div>
              <div className="sub" dangerouslySetInnerHTML={{ __html: t("em.proc.p5.k", "folyamatos") }} />
              <h3 dangerouslySetInnerHTML={{ __html: t("em.proc.p5.h", "Optimalizálás") }} />
              <p dangerouslySetInnerHTML={{ __html: t("em.proc.p5.p", "Havi teszttervek, szegmensfinomítás, új flow-k a szezonokra. Minden hónapban egy tanulság, ami a hirdetési oldalra is visszakerül.") }} />
            </div>
          </div>
        </div>
      </section>
      <section id="csomagok">
        <div className="wrap">
          <div className="shead solo">
            <div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("em.pkg.eyebrow", "Csomagok") }} />
              <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("em.pkg.h", "Hogyan tudsz belevágni") }} />
            </div>
          </div>
          <div className="tiers rv">
            <div className="tier">
              <h4 dangerouslySetInnerHTML={{ __html: t("em.pkg1.h", "E-mail marketing tervezés") }} />
              <div className="price" dangerouslySetInnerHTML={{ __html: t("em.pkg1.price", "190 000 Ft<small>egyszeri, 5 munkanap</small>") }} />
              <p dangerouslySetInnerHTML={{ __html: t("em.pkg1.p", "Végigmegyünk a fiókodon, a listádon és a kézbesíthetőségen. Kapsz egy priorizált listát arról, mi hozza a legtöbb bevételt a következő 90 napban, és mennyit.") }} />
              <ul className="checks on-light">
                <li dangerouslySetInnerHTML={{ __html: t("em.pkg1.l1", "Fiók-, flow- és lista-átvilágítás") }} />
                <li dangerouslySetInnerHTML={{ __html: t("em.pkg1.l2", "Bevételi potenciál becslése a saját adataidból") }} />
                <li dangerouslySetInnerHTML={{ __html: t("em.pkg1.l3", "90 napos prioritási terv") }} />
                <li dangerouslySetInnerHTML={{ __html: t("em.pkg1.l4", "60 perces átbeszélés") }} />
              </ul>
            </div>
            <div className="tier" style={{ borderColor: "var(--coral)" }}>
              <h4 dangerouslySetInnerHTML={{ __html: t("em.pkg2.h", "Rendszerépítés") }} />
              <div className="price" dangerouslySetInnerHTML={{ __html: t("em.pkg2.price", "1 500 000 Ft-tól<small>egyszeri projekt, 6–8 hét</small>") }} />
              <p dangerouslySetInnerHTML={{ __html: t("em.pkg2.p", "A teljes flow-készlet, szegmensek, sablonrendszer és integráció felépítése. A végén a fiók a tiéd, dokumentálva, a csapatod betanításával.") }} />
              <ul className="checks on-light">
                <li dangerouslySetInnerHTML={{ __html: t("em.pkg2.l1", "8–12 flow magyarul, A/B teszttel") }} />
                <li dangerouslySetInnerHTML={{ __html: t("em.pkg2.l2", "Integráció a webshopoddal") }} />
                <li dangerouslySetInnerHTML={{ __html: t("em.pkg2.l3", "Sablon- és szegmensrendszer") }} />
                <li dangerouslySetInnerHTML={{ __html: t("em.pkg2.l4", "Riport és betanítás") }} />
              </ul>
            </div>
            <div className="tier">
              <h4 dangerouslySetInnerHTML={{ __html: t("em.pkg3.h", "Havi futtatás") }} />
              <div className="price" dangerouslySetInnerHTML={{ __html: t("em.pkg3.price", "470 000 Ft-tól / hó<small>a listaméret függvényében</small>") }} />
              <p dangerouslySetInnerHTML={{ __html: t("em.pkg3.p", "Kampánynaptár, kreatív, szövegírás, tesztelés és riport. Mi futtatjuk az egészet, ti a termékkel foglalkoztok.") }} />
              <ul className="checks on-light">
                <li dangerouslySetInnerHTML={{ __html: t("em.pkg3.l1", "4–8 kampány havonta") }} />
                <li dangerouslySetInnerHTML={{ __html: t("em.pkg3.l2", "Folyamatos flow-optimalizálás") }} />
                <li dangerouslySetInnerHTML={{ __html: t("em.pkg3.l3", "Havi riport bevételbontással") }} />
                <li dangerouslySetInnerHTML={{ __html: t("em.pkg3.l4", "SMS és push kiterjesztés igény szerint") }} />
              </ul>
            </div>
          </div>
          <p className="fine rv" dangerouslySetInnerHTML={{ __html: t("em.pkg.note", "A feltüntetett árak minimumárak. A végleges ajánlat a lista méretétől, a termékkatalógustól és az integráció összetettségétől függ.") }} />
        </div>
      </section>
      <section className="band">
        <div className="wrap">
          <div className="shead solo">
            <div>
              <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("em.kpi.h", "Mit fogsz látni a riportban") }} />
              <p className="lede rv" style={{ marginTop: "1rem" }} dangerouslySetInnerHTML={{ __html: t("em.kpi.lede", "Nem nyitási arányt. Azt, hogy melyik flow mennyi pénzt hozott.") }} />
            </div>
          </div>
          <p className="scrollhint rv" dangerouslySetInnerHTML={{ __html: t("em.kpi.hint", "Görgess a táblázaton <b>→</b>") }} />
          <div className="table-wrap rv">
            <table>
              <thead>
                <tr>
                  <th dangerouslySetInnerHTML={{ __html: t("em.kpi.c1", "Mutató") }} />
                  <th dangerouslySetInnerHTML={{ __html: t("em.kpi.c2", "Mit mond el") }} />
                  <th dangerouslySetInnerHTML={{ __html: t("em.kpi.c3", "Reális célérték") }} />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td dangerouslySetInnerHTML={{ __html: t("em.kpi.r1a", "E-mail bevétel aránya") }} />
                  <td dangerouslySetInnerHTML={{ __html: t("em.kpi.r1b", "A teljes webshop-bevétel hány százaléka jön e-mailből") }} />
                  <td dangerouslySetInnerHTML={{ __html: t("em.kpi.r1c", "25–35%") }} />
                </tr>
                <tr>
                  <td dangerouslySetInnerHTML={{ __html: t("em.kpi.r2a", "Flow-bevétel aránya") }} />
                  <td dangerouslySetInnerHTML={{ __html: t("em.kpi.r2b", "Az e-mail bevételen belül az automatizált rész") }} />
                  <td dangerouslySetInnerHTML={{ __html: t("em.kpi.r2c", "50–65%") }} />
                </tr>
                <tr>
                  <td dangerouslySetInnerHTML={{ __html: t("em.kpi.r3a", "Elhagyott kosár konverzió") }} />
                  <td dangerouslySetInnerHTML={{ __html: t("em.kpi.r3b", "A flow-t megkapók hány százaléka vásárol") }} />
                  <td dangerouslySetInnerHTML={{ __html: t("em.kpi.r3c", "3–8%") }} />
                </tr>
                <tr>
                  <td dangerouslySetInnerHTML={{ __html: t("em.kpi.r4a", "Üdvözlő sorozat konverzió") }} />
                  <td dangerouslySetInnerHTML={{ __html: t("em.kpi.r4b", "Az új feliratkozók első vásárlási aránya") }} />
                  <td dangerouslySetInnerHTML={{ __html: t("em.kpi.r4c", "3–8%") }} />
                </tr>
                <tr>
                  <td dangerouslySetInnerHTML={{ __html: t("em.kpi.r5a", "Bevétel / feliratkozó / hónap") }} />
                  <td dangerouslySetInnerHTML={{ __html: t("em.kpi.r5b", "A lista valós értéke") }} />
                  <td dangerouslySetInnerHTML={{ __html: t("em.kpi.r5c", "300–1 200 Ft") }} />
                </tr>
                <tr>
                  <td dangerouslySetInnerHTML={{ __html: t("em.kpi.r6a", "Kézbesítési és panaszarány") }} />
                  <td dangerouslySetInnerHTML={{ __html: t("em.kpi.r6b", "A lista egészsége és a domain reputációja") }} />
                  <td dangerouslySetInnerHTML={{ __html: t("em.kpi.r6c", "&gt;98% / &lt;0,08%") }} />
                </tr>
              </tbody>
            </table>
          </div>
          <p className="fine rv" dangerouslySetInnerHTML={{ __html: t("em.kpi.note", "A célértékek iparágtól és kosárértéktől függenek. Az auditban a te kategóriádra szabjuk őket.") }} />
        </div>
      </section>
      <section>
        <div className="wrap">
          <div className="cases">
            <article className="case rv">
              <div className="case-media">
                <div className="stat stat-coral" style={{ width: "100%", minHeight: "220px", justifyContent: "center", gap: "1rem" }}>
                  <div className="dnum" style={{ fontSize: "clamp(2.6rem,5vw,3.6rem)" }}>+45M Ft</div>
                  <div className="lbl" style={{ fontSize: ".95rem", maxWidth: "22ch" }} dangerouslySetInnerHTML={{ __html: t("em.cs.stat", "webshop-bevétel az első évben") }} />
                </div>
              </div>
              <div className="case-body">
                <div className="eyebrow" dangerouslySetInnerHTML={{ __html: t("em.cs.eyebrow", "Esettanulmány") }} />
                <h3 dangerouslySetInnerHTML={{ __html: t("em.cs.h", "Plantart, az e-mail mint kiszámítható bevételi csatorna") }} />
                <p dangerouslySetInnerHTML={{ __html: t("em.cs.p", "A Plantartnál a digitális átalakítás harmadik fázisa szólt a tölcsérekről és az e-mailről. Automatizált nurture-folyamatokat és szegmensenkénti landing oldalakat építettünk, amivel a kiszámíthatatlan, esetleges érdeklődés helyét egy mérhető akvizíciós motor vette át. A webshop az első évében több mint 45 millió forint bevételt termelt.") }} />
                <div style={{ marginTop: "1.4rem" }}>
                  <Link href="/esettanulmanyok" className="tlink">
                    <span dangerouslySetInnerHTML={{ __html: t("em.cs.read", "Teljes esettanulmány") }} />
                    <span className="ar">→</span>
                  </Link>
                </div>
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
              <summary dangerouslySetInnerHTML={{ __html: t("em.faq.q1", "Mekkora listánál éri meg elkezdeni?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("em.faq.a1", "Nagyjából 2 000 aktív feliratkozótól már mérhető a hatás, de a flow-k akkor is megérik, ha a lista kisebb, ezek a forgalom növekedésével automatikusan skálázódnak. Nagyon kis listánál előbb a feliratkozásszerzésre és a forgalomra érdemes költeni, és ezt az auditban meg is mondjuk.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("em.faq.q2", "Mennyibe kerül maga az e-mail platform?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("em.faq.a2", "A platform díja az aktív profilok és a küldött üzenetek száma alapján alakul, ez tőlünk független költség. A pontos összeget a <a href=\"https://www.klaviyo.com/pricing\" target=\"_blank\" rel=\"noopener noreferrer\">Klaviyo árazási oldalán</a> lévő kalkulátorral tudod kiszámolni.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("em.faq.q3", "Shoprenteren vagyunk, oda is működik?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("em.faq.a3", "Igen, de nem sablonból: API-alapú integrációt építünk a rendelési, kosár- és termékadatokra. Mivel saját fejlesztőcsapatunk van, ez nálunk nem külön beszállítós projekt. Ugyanez igaz az UNAS-ra és az egyedi fejlesztésű shopokra.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("em.faq.q4", "Van már működő e-mailünk. Újra kell kezdeni?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("em.faq.a4", "Ritkán. Az esetek többségében a meglévő flow-kat átépítjük, nem kidobjuk, a felépített lista és az előzményadat érték. Az audit pont azt mondja meg, mit érdemes megtartani, mit átírni, és mi az, ami aktívan árt (például egy sunset flow hiánya).") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("em.faq.q5", "Ki írja a szövegeket?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("em.faq.a5", "Mi, magyarul, a márkád hangján. Az induláskor átveszünk tőled minden meglévő anyagot, és ha van, beépítjük a saját stílusútmutatódat. Van olyan ügyfelünk is, ahol a szöveget ők adják, mi a struktúrát, a szegmenseket és a technikát visszük, ez olcsóbb konstrukció.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("em.faq.q6", "SMS-t is csináltok?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("em.faq.a6", "Igen, az SMS-csatorna Magyarországon is használható, de szigorúbb hozzájárulási szabályokkal. Jellemzően az elhagyott kosárnál és a készletértesítőnél éri meg, ott viszont látványosan. A hozzájárulás gyűjtését is beépítjük a feliratkozási folyamatba.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("em.faq.q7", "Mi van, ha egy másik platformot használunk?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("em.faq.a7", "Az audit közben felmérjük, mi a számodra legmegfelelőbb platform. Ezeknek a rendszereknek a működési elve hasonló, de a funkciók listája nagyban különbözhet. Ha van jobb megoldás számotokra, és hosszú távon megéri beruházni, azt az auditban elmondjuk.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("em.faq.q8", "Mennyi időt kell rászánnunk?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("em.faq.a8", "Az induláskor egy kickoff megbeszélés és a hozzáférések beállítása, utána hetente 30–45 perc. A tartalmi jóváhagyás a ti oldalatokon van, a többit mi visszük.") }} />
            </details>
          </div>
        </div>
      </section>
      <section className="on-navy" id="kapcsolat">
        <div className="wrap">
          <div className="cta">
            <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("fc.eyebrow", "Beszéljünk") }} />
            <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("em.fc.h", "Nézzük meg, mennyi pénz áll a listádban") }} />
            <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("em.fc.lede", "Kérj ingyenes auditot: megnézzük a fiókodat és a webshopod adatait, és megmondjuk, mennyi bevételt hagysz az asztalon, és mi a legrövidebb út odáig.") }} />
            <div className="btns rv">
              <Link href="/kapcsolat" className="btn">
                <span dangerouslySetInnerHTML={{ __html: t("em.fc.cta1", "Foglalj hívást") }} />
                <span className="ar">→</span>
              </Link>
              <a href="mailto:info@emergence-engineering.com" className="btn btn-line" dangerouslySetInnerHTML={{ __html: t("em.fc.cta2", "Inkább e-mailben kezdenél?") }} />
            </div>
            <p className="rv" style={{ fontSize: ".88rem", color: "#8FA0B8" }} dangerouslySetInnerHTML={{ __html: t("em.fc.fine", "Ha az derül ki, hogy nálad ez most nem éri meg, azt is megmondjuk.") }} />
          </div>
        </div>
      </section>
    </GeShell>
  );
};

export default EmailAutomatizacio;
