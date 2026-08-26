import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { GeShell } from "../features/ge/components/GeShell";
import { GeSEO } from "../features/ge/components/GeSEO";
import { GeFaqJsonLd } from "../features/ge/components/GeFaqJsonLd";
import { useGeT } from "../features/ge/i18n/useGeT";

// Ported from growth-engineers-v4/tartalomgyartas.html; DOM structure intentionally
// mirrors the static original (see features/ge/README.md).
const Tartalomgyartas: NextPage = () => {
  const t = useGeT();
  return (
    <GeShell page="tartalomgyartas">
      <GeFaqJsonLd prefix="con.faq." count={8} />
      <GeSEO
        title={t("mt.content", "Kreatív- és videógyártás: figyelmet szerez, bizalmat épít | Growth Engineering")}
        description={t("md.content", "Üzenet, social-first vizuál, rövid videó és márkatörténet. Kreatív rendszer, ami a hirdetést, az e-mailt és az organikus láthatóságot is kiszolgálja.")}
        ogTitle={t("mt.content", "Kreatív- és videógyártás: figyelmet szerez, bizalmat épít | Growth Engineering")}
        ogDescription={t("od.content", "A modern PPC legfontosabb változója a kreatív. Ha a hirdetés nem állítja meg a görgetést, a legjobb célzás sem segít.")}
      />
      <section className="phero">
        <div className="wrap">
          <div className="phero-grid">
            <div>
              <div className="crumbs rv">
                <Link href="/" dangerouslySetInnerHTML={{ __html: t("crumb.home", "Főoldal") }} />
                <span>/</span>
                <span dangerouslySetInnerHTML={{ __html: t("con.crumb", "Kreatív- és videógyártás") }} />
              </div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("con.hero.eyebrow", "Kreatív · Social · Videó") }} />
              <h1 className="rv" dangerouslySetInnerHTML={{ __html: t("con.hero.h1", "Tartalom, ami <mark>megállítja a görgetést</mark> és bizalmat épít") }} />
              <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("con.hero.lede", "A modern PPC legfontosabb változója a kreatív. Ha a hirdetés nem állítja meg a görgetést, a legjobb célzás sem segít. Üzenet, social-first vizuál, rövid videó és márkatörténet, egy összefüggő rendszerben, ami a hirdetést és az e-mailt is kiszolgálja.") }} />
              <div className="hero-cta rv">
                <Link href="/kapcsolat" className="btn">
                  <span dangerouslySetInnerHTML={{ __html: t("con.hero.cta1", "Kérj kreatív auditot") }} />
                  <span className="ar">→</span>
                </Link>
                <a href="#folyamat" className="btn btn-line" dangerouslySetInnerHTML={{ __html: t("con.hero.cta2", "Hogyan dolgozunk") }} />
              </div>
              <div className="trust rv">
                <span dangerouslySetInnerHTML={{ __html: t("con.hero.trust1", "<b>Social-first</b> kreatív") }} />
                <span dangerouslySetInnerHTML={{ __html: t("con.hero.trust2", "<b>Magyar</b> szövegezés és forgatás") }} />
              </div>
            </div>
            <div className="phero-art rv">
              <Image src="/ge/img/vj-social.webp" width={760} height={810} alt={t("alt21", "Social hirdetéskreatívok, amelyeket egy ügyfélkampányhoz gyártottunk")} />
            </div>
          </div>
        </div>
      </section>
      <section className="band">
        <div className="wrap">
          <div className="shead">
            <div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("con.why.eyebrow", "Miért fontos") }} />
              <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("con.why.h", "Miért a tartalom a növekedés üzemanyaga") }} />
            </div>
            <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("con.why.lede", "A legtöbb ügynökség díszletként kezeli a tartalmat, és olyan hiúsági mutatókat ünnepel, mint a lájk. A tartalom valójában a hirdetés, az e-mail és az organikus láthatóság közös alapanyaga. Ha ez gyenge, mindhárom drágább lesz.") }} />
          </div>
          <div className="cards4 rv">
            <article className="pcard">
              <h4 dangerouslySetInnerHTML={{ __html: t("con.why1.h", "Áthidalja a bizalmi szakadékot") }} />
              <p dangerouslySetInnerHTML={{ __html: t("con.why1.p", "A hasznos, alaposan megírt tartalom emberi hangon szól, és megteremti azt a bizalmat, amitől az idegenből érdeklődő lesz.") }} />
            </article>
            <article className="pcard">
              <h4 dangerouslySetInnerHTML={{ __html: t("con.why2.h", "Csökkenti a súrlódást") }} />
              <p dangerouslySetInnerHTML={{ __html: t("con.why2.p", "A világos kommunikációtól a felhasználó másodpercek alatt megérti az értékajánlatot, ahelyett hogy továbbállna.") }} />
            </article>
            <article className="pcard">
              <h4 dangerouslySetInnerHTML={{ __html: t("con.why3.h", "Hajtja a teljesítménymotort") }} />
              <p dangerouslySetInnerHTML={{ __html: t("con.why3.p", "A modern PPC legfontosabb változója a kreatív. Görgetést megállító anyagok nélkül a legjobb célzás is elbukik.") }} />
            </article>
            <article className="pcard">
              <h4 dangerouslySetInnerHTML={{ __html: t("con.why4.h", "Ismételhető bevételt hoz") }} />
              <p dangerouslySetInnerHTML={{ __html: t("con.why4.p", "Az automatizált életciklus-folyamatok és a márkatörténet egyszeri megtekintésekből hosszú távú kapcsolatot csinálnak.") }} />
            </article>
          </div>
        </div>
      </section>
      <section>
        <div className="wrap">
          <div className="shead">
            <div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("con.do.eyebrow", "Amit csinálunk") }} />
              <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("con.do.h", "Üzenettől a videón át az adatig") }} />
            </div>
            <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("con.do.lede", "Négy összefüggő terület, egyetlen csapattal, amely elég közel ül az üzletedhez ahhoz, hogy a te hangodon szólaljon meg.") }} />
          </div>
          <div className="sblock rv">
            <div>
              <h3 dangerouslySetInnerHTML={{ __html: t("con.s1.h", "Márka- és kommunikációs stratégia") }} />
              <p dangerouslySetInnerHTML={{ __html: t("con.s1.p", "Egy hang, amit fel lehet ismerni hirdetésben, e-mailben és a weboldalon is.") }} />
              <div>
                <Link href="/kapcsolat" className="tlink">
                  <span dangerouslySetInnerHTML={{ __html: t("con.s1.cta", "Kérd az auditot") }} />
                  <span className="ar">→</span>
                </Link>
              </div>
            </div>
            <div className="ilist">
              <div className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("con.s1a.h", "Mély integráció") }} />
                <p dangerouslySetInnerHTML={{ __html: t("con.s1a.p", "Elég sokáig ülünk a csapatoddal ahhoz, hogy lássuk a valódi korlátokat és a vevői valóságot.") }} />
              </div>
              <div className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("con.s1b.h", "Emberközpontú üzenet") }} />
                <p dangerouslySetInnerHTML={{ __html: t("con.s1b.p", "Hasznos, jól megírt tartalom, ami emberi hangon szól és bizalmat épít, nem hangerővel győz.") }} />
              </div>
              <div className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("con.s1c.h", "Stratégiai útitervek") }} />
                <p dangerouslySetInnerHTML={{ __html: t("con.s1c.p", "Az egyszerű kampánykezelésen túllépve skálázható kreatív rendszereket építünk.") }} />
              </div>
            </div>
          </div>
          <div className="sblock rv">
            <div>
              <h3 dangerouslySetInnerHTML={{ __html: t("con.s2.h", "Kreatívfejlesztés és social-first videó") }} />
              <p dangerouslySetInnerHTML={{ __html: t("con.s2.p", "Social-first tartalom, ami gyors figyelemre és tisztaságra épül.") }} />
            </div>
            <div className="ilist">
              <div className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("con.s2a.h", "Vizuális történetmesélés") }} />
                <p dangerouslySetInnerHTML={{ __html: t("con.s2a.p", "A teljes kivitelezést visszük: forgatókönyv, forgatási irány és vágás.") }} />
              </div>
              <div className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("con.s2b.h", "UGC és performance tartalom") }} />
                <p dangerouslySetInnerHTML={{ __html: t("con.s2b.p", "Social-first kreatívok, amik megállítják a görgetést és cselekvéssé alakítják a figyelmet.") }} />
              </div>
              <div className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("con.s2c.h", "Rövid videó") }} />
                <p dangerouslySetInnerHTML={{ __html: t("con.s2c.p", "TikTok-, Reels- és LinkedIn-klipek, amik másodpercek alatt átadják az üzenetet.") }} />
              </div>
            </div>
          </div>
          <div className="sblock rv">
            <div>
              <h3 dangerouslySetInnerHTML={{ __html: t("con.s3.h", "Social stratégia, blog és tartalom") }} />
              <p dangerouslySetInnerHTML={{ __html: t("con.s3.p", "Ott jelenj meg, ahol a közönséged már úgyis időt tölt.") }} />
              <div>
                <Link href="/#szolgaltatasok" className="tlink">
                  <span dangerouslySetInnerHTML={{ __html: t("con.s3.cta", "Hogyan táplálja a paid oldalt") }} />
                  <span className="ar">→</span>
                </Link>
              </div>
            </div>
            <div className="ilist">
              <div className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("con.s3a.h", "Platformra szabott ötletek") }} />
                <p dangerouslySetInnerHTML={{ __html: t("con.s3a.p", "Olyan tartalomra és videóra fókuszálunk, ami bizalmat épít és bevonódást hoz.") }} />
              </div>
              <div className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("con.s3b.h", "Blog és szerkesztői tartalom") }} />
                <p dangerouslySetInnerHTML={{ __html: t("con.s3b.p", "Megkeressük, mire keres valójában a közönséged, és olyan cikkeket írunk, amiket el is olvasnak.") }} />
              </div>
              <div className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("con.s3c.h", "Tekintélyépítés") }} />
                <p dangerouslySetInnerHTML={{ __html: t("con.s3c.p", "A stratégiánk erősíti a relevanciádat és hosszú távon növeli a láthatóságodat.") }} />
              </div>
            </div>
          </div>
          <div className="sblock rv">
            <div>
              <h3 dangerouslySetInnerHTML={{ __html: t("con.s4.h", "Adat és adatvezérelt kreatív rendszerek") }} />
              <p dangerouslySetInnerHTML={{ __html: t("con.s4.p", "Megnézzük, melyik hook hozta a legolcsóbb érdeklődőt, és abból építünk tovább.") }} />
            </div>
            <div className="ilist">
              <div className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("con.s4a.h", "Kreatívelemzés") }} />
                <p dangerouslySetInnerHTML={{ __html: t("con.s4a.p", "Lebontjuk a teljes utat, hogy lássuk, melyik hook és melyik történet mozdítja a számot.") }} />
              </div>
              <div className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("con.s4b.h", "Strukturált kísérletezés") }} />
                <p dangerouslySetInnerHTML={{ __html: t("con.s4b.p", "Rendesen teszteljük a kreatív ötleteket, hogy kiderüljön, mi működik és mi csak zaj.") }} />
              </div>
              <div className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("con.s4c.h", "Hatásalapú mutatók") }} />
                <p dangerouslySetInnerHTML={{ __html: t("con.s4c.p", "Nemet mondunk a lájkok ünneplésére, és azokra a számokra nézünk, amik valódi üzleti hatást tükröznek.") }} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="band" id="folyamat">
        <div className="wrap">
          <div className="shead solo">
            <div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("con.proc.eyebrow", "Folyamat") }} />
              <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("con.proc.h", "Az ötlettől az élő kampányig") }} />
            </div>
          </div>
          <div className="steps s4 rv">
            <div className="step step-1">
              <b dangerouslySetInnerHTML={{ __html: t("con.proc1.k", "1. lépés") }} />
              <h5 dangerouslySetInnerHTML={{ __html: t("con.proc1.h", "Felfedezés és üzenet") }} />
              <p dangerouslySetInnerHTML={{ __html: t("con.proc1.p", "Megismerjük a terméket, a vevőt és a piacot. Kijelöljük a márkahangot és azokat az üzeneteket, amelyekre a kreatív épül.") }} />
            </div>
            <div className="step">
              <b dangerouslySetInnerHTML={{ __html: t("con.proc2.k", "2. lépés") }} />
              <h5 dangerouslySetInnerHTML={{ __html: t("con.proc2.h", "Koncepció és forgatókönyv") }} />
              <p dangerouslySetInnerHTML={{ __html: t("con.proc2.p", "Hook-ok, kreatívirányok és forgatókönyvek. Platformonként külön gondolkodunk, mert nem ugyanaz működik Reelsben és LinkedInen.") }} />
            </div>
            <div className="step">
              <b dangerouslySetInnerHTML={{ __html: t("con.proc3.k", "3. lépés") }} />
              <h5 dangerouslySetInnerHTML={{ __html: t("con.proc3.h", "Gyártás és vágás") }} />
              <p dangerouslySetInnerHTML={{ __html: t("con.proc3.p", "Forgatás, UGC, vágás és magyar szövegezés. A kész anyag mobilra optimalizált, és több variánsban áll rendelkezésre a teszthez.") }} />
            </div>
            <div className="step">
              <b dangerouslySetInnerHTML={{ __html: t("con.proc4.k", "4. lépés") }} />
              <h5 dangerouslySetInnerHTML={{ __html: t("con.proc4.h", "Teszt, mérés, skálázás") }} />
              <p dangerouslySetInnerHTML={{ __html: t("con.proc4.p", "A hirdetési oldalon mérjük, melyik hook hozza a legolcsóbb érdeklődőt, a nyerteseket skálázzuk, a tanulságot visszaforgatjuk.") }} />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="wrap">
          <div className="shead">
            <div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("con.wild.eyebrow", "Kreatív a gyakorlatban") }} />
              <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("con.wild.h", "Kampánykreatív, amit gyártottunk") }} />
            </div>
            <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("con.wild.lede", "A VezessJól számára készített hirdetéskreatív, ugyanaz az üzenet fut a landing oldalakon, hogy a kattintás és az oldal ne mondjon ellent egymásnak.") }} />
          </div>
          <div className="split rv">
            <div className="split-media">
              <Image src="/ge/img/vj-social.webp" width={760} height={810} alt={t("alt22", "A VezessJól kampányhoz gyártott social hirdetéskreatívok")} />
            </div>
            <div>
              <h3 dangerouslySetInnerHTML={{ __html: t("con.wild.sh", "Hirdetéstől a landing oldalig összehangolva") }} />
              <p className="lede" style={{ marginTop: "1rem" }} dangerouslySetInnerHTML={{ __html: t("con.wild.p", "A célunk az volt, hogy a VezessJól elérje a megfelelő közönséget, és az érdeklődésből mérhető eredmény legyen.") }} />
              <ul className="bullets">
                <li dangerouslySetInnerHTML={{ __html: t("con.wild.b1", "Célzott social kampányok, testre szabott vizuállal és több szövegvariánssal.") }} />
                <li dangerouslySetInnerHTML={{ __html: t("con.wild.b2", "A hirdetés üzenetét összehangoltuk az újratervezett landing oldalakkal a magasabb konverzióért.") }} />
                <li dangerouslySetInnerHTML={{ __html: t("con.wild.b3", "Az eredményeket szorosan követtük, és gyors korrekciókkal javítottuk a teljesítményt.") }} />
              </ul>
              <div style={{ marginTop: "1.6rem" }}>
                <Link href="/esettanulmanyok" className="tlink">
                  <span dangerouslySetInnerHTML={{ __html: t("con.wild.cta", "Olvasd el az esettanulmányt") }} />
                  <span className="ar">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="band">
        <div className="wrap">
          <div className="cases">
            <article className="case rv">
              <div className="case-media">
                <div className="stat stat-coral" style={{ width: "100%", minHeight: "220px", justifyContent: "center", gap: "1rem" }}>
                  <div className="dnum" style={{ fontSize: "clamp(2.6rem,5vw,3.6rem)" }}>107 Ft</div>
                  <div className="lbl" style={{ fontSize: ".95rem", maxWidth: "24ch" }} dangerouslySetInnerHTML={{ __html: t("con.cs.stat", "legalacsonyabb landing­oldal-megtekintési költség") }} />
                </div>
              </div>
              <div className="case-body">
                <div className="eyebrow" dangerouslySetInnerHTML={{ __html: t("con.cs.eyebrow", "Esettanulmány") }} />
                <h3 dangerouslySetInnerHTML={{ __html: t("con.cs.h", "Babalesz, hogyan találtuk meg a nyerő vizuális hookot") }} />
                <p dangerouslySetInnerHTML={{ __html: t("con.cs.p", "Egy 30 napos, ingyenes e-könyvre épülő kampányban több kreatív megközelítést teszteltünk: vágyott állapot, kontextus és termékfókusz. A jógatanár ajánlására épülő verzió hozta a legalacsonyabb konverziós költséget, míg a fiatal várandós nőt ábrázoló kreatív bizonyult a legjobban skálázhatónak.") }} />
                <div style={{ marginTop: "1.4rem" }}>
                  <Link href="/esettanulmanyok" className="tlink">
                    <span dangerouslySetInnerHTML={{ __html: t("con.cs.read", "Több esettanulmány") }} />
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
              <summary dangerouslySetInnerHTML={{ __html: t("con.faq.q1", "Mennyiben más ez, mint egy hagyományos kreatívügynökség?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("con.faq.a1", "Az ügynökségek leszállítanak egy videót, mi a teljesítményért felelünk. A kreatívot a hirdetés, az e-mail és az organikus tartalom közös rendszereként kezeljük, és azt mérjük, ami a számlákat fizeti, nem a megtekintésszámot.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("con.faq.q2", "Ti forgattok, vagy csak a stratégiát adjátok?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("con.faq.a2", "Mindkettőt. A forgatókönyv, a forgatási irány, a vágás és a márkatörténet ugyanabban a csapatban van, mint a csatornastratégia, mert a kreatív a modern performance marketing legnagyobb tőkeáttételű változója.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("con.faq.q3", "Ki írja a szövegeket?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("con.faq.a3", "Mi, magyarul, a márkád hangján, nem angolból fordítva. Az induláskor átveszünk tőled minden meglévő anyagot, és ha van, beépítjük a saját stílusútmutatódat. Nemzetközi piacra ugyanabban a struktúrában készül angol és további nyelvi verzió.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("con.faq.q4", "Kell hozzá saját forgatás, vagy elég a UGC?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("con.faq.a4", "Attól függ, mit mér a piac. Sok kategóriában a nyers, hiteles UGC veri a stúdiós anyagot, máshol a letisztult márkavideó teljesít jobban. Ezért nem elméletben döntjük el: több irányt tesztelünk, és az adat mondja meg, mibe érdemes skálázni.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("con.faq.q5", "Hogyan méritek, hogy a tartalom működik-e?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("con.faq.a5", "Nem a lájkok alapján. Végigmérjük a teljes utat a hooktól a landing oldali megtekintési költségig és a konverzióig, és azt nézzük, melyik kreatív mozdítja ténylegesen a bevételt.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("con.faq.q6", "Van már meglévő tartalmunk. Újra kell kezdeni?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("con.faq.a6", "Ritkán. A legtöbb esetben a meglévő anyagot újrahasznosítjuk és variánsokra bontjuk, nem kidobjuk. Az audit pont azt mondja meg, mi az, ami már működik, mit érdemes átvágni, és mi hiányzik teljesen.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("con.faq.q7", "Milyen platformokra gyártotok?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("con.faq.a7", "Meta (Facebook, Instagram), TikTok, YouTube, LinkedIn és a rövid videós felületek, plusz a bloghoz és e-mailhez tartozó tartalom. Egy rendszerként kezeljük őket, közös üzenettel és méréssel, nem külön silókban.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("con.faq.q8", "Mennyi időt kell rászánnunk?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("con.faq.a8", "Az induláskor egy koncentráltabb blokk az auditra és a márkahang átvételére, utána heti ritmusban dolgozunk. A tartalmi jóváhagyás a ti oldalatokon van, a forgatást, vágást és tesztelést mi visszük.") }} />
            </details>
          </div>
        </div>
      </section>
      <section className="on-navy" id="kapcsolat">
        <div className="wrap">
          <div className="cta">
            <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("fc.eyebrow", "Beszéljünk") }} />
            <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("con.fc.h", "Kíváncsi vagy, mennyivel keményebben dolgozhatna a tartalmad?") }} />
            <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("con.fc.lede", "Átnézzük a márkahangodat, a kreatív anyagaidat és a social stratégiádat, hogy kiderüljön, hol veszíted el a figyelmet, és hogyan lesz belőle bizalom.") }} />
            <div className="btns rv">
              <Link href="/kapcsolat" className="btn">
                <span dangerouslySetInnerHTML={{ __html: t("con.fc.cta1", "Foglalj hívást") }} />
                <span className="ar">→</span>
              </Link>
              <a href="mailto:info@emergence-engineering.com" className="btn btn-line" dangerouslySetInnerHTML={{ __html: t("con.fc.cta2", "Inkább e-mailben kezdenél?") }} />
            </div>
            <p className="rv" style={{ fontSize: ".88rem", color: "#8FA0B8" }} dangerouslySetInnerHTML={{ __html: t("con.fc.fine", "Harminc perc, prezentáció nélkül. Ha nem látunk közös munkát, a hívás végén ezt mondjuk.") }} />
          </div>
        </div>
      </section>
    </GeShell>
  );
};

export default Tartalomgyartas;
