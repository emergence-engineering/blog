import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { GeShell } from "../features/ge/components/GeShell";
import { GeSEO } from "../features/ge/components/GeSEO";
import { GeFaqJsonLd } from "../features/ge/components/GeFaqJsonLd";
import { useGeT } from "../features/ge/i18n/useGeT";

// Ported from growth-engineers-v4/ecommerce-skalazas.html, then restructured for
// an operator audience (diagnosis → unit economics → process → interventions);
// the section markup still reuses the original's components (see features/ge/README.md).
const EcommerceSkalazas: NextPage = () => {
  const t = useGeT();
  return (
    <GeShell page="ecommerce-skalazas" bodyClass="ecom">
      <GeFaqJsonLd prefix="ec.faq." count={5} />
      <GeSEO
        title={t("mt.ecom", "CRO és E-commerce: hol veszít pénzt a webshopod | Growth Engineering")}
        description={t("md.ecom", "CRO mérnöki módszerrel: mérés, kutatás, hipotézis, teszt. Valós eredmények magyar webshopokból: −48% rendelés-félbehagyás, 25–35% bevétel e-mailből.")}
        ogTitle={t("mt.ecom", "CRO és E-commerce: hol veszít pénzt a webshopod | Growth Engineering")}
        ogDescription={t("od.ecom", "Nem véleményt adunk, hanem mért eredményt. CRO-folyamat webshopoknak, számokkal.")}
      />
      <section className="ec-hero">
        <div className="col">
          <div className="ec-crumbs"><Link href="/" dangerouslySetInnerHTML={{ __html: t("crumb.home", "Főoldal") }} /> / <span dangerouslySetInnerHTML={{ __html: t("ec.crumb", "CRO és E-commerce") }} /></div>
          <div className="ec-kick" dangerouslySetInnerHTML={{ __html: t("ec.kick", "CRO és E-commerce") }} />
          <h1 className="ec-h1" dangerouslySetInnerHTML={{ __html: t("ec.h1", "Hol veszít pénzt a webshopod?") }} />
          <p className="ec-sub" dangerouslySetInnerHTML={{ __html: t("ec.sub", "Nem tervezzük újra az oldalad megérzésből. Megmérjük, hol esnek ki a vásárlók, kutatással megértjük, miért, és tesztekkel bizonyítjuk, hogy a javítás tényleg többet hoz. <em>Mérnöki CRO, webshopokra.</em>") }} />
          <div className="ec-cta">
            <Link href="/kapcsolat" className="btn">
              <span dangerouslySetInnerHTML={{ __html: t("ec.cta1", "Kérj CRO-auditot") }} />
              <span className="ar">→</span>
            </Link>
            <a href="#folyamat" className="btn btn-line" dangerouslySetInnerHTML={{ __html: t("ec.cta2", "Nézd meg a folyamatot") }} />
          </div>
          <div className="ec-proof">
            <span dangerouslySetInnerHTML={{ __html: t("ec.proof1", "<b>−48%</b> rendelés-félbehagyás egy űrlap-átszervezésből") }} />
            <span dangerouslySetInnerHTML={{ __html: t("ec.proof2", "<b>+45 M Ft</b> webshop-bevétel az első évben (Plantart)") }} />
            <span dangerouslySetInnerHTML={{ __html: t("ec.proof3", "<b>25–35%</b> bevétel e-mailből egy felépített fiókban") }} />
          </div>
          <p className="ec-brand" dangerouslySetInnerHTML={{ __html: t("ec.brand", "A Growth Engineering az <b>Emergence Engineering</b> üzletfejlesztési csapata. Ugyanaz a mérnöki gondolkodás, a bevételre alkalmazva.") }} />
        </div>
      </section>
      <section className="sec" id="tunetek">
        <div className="col">
          <div className="secn">
            <span className="l" dangerouslySetInnerHTML={{ __html: t("ec.dg.kick", "A diagnózis") }} />
          </div>
          <h2 className="sech" dangerouslySetInnerHTML={{ __html: t("ec.dg.h", "Ismerős számok?") }} />
          <p className="sec-intro" dangerouslySetInnerHTML={{ __html: t("ec.dg.p", "Ha webshopot viszel, ezeket a mintákat nem kell bemutatnunk. Mind ugyanannak a rendszernek a tünete, és mindegyik mérhető, javítható és tesztelhető.") }} />
          <ol className="factors rv">
            <li>
              <a href="#folyamat">
                <span className="fn">01</span>
                <div>
                  <h3 dangerouslySetInnerHTML={{ __html: t("ec.dg1.h", "A mobil konverzió a desktop fele") }} />
                  <p dangerouslySetInnerHTML={{ __html: t("ec.dg1.p", "Miközben a forgalmad 60–70%-a mobilról jön. A különbség jellemzően sebesség- és checkout-probléma, nem „ilyen a mobil”.") }} />
                </div>
                <span className="go">→</span>
              </a>
            </li>
            <li>
              <a href="#folyamat">
                <span className="fn">02</span>
                <div>
                  <h3 dangerouslySetInnerHTML={{ __html: t("ec.dg2.h", "A termékoldal nem ad kosarat") }} />
                  <p dangerouslySetInnerHTML={{ __html: t("ec.dg2.p", "A látogatók 90%-a úgy megy el, hogy kosárba se tett semmit. Kép, ár-kommunikáció, készlet, bizalmi elemek: mérhető, melyik hiányzik.") }} />
                </div>
                <span className="go">→</span>
              </a>
            </li>
            <li>
              <a href="#folyamat">
                <span className="fn">03</span>
                <div>
                  <h3 dangerouslySetInnerHTML={{ __html: t("ec.dg3.h", "A checkoutban esik ki a vásárlók fele") }} />
                  <p dangerouslySetInnerHTML={{ __html: t("ec.dg3.p", "Kötelező regisztráció, sok mező, kevés fizetési mód. A legdrágább veszteség, mert ezekért a látogatókért már mindent kifizettél.") }} />
                </div>
                <span className="go">→</span>
              </a>
            </li>
            <li>
              <a href="#email">
                <span className="fn">04</span>
                <div>
                  <h3 dangerouslySetInnerHTML={{ __html: t("ec.dg4.h", "Az e-mail a bevétel 5–8%-a") }} />
                  <p dangerouslySetInnerHTML={{ __html: t("ec.dg4.p", "Egy felépített fiókban 25–35%. A különbség nem a küldési gyakoriság, hanem a flow-k és a szegmentálás.") }} />
                </div>
                <span className="go">→</span>
              </a>
            </li>
            <li>
              <a href="#fedezet">
                <span className="fn">05</span>
                <div>
                  <h3 dangerouslySetInnerHTML={{ __html: t("ec.dg5.h", "Nő a forgalom, a profit nem") }} />
                  <p dangerouslySetInnerHTML={{ __html: t("ec.dg5.p", "Emelkedő CAC, romló ROAS. Ilyenkor nem több hirdetés kell, hanem a szorzat másik két tagja.") }} />
                </div>
                <span className="go">→</span>
              </a>
            </li>
          </ol>
          <p className="bridge" dangerouslySetInnerHTML={{ __html: t("ec.dg.bridge", "Mielőtt bármihez nyúlnánk, tisztázzuk a matekot, ami eldönti, <b>melyik tünet mennyibe kerül</b> neked.") }} />
        </div>
      </section>
      <section className="sec" id="fedezet">
        <div className="col">
          <div className="secn">
            <span className="l" dangerouslySetInnerHTML={{ __html: t("ec.ue.kick", "A gazdaságosság") }} />
          </div>
          <h2 className="sech" dangerouslySetInnerHTML={{ __html: t("ec.ue.h", "CAC, fedezet, LTV: megéri-e egy vásárló?") }} />
          <p className="sec-intro" dangerouslySetInnerHTML={{ __html: t("ec.ue.p", "Három szám dönti el, mennyit engedhetsz meg magadnak a növekedésre: mennyibe kerül egy vásárló megszerzése (CAC), mennyi fedezet marad egy rendelésen az áru- és szállítási költség után, és mennyit hoz egy vásárló a teljes élettartama alatt (LTV). Egy tipikus, évi ~100 milliós shop számaival: 1,8% konverzió, 22 000 Ft-os átlagkosár.") }} />
          <div className="baseline">
            <div>
              <span dangerouslySetInnerHTML={{ __html: t("ec.ue.b1", "Egy látogató ára") }} />
              <b>150 Ft</b>
            </div>
            <div>
              <span dangerouslySetInnerHTML={{ __html: t("ec.ue.b2", "CAC 1,8% konverzión") }} />
              <b>~8 300 Ft</b>
            </div>
            <div>
              <span dangerouslySetInnerHTML={{ __html: t("ec.ue.b3", "Fedezet a kosáron (40%)") }} />
              <b>8 800 Ft</b>
            </div>
            <div>
              <span dangerouslySetInnerHTML={{ __html: t("ec.ue.b4", "Első rendelés eredménye") }} />
              <b>~0 Ft</b>
            </div>
          </div>
          <p className="p" dangerouslySetInnerHTML={{ __html: t("ec.ue.p2", "Ez a legtöbb webshop csendes valósága: az első rendelés fedezete éppen elviszi a vásárló megszerzésének költségét. A hirdetés önmagában nullszaldós, a nyereség a második rendelésnél kezdődik. Ezért nem a bevételt kell bámulni, hanem két arányt mozdítani: a konverzió osztja a CAC-ot, az ismételt vásárlás pedig szorozza az élettartam-fedezetet.") }} />
          <div className="chain rv">
            <div className="fac">
              <div className="fk" dangerouslySetInnerHTML={{ __html: t("ec.ue.f1.k", "Élettartam-fedezet (LTGP)") }} />
              <div className="fv" dangerouslySetInnerHTML={{ __html: t("ec.ue.f1.v", "<s>8 800</s> → 20 200 Ft") }} />
              <div className="fx" dangerouslySetInnerHTML={{ __html: t("ec.ue.f1.x", "×2,3 rendelés") }} />
              <div className="fn" dangerouslySetInnerHTML={{ __html: t("ec.ue.f1.note", "E-mail flow-k és gondozás: egy vásárló átlagosan 2,3-szor rendel.") }} />
            </div>
            <div className="op">−</div>
            <div className="fac">
              <div className="fk" dangerouslySetInnerHTML={{ __html: t("ec.ue.f2.k", "CAC") }} />
              <div className="fv" dangerouslySetInnerHTML={{ __html: t("ec.ue.f2.v", "<s>8 300</s> → 5 000 Ft") }} />
              <div className="fx" dangerouslySetInnerHTML={{ __html: t("ec.ue.f2.x", "÷1,67") }} />
              <div className="fn" dangerouslySetInnerHTML={{ __html: t("ec.ue.f2.note", "3,0% konverzión ugyanaz a hirdetési pénz több vásárlót hoz.") }} />
            </div>
            <div className="op eq">=</div>
            <div className="res">
              <div className="rn" dangerouslySetInnerHTML={{ __html: t("ec.ue.res.num", "+15 200 Ft") }} />
              <div className="rl" dangerouslySetInnerHTML={{ __html: t("ec.ue.res.lbl", "eredmény vásárlónként · LTGP:CAC ≈ 4:1") }} />
            </div>
          </div>
          <p className="p" dangerouslySetInnerHTML={{ __html: t("ec.ue.p3", "Ez az az arány, amit Alex Hormozi LTGP:CAC-ként emleget: az élettartam-fedezet osztva az ügyfélszerzési költséggel. E-commerce-ben 4:1 fölött van miből skálázni, 3:1 alatt a növekedés a fedezetet eszi. És van egy ráadás: ha már az első rendelés fedezete kitermeli a CAC-ot, a vásárló megfinanszírozza a saját megszerzését. A büdzsé visszaforog, és a skálázást nem a tőke korlátozza, hanem a rendszer.") }} />
          <p className="anno" dangerouslySetInnerHTML={{ __html: t("ec.ue.anno", "Ökölszabály: legalább 4:1 arány és fél éven belül megtérülő CAC kell a nyugodt skálázáshoz. Ha az arány 3 alatt van, nem több hirdetés kell, hanem magasabb LTV.") }} />
        </div>
      </section>
      <section className="sec band" id="folyamat">
        <div className="col">
          <div className="secn">
            <span className="l" dangerouslySetInnerHTML={{ __html: t("ec.pr.kick", "A folyamat") }} />
          </div>
          <h2 className="sech" dangerouslySetInnerHTML={{ __html: t("ec.pr.h", "Kutatás, hipotézis, teszt, kéthetes ciklusokban") }} />
          <p className="sec-intro" dangerouslySetInnerHTML={{ __html: t("ec.pr.p", "A CRO nálunk nem tippek listája, hanem mérnöki ciklus. Először a mérést tesszük rendbe (GA4, szerveroldali események, tiszta konverziós pontok), mert enélkül minden döntés vakrepülés. Utána a ciklus viszi magát:") }} />
          <div className="loop rv">
            <div className="lrow">
              <div className="lnode">
                <b dangerouslySetInnerHTML={{ __html: t("ec.pr.b1", "01 Mérés és audit") }} />
                <span dangerouslySetInnerHTML={{ __html: t("ec.pr.n1", "Tölcsér-elemzés lépcsőnként, sebesség, adatminőség. Számszerűsítjük, hol mennyi bevétel esik ki.") }} />
              </div>
              <div className="larr">→</div>
              <div className="lnode">
                <b dangerouslySetInnerHTML={{ __html: t("ec.pr.b2", "02 Kutatás") }} />
                <span dangerouslySetInnerHTML={{ __html: t("ec.pr.n2", "Session recordingok, heatmapek, user tesztek, vásárlói interjúk: miért esnek ki, nem csak hol.") }} />
              </div>
              <div className="larr">→</div>
              <div className="lnode">
                <b dangerouslySetInnerHTML={{ __html: t("ec.pr.b3", "03 Hipotézis") }} />
                <span dangerouslySetInnerHTML={{ __html: t("ec.pr.n3", "Priorizált backlog: várható hatás, bizonyosság és munkaigény szerint pontozva. Először az jön, ami a legtöbbet hozza, nem ami látványos.") }} />
              </div>
              <div className="larr">→</div>
              <div className="lnode">
                <b dangerouslySetInnerHTML={{ __html: t("ec.pr.b4", "04 Teszt") }} />
                <span dangerouslySetInnerHTML={{ __html: t("ec.pr.n4", "Ahol van elég forgalom, A/B teszt. Ahol nincs, kontrollált before/after mérés. Az eredmény dokumentálva.") }} />
              </div>
            </div>
            <div className="lreturn" dangerouslySetInnerHTML={{ __html: t("ec.pr.ret", "↑ minden ciklus az előzőek tanulságaira épül, ezért gyorsul időben") }} />
          </div>
          <p className="anno" dangerouslySetInnerHTML={{ __html: t("ec.pr.anno", "Konkrét példa: egy ügyfelünknél a rendelési űrlap 11 mezőből állt. A kapcsolati adatokat az első lépésbe hoztuk előre, a többit későbbre halasztottuk, és 48%-kal csökkent a félbehagyás.") }} />
          <p className="pull" dangerouslySetInnerHTML={{ __html: t("ec.pr.quote", "Nem véleményt adunk. <span class=\"hl\">Mért eredményt.</span>") }} />
        </div>
      </section>
      <section className="sec">
        <div className="col">
          <div className="secn">
            <span className="l" dangerouslySetInnerHTML={{ __html: t("ec.tm.kick", "A beavatkozások") }} />
          </div>
          <h2 className="sech" dangerouslySetInnerHTML={{ __html: t("ec.tm.h", "Mihez nyúlunk, és melyik számot mozdítja") }} />
          <p className="sec-intro" dangerouslySetInnerHTML={{ __html: t("ec.tm.p", "Egy csapat viszi a teljes tölcsért egy közös mérési rendszerben, így egy helyen tanult lecke a többi csatornán is megjelenik.") }} />
          <table className="tmap">
            <thead>
              <tr>
                <th dangerouslySetInnerHTML={{ __html: t("ec.tm.c1", "Terület") }} />
                <th dangerouslySetInnerHTML={{ __html: t("ec.tm.c2", "Melyik számot") }} />
                <th dangerouslySetInnerHTML={{ __html: t("ec.tm.c3", "Hogyan") }} />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td dangerouslySetInnerHTML={{ __html: t("ec.r1.a", "Checkout és űrlapok") }} />
                <td className="met" dangerouslySetInnerHTML={{ __html: t("ec.r1.b", "Konverzió") }} />
                <td dangerouslySetInnerHTML={{ __html: t("ec.r1.c", "Mezőszám-csökkentés, vendégvásárlás, fizetési és szállítási opciók. A legtöbb shopnál itt van a leggyorsabb nyereség.") }} />
              </tr>
              <tr>
                <td>
                  <Link href="/webfejlesztes" dangerouslySetInnerHTML={{ __html: t("ec.r2.a", "Sebesség és UX") }} />
                </td>
                <td className="met" dangerouslySetInnerHTML={{ __html: t("ec.r2.b", "Konverzió") }} />
                <td dangerouslySetInnerHTML={{ __html: t("ec.r2.c", "Core Web Vitals, mobil vásárlási út, termékoldal-struktúra. Saját fejlesztőkkel, nem javaslatlistával.") }} />
              </tr>
              <tr>
                <td>
                  <Link href="/ppc-hirdeteskezeles" dangerouslySetInnerHTML={{ __html: t("ec.r3.a", "PPC és feed") }} />
                </td>
                <td className="met" dangerouslySetInnerHTML={{ __html: t("ec.r3.b", "CAC") }} />
                <td dangerouslySetInnerHTML={{ __html: t("ec.r3.c", "Kampánystruktúra és feed-optimalizálás, hogy ugyanaz a büdzsé olcsóbb kattintást és jobb minőségű forgalmat hozzon.") }} />
              </tr>
              <tr>
                <td>
                  <a href="#email" dangerouslySetInnerHTML={{ __html: t("ec.r4.a", "E-mail flow-k") }} />
                </td>
                <td className="met" dangerouslySetInnerHTML={{ __html: t("ec.r4.b", "LTV és kosárérték") }} />
                <td dangerouslySetInnerHTML={{ __html: t("ec.r4.c", "Üdvözlő, elhagyott kosár, visszacsábítás, készletértesítő: a megszerzett vásárló többször és többet vásárol.") }} />
              </tr>
              <tr>
                <td>
                  <Link href="/ai-seo" dangerouslySetInnerHTML={{ __html: t("ec.r5.a", "SEO, AIO és tartalom") }} />
                </td>
                <td className="met" dangerouslySetInnerHTML={{ __html: t("ec.r5.b", "CAC") }} />
                <td dangerouslySetInnerHTML={{ __html: t("ec.r5.c", "Organikus jelenlét, ami csökkenti a fizetett csatornáktól való függést.") }} />
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section id="email">
        {/* col, not wrap: this page runs on a 840px editorial column */}
        <div className="col">
          <div className="feature">
            <div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("ec.kl.eyebrow", "Az LTV-motor közelről") }} />
              <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("kl.title", "E-commerce e-mail automatizáció Klaviyóval") }} />
              <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("kl.lede", "A legtöbb magyar webshopnál az e-mail a bevétel 5–8%-át hozza. Egy rendesen felépített fiókban 25–35%. A különbséget a szegmentált lista, a jól időzített flow-k és a tiszta adat adja, nem a küldési gyakoriság.") }} />
              <div className="stat-row rv">
                <div className="k">25–35%<small dangerouslySetInnerHTML={{ __html: t("kl.k1", "webshop-bevétel e-mailből") }} /></div>
                <div className="k">4–6 hét<small dangerouslySetInnerHTML={{ __html: t("kl.k2", "alap flow-készlet élesben") }} /></div>
              </div>
              <div className="hero-cta rv">
                <Link href="/email-automatizacio" className="btn" dangerouslySetInnerHTML={{ __html: t("kl.cta1", "Hogyan működik") }} />
                <Link href="/kapcsolat" className="btn btn-line" dangerouslySetInnerHTML={{ __html: t("kl.cta2", "Kérj Klaviyo auditot") }} />
              </div>
            </div>
            <div className="panel panel-peach rv">
              <h4 dangerouslySetInnerHTML={{ __html: t("kl.panel.h", "Ami az első hat hétben elindul") }} />
              <ul className="checklist">
                <li dangerouslySetInnerHTML={{ __html: t("kl.l1", "<strong>Üdvözlő sorozat.</strong> Az új feliratkozó a legmelegebb kontaktod, itt dől el az első vásárlás") }} />
                <li dangerouslySetInnerHTML={{ __html: t("kl.l2", "<strong>Elhagyott kosár és checkout.</strong> Három lépcső, SMS-sel kiegészítve") }} />
                <li dangerouslySetInnerHTML={{ __html: t("kl.l3", "<strong>Böngészés-elhagyás.</strong> Termékoldali szándék alapján") }} />
                <li dangerouslySetInnerHTML={{ __html: t("kl.l4", "<strong>Vásárlás utáni sorozat.</strong> Használati tipp, értékelés-kérés, cross-sell") }} />
                <li dangerouslySetInnerHTML={{ __html: t("kl.l5", "<strong>Visszacsábítás.</strong> A termékkategória valós újravásárlási ciklusához igazítva") }} />
                <li dangerouslySetInnerHTML={{ __html: t("kl.l6", "<strong>Készlet- és árértesítő.</strong> A legritkábban bevezetett, mégis legjobban konvertáló flow") }} />
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="sec" id="plantart">
        <div className="col">
          <div className="secn">
            <span className="l" dangerouslySetInnerHTML={{ __html: t("ec.cs.kick", "Esettanulmány: Plantart") }} />
          </div>
          <h2 className="sech" dangerouslySetInnerHTML={{ __html: t("ec.cs.h", "Négy év, egy rendszer felépítése") }} />
          <p className="sec-intro" dangerouslySetInnerHTML={{ __html: t("ec.cs.p", "A Plantartnál nem egy tényezőt piszkáltunk. Az egész rendszert építettük fel, fázisról fázisra. Így nézett ki a négy év.") }} />
          <ol className="tline">
            <li className="tstep">
              <div className="fig">700 M Ft<span dangerouslySetInnerHTML={{ __html: t("ec.cs.start", "Kiindulás") }} /></div>
              <div className="body">
                <h3 dangerouslySetInnerHTML={{ __html: t("ec.cs1.h", "Megrekedt kkv, egyetlen csatorna") }} />
                <p dangerouslySetInnerHTML={{ __html: t("ec.cs1.p", "Erős termék, de stagnáló bevétel. Alig mérhető marketing, kézi folyamatok, a növekedés a tulajdonos idején múlt.") }} />
              </div>
            </li>
            <li className="tstep">
              <div className="fig">
                <span dangerouslySetInnerHTML={{ __html: t("ec.cs.y1", "1. év") }} />
              </div>
              <div className="body">
                <h3 dangerouslySetInnerHTML={{ __html: t("ec.cs2.h", "Alapok: márka, weboldal, mérés") }} />
                <p dangerouslySetInnerHTML={{ __html: t("ec.cs2.p", "Újraépítettük a márkát és a weboldalt, és bekötöttük a mérést, hogy először tisztán lássuk, hol szivárog el a bevétel.") }} />
              </div>
            </li>
            <li className="tstep">
              <div className="fig">
                <span dangerouslySetInnerHTML={{ __html: t("ec.cs.y2", "2–3. év") }} />
              </div>
              <div className="body">
                <h3 dangerouslySetInnerHTML={{ __html: t("ec.cs3.h", "Rendszer: webshop, CRM, automatizáció") }} />
                <p dangerouslySetInnerHTML={{ __html: t("ec.cs3.p", "Kiépült a webshop, a CRM és az e-mail automatizáció, és több csatornán indult el az akvizíció, egy közös mérési rétegre kötve.") }} />
                <div className="tmet" dangerouslySetInnerHTML={{ __html: t("ec.cs3.met", "+45 millió Ft webshop-bevétel az első évben") }} />
                <Image className="tshot" src="/ge/img/s-plantartshop.jpg" alt="A Plantart webshop nyitóoldala" width={1280} height={800} />
                <div className="tcap" dangerouslySetInnerHTML={{ __html: t("ec.cs3.cap", "A Plantart webshopja: a teljes rendszernek csak egy csatornája, a bevétel nagyobb része B2B") }} />
              </div>
            </li>
            <li className="tstep">
              <div className="fig">1,9 Mrd Ft<span dangerouslySetInnerHTML={{ __html: t("ec.cs.now", "Ma") }} /></div>
              <div className="body">
                <h3 dangerouslySetInnerHTML={{ __html: t("ec.cs4.h", "Adatvezérelt iparági vezető") }} />
                <p dangerouslySetInnerHTML={{ __html: t("ec.cs4.p", "A megrekedt kkv-ból 1,9 milliárd forintos iparági vezető lett, erős B2B és B2C bevétellel. Nem egy kampány hozta, hanem az egész rendszer.") }} />
                <div className="tmet"><span dangerouslySetInnerHTML={{ __html: t("ec.cs4.met", "3× bevétel · −67% konverziós költség") }} /> · <Link href="/esettanulmany-plantart" dangerouslySetInnerHTML={{ __html: t("ec.cs.read", "a teljes esettanulmány →") }} /></div>
              </div>
            </li>
          </ol>
        </div>
      </section>
      <section className="sec" id="gyik">
        <div className="col">
          <div className="secn">
            <span className="l" dangerouslySetInnerHTML={{ __html: t("ec.faq.kick", "GYIK") }} />
          </div>
          <h2 className="sech" dangerouslySetInnerHTML={{ __html: t("ec.faq.h", "Amit a hozzáértők kérdezni szoktak") }} />
          <div className="faq" style={{ marginTop: "1.4rem" }}>
            <details open>
              <summary dangerouslySetInnerHTML={{ __html: t("ec.faq.q1", "Mekkora forgalom kell A/B teszthez?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("ec.faq.a1", "Tesztkaronként havi több száz konverzió kell ahhoz, hogy értelmes idő alatt legyen megbízható eredmény. Ez alatt nem szignifikanciát hazudunk, hanem mást használunk: kontrollált before/after mérést, kvalitatív kutatást és nagyobb, egyértelmű hatású lépéseket.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("ec.faq.q2", "Milyen stackkel dolgoztok?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("ec.faq.a2", "GA4 és szerveroldali mérés, Microsoft Clarity vagy Hotjar a session recordinghoz és a heatmapekhez, Klaviyo az e-mailhez. Platformfüggetlenül: Shopify, WooCommerce, UNAS és egyedi motor egyaránt, platformváltásban is tudunk segíteni. A marketing toolok legtöbbjét már használtuk, van ajánlott technológia különböző eszközökre, de nagyrészt tudunk dolgozni meglévő infrastruktúrával.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("ec.faq.q3", "Mennyi idő alatt látszik eredmény?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("ec.faq.a3", "Az audit két hét. Az első javítások 4–6 hét alatt élesednek, a hatásuk 30–60 napon belül mérhető. A szorzat-hatás 3–6 hónap alatt épül fel, mert a tényezők egymásra épülnek: előbb a mérés és a konverzió, utána a forgalom skálázása.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("ec.faq.q4", "Mit kell nekünk hozzátennünk?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("ec.faq.a4", "Hozzáférések, heti egy egyeztetés és gyors döntések. A stratégiát ti hagyjátok jóvá, a kivitelezés nehezét mi visszük, és a ti eszközeitekben dolgozunk.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("ec.faq.q5", "Már van marketingesünk vagy ügynökségünk. Akkor is működik?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("ec.faq.a5", "Igen. Beépülünk a meglévő csapat mellé senior rétegként: van, ahol mindent mi viszünk, és van, ahol ők hajtanak végre, mi pedig az irányt és a mérést adjuk.") }} />
            </details>
          </div>
        </div>
      </section>
      <section className="on-navy">
        <div className="wrap">
          <div className="cta">
            <div className="eyebrow" dangerouslySetInnerHTML={{ __html: t("fc.eyebrow", "Beszéljünk") }} />
            <h2 dangerouslySetInnerHTML={{ __html: t("ec.fc.h", "Kezdjük egy audittal") }} />
            <p className="lede" dangerouslySetInnerHTML={{ __html: t("ec.fc.p", "Két hét alatt átvilágítjuk a mérést, a tölcsért és az e-mail-alapot, és számokkal mutatjuk meg, melyik ponton mennyi bevétel marad az asztalon, és mit hozna a javítása.") }} />
            <div className="btns">
              <Link href="/kapcsolat" className="btn">
                <span dangerouslySetInnerHTML={{ __html: t("ec.fc.cta1", "Kérj CRO-auditot") }} />
                <span className="ar">→</span>
              </Link>
              <Link href="/kapcsolat" className="btn btn-line" dangerouslySetInnerHTML={{ __html: t("ec.fc.cta2", "Inkább e-mailben kezdenél?") }} />
            </div>
            <p style={{ fontSize: ".88rem", color: "#8FA0B8", marginTop: "1.1rem" }} dangerouslySetInnerHTML={{ __html: t("ec.fc.fine", "Harminc perc, prezentáció nélkül. Ha nem látunk közös munkát, a hívás végén megmondjuk.") }} />
          </div>
        </div>
      </section>
    </GeShell>
  );
};

export default EcommerceSkalazas;
