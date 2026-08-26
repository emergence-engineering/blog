import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { GeShell } from "../features/ge/components/GeShell";
import { GeSEO } from "../features/ge/components/GeSEO";
import { PaAuditArt, PaCrmArt, PaEcomArt } from "../features/ge/components/PlantartArt";
import { useGeT } from "../features/ge/i18n/useGeT";

// Ported from growth-engineers-v4/esettanulmany-plantart.html; DOM structure intentionally
// mirrors the static original (see features/ge/README.md).
const EsettanulmanyPlantart: NextPage = () => {
  const t = useGeT();
  return (
    <GeShell page="esettanulmany-plantart">
      <GeSEO
        title={t("mt.cspa", "Plantart esettanulmány: 700 millió forintból 1,9 milliárd négy év alatt | Growth Engineering")}
        description={t("md.cspa", "Teljes digitális átalakítás: márka, webshop, CRM, automatizáció és akvizíció. 3× bevétel, +45 millió Ft webshop-bevétel az első évben, −67% konverziós költség.")}
        ogTitle={t("mt.cspa", "Plantart esettanulmány: 700 millió forintból 1,9 milliárd négy év alatt | Growth Engineering")}
        ogDescription={t("od.cspa", "A stagnálástól a kiszámítható, adatvezérelt növekedésig. Márka, webshop, CRM, automatizáció és több csatornás akvizíció.")}
      />
      <section className="cs-hero on-photo">
        <Image className="bg" src="/ge/img/cover-plantart.webp" width={1500} height={1000} alt={t("alt2", "Plantart csapattag munka közben a kertészetben")} aria-label={t("cspa.hero.imgalt", "")} />
        <div className="wrap">
          <div className="crumbs rv">
            <Link href="/" dangerouslySetInnerHTML={{ __html: t("crumb.home", "Főoldal") }} />
            <span>/</span>
            <Link href="/esettanulmanyok" dangerouslySetInnerHTML={{ __html: t("nav.cases", "Esettanulmányok") }} />
            <span>/</span>
            <span>Plantart</span>
          </div>
          <h1 className="rv" dangerouslySetInnerHTML={{ __html: t("cspa.hero.h1", "Plantart piacvezető és digitális bajnok") }} />
          <div className="pills rv">
            <span className="pill" dangerouslySetInnerHTML={{ __html: t("cspa.pill1", "Márkaújratervezés") }} />
            <span className="pill" dangerouslySetInnerHTML={{ __html: t("cspa.pill2", "Funnel marketing") }} />
            <span className="pill" dangerouslySetInnerHTML={{ __html: t("cspa.pill3", "Hagyományos és AIO") }} />
            <span className="pill" dangerouslySetInnerHTML={{ __html: t("cspa.pill4", "CRM bevezetés") }} />
            <span className="pill" dangerouslySetInnerHTML={{ __html: t("cspa.pill5", "E-mail marketing és automatizáció") }} />
            <span className="pill" dangerouslySetInnerHTML={{ __html: t("cspa.pill6", "Webshop és webfejlesztés") }} />
          </div>
          <dl className="cs-meta rv">
            <div>
              <dt dangerouslySetInnerHTML={{ __html: t("cspa.meta.client.k", "Ügyfél") }} />
              <dd dangerouslySetInnerHTML={{ __html: t("cspa.meta.client.v", "Plantart") }} />
            </div>
            <div>
              <dt dangerouslySetInnerHTML={{ __html: t("cspa.meta.ind.k", "Iparág") }} />
              <dd dangerouslySetInnerHTML={{ __html: t("cspa.meta.ind.v", "Beltéri növénydekoráció") }} />
            </div>
            <div>
              <dt dangerouslySetInnerHTML={{ __html: t("cspa.meta.web.k", "Weboldal") }} />
              <dd dangerouslySetInnerHTML={{ __html: t("cspa.meta.web.v", "<a href=\"https://plantart.hu\" rel=\"noopener\">plantart.hu</a><br /><a href=\"https://plantart.hu/webshop/\" rel=\"noopener\">plantart.hu/webshop/</a>") }} />
            </div>
            <div>
              <dt dangerouslySetInnerHTML={{ __html: t("cspa.meta.time.k", "Időszak") }} />
              <dd dangerouslySetInnerHTML={{ __html: t("cspa.meta.time.v", "2020–2024") }} />
            </div>
          </dl>
        </div>
      </section>
      <div className="wrap">
        <div className="cs-metrics rv">
          <div>
            <div className="dnum">3×</div>
            <div className="lbl" dangerouslySetInnerHTML={{ __html: t("cspa.metric1", "bevételnövekedés 4 év alatt") }} />
          </div>
          <div>
            <div className="dnum">+90%</div>
            <div className="lbl" dangerouslySetInnerHTML={{ __html: t("cspa.metric2", "több minősített érdeklődő") }} />
          </div>
          <div>
            <div className="dnum">+234%</div>
            <div className="lbl" dangerouslySetInnerHTML={{ __html: t("cspa.metric3", "növekedés a konverziós arányban") }} />
          </div>
        </div>
      </div>
      <section>
        <div className="wrap">
          <div className="rv" style={{ background: "#fff", borderRadius: "24px", padding: "clamp(2rem,4vw,3.6rem)", maxWidth: "1060px", marginInline: "auto" }}>
            <h2 style={{ textAlign: "center", marginBottom: "1.8rem" }} dangerouslySetInnerHTML={{ __html: t("cspa.ov.h2", "Áttekintés") }} />
            <div className="prose" style={{ maxWidth: "none" }}>
              <p dangerouslySetInnerHTML={{ __html: t("cspa.ov.p1", "A Plantart egy európai kkv a kertészeti piacon, amely egy teljes digitális átalakítással tört ki a négy éve tartó bevételi platóból. <strong>Az árbevétel 2020 és 2024 között 700 millió forintról 1,9 milliárd forintra nőtt</strong>: a márka újradefiniálásával, a digitális ökoszisztéma újjáépítésével, CRM és automatizáció bevezetésével, az akvizíciós csatornák megerősítésével és az AI-alapú bővítés előkészítésével.") }} />
              <p dangerouslySetInnerHTML={{ __html: t("cspa.ov.p2", "Ez az esettanulmány azt mutatja be, hogyan jutott el a Plantart a stagnálástól egy skálázható, adatvezérelt motorig, amely B2B és B2C szegmensben is kiszámítható bevételt termel.") }} />
            </div>
          </div>
        </div>
      </section>
      <section className="band">
        <div className="wrap">
          <div className="split flip">
            <div className="split-media rv">
              <Image src="/ge/img/plantart-site.png" width={629} height={422} alt={t("alt3", "Az újratervezett Plantart weboldal és webshop")} aria-label={t("cspa.ch.imgalt", "")} />
            </div>
            <div className="rv">
              <div className="eyebrow" dangerouslySetInnerHTML={{ __html: t("cspa.ch.eyebrow", "A kihívás") }} />
              <h2 dangerouslySetInnerHTML={{ __html: t("cspa.ch.h2", "Mi fogta vissza a növekedést?") }} />
              <div className="prose" style={{ marginTop: "1.4rem" }}>
                <p dangerouslySetInnerHTML={{ __html: t("cspa.ch.p1", "A Plantart éveken át kis kkv-ként működött: erős szakmai tudással, hűséges ügyfelekkel és növényekért lelkesedő csapattal. A potenciál ellenére a bevétel <strong>négy egymást követő évben 700 millió forint körül állt</strong>.") }} />
                <p dangerouslySetInnerHTML={{ __html: t("cspa.ch.p2", "A marketing minimális volt, az érdeklődőszerzés esetleges, és nem volt strukturált tölcsér vagy konverziós rendszer, ami a növekedést támogatta volna.") }} />
                <p dangerouslySetInnerHTML={{ __html: t("cspa.ch.p3", "A fordulat akkor jött, amikor a menedzsment irányt váltott: készen álltak újragondolni az egész működést, beruházni a digitális modernizációba, és <strong>stratégiai, adatvezérelt megközelítésre</strong> váltani.") }} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="wrap">
          <div className="shead">
            <div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("cspa.ap.eyebrow", "A megközelítésünk") }} />
              <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("cspa.ap.h2", "Hat fázis négy év alatt") }} />
            </div>
            <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("cspa.ap.lede", "Minden fázis azt a szűk keresztmetszetet oldotta fel, amit az előző feltárt.") }} />
          </div>
          <div className="cstl">
            <div className="cstl-row rv">
              <div className="cstl-media">
                <PaAuditArt alt={t("cspa.tl1.alt", "Audit-illusztráció: értékajánlat, ügyfélszerzési stratégia és szűk keresztmetszetek")} />
              </div>
              <div className="cstl-body">
                <h3 dangerouslySetInnerHTML={{ __html: t("cspa.ph1.h", "Alapozás") }} />
                <div className="sub" dangerouslySetInnerHTML={{ __html: t("cspa.ph1.sub", "Audit, stratégia és márkaújratervezés") }} />
                <p dangerouslySetInnerHTML={{ __html: t("cspa.ph1.p1", "Az első fázis a tisztánlátásról szólt. Teljes üzleti auditot végeztünk, és pénzügyi analitikai rendszert építettünk, amiből láthatóvá váltak a margók, a termékteljesítmény és a növekedés valódi mozgatói.") }} />
                <p className="cstl-label" dangerouslySetInnerHTML={{ __html: t("cspa.ph1.lbl", "A legfontosabb lépések:") }} />
                <ul className="bullets">
                  <li dangerouslySetInnerHTML={{ __html: t("cspa.ph1.l1", "Újrafogalmaztuk a márkát és az értékajánlatot") }} />
                  <li dangerouslySetInnerHTML={{ __html: t("cspa.ph1.l2", "Újraterveztük a szolgáltatásportfóliót és az ügyfélszerzési stratégiát") }} />
                  <li dangerouslySetInnerHTML={{ __html: t("cspa.ph1.l3", "Azonosítottuk a szűk keresztmetszeteket az értékesítésben, a marketingben és a működésben") }} />
                </ul>
                <p dangerouslySetInnerHTML={{ __html: t("cspa.ph1.p2", "Ez a stratégiai alapozás teremtette meg a stabilitást és az irányt a következő fázisok skálázható végrehajtásához.") }} />
              </div>
            </div>
            <div className="cstl-row flip rv">
              <div className="cstl-media">
                <PaEcomArt alt={t("cspa.tl2.alt", "Webshop-termékkártya és 45 millió forint többletbevétel az első évben")} />
              </div>
              <div className="cstl-body">
                <h3 dangerouslySetInnerHTML={{ __html: t("cspa.ph2.h", "A digitális gerinc újjáépítése") }} />
                <div className="sub" dangerouslySetInnerHTML={{ __html: t("cspa.ph2.sub", "Weboldal, webshop, integrációk") }} />
                <p dangerouslySetInnerHTML={{ __html: t("cspa.ph2.p1", "Ezután a Plantart teljes digitális átalakuláson ment át: megújult az arculat, elindult egy modern weboldal és webshop, és mély integrációk épültek a belső rendszerekhez.") }} />
                <p dangerouslySetInnerHTML={{ __html: t("cspa.ph2.p2", "<strong>Az új webshop az első évében több mint 45 millió forint bevételt termelt</strong>, és azóta is folyamatosan nő.") }} />
                <p dangerouslySetInnerHTML={{ __html: t("cspa.ph2.p3", "Ez fordulópont volt: a Plantart statikus bemutatkozó oldalról egy jól teljesítő digitális ökoszisztémára váltott, ami több szegmens akvizícióját is kiszolgálja.") }} />
                <div className="cstl-cta">
                  <Link href="/kapcsolat" className="btn">
                    <span dangerouslySetInnerHTML={{ __html: t("cspa.fc.cta1", "Foglalj hívást") }} />
                    <span className="ar">→</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cstl-row rv">
              <div className="cstl-media">
                <Image src="/ge/img/pa-tl3.webp" width={765} height={790} alt={t("cspa.tl3.alt", "A Plantart zuzmó- és mohafal landing oldala asztali és mobil nézetben")} />
              </div>
              <div className="cstl-body">
                <h3 dangerouslySetInnerHTML={{ __html: t("cspa.ph3.h", "Káoszból kiszámítható bevétel") }} />
                <div className="sub" dangerouslySetInnerHTML={{ __html: t("cspa.ph3.sub", "Tölcsérek, e-mail, konverzió") }} />
                <p dangerouslySetInnerHTML={{ __html: t("cspa.ph3.p1", "Amikor a digitális alap készen állt, strukturált rendszereket építettünk a fenntartható bevételtermeléshez.") }} />
                <p className="cstl-label" dangerouslySetInnerHTML={{ __html: t("cspa.ph3.lbl", "Amit bevezettünk:") }} />
                <ul className="bullets">
                  <li dangerouslySetInnerHTML={{ __html: t("cspa.ph3.l1", "Magas vásárlási szándékú tölcsérek több szegmensre") }} />
                  <li dangerouslySetInnerHTML={{ __html: t("cspa.ph3.l2", "Automatizált e-mail marketing és nurture-folyamatok") }} />
                  <li dangerouslySetInnerHTML={{ __html: t("cspa.ph3.l3", "Dedikált landing oldalak minden felhasználási esethez és közönséghez") }} />
                </ul>
                <p dangerouslySetInnerHTML={{ __html: t("cspa.ph3.p2", "Ez váltotta le az esetleges, kiszámíthatatlan érdeklődéseket egy mérhető akvizíciós motorra.") }} />
              </div>
            </div>
            <div className="cstl-row flip rv">
              <div className="cstl-media">
                <PaCrmArt alt={t("cspa.tl4.alt", "A belső motor illusztrációja: Salesforce CRM, értékesítési tréning és automatikus ajánlatgenerátor")} />
              </div>
              <div className="cstl-body">
                <h3 dangerouslySetInnerHTML={{ __html: t("cspa.ph4.h", "A belső motor skálázása") }} />
                <div className="sub" dangerouslySetInnerHTML={{ __html: t("cspa.ph4.sub", "CRM, automatizáció, értékesítés") }} />
                <p dangerouslySetInnerHTML={{ __html: t("cspa.ph4.p1", "Ahogy nőtt a bevétel, kiderült a következő szűk keresztmetszet: az értékesítési csapat nem bírta a terhelést.") }} />
                <p className="cstl-label" dangerouslySetInnerHTML={{ __html: t("cspa.ph4.lbl", "A következő növekedési szinthez bevezettük:") }} />
                <ul className="bullets">
                  <li dangerouslySetInnerHTML={{ __html: t("cspa.ph4.l1", "Salesforce CRM teljes pipeline-láthatósággal") }} />
                  <li dangerouslySetInnerHTML={{ __html: t("cspa.ph4.l2", "Egyedi, automatikus ajánlatgenerátor a gyorsabb, következetesebb válaszokért") }} />
                  <li dangerouslySetInnerHTML={{ __html: t("cspa.ph4.l3", "Értékesítési tréning a konverzióért és a csapat összehangolásáért") }} />
                </ul>
                <p className="cstl-label" dangerouslySetInnerHTML={{ __html: t("cspa.ph4.lbl2", "Értékesítési hatékonyság:") }} />
                <ul className="bullets">
                  <li dangerouslySetInnerHTML={{ __html: t("cspa.ph4.e1", "A konverziós költség <strong>27 000 forintról 9 000 forintra</strong> esett") }} />
                  <li dangerouslySetInnerHTML={{ __html: t("cspa.ph4.e2", "A nyerési arány <strong>32%-kal nőtt</strong>") }} />
                </ul>
                <p dangerouslySetInnerHTML={{ __html: t("cspa.ph4.p2", "Az értékesítés végre lépést tudott tartani a kereslettel, és magabiztosan kezelte az érdeklődőket.") }} />
              </div>
            </div>
            <div className="cstl-row rv">
              <div className="cstl-media">
                <Image src="/ge/img/pa-tl5.webp" width={765} height={790} alt={t("cspa.tl5.alt", "A Plantart Facebook-hirdetéskreatívjai")} />
              </div>
              <div className="cstl-body">
                <h3 dangerouslySetInnerHTML={{ __html: t("cspa.ph5.h", "Növekedés hajtása") }} />
                <div className="sub" dangerouslySetInnerHTML={{ __html: t("cspa.ph5.sub", "Paid, SEO és organikus tartalom") }} />
                <p dangerouslySetInnerHTML={{ __html: t("cspa.ph5.p1", "A belső rendszerek stabilizálása után több csatornán skáláztuk az akvizíciót.") }} />
                <p className="cstl-label" dangerouslySetInnerHTML={{ __html: t("cspa.ph5.lbl", "Kulcskezdeményezések:") }} />
                <ul className="bullets">
                  <li dangerouslySetInnerHTML={{ __html: t("cspa.ph5.l1", "PPC-kampányok") }} />
                  <li dangerouslySetInnerHTML={{ __html: t("cspa.ph5.l2", "Erős SEO-alapok és linképítés") }} />
                  <li dangerouslySetInnerHTML={{ __html: t("cspa.ph5.l3", "Következetes organikus tartalomfejlesztés") }} />
                </ul>
                <p className="cstl-label" dangerouslySetInnerHTML={{ __html: t("cspa.ph5.lbl2", "Organikus növekedés:") }} />
                <p dangerouslySetInnerHTML={{ __html: t("cspa.ph5.p2", "<strong>Az organikus forgalom évről évre közel megduplázódott</strong>, minőségi tartalomra és hosszú távú tekintélyépítésre alapozva.") }} />
                <div className="cstl-cta">
                  <Link href="/kapcsolat" className="btn">
                    <span dangerouslySetInnerHTML={{ __html: t("cspa.fc.cta1", "Foglalj hívást") }} />
                    <span className="ar">→</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cstl-row flip rv">
              <div className="cstl-media">
                <Image src="/ge/img/pa-tl6.webp" width={576} height={576} alt={t("cspa.tl6.alt", "A Plantart AI Plant Shopper növényválasztó asszisztense mobilon")} />
              </div>
              <div className="cstl-body">
                <h3 dangerouslySetInnerHTML={{ __html: t("cspa.ph6.h", "Felkészülés a jövőre") }} />
                <div className="sub" dangerouslySetInnerHTML={{ __html: t("cspa.ph6.sub", "AI Plant Shopper, indulás 2026") }} />
                <p dangerouslySetInnerHTML={{ __html: t("cspa.ph6.p1", "A Plantart most AI-alapú növényválasztó asszisztenssel bővíti a digitális ökoszisztémáját, hogy egyszerűbbé tegye a termékválasztást. Az eszköz a több mint <strong>20 000 termékből álló katalógust</strong> használja, és fényviszonyok, gondozási igény, kaspóstílus, költségkeret és helyiségtípus alapján ad személyre szabott ajánlást.") }} />
                <p dangerouslySetInnerHTML={{ __html: t("cspa.ph6.p2", "Az MVP közvetlenül integrálódik a webshoppal, és 2026-ban indul, ezzel a Plantart az AI-vezérelt kiskereskedelmi innováció élére áll.") }} />
                <div className="cstl-cta">
                  <Link href="/email-automatizacio" className="tlink">
                    <span dangerouslySetInnerHTML={{ __html: t("cspa.ai.link", "Így építünk automatizált rendszereket") }} />
                    <span className="ar">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="band">
        <div className="wrap">
          <div className="shead solo" style={{ textAlign: "center", marginInline: "auto" }}>
            <div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("cspa.res.eyebrow", "Eredmények") }} />
              <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("cspa.res.h2", "Négy év, kamatozó eredmények") }} />
            </div>
            <p className="lede rv" style={{ marginInline: "auto" }} dangerouslySetInnerHTML={{ __html: t("cspa.res.lede", "A Plantart átalakulása négy év alatt jelentős, egymásra épülő eredményeket hozott.") }} />
          </div>
          <div className="cs-results rv">
            <div>
              <div className="dnum">3×</div>
              <div className="lbl" dangerouslySetInnerHTML={{ __html: t("cspa.metric1", "bevételnövekedés 4 év alatt") }} />
            </div>
            <div>
              <div className="dnum">+90%</div>
              <div className="lbl" dangerouslySetInnerHTML={{ __html: t("cspa.metric2", "több minősített érdeklődő") }} />
            </div>
            <div>
              <div className="dnum">+234%</div>
              <div className="lbl" dangerouslySetInnerHTML={{ __html: t("cspa.metric3", "növekedés a konverziós arányban") }} />
            </div>
          </div>
          <p className="rv" style={{ textAlign: "center", marginTop: "2.4rem" }}>
            <Link href="/kapcsolat" className="btn">
              <span dangerouslySetInnerHTML={{ __html: t("cspa.fc.cta1", "Foglalj hívást") }} />
              <span className="ar">→</span>
            </Link>
          </p>
        </div>
      </section>
      <section>
        <div className="wrap">
          <div className="split">
            <div className="split-media rv" style={{ maxWidth: "480px", marginInline: "auto" }}>
              <Image src="/ge/img/pa-concl.webp" width={699} height={930} alt={t("cspa.cl.imgalt", "Növekedési illusztráció: rakéta, fogaskerekek és emelkedő oszlopok")} style={{ border: 0 }} />
            </div>
            <div className="rv">
              <div className="eyebrow" dangerouslySetInnerHTML={{ __html: t("cspa.cl.eyebrow", "Összegzés") }} />
              <h2 dangerouslySetInnerHTML={{ __html: t("cspa.cl.h2", "Kamatozó növekedés, nem kampányok") }} />
              <div className="prose" style={{ marginTop: "1.4rem" }}>
                <p dangerouslySetInnerHTML={{ __html: t("cspa.cl.p1", "A Plantart története megmutatja, mi válik lehetővé, ha egy cég stratégiába, rendszerekbe és végrehajtásba fektet. A márka megújításával, a digitális infrastruktúra újjáépítésével, a CRM és az automatizáció bevezetésével és az akvizíció skálázásával a Plantart a stagnálásból többéves, kamatozó növekedésbe váltott.") }} />
                <p dangerouslySetInnerHTML={{ __html: t("cspa.cl.p2", "Ma kiszámítható bevétellel és hosszú távú növekedési motorral működik, ami minden szegmensben a véletlenszerű érdeklődések helyére lépett.") }} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="on-navy" id="kapcsolat">
        <div className="wrap">
          <div className="cta">
            <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("fc.eyebrow", "Beszéljünk") }} />
            <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("cspa.fc.h2", "Mi tartja vissza a növekedésed?") }} />
            <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("cspa.fc.lede", "Beszéljünk arról, hol tartasz, hova akarsz eljutni, és mi áll az útban. Egyetlen hívással kezdődik.") }} />
            <div className="btns rv">
              <Link href="/kapcsolat" className="btn">
                <span dangerouslySetInnerHTML={{ __html: t("cspa.fc.cta1", "Foglalj hívást") }} />
                <span className="ar">→</span>
              </Link>
              <Link href="/kapcsolat" className="btn btn-line" dangerouslySetInnerHTML={{ __html: t("cspa.fc.cta2", "Inkább e-mailben kezdenél?") }} />
            </div>
            <p className="rv" style={{ fontSize: ".88rem", color: "#8FA0B8" }} dangerouslySetInnerHTML={{ __html: t("cspa.fc.fine", "Harminc perc, prezentáció nélkül. Ha nem látunk közös munkát, a hívás végén ezt mondjuk.") }} />
          </div>
        </div>
      </section>
    </GeShell>
  );
};

export default EsettanulmanyPlantart;
