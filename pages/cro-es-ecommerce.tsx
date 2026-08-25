import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { GeShell } from "../features/ge/components/GeShell";
import { GeSEO } from "../features/ge/components/GeSEO";
import { GeFaqJsonLd } from "../features/ge/components/GeFaqJsonLd";
import { useGeT } from "../features/ge/i18n/useGeT";

// Ported from growth-engineers-v4/ecommerce-skalazas.html; DOM structure intentionally
// mirrors the static original (see features/ge/README.md).
const EcommerceSkalazas: NextPage = () => {
  const t = useGeT();
  return (
    <GeShell page="ecommerce-skalazas" bodyClass="ecom">
      <GeFaqJsonLd prefix="ec.faq." count={5} />
      <GeSEO
        title={t("mt.ecom", "CRO és E-commerce: a bevétel matematikája | Growth Engineering")}
        description={t("md.ecom", "A webshop-bevétel néhány szám szorzata. Egy konkrét levezetés arról, melyik eszköz melyik mérőszámot mozdítja, és miért épül a rendszer időben egyre olcsóbbá.")}
        ogTitle={t("mt.ecom", "CRO és E-commerce: a bevétel matematikája | Growth Engineering")}
        ogDescription={t("od.ecom", "Három szerény javulás nem összeadódik, hanem összeszorzódik. Megmutatjuk, hogyan.")}
      />
      <section className="ec-hero">
        <div className="col">
          <div className="ec-crumbs"><Link href="/" dangerouslySetInnerHTML={{ __html: t("crumb.home", "Főoldal") }} /> / <span dangerouslySetInnerHTML={{ __html: t("ec.crumb", "CRO és E-commerce") }} /></div>
          <div className="ec-kick" dangerouslySetInnerHTML={{ __html: t("ec.kick", "CRO és E-commerce") }} />
          <h1 className="ec-h1" dangerouslySetInnerHTML={{ __html: t("ec.h1", "Az e-commerce skálázás matematikája") }} />
          <p className="ec-sub" dangerouslySetInnerHTML={{ __html: t("ec.sub", "Egy webshop bevétele néhány szám szorzata. Ha érted, melyik számot mivel lehet mozdítani, a skálázás nem szerencse kérdése, hanem tervezhető folyamat. Lássuk egy konkrét példán, <em>lépésről lépésre</em>.") }} />
          <div className="ec-cta">
            <Link href="/kapcsolat" className="btn">
              <span dangerouslySetInnerHTML={{ __html: t("ec.cta1", "Foglalj hívást") }} />
              <span className="ar">→</span>
            </Link>
            <a href="#keplet" className="btn btn-line" dangerouslySetInnerHTML={{ __html: t("ec.cta2", "Nézd meg a levezetést") }} />
          </div>
          {/* ide: hero kiegészítő tartalom később */}
          <p className="ec-brand" dangerouslySetInnerHTML={{ __html: t("ec.brand", "A Growth Engineering az <b>Emergence Engineering</b> üzletfejlesztési csapata. Ugyanaz a mérnöki gondolkodás, a bevételre alkalmazva.") }} />
        </div>
      </section>
      <section className="sec">
        <div className="col">
          <div className="secn">
            <span className="l" dangerouslySetInnerHTML={{ __html: t("ec.map.kick", "A keret") }} />
          </div>
          <h2 className="sech" dangerouslySetInnerHTML={{ __html: t("ec.map.h", "A bevétel öt tényező szorzata") }} />
          <p className="sec-intro" dangerouslySetInnerHTML={{ __html: t("ec.op", "A legtöbb cég egyetlen tényezőt próbál feljebb tolni: több hirdetést vesz. A bevétel viszont öt szám szorzata, és a szorzatban egyetlen gyenge tag az egészet visszafogja.") }} />
          <ol className="factors rv">
            <li>
              <a href="#plantart">
                <span className="fn">01</span>
                <div>
                  <h3 dangerouslySetInnerHTML={{ __html: t("ec.mf1.h", "Üzleti modell") }} />
                  <p dangerouslySetInnerHTML={{ __html: t("ec.mf1.p", "Elég jó a termék a skálázáshoz? Kik a versenytársak, és milyen a piac?") }} />
                </div>
                <span className="go">→</span>
              </a>
            </li>
            <li>
              <a href="#keplet">
                <span className="fn">02</span>
                <div>
                  <h3 dangerouslySetInnerHTML={{ __html: t("ec.mf2.h", "Forgalom") }} />
                  <p dangerouslySetInnerHTML={{ __html: t("ec.mf2.p", "Hány látogató, és mennyiért? A megtekintés ára szabja meg a mozgásteret.") }} />
                </div>
                <span className="go">→</span>
              </a>
            </li>
            <li>
              <a href="#tolcser">
                <span className="fn">03</span>
                <div>
                  <h3 dangerouslySetInnerHTML={{ __html: t("ec.mf3.h", "Konverzió") }} />
                  <p dangerouslySetInnerHTML={{ __html: t("ec.mf3.p", "1000 látogatóból 2% vagy 4% vásárol? Ez önmagában duplázhat.") }} />
                </div>
                <span className="go">→</span>
              </a>
            </li>
            <li>
              <a href="#email">
                <span className="fn">04</span>
                <div>
                  <h3 dangerouslySetInnerHTML={{ __html: t("ec.mf4.h", "Ügyfélérték (LTV)") }} />
                  <p dangerouslySetInnerHTML={{ __html: t("ec.mf4.p", "Egyszer vagy többször vásárol? Mennyit költ összesen nálad?") }} />
                </div>
                <span className="go">→</span>
              </a>
            </li>
            <li>
              <a href="#korforgas">
                <span className="fn">05</span>
                <div>
                  <h3 dangerouslySetInnerHTML={{ __html: t("ec.mf5.h", "Fenntarthatóság") }} />
                  <p dangerouslySetInnerHTML={{ __html: t("ec.mf5.p", "Megtalálnak organikusan is? A bizalom olcsóbbá teszi az egészet.") }} />
                </div>
                <span className="go">→</span>
              </a>
            </li>
          </ol>
          <p className="bridge" dangerouslySetInnerHTML={{ __html: t("ec.map.bridge", "A forgalom, a konverzió és a kosárérték az a három, amit <b>konkrét számmal</b> lehet mozdítani. Lássuk, mi történik, ha mindhármon javítunk egy keveset.") }} />
        </div>
      </section>
      <section className="sec" id="keplet">
        <div className="col">
          <div className="secn">
            <span className="l" dangerouslySetInnerHTML={{ __html: t("ec.m.kick", "A képlet") }} />
          </div>
          <h2 className="sech" dangerouslySetInnerHTML={{ __html: t("ec.m.h", "Bevétel = Látogató × Konverzió × Kosárérték") }} />
          <p className="sec-intro" dangerouslySetInnerHTML={{ __html: t("ec.m.p", "Vegyünk egy tipikus webshopot. Havi 20 000 látogató, 1,8% konverzió, 22 000 Ft átlagos kosár. Ez havi 360 rendelés, nagyjából 7,9 millió forint. Éves szinten körülbelül 95 millió.") }} />
          <div className="baseline">
            <div>
              <span dangerouslySetInnerHTML={{ __html: t("ec.b1", "Havi látogató") }} />
              <b>20 000</b>
            </div>
            <div>
              <span dangerouslySetInnerHTML={{ __html: t("ec.b2", "Konverzió") }} />
              <b>1,8%</b>
            </div>
            <div>
              <span dangerouslySetInnerHTML={{ __html: t("ec.b3", "Átlagos kosár") }} />
              <b>22 000 Ft</b>
            </div>
            <div>
              <span dangerouslySetInnerHTML={{ __html: t("ec.b4", "Éves bevétel") }} />
              <b>~95 M Ft</b>
            </div>
          </div>
          <p className="p" dangerouslySetInnerHTML={{ __html: t("ec.m.p2", "Most javítsunk mindhárom számon egy keveset. Nem forradalmian, csak annyit, amennyi pár hónap fókuszált munkával reális.") }} />
          <div className="chain rv">
            <div className="fac">
              <div className="fk" dangerouslySetInnerHTML={{ __html: t("ec.f1.k", "Látogató") }} />
              <div className="fv" dangerouslySetInnerHTML={{ __html: t("ec.f1.v", "<s>20 000</s> → 30 000") }} />
              <div className="fx" dangerouslySetInnerHTML={{ __html: t("ec.f1.x", "×1,5") }} />
              <div className="fn" dangerouslySetInnerHTML={{ __html: t("ec.f1.note", "Videó és PPC: olcsóbb megtekintés.") }} />
            </div>
            <div className="op">×</div>
            <div className="fac">
              <div className="fk" dangerouslySetInnerHTML={{ __html: t("ec.f2.k", "Konverzió") }} />
              <div className="fv" dangerouslySetInnerHTML={{ __html: t("ec.f2.v", "<s>1,8%</s> → 3,0%") }} />
              <div className="fx" dangerouslySetInnerHTML={{ __html: t("ec.f2.x", "×1,67") }} />
              <div className="fn" dangerouslySetInnerHTML={{ __html: t("ec.f2.note", "Gyorsabb oldal, jobb űrlap.") }} />
            </div>
            <div className="op">×</div>
            <div className="fac">
              <div className="fk" dangerouslySetInnerHTML={{ __html: t("ec.f3.k", "Kosárérték") }} />
              <div className="fv" dangerouslySetInnerHTML={{ __html: t("ec.f3.v", "<s>22 000</s> → 27 000 Ft") }} />
              <div className="fx" dangerouslySetInnerHTML={{ __html: t("ec.f3.x", "×1,23") }} />
              <div className="fn" dangerouslySetInnerHTML={{ __html: t("ec.f3.note", "Upsell és e-mail flow-k.") }} />
            </div>
            <div className="op eq">=</div>
            <div className="res">
              <div className="rn" dangerouslySetInnerHTML={{ __html: t("ec.res.num", "3,07×") }} />
              <div className="rl" dangerouslySetInnerHTML={{ __html: t("ec.res.lbl", "bevétel, ugyanabból a shopból") }} />
            </div>
          </div>
          <p className="p" dangerouslySetInnerHTML={{ __html: t("ec.m.res", "Három szerény javulás, +50%, +67% és +23%, nem összeadódik. Összeszorzódik. A vége 3,07-szeres bevétel, pedig egyik számot sem tornáztuk fel egyedül a háromszorosára.") }} />
        </div>
      </section>
      <section className="sec" id="tolcser">
        <div className="col">
          <div className="secn">
            <span className="l" dangerouslySetInnerHTML={{ __html: t("ec.fn.kick", "A tölcsér") }} />
          </div>
          <h2 className="sech" dangerouslySetInnerHTML={{ __html: t("ec.fn.h", "A konverzió a legdrágább szám") }} />
          <p className="sec-intro" dangerouslySetInnerHTML={{ __html: t("ec.fn.p", "A forgalomért minden látogatónál fizetsz. Ha a termékoldal és a kosár rosszul konvertál, ugyanazért a pénzért kevesebb vásárlót kapsz. A konverzió azért a legdrágább tényező, mert a teljes marketingköltségedet felszorozza vagy elnyeli.") }} />
          <div className="vfun rv">
            <div className="vstep" style={{ "--w": "100%" } as React.CSSProperties}>
              <span className="vl" dangerouslySetInnerHTML={{ __html: t("ec.fn.l1", "Látogató") }} />
              <span className="vn">1000</span>
            </div>
            <div className="vstep" style={{ "--w": "75%" } as React.CSSProperties}>
              <span className="vl" dangerouslySetInnerHTML={{ __html: t("ec.fn.l2", "Termékoldal") }} />
              <span className="vn">450</span>
            </div>
            <div className="vstep" style={{ "--w": "52%" } as React.CSSProperties}>
              <span className="vl" dangerouslySetInnerHTML={{ __html: t("ec.fn.l3", "Kosár") }} />
              <span className="vn">80</span>
            </div>
            <div className="vstep leak" style={{ "--w": "32%" } as React.CSSProperties}>
              <span className="vl" dangerouslySetInnerHTML={{ __html: t("ec.fn.l4", "Vásárlás") }} />
              <span className="vn">18</span>
            </div>
          </div>
          <p className="anno" dangerouslySetInnerHTML={{ __html: t("ec.f2.anno", "Konkrét példa: egy ügyfelünknél a rendelési űrlap 11 mezőből állt. A kapcsolati adatokat az első lépésbe hoztuk előre, a többit későbbre halasztottuk, és 48%-kal csökkent a félbehagyás.") }} />
        </div>
      </section>
      <section className="sec band" id="korforgas">
        <div className="col">
          <div className="secn">
            <span className="l" dangerouslySetInnerHTML={{ __html: t("ec.lp.kick", "A körforgás") }} />
          </div>
          <h2 className="sech" dangerouslySetInnerHTML={{ __html: t("ec.lp.h", "A rendszer időben egyre olcsóbb") }} />
          <p className="sec-intro" dangerouslySetInnerHTML={{ __html: t("ec.lp.p", "A megszerzett vásárló e-mailen újra vásárol, ez emeli az élettartam-értékét. A jó tartalom és az organikus jelenlét miatt egyre többen ismernek hirdetés nélkül. A magasabb bizalom és a visszatérő vevők csökkentik az egy vásárlóra jutó költséget, így a következő körben ugyanaz a büdzsé több növekedést hoz.") }} />
          <div className="loop rv">
            <div className="lrow">
              <div className="lnode">
                <b dangerouslySetInnerHTML={{ __html: t("ec.lp.b1", "01 Forgalom") }} />
                <span dangerouslySetInnerHTML={{ __html: t("ec.lp.n1", "A hirdetés és a videó embereket hoz az oldalra.") }} />
              </div>
              <div className="larr">→</div>
              <div className="lnode">
                <b dangerouslySetInnerHTML={{ __html: t("ec.lp.b2", "02 Vásárló") }} />
                <span dangerouslySetInnerHTML={{ __html: t("ec.lp.n2", "A konvertáló oldal vevőt csinál a látogatóból.") }} />
              </div>
              <div className="larr">→</div>
              <div className="lnode">
                <b dangerouslySetInnerHTML={{ __html: t("ec.lp.b3", "03 Élettartam") }} />
                <span dangerouslySetInnerHTML={{ __html: t("ec.lp.n3", "Az e-mail és a gondozás ismételt vásárlást hoz.") }} />
              </div>
              <div className="larr">→</div>
              <div className="lnode">
                <b dangerouslySetInnerHTML={{ __html: t("ec.lp.b4", "04 Bizalom") }} />
                <span dangerouslySetInnerHTML={{ __html: t("ec.lp.n4", "A tartalom és az organikus jelenlét hirdetés nélkül is megtalálhatóvá tesz.") }} />
              </div>
            </div>
            <div className="lreturn" dangerouslySetInnerHTML={{ __html: t("ec.lp.ret", "↑ és a kör olcsóbb ügyfélszerzési költséggel indul újra") }} />
          </div>
          <p className="pull" dangerouslySetInnerHTML={{ __html: t("ec.lp.quote", "Egy jól felépített rendszernek <span class=\"hl\">minden hónap olcsóbb</span>, mint az előző.") }} />
        </div>
      </section>
      <section className="sec">
        <div className="col">
          <div className="secn">
            <span className="l" dangerouslySetInnerHTML={{ __html: t("ec.tm.kick", "Az eszközök") }} />
          </div>
          <h2 className="sech" dangerouslySetInnerHTML={{ __html: t("ec.tm.h", "Melyik eszköz melyik számot mozdítja") }} />
          <p className="sec-intro" dangerouslySetInnerHTML={{ __html: t("ec.tm.p", "Ugyanaz a csapat viszi mindet, egy közös mérési rendszerben. Ezért egy helyen tanult lecke egy héten belül megjelenik a többi csatornán is.") }} />
          <table className="tmap">
            <thead>
              <tr>
                <th dangerouslySetInnerHTML={{ __html: t("ec.tm.c1", "Eszköz") }} />
                <th dangerouslySetInnerHTML={{ __html: t("ec.tm.c2", "Melyik számot") }} />
                <th dangerouslySetInnerHTML={{ __html: t("ec.tm.c3", "Hogyan") }} />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Link href="/ppc-hirdeteskezeles" dangerouslySetInnerHTML={{ __html: t("ec.r1.a", "Videó és PPC") }} />
                </td>
                <td className="met" dangerouslySetInnerHTML={{ __html: t("ec.r1.b", "Látogató") }} />
                <td dangerouslySetInnerHTML={{ __html: t("ec.r1.c", "Több minőségi forgalom, olcsóbb megtekintéssel.") }} />
              </tr>
              <tr>
                <td>
                  <Link href="/webfejlesztes" dangerouslySetInnerHTML={{ __html: t("ec.r2.a", "Webfejlesztés és UX") }} />
                </td>
                <td className="met" dangerouslySetInnerHTML={{ __html: t("ec.r2.b", "Konverzió") }} />
                <td dangerouslySetInnerHTML={{ __html: t("ec.r2.c", "Gyors oldal, tiszta vásárlási út, kevesebb súrlódás a fizetésnél.") }} />
              </tr>
              <tr>
                <td>
                  <a href="#email" dangerouslySetInnerHTML={{ __html: t("ec.r3.a", "E-mail marketing") }} />
                </td>
                <td className="met" dangerouslySetInnerHTML={{ __html: t("ec.r3.b", "Kosárérték és LTV") }} />
                <td dangerouslySetInnerHTML={{ __html: t("ec.r3.c", "Upsell, elhagyott kosár és visszacsábítás, hogy többször és többet vásároljanak.") }} />
              </tr>
              <tr>
                <td>
                  <Link href="/ai-seo" dangerouslySetInnerHTML={{ __html: t("ec.r4.a", "SEO, AIO és tartalom") }} />
                </td>
                <td className="met" dangerouslySetInnerHTML={{ __html: t("ec.r4.b", "Ügyfélszerzési költség") }} />
                <td dangerouslySetInnerHTML={{ __html: t("ec.r4.c", "Organikus forgalom és bizalom, ami a teljes rendszert olcsóbbá teszi.") }} />
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
              <div className="fig">500 M Ft<span dangerouslySetInnerHTML={{ __html: t("ec.cs.start", "Kiindulás") }} /></div>
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
              <div className="fig">2 Mrd Ft<span dangerouslySetInnerHTML={{ __html: t("ec.cs.now", "Ma") }} /></div>
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
          <h2 className="sech" dangerouslySetInnerHTML={{ __html: t("ec.faq.h", "Gyakori kérdések a skálázásról") }} />
          <div className="faq" style={{ marginTop: "1.4rem" }}>
            <details open>
              <summary dangerouslySetInnerHTML={{ __html: t("ec.faq.q1", "Mennyi idő alatt látszik az eredmény?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("ec.faq.a1", "A gyorsjavítások és az első flow-k 4–6 hét alatt élesednek, a hatásuk 30–60 napon belül mérhető. A szorzat-hatás 3–6 hónap alatt épül fel, mert a tényezők egymásra épülnek: előbb a mérés és a konverzió, utána a forgalom skálázása.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("ec.faq.q2", "Milyen méretű webshopnál éri meg?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("ec.faq.a2", "A teljes rendszer jellemzően évi 50 millió forint feletti webshop-bevételnél térül meg gyorsan. Kisebb shopnál nem az egésszel indulunk, hanem a legnagyobb tartalékkal: általában a konverzióval vagy az e-maillel.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("ec.faq.q3", "Shopify, WooCommerce vagy egyedi motor?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("ec.faq.a3", "Platformfüggetlenül dolgozunk: Shopify, WooCommerce, UNAS és egyedi fejlesztésű shopokon egyaránt. A mérés, a flow-k és a konverzió-optimalizálás mindegyiken felépíthető, és ha platformváltás kell, azt is visszük.") }} />
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
            <h2 dangerouslySetInnerHTML={{ __html: t("ec.fc.h", "Nézzük meg, melyik számodon van a legnagyobb tartalék") }} />
            <p className="lede" dangerouslySetInnerHTML={{ __html: t("ec.fc.p", "Egy 30 perces híváson végigvesszük a te shopod öt tényezőjét, és megmondjuk, hol a legnagyobb kihasználatlan lehetőség: a forgalomban, a konverzióban vagy az ügyfélértékben.") }} />
            <div className="btns">
              <Link href="/kapcsolat" className="btn">
                <span dangerouslySetInnerHTML={{ __html: t("ec.fc.cta1", "Foglalj hívást") }} />
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
