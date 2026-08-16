import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { GeShell } from "../features/ge/components/GeShell";
import { GeSEO } from "../features/ge/components/GeSEO";
import { useGeT } from "../features/ge/i18n/useGeT";

// Ported from growth-engineers-v4/esettanulmany-plantart.html; DOM structure intentionally
// mirrors the static original (see features/ge/README.md).
const EsettanulmanyPlantart: NextPage = () => {
  const t = useGeT();
  return (
    <GeShell page="esettanulmany-plantart">
      <GeSEO
        title={t("mt.cspa", "Plantart esettanulmány: 500 millió forintból 2 milliárd négy év alatt, Growth Engineering")}
        description={t("md.cspa", "Teljes digitális átalakítás: márka, webshop, CRM, automatizáció és akvizíció. 3× bevétel, +100 millió Ft webshop-bevétel az első évben, −67% konverziós költség.")}
        ogTitle={t("mt.cspa", "Plantart esettanulmány: 500 millió forintból 2 milliárd négy év alatt, Growth Engineering")}
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
          <h1 className="rv" dangerouslySetInnerHTML={{ __html: t("cspa.hero.h1", "A Plantartból piacvezető és digitális bajnok lett") }} />
          <div className="pills rv">
            <span className="pill" dangerouslySetInnerHTML={{ __html: t("cspa.pill1", "Márkaújratervezés") }} />
            <span className="pill" dangerouslySetInnerHTML={{ __html: t("cspa.pill2", "Tölcsérmarketing") }} />
            <span className="pill" dangerouslySetInnerHTML={{ __html: t("cspa.pill3", "Hagyományos és AIO") }} />
            <span className="pill" dangerouslySetInnerHTML={{ __html: t("cspa.pill4", "CRM bevezetés") }} />
            <span className="pill" dangerouslySetInnerHTML={{ __html: t("cspa.pill5", "E-mail automatizáció") }} />
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
              <dt dangerouslySetInnerHTML={{ __html: t("cspa.meta.svc.k", "Szolgáltatások") }} />
              <dd dangerouslySetInnerHTML={{ __html: t("cspa.meta.svc.v", "Márka, webshop, CRM, automatizáció, akvizíció") }} />
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
            <div className="dnum">+100 millió Ft</div>
            <div className="lbl" dangerouslySetInnerHTML={{ __html: t("cspa.metric2", "webshop-bevétel az első évben") }} />
          </div>
          <div>
            <div className="dnum">−67%</div>
            <div className="lbl" dangerouslySetInnerHTML={{ __html: t("cspa.metric3", "alacsonyabb konverziós költség (27&nbsp;000&nbsp;Ft-ról 9&nbsp;000&nbsp;Ft-ra)") }} />
          </div>
        </div>
      </div>
      <section>
        <div className="wrap">
          <div className="split">
            <div className="rv">
              <div className="eyebrow" dangerouslySetInnerHTML={{ __html: t("cspa.ov.eyebrow", "Áttekintés") }} />
              <h2 dangerouslySetInnerHTML={{ __html: t("cspa.ov.h2", "Négyéves platóból 2 milliárd forint") }} />
            </div>
            <div className="prose rv">
              <p dangerouslySetInnerHTML={{ __html: t("cspa.ov.p1", "A Plantart egy európai kkv a kertészeti piacon, amely egy teljes digitális átalakítással tört ki a négy éve tartó bevételi platóból. <strong>Az árbevétel 2020 és 2024 között 500 millió forintról több mint 2 milliárd forintra nőtt</strong>: a márka újradefiniálásával, a digitális ökoszisztéma újjáépítésével, CRM és automatizáció bevezetésével, az akvizíciós csatornák megerősítésével és az AI-alapú bővítés előkészítésével.") }} />
              <p dangerouslySetInnerHTML={{ __html: t("cspa.ov.p2", "Ez az esettanulmány azt mutatja be, hogyan jutott el a Plantart a stagnálástól egy skálázható, adatvezérelt motorig, amely B2B és B2C szegmensben is kiszámítható bevételt termel.") }} />
            </div>
          </div>
        </div>
      </section>
      <section className="band">
        <div className="wrap">
          <div className="split flip">
            <div className="split-media rv">
              <Image src="/ge/img/pa-site.webp" style={{ maxHeight: "640px", objectFit: "cover", objectPosition: "top" }} width={700} height={2118} alt={t("alt3", "Az újratervezett Plantart weboldal és webshop")} aria-label={t("cspa.ch.imgalt", "")} />
            </div>
            <div className="rv">
              <div className="eyebrow" dangerouslySetInnerHTML={{ __html: t("cspa.ch.eyebrow", "A kihívás") }} />
              <h2 dangerouslySetInnerHTML={{ __html: t("cspa.ch.h2", "Mi fogta vissza a növekedést?") }} />
              <div className="prose" style={{ marginTop: "1.4rem" }}>
                <p dangerouslySetInnerHTML={{ __html: t("cspa.ch.p1", "A Plantart éveken át kis kkv-ként működött: erős szakmai tudással, hűséges ügyfelekkel és növényekért lelkesedő csapattal. A potenciál ellenére a bevétel <strong>négy egymást követő évben 500 millió forint körül állt</strong>.") }} />
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
          <div className="tl">
            <div className="tlrow rv">
              <div className="dot">01</div>
              <h3 dangerouslySetInnerHTML={{ __html: t("cspa.ph1.h", "Alapozás") }} />
              <div className="sub" dangerouslySetInnerHTML={{ __html: t("cspa.ph1.sub", "Audit, stratégia és márkaújratervezés") }} />
              <p dangerouslySetInnerHTML={{ __html: t("cspa.ph1.p1", "Az első fázis a tisztánlátásról szólt. Teljes üzleti auditot végeztünk, és pénzügyi analitikai rendszert építettünk, amiből láthatóvá váltak a margók, a termékteljesítmény és a növekedés valódi mozgatói.") }} />
              <p dangerouslySetInnerHTML={{ __html: t("cspa.ph1.p2", "Újrafogalmaztuk a márkát és az értékajánlatot, újraterveztük a szolgáltatásportfóliót és az ügyfélszerzési stratégiát, és azonosítottuk a szűk keresztmetszeteket az értékesítésben, a marketingben és a működésben.") }} />
            </div>
            <div className="tlrow rv">
              <div className="dot">02</div>
              <h3 dangerouslySetInnerHTML={{ __html: t("cspa.ph2.h", "A digitális gerinc újjáépítése") }} />
              <div className="sub" dangerouslySetInnerHTML={{ __html: t("cspa.ph2.sub", "Weboldal, webshop, integrációk") }} />
              <p dangerouslySetInnerHTML={{ __html: t("cspa.ph2.p1", "Megújult az arculat, elindult egy modern weboldal és webshop, és mély integrációkat építettünk a belső rendszerekhez. <strong>Az új webshop az első évében több mint 100 millió forint bevételt termelt</strong>, és azóta is folyamatosan nő.") }} />
              <p dangerouslySetInnerHTML={{ __html: t("cspa.ph2.p2", "Ez fordulópont volt: a Plantart statikus bemutatkozó oldalról egy jól teljesítő digitális ökoszisztémára váltott, ami több szegmens akvizícióját is kiszolgálja.") }} />
            </div>
            <div className="tlrow rv">
              <div className="dot">03</div>
              <h3 dangerouslySetInnerHTML={{ __html: t("cspa.ph3.h", "Káoszból kiszámítható bevétel") }} />
              <div className="sub" dangerouslySetInnerHTML={{ __html: t("cspa.ph3.sub", "Tölcsérek, e-mail, konverzió") }} />
              <p dangerouslySetInnerHTML={{ __html: t("cspa.ph3.p1", "Amikor a digitális alap készen állt, strukturált rendszereket építettünk a fenntartható bevételtermeléshez: magas szándékú érdeklődő-tölcséreket több szegmensre, automatizált e-mail marketinget és nurture-folyamatokat, valamint dedikált landing oldalakat minden felhasználási esethez és közönséghez.") }} />
              <p dangerouslySetInnerHTML={{ __html: t("cspa.ph3.p2", "Ez váltotta le az esetleges, kiszámíthatatlan érdeklődéseket egy mérhető akvizíciós motorra.") }} />
            </div>
            <div className="tlrow rv">
              <div className="dot">04</div>
              <h3 dangerouslySetInnerHTML={{ __html: t("cspa.ph4.h", "A belső motor skálázása") }} />
              <div className="sub" dangerouslySetInnerHTML={{ __html: t("cspa.ph4.sub", "CRM, automatizáció, értékesítés") }} />
              <p dangerouslySetInnerHTML={{ __html: t("cspa.ph4.p1", "Ahogy nőtt a bevétel, kiderült a következő szűk keresztmetszet: az értékesítési csapat nem bírta a terhelést. Bevezettük a Salesforce CRM-et teljes pipeline-láthatósággal, egyedi, automatikus ajánlatgenerátort a gyorsabb és következetesebb válaszokért, és értékesítési tréninget a konverzió és a csapat összehangolása érdekében.") }} />
              <p dangerouslySetInnerHTML={{ __html: t("cspa.ph4.p2", "<strong>A konverziós költség 27 000 forintról 9 000 forintra esett, a nyerési arány pedig 32%-kal nőtt.</strong> Az értékesítés végre lépést tudott tartani a kereslettel.") }} />
            </div>
            <div className="tlrow rv">
              <div className="dot">05</div>
              <h3 dangerouslySetInnerHTML={{ __html: t("cspa.ph5.h", "Növekedés hajtása") }} />
              <div className="sub" dangerouslySetInnerHTML={{ __html: t("cspa.ph5.sub", "Paid, SEO és organikus tartalom") }} />
              <p dangerouslySetInnerHTML={{ __html: t("cspa.ph5.p1", "A belső rendszerek stabilizálása után több csatornán skáláztuk az akvizíciót: teljesítménykampányok, erős SEO-alapok és linképítés, valamint következetes organikus tartalomfejlesztés.") }} />
              <p dangerouslySetInnerHTML={{ __html: t("cspa.ph5.p2", "<strong>Az organikus forgalom évről évre közel megduplázódott</strong>, minőségi tartalomra és hosszú távú tekintélyépítésre alapozva.") }} />
            </div>
            <div className="tlrow rv">
              <div className="dot">06</div>
              <h3 dangerouslySetInnerHTML={{ __html: t("cspa.ph6.h", "Felkészülés a jövőre") }} />
              <div className="sub" dangerouslySetInnerHTML={{ __html: t("cspa.ph6.sub", "AI Plant Shopper, indulás 2026") }} />
              <p dangerouslySetInnerHTML={{ __html: t("cspa.ph6.p1", "A Plantart most AI-alapú növényválasztó asszisztenssel bővíti a digitális ökoszisztémáját, hogy egyszerűbbé tegye a termékválasztást. Az eszköz a több mint <strong>20 000 termékből álló katalógust</strong> használja, és fényviszonyok, gondozási igény, kaspóstílus, költségkeret és helyiségtípus alapján ad személyre szabott ajánlást.") }} />
              <p dangerouslySetInnerHTML={{ __html: t("cspa.ph6.p2", "Az MVP közvetlenül integrálódik a webshoppal, és 2026-ban indul, ezzel a Plantart az AI-vezérelt kiskereskedelmi innováció élére áll.") }} />
            </div>
          </div>
        </div>
      </section>
      <section className="band">
        <div className="wrap">
          <div className="split">
            <div className="split-media rv">
              <Image src="/ge/img/m-plantart.webp" width={728} height={484} alt={t("alt4", "A Plantart AI Plant Shopper növényválasztó asszisztense")} aria-label={t("cspa.ai.imgalt", "")} />
            </div>
            <div className="rv">
              <div className="eyebrow" dangerouslySetInnerHTML={{ __html: t("cspa.ai.eyebrow", "Indulás 2026") }} />
              <h2 dangerouslySetInnerHTML={{ __html: t("cspa.ai.h2", "AI Plant Shopper") }} />
              <p className="lede" style={{ marginTop: "1.2rem" }} dangerouslySetInnerHTML={{ __html: t("cspa.ai.lede", "Személyre szabott ajánlás a több mint 20 000 termékes katalógusból, fényviszonyok, gondozási igény, kaspóstílus, költségkeret és helyiségtípus alapján, közvetlenül a webshopba integrálva.") }} />
              <div style={{ marginTop: "1.6rem" }}>
                <Link href="/email-automatizacio" className="tlink">
                  <span dangerouslySetInnerHTML={{ __html: t("cspa.ai.link", "Így építünk automatizált rendszereket") }} />
                  <span className="ar">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="wrap">
          <div className="split">
            <div className="rv">
              <div className="eyebrow" dangerouslySetInnerHTML={{ __html: t("cspa.cl.eyebrow", "Összegzés") }} />
              <h2 dangerouslySetInnerHTML={{ __html: t("cspa.cl.h2", "Kamatozó növekedés, nem kampányok") }} />
            </div>
            <div className="prose rv">
              <p dangerouslySetInnerHTML={{ __html: t("cspa.cl.p1", "A Plantart története megmutatja, mi válik lehetővé, ha egy cég stratégiába, rendszerekbe és végrehajtásba fektet. A márka megújításával, a digitális infrastruktúra újjáépítésével, a CRM és az automatizáció bevezetésével és az akvizíció skálázásával a Plantart a stagnálásból többéves, kamatozó növekedésbe váltott.") }} />
              <p dangerouslySetInnerHTML={{ __html: t("cspa.cl.p2", "Ma kiszámítható bevétellel és hosszú távú növekedési motorral működik, ami minden szegmensben a véletlenszerű érdeklődések helyére lépett.") }} />
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
