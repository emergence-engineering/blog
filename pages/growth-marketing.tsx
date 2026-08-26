import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { GeShell } from "../features/ge/components/GeShell";
import { GeSEO } from "../features/ge/components/GeSEO";
import { GmHeroArt } from "../features/ge/components/GmHeroArt";
import { useGeT } from "../features/ge/i18n/useGeT";
import { LeadFormGuards } from "../features/ge/components/LeadFormGuards";
import { useLeadForm } from "../features/ge/hooks/useLeadForm";

// Ported from growth-engineers-v4/growth-marketing.html; DOM structure intentionally
// mirrors the static original (see features/ge/README.md).
const GrowthMarketing: NextPage = () => {
  const t = useGeT();
  const guideForm = useLeadForm({ kind: "capture", source: "/growth-marketing ppc-guide" });
  const auditForm = useLeadForm({ kind: "capture", source: "/growth-marketing audit" });
  return (
    <GeShell page="growth-marketing">
      <GeSEO
        title={t("mt.gm", "PPC hirdetéskezelés: az audittól a skálázásig, Growth Engineering")}
        description={t("md.gm", "PPC hirdetéskezelés bevált munkafolyamattal: audit, beépülés a csapatodba, rendszerépítés és skálázás. A bevételért felelünk, nem a kampánystatisztikáért.")}
        ogTitle={t("mt.gm", "PPC hirdetéskezelés: az audittól a skálázásig, Growth Engineering")}
        ogDescription={t("od.gm", "Audit, beépülés, rendszerépítés, skálázás: így kezeljük a PPC hirdetéseidet belülről, a bevételre optimalizálva.")}
      />
      <section className="phero">
        <div className="wrap">
          <div className="phero-grid">
            <div>
              <div className="crumbs rv">
                <Link href="/" dangerouslySetInnerHTML={{ __html: t("crumb.home", "Főoldal") }} />
                <span>/</span>
                <span dangerouslySetInnerHTML={{ __html: t("gm.crumb", "PPC hirdetéskezelés") }} />
              </div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("gm.eyebrow", "PPC hirdetéskezelés") }} />
              <h1 className="rv" dangerouslySetInnerHTML={{ __html: t("gm.h1", "<mark>Marketing</mark>, ami márkát épít és konvertál") }} />
              <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("gm.lede", "Nem a büdzsé emelése a megoldás. Egy hirdetési fiók rövid távon optimalizálható, de a tartós növekedés nem ott dől el. Ezért a kampányainkat rendszerben, több eszközzel tervezzük, hogy ne csak kattintást hozzanak: márkát is építsenek, és profitot termeljenek.") }} />
              <div className="hero-cta rv">
                <Link href="/kapcsolat" className="btn">
                  <span dangerouslySetInnerHTML={{ __html: t("gm.cta1", "Foglalj hívást") }} />
                  <span className="ar">→</span>
                </Link>
                <a href="#audit" className="btn btn-line" dangerouslySetInnerHTML={{ __html: t("gm.cta2", "Ingyenes audit") }} />
              </div>
              <div className="trust rv">
                <span dangerouslySetInnerHTML={{ __html: t("gm.trust1", "<b>Teljes tölcsér</b> egy csapatban") }} />
                <span dangerouslySetInnerHTML={{ __html: t("gm.trust2", "<b>Bevétel</b>, nem kampánystatisztika") }} />
              </div>
            </div>
            <div className="rv">
              <GmHeroArt />
            </div>
          </div>
        </div>
      </section>
      <section className="band">
        <div className="wrap">
          <div className="shead">
            <div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("gm.pos.eyebrow", "A mi álláspontunk") }} />
              <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("gm.pos.h", "Nem hiszünk az ügynökségekben<br>és a tanácsadókban.") }} />
            </div>
            <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("gm.pos.lede", "Egy összehangolt csapat, ami a stratégiát, a marketinget, az értékesítést, a működést és az adatot együtt kezeli, mindig jobban teljesít, mint az egymástól elszigetelt specialisták.") }} />
          </div>
          <div className="cards2 rv">
            <div className="panel panel-peach">
              <h4 dangerouslySetInnerHTML={{ __html: t("gm.prob.h", "Mi a baj a hagyományos ügynökséggel?") }} />
              <ul className="checklist no">
                <li dangerouslySetInnerHTML={{ __html: t("gm.prob1", "Ritkán van <strong>elég befolyásuk</strong> a szervezetben ahhoz, hogy valódi, tartós változást hozzanak.") }} />
                <li dangerouslySetInnerHTML={{ __html: t("gm.prob2", "Értenek a marketinghez, de hiányzik az <strong>üzletfejlesztési nézőpont</strong>, ami valódi hatást teremt.") }} />
                <li dangerouslySetInnerHTML={{ __html: t("gm.prob3", "A ti céljaitok és az övék <strong>ritkán esnek egybe</strong>: az ő ösztönzőjük a dashboard, a felülértékesítés és a szerződés megtartása.") }} />
                <li dangerouslySetInnerHTML={{ __html: t("gm.prob4", "Nem ismerik a terméket úgy, ahogy ti, és nem ülnek elég sokáig a csapattal, hogy lássák a <strong>valódi korlátokat</strong>.") }} />
                <li dangerouslySetInnerHTML={{ __html: t("gm.prob5", "Kívülről dolgoznak, ezért csak a <strong>problémák egy szeletét</strong> látják, és nem érzik a pénzügyi valóság nyomását.") }} />
                <li dangerouslySetInnerHTML={{ __html: t("gm.prob6", "A legtöbben <strong>különálló csatornákra</strong> fókuszálnak, PPC, SEO, CRO, e-mail, pedig a kiugró növekedéshez ezeknek együtt kell működniük.") }} />
              </ul>
              <p className="muted" style={{ fontSize: ".92rem", marginTop: "1.2rem", fontStyle: "italic" }} dangerouslySetInnerHTML={{ __html: t("gm.prob.note", "Az eszközök önmagukban nem hoznak skálát.") }} />
            </div>
            <div className="panel panel-navy">
              <h4 dangerouslySetInnerHTML={{ __html: t("gm.sol.h", "Miért teljesít jobban egy dedikált belső csapat?") }} />
              <ul className="checklist">
                <li dangerouslySetInnerHTML={{ __html: t("gm.sol1", "Egy <strong>összehangolt szakértői csapat</strong>, ami a stratégiát, a marketinget, az értékesítést, a működést és az adatot együtt kezeli, mindig jobban teljesít, mint az elszigetelt specialisták.") }} />
                <li dangerouslySetInnerHTML={{ __html: t("gm.sol2", "A belső csapat ismeri a terméket, a vevőket, a korlátokat és a <strong>pénzügyi valóságot</strong>, mert veletek ül, nem rajtatok kívül.") }} />
                <li dangerouslySetInnerHTML={{ __html: t("gm.sol3", "<strong>Teljesen beépülünk a szervezetbe</strong>, ezért a teljes rendszert építjük, nem külön csatornákat.") }} />
                <li dangerouslySetInnerHTML={{ __html: t("gm.sol4", "Minden képességet egy helyen hozunk, ami egy <strong>skálázódó motor</strong> megépítéséhez kell.") }} />
                <li dangerouslySetInnerHTML={{ __html: t("gm.sol5", "Nemet mondunk az egyszerű kampánykezelésre, mert <strong>rendszereket építünk</strong>.") }} />
              </ul>
              <p style={{ fontSize: ".92rem", marginTop: "1.2rem", fontStyle: "italic", color: "#AFBDD1" }} dangerouslySetInnerHTML={{ __html: t("gm.sol.note", "A rendszerek skálázódnak.") }} />
            </div>
          </div>
        </div>
      </section>
      <section className="tight-bottom" id="ppc-guide">
        <div className="wrap">
          <div className="news rv" style={{ background: "transparent", border: "2px solid var(--rule)" }}>
            <div>
              <div className="eyebrow" dangerouslySetInnerHTML={{ __html: t("gm.lm.eyebrow", "Ingyenes útmutató") }} />
              <h2 dangerouslySetInnerHTML={{ __html: t("gm.lm.h", "Claude PPC robot: beállítási útmutató") }} />
              <p dangerouslySetInnerHTML={{ __html: t("gm.lm.p", "A saját setupunk lépésről lépésre: hogyan futtatunk Claude-alapú funnel-elemzéseket az összes hirdetési és analitikai felületre – Google Ads, GA4, Meta, Klaviyo és a többi.") }} />
            </div>
            <form onSubmit={guideForm.onSubmit}>
              <LeadFormGuards />
              <div className="field">
                <input type="email" name="email" required placeholder={t("gm.lm.f.ph", "E-mail-címed*")} aria-label={t("gm.lm.f.al", "E-mail-címed")} />
                <button className="btn" type="submit" disabled={guideForm.state === "sending"} dangerouslySetInnerHTML={{ __html: guideForm.state === "sending" ? t("form.sending", "Küldés…") : t("gm.lm.f.submit", "Kérem az útmutatót") }} />
              </div>
              <label className="consent">
                <input type="checkbox" name="consent" required />
                <span dangerouslySetInnerHTML={{ __html: t("gm.lm.f.consent", "Kérem az útmutatót, és hozzájárulok, hogy az Emergence Engineering Kft. az <a href=\"#\">adatkezelési tájékoztató</a> szerint kezelje az adataimat.") }} />
              </label>
              <p className="ok" hidden={guideForm.state !== "ok"} dangerouslySetInnerHTML={{ __html: t("gm.lm.f.ok", "Köszönjük! Hamarosan küldjük az útmutatót e-mailben.") }} />
              <p className="err" hidden={guideForm.state !== "error"} dangerouslySetInnerHTML={{ __html: t("form.err", "Valami hiba történt nálunk. Írj közvetlenül: <a href=\"mailto:contact@emergence-engineering.com\">contact@emergence-engineering.com</a>.") }} />
            </form>
          </div>
        </div>
      </section>
      <section id="szolgaltatasok">
        <div className="wrap">
          <div className="shead">
            <div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("gm.wd.eyebrow", "Amit csinálunk") }} />
              <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("gm.wd.h", "Öt motor, egy rendszer") }} />
            </div>
            <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("gm.wd.lede", "Minden csatorna ugyanabba a mérési rétegbe táplál vissza, így egy fizetett hirdetésben megtanult lecke egy héten belül megjelenik az e-mailben és a tartalomban is.") }} />
          </div>
          <div className="sblock rv">
            <div>
              <h3 dangerouslySetInnerHTML={{ __html: t("gm.s1.h", "PPC hirdetéskezelés") }} />
              <p dangerouslySetInnerHTML={{ __html: t("gm.s1.p", "Olyan kampányokat tervezünk és futtatunk, amiknek valódi üzleti eredménye van.") }} />
              <div>
                <Link href="/kapcsolat" className="tlink">
                  <span dangerouslySetInnerHTML={{ __html: t("gm.s1.link", "Kérd az auditot") }} />
                  <span className="ar">→</span>
                </Link>
              </div>
            </div>
            <div className="ilist">
              <div className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("gm.s1a.h", "Fizetett keresés") }} />
                <p dangerouslySetInnerHTML={{ __html: t("gm.s1a.p", "Azok elé kerülsz, akik már keresik, amit kínálsz. Pontos célzás, szoros kulcsszóstruktúra és releváns hirdetések a magas szándékú forgalomért.") }} />
              </div>
              <div className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("gm.s1b.h", "Fizetett social") }} />
                <p dangerouslySetInnerHTML={{ __html: t("gm.s1b.p", "A márkád azoknak a hírfolyamába kerül, akiket tényleg érdekelhet. Görgetést megállító kreatív és célzás, ami figyelemből cselekvést csinál.") }} />
              </div>
              <div className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("gm.s1c.h", "Remarketing") }} />
                <p dangerouslySetInnerHTML={{ __html: t("gm.s1c.p", "Akkor jelentkezünk, amikor számít. Pontos elhelyezések és időzített emlékeztetők, amik visszahozzák az embereket anélkül, hogy tolakodó lenne.") }} />
              </div>
              <div className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("gm.s1d.h", "Konverzióoptimalizálás") }} />
                <p dangerouslySetInnerHTML={{ __html: t("gm.s1d.p", "A meglévő forgalmad dolgozzon keményebben. Tisztább útvonalak, okosabb elrendezés és adatalapú finomítások.") }} />
              </div>
            </div>
          </div>
          <div className="sblock rv">
            <div>
              <h3 dangerouslySetInnerHTML={{ __html: t("gm.s2.h", "Tartalom és SEO") }} />
              <p dangerouslySetInnerHTML={{ __html: t("gm.s2.p", "Megtalálnak, megbíznak benned, és maradnak.") }} />
              <div>
                <Link href="/#szolgaltatasok" className="tlink">
                  <span dangerouslySetInnerHTML={{ __html: t("gm.s2.link", "Nézd meg, hogyan illik ide az AIO") }} />
                  <span className="ar">→</span>
                </Link>
              </div>
            </div>
            <div className="ilist">
              <div className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("gm.s2a.h", "SEO-stratégia és technikai optimalizálás") }} />
                <p dangerouslySetInnerHTML={{ __html: t("gm.s2a.p", "Gyors, tiszta, kereshető oldal. A szerkezettől a technikai javításokig minden együtt dolgozik a jó helyezésért.") }} />
              </div>
              <div className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("gm.s2b.h", "Tartalomstratégia") }} />
                <p dangerouslySetInnerHTML={{ __html: t("gm.s2b.p", "Megkeressük, mire keres valójában a közönséged. Széles és long-tail kulcsszavak, amik valódi forgalmat hoznak.") }} />
              </div>
              <div className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("gm.s2c.h", "Blog és cikkírás") }} />
                <p dangerouslySetInnerHTML={{ __html: t("gm.s2c.p", "Hasznos, alaposan megírt tartalom, ami emberi hangon szól. Cikkek, amiket elolvasnak, és amiket a keresők is szívesen mutatnak.") }} />
              </div>
              <div className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("gm.s2d.h", "Linképítés és tekintély") }} />
                <p dangerouslySetInnerHTML={{ __html: t("gm.s2d.p", "Minőségi hivatkozások, biztonságos és stratégiai megkeresésekkel, hogy hosszú távon nőjön a láthatóságod.") }} />
              </div>
            </div>
          </div>
          <div className="sblock rv">
            <div>
              <h3 dangerouslySetInnerHTML={{ __html: t("gm.s3.h", "Videó és közösségimédia-marketing") }} />
              <p dangerouslySetInnerHTML={{ __html: t("gm.s3.p", "Ott jelenünk meg, ahol a közönséged már úgyis idejét tölti. Social-first tartalmat és videót gyártunk, ami bizalmat épít, elköteleződést hajt és támogatja a teljesítményt.") }} />
              <div>
                <Link href="/#szolgaltatasok" className="tlink">
                  <span dangerouslySetInnerHTML={{ __html: t("gm.s3.link", "Több a tartalomgyártásról") }} />
                  <span className="ar">→</span>
                </Link>
              </div>
            </div>
            <div className="ilist">
              <div className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("gm.s3a.h", "Csatornastratégia") }} />
                <p dangerouslySetInnerHTML={{ __html: t("gm.s3a.p", "Social tartalomterv, üzenetek és platform-natív ötletek.") }} />
              </div>
              <div className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("gm.s3b.h", "Kreatív kivitelezés") }} />
                <p dangerouslySetInnerHTML={{ __html: t("gm.s3b.p", "Forgatókönyv, forgatási irány, vágás és márkás történetmesélés.") }} />
              </div>
              <div className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("gm.s3c.h", "Teljesítménytartalom") }} />
                <p dangerouslySetInnerHTML={{ __html: t("gm.s3c.p", "Social-first kreatívok, amiket fizetett kampányokban konverzióra terveztünk.") }} />
              </div>
              <div className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("gm.s3d.h", "Rövid videó") }} />
                <p dangerouslySetInnerHTML={{ __html: t("gm.s3d.p", "TikTok, Reels, Shorts, LinkedIn-klipek a gyors figyelemért és a világos üzenetért.") }} />
              </div>
            </div>
          </div>
          <div className="sblock rv">
            <div>
              <h3 dangerouslySetInnerHTML={{ __html: t("gm.s4.h", "E-mail és életciklus-marketing") }} />
              <p dangerouslySetInnerHTML={{ __html: t("gm.s4.p", "Az első benyomásból hosszú távú kapcsolatot csinálunk. Ez a legjobb megtérülésű csatorna, amit a legtöbb cég a legkevésbé használ ki.") }} />
              <div>
                <Link href="/email-automatizacio" className="tlink">
                  <span dangerouslySetInnerHTML={{ __html: t("gm.s4.link", "Klaviyo e-commerce automatizáció") }} />
                  <span className="ar">→</span>
                </Link>
              </div>
            </div>
            <div className="ilist">
              <div className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("gm.s4a.h", "Teljes tölcsér flow-k") }} />
                <p dangerouslySetInnerHTML={{ __html: t("gm.s4a.p", "Az első érintéstől kezdve. Meleg, világos, értékes sorozatok, amikből az új feliratkozóból elkötelezett vevő lesz.") }} />
              </div>
              <div className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("gm.s4b.h", "Szegmentáció és személyre szabás") }} />
                <p dangerouslySetInnerHTML={{ __html: t("gm.s4b.p", "Nincs több „mindenkinek ugyanaz”. Perszónákra, viselkedésre és valós érdeklődésre szabott üzenetek.") }} />
              </div>
              <div className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("gm.s4c.h", "Automatizált életciklus") }} />
                <p dangerouslySetInnerHTML={{ __html: t("gm.s4c.p", "Elhagyott kosár, upsell, visszacsábítás. Feltérképezzük, mikor melyik üzenet a helyes.") }} />
              </div>
              <div className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("gm.s4d.h", "Konvertáló tartalom") }} />
                <p dangerouslySetInnerHTML={{ __html: t("gm.s4d.p", "Okos szöveg, tiszta design, erős cselekvésre ösztönzés. E-mailek, amiket megnyitnak, és amik után lépnek is.") }} />
              </div>
            </div>
          </div>
          <div className="sblock rv">
            <div>
              <h3 dangerouslySetInnerHTML={{ __html: t("gm.s5.h", "Analitika és növekedési stratégia") }} />
              <p dangerouslySetInnerHTML={{ __html: t("gm.s5.p", "Adatból tanulunk, alkalmazkodunk, és jobb döntéseket hozunk.") }} />
              <div>
                <Link href="/kapcsolat" className="tlink">
                  <span dangerouslySetInnerHTML={{ __html: t("gm.s5.link", "Kérd az auditot") }} />
                  <span className="ar">→</span>
                </Link>
              </div>
            </div>
            <div className="ilist">
              <div className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("gm.s5a.h", "Mérés és követés") }} />
                <p dangerouslySetInnerHTML={{ __html: t("gm.s5a.p", "Minden kattintás, megtekintés és esemény pontosan rögzül. Tiszta címkézés és analitikai alapok, amikben megbízhatsz.") }} />
              </div>
              <div className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("gm.s5b.h", "Tölcsérelemzés") }} />
                <p dangerouslySetInnerHTML={{ __html: t("gm.s5b.p", "Lebontjuk a teljes utat az első érintéstől a konverzióig, és betömjük a lyukakat.") }} />
              </div>
              <div className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("gm.s5c.h", "Kísérletezés és A/B teszt") }} />
                <p dangerouslySetInnerHTML={{ __html: t("gm.s5c.p", "Strukturált tesztek, amik megmutatják, mi mozdítja a számot, és mi csak zaj.") }} />
              </div>
              <div className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("gm.s5d.h", "Világos riportkeret") }} />
                <p dangerouslySetInnerHTML={{ __html: t("gm.s5d.p", "A riport a bevétellel kezdődik, utána jön a CPA és a ROAS. A megjelenésszám a mellékletbe kerül.") }} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="on-navy" id="folyamat">
        <div className="wrap">
          <div className="shead solo">
            <div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("gm.proc.eyebrow", "Folyamat") }} />
              <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("gm.proc.h", "Hogyan dolgozunk együtt") }} />
              <p className="lede rv" style={{ marginTop: "1rem" }} dangerouslySetInnerHTML={{ __html: t("gm.proc.lede", "Nem külön kampányokat indítunk, hanem egy rendszert építünk fel veletek, az első audittól a skálázásig.") }} />
            </div>
          </div>
          <div className="steps s4 rv">
            <div className="step">
              <div className="n" dangerouslySetInnerHTML={{ __html: t("gm.proc1.n", "01. lépés") }} />
              <h4 dangerouslySetInnerHTML={{ __html: t("gm.proc1.h", "Audit") }} />
              <p dangerouslySetInnerHTML={{ __html: t("gm.proc1.p", "Átnézzük a márkádat, az üzletedet, a mérést és a marketinget. A végén tudjuk, hol szivárog a bevétel, és mit érdemes először javítani.") }} />
            </div>
            <div className="step">
              <div className="n" dangerouslySetInnerHTML={{ __html: t("gm.proc2.n", "02. lépés") }} />
              <h4 dangerouslySetInnerHTML={{ __html: t("gm.proc2.h", "Beépülés") }} />
              <p dangerouslySetInnerHTML={{ __html: t("gm.proc2.p", "Beülünk a csapatod mellé senior growth rétegként, a ti eszközeitekbe kötve. Nem a naptáradba épülünk be, hanem a munkádba.") }} />
            </div>
            <div className="step">
              <div className="n" dangerouslySetInnerHTML={{ __html: t("gm.proc3.n", "03. lépés") }} />
              <h4 dangerouslySetInnerHTML={{ __html: t("gm.proc3.h", "Rendszerépítés") }} />
              <p dangerouslySetInnerHTML={{ __html: t("gm.proc3.p", "Felépítjük a hiányzó részeket: pozicionálás, tölcsér, mérés, kampányok és flow-k: egy összefüggő rendszerré kötve, nem külön csatornákként.") }} />
            </div>
            <div className="step">
              <div className="n" dangerouslySetInnerHTML={{ __html: t("gm.proc4.n", "04. lépés") }} />
              <h4 dangerouslySetInnerHTML={{ __html: t("gm.proc4.h", "Skálázás") }} />
              <p dangerouslySetInnerHTML={{ __html: t("gm.proc4.p", "Amikor a mérés tiszta és az ajánlat stimmel, felnyomjuk a büdzsét és a kreatívot. Minden hónapban egy tanulság, ami az egész rendszeren végigfut.") }} />
            </div>
          </div>
        </div>
      </section>
      <section id="esettanulmanyok">
        <div className="wrap">
          <div className="shead">
            <div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("gm.cs.eyebrow", "Esettanulmányok") }} />
              <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("gm.cs.h", "Néhány történet") }} />
            </div>
            <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("gm.cs.lede", "Két együttműködés, ahol az egész rendszer mozdult, nem csak egy csatorna.") }} />
          </div>
          <div className="cases">
            <article className="case rv">
              <div className="case-media">
                <Image src="/ge/img/case-plantart.webp" width={728} height={484} alt={t("alt12", "A Plantart weboldala, webshopja és social kampányai a Growth Engineeringtől")} />
              </div>
              <div className="case-body">
                <h3 dangerouslySetInnerHTML={{ __html: t("case.pa.h", "Plantart piacvezető és digitális bajnok") }} />
                <p dangerouslySetInnerHTML={{ __html: t("case.pa.p", "A Plantart egy 4 éves üzletfejlesztési folyamaton ment át, aminek a végére a cég 700 millióról <strong>1,9 milliárdra</strong> nőtt, és eljutott az első cégfelvásárlásáig.") }} />
                <div className="metrics">
                  <div className="m">
                    <div className="dnum">3×</div>
                    <div className="d" dangerouslySetInnerHTML={{ __html: t("case.pa.m1", "Bevételnövekedés négy év alatt") }} />
                  </div>
                  <div className="m">
                    <div className="dnum">+45M Ft</div>
                    <div className="d" dangerouslySetInnerHTML={{ __html: t("case.pa.m2", "Webshop-bevétel az első évben") }} />
                  </div>
                  <div className="m">
                    <div className="dnum">−67%</div>
                    <div className="d" dangerouslySetInnerHTML={{ __html: t("case.pa.m3", "Alacsonyabb konverziós költség") }} />
                  </div>
                </div>
                <div className="chips">
                  <span className="chip" dangerouslySetInnerHTML={{ __html: t("gm.cs.chip1", "Weboldal-újratervezés") }} />
                  <span className="chip" dangerouslySetInnerHTML={{ __html: t("gm.cs.chip2", "PPC-marketing") }} />
                  <span className="chip" dangerouslySetInnerHTML={{ __html: t("gm.cs.chip3", "E-commerce") }} />
                </div>
                <div>
                  <Link href="/esettanulmanyok" className="tlink">
                    <span dangerouslySetInnerHTML={{ __html: t("gm.cs.read", "Esettanulmány elolvasása") }} />
                    <span className="ar">→</span>
                  </Link>
                </div>
              </div>
            </article>
            <article className="case flip rv">
              <div className="case-media">
                <Image src="/ge/img/case-vezessjol.webp" width={733} height={484} alt={t("alt13", "A VezessJól autósiskola weboldala és akvizíciós tölcsére")} />
              </div>
              <div className="case-body">
                <h3 dangerouslySetInnerHTML={{ __html: t("case.vj.h", "Felpörgetett konverziók vezetésoktatásban") }} />
                <p dangerouslySetInnerHTML={{ __html: t("case.vj.p", "Hogyan növeltük duplájára a konverziók számát a marketingköltés csökkentése mellett? Az üzleti audit és a visszamérések során megtaláltuk azokat a fő pontokat, ahol az üzleti modellt módosítani kellett. Az értékajánlat módosításával sikerült <strong>duplázni a konverziók számát 3 hónap alatt</strong>.") }} />
                <div className="metrics">
                  <div className="m">
                    <div className="dnum">+35%</div>
                    <div className="d" dangerouslySetInnerHTML={{ __html: t("case.vj.m1", "Bevételnövekedés") }} />
                  </div>
                  <div className="m">
                    <div className="dnum">+93%</div>
                    <div className="d" dangerouslySetInnerHTML={{ __html: t("case.vj.m2", "Több konverzió") }} />
                  </div>
                  <div className="m">
                    <div className="dnum">−50%</div>
                    <div className="d" dangerouslySetInnerHTML={{ __html: t("case.vj.m3", "Érdeklődőszerzési költség") }} />
                  </div>
                </div>
                <div className="chips">
                  <span className="chip" dangerouslySetInnerHTML={{ __html: t("gm.cs.chip1", "Weboldal-újratervezés") }} />
                  <span className="chip" dangerouslySetInnerHTML={{ __html: t("gm.cs.chip2", "PPC-marketing") }} />
                  <span className="chip" dangerouslySetInnerHTML={{ __html: t("gm.cs.chip3", "E-commerce") }} />
                </div>
                <div>
                  <Link href="/esettanulmanyok" className="tlink">
                    <span dangerouslySetInnerHTML={{ __html: t("gm.cs.read", "Esettanulmány elolvasása") }} />
                    <span className="ar">→</span>
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="tight-bottom" id="audit">
        <div className="wrap">
          <div className="news rv">
            <div>
              <div className="eyebrow" dangerouslySetInnerHTML={{ __html: t("gm.audit.eyebrow", "Ingyenes növekedési audit") }} />
              <h2 dangerouslySetInnerHTML={{ __html: t("gm.audit.h", "Találjuk meg, hol szivárog el a bevétel") }} />
              <p dangerouslySetInnerHTML={{ __html: t("gm.audit.p", "Átnézzük a márkádat, az üzletedet és a marketinged, aztán kapsz egy listát arról, mit javíts először. És arról is, mivel ne foglalkozz, hogy ne találgass, hanem nyerj.") }} />
            </div>
            <form onSubmit={auditForm.onSubmit}>
              <LeadFormGuards />
              <div className="field">
                <input type="email" name="email" required placeholder={t("gm.audit.ph", "E-mail-címed*")} aria-label={t("gm.audit.al", "E-mail-címed")} />
                <button className="btn" type="submit" disabled={auditForm.state === "sending"} dangerouslySetInnerHTML={{ __html: auditForm.state === "sending" ? t("form.sending", "Küldés…") : t("gm.audit.btn", "Kérem az auditot") }} />
              </div>
              <label className="consent">
                <input type="checkbox" name="consent" required />
                <span dangerouslySetInnerHTML={{ __html: t("gm.audit.consent", "Hozzájárulok, hogy e-mailben megkeressetek, és az Emergence Engineering Kft. az adatkezelési tájékoztató szerint kezelje az adataimat.") }} />
              </label>
              <p className="ok" hidden={auditForm.state !== "ok"} style={{ marginTop: ".9rem", fontSize: ".85rem", color: "var(--coral-d)", fontWeight: "600" }} dangerouslySetInnerHTML={{ __html: t("gm.audit.ok", "Köszönjük, nézd meg a postaládád.") }} />
              <p className="err" hidden={auditForm.state !== "error"} style={{ marginTop: ".9rem", fontSize: ".85rem", color: "var(--coral-d)", fontWeight: "600" }} dangerouslySetInnerHTML={{ __html: t("form.err", "Valami hiba történt nálunk. Írj közvetlenül: <a href=\"mailto:contact@emergence-engineering.com\">contact@emergence-engineering.com</a>.") }} />
            </form>
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
              <summary dangerouslySetInnerHTML={{ __html: t("gm.faq.q1", "Growth ügynökséget vagy belsős marketingest vegyünk fel?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("gm.faq.a1", "Ha egyetlen csatornát kell futtatni, vegyél fel belsőst. Ha valakinek a stratégiát, a paid médiát, a tölcsért, a CRM-et, a tartalmat és az analitikát is vinnie kell, akkor egy growth partner gyorsabb és költséghatékonyabb. A teljes lefedettséghez kellene egy PPC-s, egy grafikus, egy fejlesztő, egy e-mail marketinges, egy stratéga és egy UX designer, ezek nagy része viszont nem kell főállásban, csak a megfelelő pillanatokban.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("gm.faq.q2", "Hogyan dolgoztok a belső csapatunkkal?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("gm.faq.a2", "Közvetlenül beépülünk a marketing-, termék- vagy értékesítési csapat mellé, senior growth rétegként. Van, ahol mindent mi viszünk, van, ahol a ti csapatotok hajt végre, mi pedig irányt adunk és ellenőrzünk.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("gm.faq.q3", "Miért nem működik most a marketingünk?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("gm.faq.a3", "A legtöbb esetben három dolog egyike romlott el: az ajánlat, a tölcsér vagy a mérés. Ha a termékoldalad 0,5%-on konvertál, azt egyetlen hirdetési platform sem tudja nyereségessé tenni, ott a UX-en kell dolgozni. Először megkeressük a valódi szűk keresztmetszetet, és azt javítjuk, ami tényleg hat a bevételre.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("gm.faq.q4", "Mikor kezdenek működni a hirdetések?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("gm.faq.a4", "A legtöbb márka 2–4 héten belül lát jelet, ha a mérés rendben van és az ajánlat stimmel. A valódi skálázás jellemzően 6–12 hét után indul, amikor a kreatív, a közönség és a tölcsér is optimalizált.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("gm.faq.q5", "Mi a jó ROAS?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("gm.faq.a5", "Az, amelyik minden költség után nyereséget hagy: CAC, COGS, díjak. Egy 70%-os margint hozó márka 2x ROAS-nál is nyereséges lehet, míg egy 30%-os margin mellett 4–5x kell csak a nullszaldóhoz. Ezért kezdünk mindig a pénzügyi számokkal, nem a hirdetési fiókkal.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("gm.faq.q6", "Mennyit érdemes költeni hirdetésre?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("gm.faq.a6", "Attól függ, mennyibe kerül nálad egy vevő, mekkora a margód, és mekkora növekedést vársz. Ha egymilliárdos árbevétel mellett 20% növekedést szeretnél, azt nem fogja meghozni havi néhány százezer forint. Vagy a megtérülést tolod feljebb: ennek van felső határa, vagy a büdzsét emeled az ambícióhoz.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("gm.faq.q7", "Milyen csatornákat kezeltek?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("gm.faq.a7", "Meta, Google, TikTok, LinkedIn, Reddit, e-mail és CRM, organikus tartalom, valamint landing oldal tölcsérek. Egy tipikus felállás: organikus social + Meta + Google + e-mail flow-k + CRO.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("gm.faq.q8", "Mennyi időt kell ránk szánnunk?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("gm.faq.a8", "Legalább heti egy megbeszélés, de gyorsabban is tudunk haladni, ha többet fektettek bele. Ti hagyjátok jóvá a stratégiát és adtok visszajelzést, a nehezét mi visszük.") }} />
            </details>
          </div>
        </div>
      </section>
      <section className="on-navy" id="kapcsolat">
        <div className="wrap">
          <div className="cta">
            <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("fc.eyebrow", "Beszéljünk") }} />
            <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("gm.fc.h", "Kíváncsi vagy, mennyivel jobban teljesíthetne a marketinged?") }} />
            <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("gm.fc.lede", "Átnézzük a stratégiádat, a kampányaidat és az analitikádat, hogy kiderüljön, hol kezdődhet a valódi előrelépés.") }} />
            <div className="btns rv">
              <Link href="/kapcsolat" className="btn">
                <span dangerouslySetInnerHTML={{ __html: t("gm.fc.cta1", "Foglalj hívást") }} />
                <span className="ar">→</span>
              </Link>
              <Link href="/kapcsolat" className="btn btn-line" dangerouslySetInnerHTML={{ __html: t("gm.fc.cta2", "Inkább e-mailben kezdenél?") }} />
            </div>
            <p className="rv" style={{ fontSize: ".88rem", color: "#8FA0B8" }} dangerouslySetInnerHTML={{ __html: t("gm.fc.fine", "Harminc perc, prezentáció nélkül. Ha nem látunk közös munkát, a hívás végén ezt mondjuk.") }} />
          </div>
        </div>
      </section>
    </GeShell>
  );
};

export default GrowthMarketing;
