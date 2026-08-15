import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { GeShell } from "../features/ge/components/GeShell";
import { GeSEO } from "../features/ge/components/GeSEO";
import { useGeT } from "../features/ge/i18n/useGeT";

// Ported from growth-engineers-v4/ai-seo.html; DOM structure intentionally
// mirrors the static original (see features/ge/README.md).
const AiSeo: NextPage = () => {
  const t = useGeT();
  return (
    <GeShell page="ai-seo">
      <GeSEO
        title={t("mt.aiseo", "AIO: legyél ott, ahol ma keresnek | Growth Engineers")}
        description={t("md.aiseo", "Láthatóság ChatGPT-ben, Claude-ban és Geminiben. Entitás-optimalizálás, strukturált adat, idézhető tartalom és AI-említések követése.")}
        ogTitle={t("mt.aiseo", "AIO: legyél ott, ahol ma keresnek | Growth Engineers")}
        ogDescription={t("od.aiseo", "Az online keresések egyre nagyobb hányada AI eszközökben történik. Gondoskodunk róla, hogy a márkád a válasz része legyen, ne csak egy találat.")}
      />
      <section className="phero">
        <div className="wrap">
          <div className="phero-grid">
            <div>
              <div className="crumbs rv">
                <Link href="/" dangerouslySetInnerHTML={{ __html: t("crumb.home", "Főoldal") }} />
                <span>/</span>
                <span dangerouslySetInnerHTML={{ __html: t("seo.crumb", "AIO") }} />
              </div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("seo.eyebrow", "AIO") }} />
              <h1 className="rv" dangerouslySetInnerHTML={{ __html: t("seo.h1", "Mi lesz, ha a következő vevőd <mark>rád sem guglizik</mark>?") }} />
              <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("seo.lede", "Az AI-asszisztensek nem listát adnak, hanem választ. Ha a márkád nincs a válaszban, a felhasználó nem is tud róla, hogy létezel.") }} />
              <div className="hero-cta rv">
                <Link href="/kapcsolat" className="btn">
                  <span dangerouslySetInnerHTML={{ __html: t("seo.cta1", "Auditáljuk a weboldalad") }} />
                  <span className="ar">→</span>
                </Link>
                <a href="#modszer" className="btn btn-line" dangerouslySetInnerHTML={{ __html: t("seo.cta2", "Hogyan működik") }} />
              </div>
              <div className="trust rv">
                <span dangerouslySetInnerHTML={{ __html: t("seo.trust1", "<b>ChatGPT</b> · Claude · Gemini") }} />
                <span dangerouslySetInnerHTML={{ __html: t("seo.trust2", "<b>Entitás-</b> és strukturáltadat-optimalizálás") }} />
              </div>
            </div>
            <div className="phero-art rv">
              <Image src="/ge/img/p-suggestcat.webp" width={800} height={538} alt={t("alt1", "AI-alapú keresőfelület, ahol a márka a válasz része")} />
            </div>
          </div>
        </div>
      </section>
      <section className="on-navy">
        <div className="wrap">
          <div className="split">
            <div className="rv">
              <div className="eyebrow" dangerouslySetInnerHTML={{ __html: t("seo.shift.eyebrow", "A váltás") }} />
              <h2 dangerouslySetInnerHTML={{ __html: t("seo.shift.h", "A keresés megváltozott. Nagyon.") }} />
              <p className="lede" style={{ marginTop: "1.2rem" }} dangerouslySetInnerHTML={{ __html: t("seo.shift.lede", "Az online keresések egyre nagyobb hányada már AI eszközökben történik: ChatGPT, Claude, Gemini. Ezek nem találati listát adnak, hanem kész választ.") }} />
              <p dangerouslySetInnerHTML={{ __html: t("seo.shift.p", "Lehetsz továbbra is előkelő helyen a Google-ben, és közben láthatatlan ott, ahol az emberek ma kérdeznek. A két rendszer más jeleket használ, ezért külön munkát igényel.") }} />
            </div>
            <div className="split-media rv">
              <div className="stat stat-coral" style={{ minHeight: "260px", justifyContent: "center", gap: "1.2rem" }}>
                <div className="dnum" style={{ fontSize: "clamp(3.4rem,7vw,5.4rem)" }}>35%</div>
                <div className="lbl" style={{ fontSize: "1rem", lineHeight: "1.45", maxWidth: "26ch" }} dangerouslySetInnerHTML={{ __html: t("seo.shift.stat", "az online kereséseknek ma már AI eszközökben történik, mint a ChatGPT, a Claude és a Gemini.") }} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="modszer">
        <div className="wrap">
          <div className="shead">
            <div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("seo.method.eyebrow", "A módszer") }} />
              <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("seo.method.h", "Mi működik ma az AIO-ban?") }} />
            </div>
            <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("seo.method.lede", "Az AI-keresés kontextust és szándékot néz, nem kulcsszósűrűséget. Az számít, hogy a tartalmad válaszol-e olyan kérdésekre, amiket az emberek tényleg feltesznek: és hogy a gép meg tudja-e bízhatóan érteni, ki vagy.") }} />
          </div>
          <div className="cards3 rv" style={{ marginBottom: "14px" }}>
            <article className="pcard">
              <span className="pnum">01</span>
              <h4 dangerouslySetInnerHTML={{ __html: t("seo.m1.h", "Strukturált adat és entitások") }} />
              <p dangerouslySetInnerHTML={{ __html: t("seo.m1.p", "Úgy rendezzük az adataidat és a jelölést, hogy az AI rendszerek felismerjék a márkádat mint entitást, és összekössék azzal, amit az emberek kérdeznek.") }} />
            </article>
            <article className="pcard">
              <span className="pnum">02</span>
              <h4 dangerouslySetInnerHTML={{ __html: t("seo.m2.h", "Idézhető, kérdésalapú tartalom") }} />
              <p dangerouslySetInnerHTML={{ __html: t("seo.m2.p", "Olyan tartalmat publikálunk, ami valódi kérdésekre válaszol világosan és szakértőn. A cél megtanítani az AI eszközöknek, hogy ki vagy és mit csinálsz.") }} />
            </article>
            <article className="pcard">
              <span className="pnum">03</span>
              <h4 dangerouslySetInnerHTML={{ __html: t("seo.m3.h", "Tekintély és hivatkozások") }} />
              <p dangerouslySetInnerHTML={{ __html: t("seo.m3.p", "Linkeket és említéseket építünk hiteles oldalakról. Az AI modellek ezekre a jelekre támaszkodnak, amikor eldöntik, melyik forrásban bízzanak.") }} />
            </article>
          </div>
          <div className="cards2 rv">
            <article className="pcard">
              <span className="pnum">04</span>
              <h4 dangerouslySetInnerHTML={{ __html: t("seo.m4.h", "Következetesség minden platformon") }} />
              <p dangerouslySetInnerHTML={{ __html: t("seo.m4.p", "A márkatörténeted, az adataid és a leírásaid minden platformon egyezzenek. A vegyes üzenet az embert és a gépet is összezavarja.") }} />
            </article>
            <article className="pcard">
              <span className="pnum">05</span>
              <h4 dangerouslySetInnerHTML={{ __html: t("seo.m5.h", "Folyamatos, friss tartalom") }} />
              <p dangerouslySetInnerHTML={{ __html: t("seo.m5.p", "Készítünk továbbra is hasznos, eredeti és aktuális tartalmat. A friss tudást gyorsabban veszik észre az AI rendszerek, és tovább is tartják.") }} />
            </article>
          </div>
        </div>
      </section>
      <section className="band">
        <div className="wrap">
          <div className="shead">
            <div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("seo.help.eyebrow", "Miben segítünk?") }} />
              <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("seo.help.h", "Optimalizálás a keresés új korszakára") }} />
            </div>
            <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("seo.help.lede", "Gondoskodunk róla, hogy az AI tudja, ki vagy és mit csinálsz: és hogy téged idézzen, amikor a vevőd kérdez.") }} />
          </div>
          <div className="cards4 rv">
            <article className="pcard">
              <h4 dangerouslySetInnerHTML={{ __html: t("seo.h1c.h", "AI-optimalizálás a weboldaladra") }} />
              <p dangerouslySetInnerHTML={{ __html: t("seo.h1c.p", "Úgy rendezzük az adataidat, hogy az AI rendszerek könnyen felismerjék a márkádat, és összekössék azzal, amit az emberek kérdeznek.") }} />
            </article>
            <article className="pcard">
              <h4 dangerouslySetInnerHTML={{ __html: t("seo.h2c.h", "AI tartalomstratégia") }} />
              <p dangerouslySetInnerHTML={{ __html: t("seo.h2c.p", "Olyan tartalmat írunk, amit az emberek szeretnek, és az AI eszközök is értenek. A cél, hogy a márkád legyen a válasz mögötti megbízható forrás.") }} />
            </article>
            <article className="pcard">
              <h4 dangerouslySetInnerHTML={{ __html: t("seo.h3c.h", "Tekintély- és entitás-SEO") }} />
              <p dangerouslySetInnerHTML={{ __html: t("seo.h3c.p", "Több platformon erősítjük az online jelenlétedet, hogy az AI a nagyobb kép részeként lásson, ne elszigetelt oldalként.") }} />
            </article>
            <article className="pcard">
              <h4 dangerouslySetInnerHTML={{ __html: t("seo.h4c.h", "Teljesítménykövetés") }} />
              <p dangerouslySetInnerHTML={{ __html: t("seo.h4c.p", "Figyeljük, hol és hogyan jelenik meg a márkád az AI-válaszokban, hogy mindig tudd, mi működik és min érdemes igazítani.") }} />
            </article>
          </div>
          <div className="rv" style={{ marginTop: "2.4rem" }}>
            <Link href="/kapcsolat" className="btn">
              <span dangerouslySetInnerHTML={{ __html: t("seo.help.cta", "Auditáljuk a weboldalad") }} />
              <span className="ar">→</span>
            </Link>
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
              <summary dangerouslySetInnerHTML={{ __html: t("seo.faq.q1", "Mi az az AIO?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("seo.faq.a1", "Az a folyamat, amivel a márkád, a terméked és a szolgáltatásod láthatóvá válik az AI-alapú keresőfelületeken. Nem egy találati listán szerepelsz, hanem magának a válasznak a részévé válsz.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("seo.faq.q2", "Miben más ez a hagyományos SEO-nál?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("seo.faq.a2", "A hagyományos SEO a keresőmotoros helyezésekre fókuszál. Az AIO arra, hogy a ChatGPT vagy a Claude hivatkozzon rád, amikor válaszol a felhasználónak. A kettő a legjobb eredményt együtt hozza.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("seo.faq.q3", "Kisebb cégeknek is megéri?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("seo.faq.a3", "Feltétlenül. Sőt, a korai adaptálók gyakran komoly előnyt szereznek, mielőtt a nagyobb versenytársak utolérnék őket.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("seo.faq.q4", "Hogyan mérhető az AI-láthatóság?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("seo.faq.a4", "Figyeljük az AI-említéseket, a hivatkozási mintázatokat, és azt, hogyan foglalja össze vagy idézi a tartalmadat az AI-válasz. Ebből látszik, mi működik és hol van még tér.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("seo.faq.q5", "Ez leváltja a hagyományos SEO-t?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("seo.faq.a5", "Egyáltalán nem. A legjobb eredmény a kettő kombinációjából jön, így mindkét világban látható maradsz: a klasszikus találati listán és az AI válaszaiban is.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("seo.faq.q6", "Mikor látok eredményt?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("seo.faq.a6", "Jellemzően néhány hónapon belül indul a javulás, a jelenlegi láthatóságodtól és a tartalmad minőségétől függően. A friss, idézhető tartalmat az AI rendszerek gyorsabban veszik észre.") }} />
            </details>
          </div>
        </div>
      </section>
      <section className="on-navy" id="kapcsolat">
        <div className="wrap">
          <div className="cta">
            <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("fc.eyebrow", "Beszéljünk") }} />
            <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("seo.fc.h", "Készen állsz megjelenni ott, ahol ma tényleg keresnek?") }} />
            <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("seo.fc.lede", "Megnézzük, hogyan teljesít a márkád az AI eszközökben, és megkeressük a leggyorsabban elérhető nyereségeket.") }} />
            <div className="btns rv">
              <Link href="/kapcsolat" className="btn">
                <span dangerouslySetInnerHTML={{ __html: t("seo.fc.cta1", "Auditáljuk a weboldalad") }} />
                <span className="ar">→</span>
              </Link>
              <a href="mailto:info@emergence-engineering.com" className="btn btn-line" dangerouslySetInnerHTML={{ __html: t("seo.fc.cta2", "Inkább e-mailben kezdenél?") }} />
            </div>
            <p className="rv" style={{ fontSize: ".88rem", color: "#8FA0B8" }} dangerouslySetInnerHTML={{ __html: t("seo.fc.fine", "Ha az emberek az AI-tól kérnek választ, a vállalkozásod is megérdemli, hogy benne legyen a beszélgetésben.") }} />
          </div>
        </div>
      </section>
    </GeShell>
  );
};

export default AiSeo;
