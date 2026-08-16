import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { GeShell } from "../features/ge/components/GeShell";
import { GeSEO } from "../features/ge/components/GeSEO";
import { useGeT } from "../features/ge/i18n/useGeT";

// Ported from growth-engineers-v4/webfejlesztes.html; DOM structure intentionally
// mirrors the static original (see features/ge/README.md).
const Webfejlesztes: NextPage = () => {
  const t = useGeT();
  return (
    <GeShell page="webfejlesztes">
      <GeSEO
        title={t("mt.web", "Web- és appfejlesztés, ami veled együtt skálázódik, Growth Engineering")}
        description={t("md.web", "MVP-től platformig: React, Next.js, TypeScript, Node, Supabase. Webshop, integrációk, AI/LLM funkciók, DevOps és rich text editor (ProseMirror, TipTap) szakértelem.")}
        ogTitle={t("mt.web", "Web- és appfejlesztés, ami veled együtt skálázódik, Growth Engineering")}
        ogDescription={t("od.web", "Ötlettől a termékig építünk szoftvert. A kód a tiétek, a repóitokban, dokumentálva.")}
      />
      <section className="phero">
        <div className="wrap">
          <div className="phero-grid">
            <div>
              <div className="crumbs rv">
                <Link href="/" dangerouslySetInnerHTML={{ __html: t("crumb.home", "Főoldal") }} />
                <span>/</span>
                <span dangerouslySetInnerHTML={{ __html: t("web.crumb", "Webfejlesztés") }} />
              </div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("web.eyebrow", "Fejlesztés") }} />
              <h1 className="rv" dangerouslySetInnerHTML={{ __html: t("web.h1", "Web- és appfejlesztés, ami <mark>veled együtt</mark> skálázódik") }} />
              <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("web.lede", "Ötlettől a termékig építünk szoftvert: megbízhatót, skálázhatót, felesleges körök nélkül. A kód a tiétek, a saját repóitokban, dokumentálva, hogy bármikor át tudjátok venni.") }} />
              <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("web.lede2", "Akár MVP kell, akár egy meglévő platform felújítása, egy landing oldal vagy teljes webshop-fejlesztés. Ha félbehagyott projekt van, azt is átvesszük.") }} />
              <div className="hero-cta rv">
                <Link href="/kapcsolat" className="btn">
                  <span dangerouslySetInnerHTML={{ __html: t("web.cta1", "Foglalj hívást") }} />
                  <span className="ar">→</span>
                </Link>
                <a href="#work" className="btn btn-line" dangerouslySetInnerHTML={{ __html: t("web.cta2", "Referenciák") }} />
              </div>
              <div className="trust rv">
                <span dangerouslySetInnerHTML={{ __html: t("web.trust1", "<b>React</b> · Next.js · TypeScript") }} />
                <span dangerouslySetInnerHTML={{ __html: t("web.trust2", "<b>Node</b> · Supabase · PostgreSQL") }} />
                <span dangerouslySetInnerHTML={{ __html: t("web.trust3", "<b>ProseMirror</b> nyílt forrású hozzájárulások") }} />
              </div>
            </div>
            <div className="phero-art rv">
              <Image src="/ge/img/p-stripe.webp" width={600} height={364} alt={t("alt29", "Számlázás-Stripe integráció, amit fejlesztettünk")} aria-label={t("web.hero.art.alt", "")} />
            </div>
          </div>
        </div>
      </section>
      <section id="work">
        <div className="wrap">
          <div className="shead">
            <div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("web.ref.eyebrow", "Referenciák") }} />
              <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("web.ref.h", "Termékek és weboldalak, amiket építettünk") }} />
            </div>
            <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("web.ref.lede", "Startup-termékek, ahol korán csatlakoztunk, és hazai weboldalak, amiket mi terveztünk és fejlesztettünk.") }} />
          </div>
          <div className="scrollhint rv" style={{ marginTop: "1.1rem" }} dangerouslySetInnerHTML={{ __html: t("web.ref.hint", "Görgess tovább <b>→</b>") }} />
          <div className="refscroll rv">
            <a className="refcard" href="https://grofie.com/" rel="noopener">
              <div className="shot cover">
                <Image src="/ge/img/s-grofie.jpg" alt="A Grofie weboldala" width={1280} height={800} />
              </div>
              <div className="rb">
                <div className="rk" dangerouslySetInnerHTML={{ __html: t("web.r1.k", "Weboldal · Növénydekoráció") }} />
                <div className="rn">Grofie</div>
                <p className="rp" dangerouslySetInnerHTML={{ __html: t("web.r1.p", "Prémium irodai növénydekorációs márka weboldala: tervezéstől a kivitelezésig vezetett út és ajánlatkérő tölcsér.") }} />
              </div>
            </a>
            <a className="refcard" href="https://vezessjol.hu/" rel="noopener">
              <div className="shot cover">
                <Image src="/ge/img/s-vezessjol.jpg" alt="A VezessJól főoldala" width={1280} height={800} />
              </div>
              <div className="rb">
                <div className="rk" dangerouslySetInnerHTML={{ __html: t("web.r10.k", "Weboldal · Konverzió") }} />
                <div className="rn">VezessJól</div>
                <p className="rp" dangerouslySetInnerHTML={{ __html: t("web.r10.p", "A gyakorló vezetés oldala, amit újraterveztünk: +93% konverzió és feleannyi érdeklődőszerzési költség.") }} />
              </div>
            </a>
            <a className="refcard" href="https://adagolas.netamin.hu/" rel="noopener">
              <div className="shot cover">
                <Image src="/ge/img/s-netamin.jpg" alt="A Netamin napi vitamin tervezője" width={1280} height={800} />
              </div>
              <div className="rb">
                <div className="rk" dangerouslySetInnerHTML={{ __html: t("web.r11.k", "Webalkalmazás <span class=\"etag\">E-commerce</span>") }} />
                <div className="rn">Netamin adagolás</div>
                <p className="rp" dangerouslySetInnerHTML={{ __html: t("web.r11.p", "Napi vitamin-tervező eszköz, amit a Netaminnak fejlesztettünk: személyre szabott adagolási terv pár kattintásból.") }} />
              </div>
            </a>
            <a className="refcard" href="https://bizdrankazoldet.hu/" rel="noopener">
              <div className="shot cover">
                <Image src="/ge/img/s-bizdrank.jpg" alt="A Bízd Ránk a Zöldet weboldala" width={1280} height={800} />
              </div>
              <div className="rb">
                <div className="rk" dangerouslySetInnerHTML={{ __html: t("web.r2.k", "Weboldal · Irodai növények") }} />
                <div className="rn">Bízd Ránk a Zöldet</div>
                <p className="rp" dangerouslySetInnerHTML={{ __html: t("web.r2.p", "Irodai növények és növénygondozás szolgáltatás-oldala: konverzióra írt szöveg és letisztult ajánlatkérési út.") }} />
              </div>
            </a>
            <a className="refcard" href="https://plantart.hu/webshop/" rel="noopener">
              <div className="shot cover">
                <Image src="/ge/img/s-plantartshop.jpg" alt="A Plantart webshop nyitóoldala" width={1280} height={800} />
              </div>
              <div className="rb">
                <div className="rk" dangerouslySetInnerHTML={{ __html: t("web.r9.k", "Webshop <span class=\"etag\">E-commerce</span>") }} />
                <div className="rn">Plantart webshop</div>
                <p className="rp" dangerouslySetInnerHTML={{ __html: t("web.r9.p", "Növény-webshop, amit mi terveztünk és fejlesztettünk: keresés, kategóriák és vásárlási út egy 2 milliárd forintos márkának.") }} />
              </div>
            </a>
            <a className="refcard" href="https://vezessjolautosiskola.hu/" rel="noopener">
              <div className="shot cover">
                <Image src="/ge/img/s-vjautosiskola.jpg" alt="A VezessJól Autósiskola főoldala" width={1280} height={800} />
              </div>
              <div className="rb">
                <div className="rk" dangerouslySetInnerHTML={{ __html: t("web.r12.k", "Weboldal · Autósiskola") }} />
                <div className="rn">VezessJól Autósiskola</div>
                <p className="rp" dangerouslySetInnerHTML={{ __html: t("web.r12.p", "Az új autósiskola-üzletág oldala nulláról: beiratkozási tölcsérrel és E-Titán integrációval.") }} />
              </div>
            </a>
            <Link className="refcard" href="/kapcsolat">
              <div className="shot">
                <Image src="/ge/img/r-skiff.png" alt="A Skiff kollaborációs szerkesztője" width={1624} height={1086} />
              </div>
              <div className="rb">
                <div className="rk" dangerouslySetInnerHTML={{ __html: t("web.r3.k", "A Notion felvásárolta") }} />
                <div className="rn">Skiff</div>
                <p className="rp" dangerouslySetInnerHTML={{ __html: t("web.r3.p", "Kulcsfunkciókat fejlesztettünk a végponttól végpontig titkosított kollaborációs platformhoz. Az eredmény: felvásárlás a Notion részéről.") }} />
              </div>
            </Link>
            <Link className="refcard" href="/kapcsolat">
              <div className="shot">
                <Image src="/ge/img/r-memrise.png" alt="A Memrise beszélgető nyelvi tutora" width={1300} height={800} />
              </div>
              <div className="rb">
                <div className="rk" dangerouslySetInnerHTML={{ __html: t("web.r4.k", "AI nyelvi tutor") }} />
                <div className="rn">Memrise</div>
                <p className="rp" dangerouslySetInnerHTML={{ __html: t("web.r4.p", "AI-alapú beszélgető tanár, amely azonnali visszajelzést ad a beszédre és a kiejtésre.") }} />
              </div>
            </Link>
            <Link className="refcard" href="/kapcsolat">
              <div className="shot">
                <Image src="/ge/img/r-axdraft.png" alt="Az Axdraft jogi szerkesztője" width={680} height={380} />
              </div>
              <div className="rb">
                <div className="rk" dangerouslySetInnerHTML={{ __html: t("web.r5.k", "Kollaboratív jogi szerkesztő") }} />
                <div className="rn">Axdraft</div>
                <p className="rp" dangerouslySetInnerHTML={{ __html: t("web.r5.p", "Egyedi jogi dokumentumszerkesztő ügyvédi irodáknak, valós idejű közös munkára építve.") }} />
              </div>
            </Link>
            <Link className="refcard" href="/kapcsolat">
              <div className="shot">
                <Image src="/ge/img/r-lex.png" alt="A Lex kollaboratív szövegszerkesztője" width={2340} height={1342} />
              </div>
              <div className="rb">
                <div className="rk" dangerouslySetInnerHTML={{ __html: t("web.r6.k", "Kollaboratív szerkesztő") }} />
                <div className="rn">Lex</div>
                <p className="rp" dangerouslySetInnerHTML={{ __html: t("web.r6.p", "Közös szövegszerkesztő íróknak és szerkesztőiknek.") }} />
              </div>
            </Link>
            <Link className="refcard" href="/kapcsolat">
              <div className="shot">
                <Image src="/ge/img/r-swaralink.png" alt="SwaraLink Bluetooth tesztkeretrendszer" width={370} height={320} />
              </div>
              <div className="rb">
                <div className="rk" dangerouslySetInnerHTML={{ __html: t("web.r7.k", "Bluetooth tesztelés") }} />
                <div className="rn">SwaraLink</div>
                <p className="rp" dangerouslySetInnerHTML={{ __html: t("web.r7.p", "Tesztkeretrendszer egy új Bluetooth-termékhez, gyártósori minőségbiztosítással.") }} />
              </div>
            </Link>
            <Link className="refcard" href="/kapcsolat">
              <div className="shot">
                <Image src="/ge/img/r-filtered.png" alt="Filtered tartalomszervező eszköz" width={858} height={557} />
              </div>
              <div className="rb">
                <div className="rk" dangerouslySetInnerHTML={{ __html: t("web.r8.k", "Tartalomszervezés") }} />
                <div className="rn">Filtered</div>
                <p className="rp" dangerouslySetInnerHTML={{ __html: t("web.r8.p", "Megoldás, amivel cégek rendszerezik a tartalmaikat a könnyebb mindennapi használatért.") }} />
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="wrap">
          <div className="shead">
            <div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("web.cap.eyebrow", "Kompetenciák") }} />
              <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("web.cap.h", "A teljes stack, egy csapat") }} />
            </div>
            <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("web.cap.lede", "Frontend, backend, AI, infrastruktúra és integrációk: olyan emberek kezében, akik nap mint nap beszélnek egymással.") }} />
          </div>
          <div className="sblock rv">
            <div>
              <h3 dangerouslySetInnerHTML={{ __html: t("web.fe.h", "Frontend fejlesztés") }} />
              <p dangerouslySetInnerHTML={{ __html: t("web.fe.p", "A designból működő felület lesz: akadálymentes, gyors és mobilon is használható. Minden interakciót gondosan megtervezünk, hogy a terméked kézenfekvő és megbízható legyen.") }} />
            </div>
            <div className="ilist">
              <article className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("web.fe1.h", "React.js") }} />
                <p dangerouslySetInnerHTML={{ __html: t("web.fe1.p", "Gyors, interaktív felhasználói felületek komponensalapú architektúrával.") }} />
              </article>
              <article className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("web.fe2.h", "Next.js") }} />
                <p dangerouslySetInnerHTML={{ __html: t("web.fe2.p", "Szerveroldali renderelés és statikus generálás a teljesítményért és a SEO-ért.") }} />
              </article>
              <article className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("web.fe3.h", "TypeScript") }} />
                <p dangerouslySetInnerHTML={{ __html: t("web.fe3.p", "Típusbiztonság, ami korán elkapja a hibákat és karbantarthatóvá teszi a kódot.") }} />
              </article>
              <article className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("web.fe4.h", "ProseMirror és TipTap") }} />
                <p dangerouslySetInnerHTML={{ __html: t("web.fe4.p", "Egyedi szövegszerkesztők szigorú dokumentummodellel, valós idejű együttműködéssel és AI funkciókkal.") }} />
              </article>
            </div>
          </div>
          <div className="sblock rv">
            <div>
              <h3 dangerouslySetInnerHTML={{ __html: t("web.be.h", "Backend fejlesztés") }} />
              <p dangerouslySetInnerHTML={{ __html: t("web.be.p", "Minden gördülékeny élmény mögött egy erős motor van. Robusztus, skálázható backend rendszereket építünk, amelyek terhelés alatt is stabilak, és egy év múlva is érthetők maradnak.") }} />
              <div>
                <Link href="/kapcsolat" className="tlink">
                  <span dangerouslySetInnerHTML={{ __html: t("web.be.link", "Foglalj hívást") }} />
                  <span className="ar">→</span>
                </Link>
              </div>
            </div>
            <div className="ilist">
              <article className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("web.be1.h", "Node.js") }} />
                <p dangerouslySetInnerHTML={{ __html: t("web.be1.p", "JavaScript a szerveren, valós idejű és nagy áteresztőképességű szolgáltatásokhoz.") }} />
              </article>
              <article className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("web.be2.h", "Supabase") }} />
                <p dangerouslySetInnerHTML={{ __html: t("web.be2.p", "Érett, konvenciókra épülő platform, ami felgyorsítja a fejlesztést.") }} />
              </article>
              <article className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("web.be3.h", "PostgreSQL") }} />
                <p dangerouslySetInnerHTML={{ __html: t("web.be3.p", "A rendszer teljesítménykritikus részeire, a hatékonysága és a párhuzamos kezelése miatt.") }} />
              </article>
              <article className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("web.be4.h", "Firebase") }} />
                <p dangerouslySetInnerHTML={{ __html: t("web.be4.p", "Kiváló automatizáláshoz, adatfeldolgozáshoz és AI/ML munkához.") }} />
              </article>
            </div>
          </div>
          <div className="sblock rv">
            <div>
              <h3 dangerouslySetInnerHTML={{ __html: t("web.ai.h", "AI és LLM") }} />
              <p dangerouslySetInnerHTML={{ __html: t("web.ai.p", "Munkafolyamat-automatizálástól a beszélgető felületekig építünk intelligenciát a termékedbe. Először azt nézzük meg, hol spórol az AI valódi munkaórát, és hol csak látványos.") }} />
            </div>
            <div className="ilist">
              <article className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("web.ai1.h", "Egyedi LLM chatbotok") }} />
                <p dangerouslySetInnerHTML={{ __html: t("web.ai1.p", "Beszélgető ügynökök a vezető AI modellekre építve.") }} />
              </article>
              <article className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("web.ai2.h", "Okos keresés és összefoglalás") }} />
                <p dangerouslySetInnerHTML={{ __html: t("web.ai2.p", "Vektoralapú keresés és AI-generált dokumentum-összefoglalók.") }} />
              </article>
              <article className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("web.ai3.h", "Prediktív személyre szabás") }} />
                <p dangerouslySetInnerHTML={{ __html: t("web.ai3.p", "Pipeline-ok, amik személyre szabott élményt és intelligens ajánlásokat hajtanak.") }} />
              </article>
            </div>
          </div>
          <div className="sblock rv">
            <div>
              <h3 dangerouslySetInnerHTML={{ __html: t("web.cl.h", "Felhő és DevOps") }} />
              <p dangerouslySetInnerHTML={{ __html: t("web.cl.p", "Kiadás, monitorozás, skálázás. A CI/CD pipeline-októl a felhős hostingig a teljesítmény és a rendelkezésre állás a mi dolgunk, hogy magabiztosan gyorsan mozoghass.") }} />
            </div>
            <div className="ilist">
              <article className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("web.cl1.h", "AWS, Google Cloud, Azure") }} />
                <p dangerouslySetInnerHTML={{ __html: t("web.cl1.p", "Vállalati szintű infrastruktúra globális léptékkel és megbízhatósággal.") }} />
              </article>
              <article className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("web.cl2.h", "Docker és Kubernetes") }} />
                <p dangerouslySetInnerHTML={{ __html: t("web.cl2.p", "Konténerizáció és orkesztráció a könnyebb kiadásért, skálázásért és konzisztenciáért.") }} />
              </article>
              <article className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("web.cl3.h", "CI/CD pipeline-ok") }} />
                <p dangerouslySetInnerHTML={{ __html: t("web.cl3.p", "Automatizált build, teszt és deploy, hogy a frissítések gyorsan és biztonságosan menjenek ki.") }} />
              </article>
            </div>
          </div>
          <div className="sblock rv">
            <div>
              <h3 dangerouslySetInnerHTML={{ __html: t("web.api.h", "API-k és integrációk") }} />
              <p dangerouslySetInnerHTML={{ __html: t("web.api.p", "Összekötjük a termékeket, a szolgáltatásokat és az adatfolyamokat, hogy ne kelljen kézzel másolni az adatot két rendszer között, és a csapataid időt spóroljanak.") }} />
              <p className="muted rv" style={{ marginTop: "1rem", fontSize: ".92rem" }} dangerouslySetInnerHTML={{ __html: t("web.api.note", "Magyar specifikum, amit gyakran kérnek tőlünk: Számlázz.hu és NAV-integráció Stripe mellé, Shoprenter és UNAS összekötés Klaviyóval, GLS és Foxpost szállítási státusz szinkron.") }} />
            </div>
            <div className="ilist">
              <article className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("web.api1.h", "REST, GraphQL, XML API") }} />
                <p dangerouslySetInnerHTML={{ __html: t("web.api1.p", "Szabványos protokollok, amikkel a rendszerek hatékonyan beszélgetnek.") }} />
              </article>
              <article className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("web.api2.h", "Vállalati integrációk") }} />
                <p dangerouslySetInnerHTML={{ __html: t("web.api2.p", "Salesforce, SAP és belső rendszerek összekötése.") }} />
              </article>
              <article className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("web.api3.h", "Külső szolgáltatások") }} />
                <p dangerouslySetInnerHTML={{ __html: t("web.api3.p", "Fizetés, azonosítás, üzenetküldés, analitika és e-mail platformok.") }} />
              </article>
              <article className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("web.api4.h", "Webshop és CRM") }} />
                <p dangerouslySetInnerHTML={{ __html: t("web.api4.p", "Webshop-, számlázó- és CRM-integrációk, hogy a marketing is valós adatból dolgozzon.") }} />
              </article>
            </div>
          </div>
          <div className="sblock rv">
            <div>
              <h3 dangerouslySetInnerHTML={{ __html: t("web.rte.h", "Rich text editor") }} />
              <p dangerouslySetInnerHTML={{ __html: t("web.rte.p", "Egyedi WYSIWYG felületektől a valós idejű, több felhasználós szerkesztőkig építünk fejlett szövegszerkesztő eszközöket. A ProseMirror-ökoszisztémába nyílt forrású bővítményekkel is hozzájárultunk.") }} />
              <div>
                <Link href="/kapcsolat" className="tlink">
                  <span dangerouslySetInnerHTML={{ __html: t("web.rte.link", "Beszéljünk a projektről") }} />
                  <span className="ar">→</span>
                </Link>
              </div>
            </div>
            <div className="ilist">
              <article className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("web.rte1.h", "WYSIWYG szerkesztők") }} />
                <p dangerouslySetInnerHTML={{ __html: t("web.rte1.p", "ProseMirror, TipTap és Slate.js alapon, pontosan a terméked igényeire szabva.") }} />
              </article>
              <article className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("web.rte2.h", "Kollaboratív felületek") }} />
                <p dangerouslySetInnerHTML={{ __html: t("web.rte2.p", "Valós idejű, több felhasználós szerkesztés CRDT vagy WebSocket szinkronnal.") }} />
              </article>
              <article className="icard">
                <h4 dangerouslySetInnerHTML={{ __html: t("web.rte3.h", "AI-alapú szerkesztők") }} />
                <p dangerouslySetInnerHTML={{ __html: t("web.rte3.p", "Javaslatok, összefoglalók, újraírás és tartalomjavítás közvetlenül a szerkesztőben.") }} />
              </article>
            </div>
          </div>
        </div>
      </section>
      <section className="on-navy" id="folyamat">
        <div className="wrap">
          <div className="shead">
            <div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("web.proc.eyebrow", "Hogyan dolgozunk") }} />
              <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("web.proc.h", "A fejlesztési folyamatunk") }} />
            </div>
            <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("web.proc.lede", "Három fázis, és az első az oka annak, hogy a másik kettő ütemben marad.") }} />
          </div>
          <div className="steps s3 rv">
            <article className="step">
              <div className="n" dangerouslySetInnerHTML={{ __html: t("web.proc.s1.n", "1. FÁZIS") }} />
              <h4 dangerouslySetInnerHTML={{ __html: t("web.proc.s1.h", "Stratégiai felmérés") }} />
              <p dangerouslySetInnerHTML={{ __html: t("web.proc.s1.p", "Megismerjük a célokat, a közönséget és a meglévő rendszereket, mielőtt bármit kódolnánk: hogy a jó dolgot építsük, ne csak valamit. Ez jellemzően egy-két hét.") }} />
            </article>
            <article className="step">
              <div className="n" dangerouslySetInnerHTML={{ __html: t("web.proc.s2.n", "2. FÁZIS") }} />
              <h4 dangerouslySetInnerHTML={{ __html: t("web.proc.s2.h", "Tervezés") }} />
              <p dangerouslySetInnerHTML={{ __html: t("web.proc.s2.p", "Világos mérföldkövek, becslések és a leírt feltételezések. Tudni fogod, mi mikorra készül el.") }} />
            </article>
            <article className="step">
              <div className="n" dangerouslySetInnerHTML={{ __html: t("web.proc.s3.n", "3. FÁZIS") }} />
              <h4 dangerouslySetInnerHTML={{ __html: t("web.proc.s3.h", "Építés és optimalizálás") }} />
              <p dangerouslySetInnerHTML={{ __html: t("web.proc.s3.p", "Heti sprintekben szállítunk, figyeljük a valós használatot, és folyamatosan finomítunk. Az élesítés az, ahol a hasznos adat elkezd érkezni, nem ahol a munka véget ér.") }} />
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
            <div className="faq-group" dangerouslySetInnerHTML={{ __html: t("web.faq.g1", "Együttműködés") }} />
            <details open>
              <summary dangerouslySetInnerHTML={{ __html: t("web.faq.q1", "Milyen fejlesztési projekteket vállaltok?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("web.faq.a1", "Teljes termékeket építünk és skálázunk: SaaS platformok, belső eszközök, dashboardok, egyedi szerkesztők, AI funkciók, webshopok és vállalati integrációk. Ha éles környezetben kell futnia és túl kell élnie a növekedést, az belefér.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("web.faq.q2", "Kell technikai tudás ahhoz, hogy veletek dolgozzunk?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("web.faq.a2", "Nem. Fordítunk az üzleti célok és a technikai döntések között, és a kompromisszumokat költség, sebesség és kockázat mentén magyarázzuk el, nem keretrendszernevekkel. Van, aki nem technikai alapító, és van, aki senior mérnöki csapat: ahhoz igazodunk, ahol tartotok.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("web.faq.q3", "Kié a kód?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("web.faq.a3", "A tiétek. Minden kód, dokumentáció és eszköz teljes egészében hozzátok tartozik, és a ti repository-tokban tároljuk, az első naptól kezdve.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("web.faq.q4", "Dolgoztok belső csapatokkal is?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("web.faq.a4", "Rendszeresen. Becsatlakozunk a meglévő csapatba, kódot review-zunk, konvenciókat és CI-t állítunk be, majd úgy adjuk vissza a kódbázist, hogy a fejlesztőitek nélkülünk is tovább tudnak haladni.") }} />
            </details>
            <div className="faq-group" dangerouslySetInnerHTML={{ __html: t("web.faq.g2", "A fejlesztési folyamat") }} />
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("web.faq.q5", "Átvesztek meglévő, félbehagyott projektet?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("web.faq.a5", "Igen. Egy technikai audittal kezdünk: feltérképezzük, mi van, mi menthető és mit kell cserélni, majd olyan tervet javaslunk, amivel folyamatosan szállíthattok, miközben az alapok rendbe jönnek.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("web.faq.q6", "Hogyan becsültök határidőt?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("web.faq.a6", "Egy lebontott tervből, nem tippből. A felmérés után fázisokra bontott becslést kaptok a leírt feltételezésekkel: így ha változik a scope, egyértelmű, mi mozdul és miért. Kisebb funkciók pár nap, egy dashboard négy–hat hét, egy teljes platform jellemzően nyolc–tizenkét hét.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("web.faq.q7", "Mi történik az élesítés után?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("web.faq.a7", "Monitorozás, iteráció és támogatás. Az élesítés az a pont, ahol a valós használat elkezdi megmutatni, mit érdemes legközelebb építeni, ezért a legtöbb együttműködés folytatódik az optimalizálási fázisban. Át is tudjuk adni a rendszert a belső csapatnak.") }} />
            </details>
            <div className="faq-group" dangerouslySetInnerHTML={{ __html: t("web.faq.g3", "Technikai kompetenciák") }} />
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("web.faq.q8", "Hogyan biztosítjátok a kódminőséget?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("web.faq.a8", "TypeScript végig, kód-review minden változtatáson, automatizált tesztek ott, ahol megérik, és CI/CD pipeline-ok, amik a buildet, tesztet és deployt megismételhetővé teszik. Tiszta architektúra, hogy a funkciók ne törjék egymást.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("web.faq.q9", "Mi az a ProseMirror, és miért számít?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("web.faq.a9", "A ProseMirror egy eszközkészlet egyedi rich text szerkesztők építéséhez, szigorú dokumentummodellel. Akkor nyúlunk hozzá, ha a terméknek olyan szerkesztési viselkedésre van szüksége, amit a dobozos szerkesztők nem tudnak kifejezni, és ez egy olyan terület, amihez évek óta hozzájárulunk nyílt forrásban.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("web.faq.q10", "Tudtok AI funkciókat integrálni?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("web.faq.a10", "Igen, egyedi LLM chatbotok, vektoralapú keresés és összefoglalás, prediktív insightok és személyre szabási pipeline-ok. Ezeket termékfunkcióként építjük, egyértelmű kiértékeléssel, nem demóként.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("web.faq.q11", "Foglalkoztok biztonsággal és megfeleléssel?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("web.faq.a11", "A mérnöki oldalt lefedjük: azonosítás, hozzáférés-kezelés, adatkezelés, függőség-higiénia és infrastruktúra-keményítés. Az OWASP ajánlásait követjük és GDPR-megfelelő mintákat használunk; formális tanúsításnál a megfelelőségi tanácsadóitokkal együtt dolgozunk.") }} />
            </details>
          </div>
        </div>
      </section>
      <section className="on-navy" id="kapcsolat">
        <div className="wrap">
          <div className="cta">
            <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("fc.eyebrow", "Beszéljünk") }} />
            <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("web.fc.h", "Erős alapok. Skálázható eredmény.") }} />
            <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("web.fc.lede", "Mondd el, mit próbálsz megoldani, és segítünk megtalálni a legokosabb utat előre.") }} />
            <div className="btns rv">
              <Link href="/kapcsolat" className="btn">
                <span dangerouslySetInnerHTML={{ __html: t("web.fc.cta1", "Foglalj hívást") }} />
                <span className="ar">→</span>
              </Link>
              <a href="mailto:info@emergence-engineering.com" className="btn btn-line" dangerouslySetInnerHTML={{ __html: t("web.fc.cta2", "Inkább e-mailben kezdenél?") }} />
            </div>
            <p className="rv" style={{ fontSize: ".88rem", color: "#8FA0B8" }} dangerouslySetInnerHTML={{ __html: t("web.fc.fine", "Semmi nyomás, semmi értékesítési duma. Csak egy őszinte beszélgetés a vállalkozásodról és a lehetőségekről.") }} />
          </div>
        </div>
      </section>
    </GeShell>
  );
};

export default Webfejlesztes;
