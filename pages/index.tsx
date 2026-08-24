import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { GeShell } from "../features/ge/components/GeShell";
import { GeSEO } from "../features/ge/components/GeSEO";
import { GeTestimonials } from "../features/ge/components/GeTestimonials";
import { useGeT } from "../features/ge/i18n/useGeT";

// Ported from growth-engineers-v4/index.html; DOM structure intentionally
// mirrors the static original (see features/ge/README.md).
const Index: NextPage = () => {
  const t = useGeT();
  return (
    <GeShell page="index">
      <GeSEO
        title={t("mt.home", "Growth Engineering, Növekedési rendszerek webshopoknak és B2B cégeknek")}
        description={t("md.home", "A belső growth csapatod: e-mail automatizáció, teljesítménymarketing, fejlesztés és design egy helyen. Minden partnerünknél 16% fölé ment a profitnövekedés az első fél évben.")}
        ogTitle={t("ot.home", "Growth Engineering, Mi fogja vissza a céged növekedését?")}
        ogDescription={t("od.home", "Rendszert építünk a cégedbe, ami a kampányok lefutása után is termel.")}
      />
      <section className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("hero.eyebrow", "Growth engineering · Budapest, EU") }} />
              <h1 className="rv" dangerouslySetInnerHTML={{ __html: t("hero.title", "Mi fogja vissza<br>a céged <mark>növekedését?</mark>") }} />
              <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("hero.lede", "Üzletfejlesztő partnerként építjük meg a marketingrendszered. Skálázható folyamatokat hozunk létre, amik a tiéid maradnak, és hosszú távon támogatják céged gyors növekedését.") }} />
              <div className="hero-cta rv">
                <Link href="/kapcsolat" className="btn">
                  <span dangerouslySetInnerHTML={{ __html: t("hero.cta1", "Foglalj hívást") }} />
                  <span className="ar">→</span>
                </Link>
                <Link href="/kapcsolat" className="btn btn-line" dangerouslySetInnerHTML={{ __html: t("hero.cta2", "Kérj ingyenes auditot") }} />
              </div>
              <div className="badges rv">
                <div className="cap" dangerouslySetInnerHTML={{ __html: t("hero.badges.cap", "Tanúsított partnerek") }} />
                <Image src="/ge/img/badges@2x.webp" alt="Stripe Verified Partner, Google Partner, Klaviyo Advisor Silver" width={409} height={88} style={{ height: "88px" }} />
              </div>
              <p className="rv" style={{ marginTop: "1.4rem", fontSize: ".85rem", color: "var(--muted)" }} dangerouslySetInnerHTML={{ __html: t("hero.brand", "A Growth Engineering az <b style=\"color:var(--ink)\">Emergence Engineering Kft.</b> üzletfejlesztési csapata.") }} />
            </div>
            <div className="mosaic rv">
              <Link className="tile tile-wide" href="/esettanulmany-vezessjol">
                <Image src="/ge/img/m-vezessjol.webp" width={733} height={484} alt={t("alt14", "VezessJól autósiskola weboldal")} />
                <span className="tile-label" dangerouslySetInnerHTML={{ __html: t("hero.tile.vj", "VezessJól · +93% konverzió") }} />
              </Link>
              <div className="stat stat-coral">
                <div className="dnum">16%</div>
                <div className="lbl" dangerouslySetInnerHTML={{ __html: t("hero.stat.lbl", "Minimum profitnövekedés<br>az első hat hónapban") }} />
              </div>
              <Link className="tile" href="/esettanulmany-plantart">
                <Image src="/ge/img/m-plantart.webp" width={728} height={484} alt={t("alt15", "Plantart webshop és kampányok")} />
                <span className="tile-label" dangerouslySetInnerHTML={{ __html: t("hero.tile.pa", "Plantart · 3× bevétel") }} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="proof">
        <div className="wrap">
          <div className="proof-in">
            <div>
              <div className="dnum">54+</div>
              <div className="lbl" dangerouslySetInnerHTML={{ __html: t("proof.1", "Hazai és nemzetközi partner, a Filteredtől a Plantartig") }} />
            </div>
            <div>
              <div className="dnum">8</div>
              <div className="lbl" dangerouslySetInnerHTML={{ __html: t("proof.2", "Szakértői terület egy szerződés alatt") }} />
            </div>
            <div>
              <div className="dnum">20+</div>
              <div className="lbl" dangerouslySetInnerHTML={{ __html: t("proof.3", "AI workflow és eszköz, átadva a csapatodnak a szerződés idejére") }} />
            </div>
            <div>
              <div className="dnum">Képzések</div>
              <div className="lbl" dangerouslySetInnerHTML={{ __html: t("proof.4", "Fejlesztés és képzések a belső csapatnak, a projekt részeként") }} />
            </div>
          </div>
        </div>
      </div>
      <section id="rolunk">
        <div className="wrap">
          <div className="shead">
            <div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("pr.eyebrow", "Rólunk") }} />
              <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("pr.title", "Growth engineering <mark>alapelvek</mark>") }} />
            </div>
            <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("pr.lede", "Azért alapítottuk a céget, mert hisszük, hogy a magyar cégek nemzetközi szinten is kiemelkedőek tudnak lenni. Üzletfejlesztői és marketingtapasztalatunkkal szeretnénk hozzájárulni a potenciállal rendelkező kis- és középvállalkozásaink növekedéséhez.") }} />
          </div>
          <div className="cards3 rv">
            <article className="pcard">
              <span className="pnum">01</span>
              <h3 dangerouslySetInnerHTML={{ __html: t("pr.1.h", "A kampány kifut, a rendszer marad") }} />
              <p dangerouslySetInnerHTML={{ __html: t("pr.1.p", "Rendszerben gondolkozunk, nem kampányokban. A vezetéssel közösen olyan belső rendszert építünk, ami nem az ügynökségtől függ, hanem a céged saját kompetenciája marad.") }} />
            </article>
            <article className="pcard">
              <span className="pnum">02</span>
              <h3 dangerouslySetInnerHTML={{ __html: t("pr.2.h", "A belső csapatod") }} />
              <p dangerouslySetInnerHTML={{ __html: t("pr.2.p", "Egy külsős cég sokszor nem tudja megérteni a céged működését egy kitöltött formból és pár meetingből. Ezért mi a csapatod részeként üzletfejlesztőként dolgozunk, hogy a lehető leggyorsabban a legjobb döntéseket hozzuk meg közösen. Házon belül rendelkezünk minden specialistával, akire a projekt során szükség lehet.") }} />
            </article>
            <article className="pcard">
              <span className="pnum">03</span>
              <h3 dangerouslySetInnerHTML={{ __html: t("pr.3.h", "Üzletfejlesztés, nem marketing") }} />
              <p dangerouslySetInnerHTML={{ __html: t("pr.3.p", "Üzletfejlesztőként gondolkozunk, nem marketingesként, így nem biztos, hogy a hirdetés skálázását fogjuk tanácsolni. A lehető legjobb és legolcsóbb úton szeretnénk eljutni a kijelölt célodig, ami nem biztos, hogy azt jelenti, hogy a Google-be kell több költséget süllyeszteni.") }} />
            </article>
          </div>
        </div>
      </section>
      <section className="band" id="szolgaltatasok">
        <div className="wrap">
          <div className="shead">
            <div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("svc.eyebrow", "Szolgáltatások") }} />
              <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("svc.title", "Növekedési kompetenciák") }} />
            </div>
            <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("svc.lede", "Egy csapat, nyolc terület. A fejlesztés, a design, a hirdetés és az e-mail ugyanazokra a számokra dolgozik, mert ugyanaz a csapat viszi mindet.") }} />
          </div>
          <div className="tabs rv">
            <div className="tablist" role="tablist" aria-label="Kompetenciák">
              <button role="tab" id="t6" aria-controls="p6" aria-selected="true" dangerouslySetInnerHTML={{ __html: t("tab.biz", "Üzletfejlesztés") }} />
              <button role="tab" id="t8" aria-controls="p8" aria-selected="false" dangerouslySetInnerHTML={{ __html: t("tab.ecom", "E-commerce skálázás") }} />
              <button role="tab" id="t2" aria-controls="p2" aria-selected="false" dangerouslySetInnerHTML={{ __html: t("tab.growth", "Teljesítménymarketing") }} />
              <button role="tab" id="t1" aria-controls="p1" aria-selected="false" dangerouslySetInnerHTML={{ __html: t("tab.email", "E-mail automatizáció") }} />
              <button role="tab" id="t3" aria-controls="p3" aria-selected="false" dangerouslySetInnerHTML={{ __html: t("tab.web", "Webfejlesztés") }} />
              <button role="tab" id="t7" aria-controls="p7" aria-selected="false" dangerouslySetInnerHTML={{ __html: t("tab.video", "Videós tartalom") }} />
              <button role="tab" id="t4" aria-controls="p4" aria-selected="false" dangerouslySetInnerHTML={{ __html: t("tab.ux", "UX/UI design") }} />
              <button role="tab" id="t5" aria-controls="p5" aria-selected="false" dangerouslySetInnerHTML={{ __html: t("tab.seo", "AIO") }} />
            </div>
            <div className="tabpanel" id="p1" role="tabpanel" aria-labelledby="t1" data-active="false">
              <div className="tab-split">
                <div>
                  <h3 dangerouslySetInnerHTML={{ __html: t("p1.h", "A meglévő vevőidben van a legolcsóbb bevétel.") }} />
                  <p className="lede" dangerouslySetInnerHTML={{ __html: t("p1.p", "Egy jól felépített Klaviyo-fiók a webshop bevételének 25–35%-át hozza, hirdetési költés nélkül. Elhagyott kosár, böngészés-újraindítás, vásárlás utáni sorozat, visszacsábítás, készlet- és árértesítő: mind automatikusan fut, a te hangodon.") }} />
                  <Link className="link-arrow" href="/email-automatizacio" dangerouslySetInnerHTML={{ __html: t("p1.link", "Nézd meg, hogyan építjük fel") }} />
                </div>
                <div className="panel panel-peach">
                  <ul className="checklist">
                    <li dangerouslySetInnerHTML={{ __html: t("p1.l1", "<strong>12–18 alap flow</strong> magyar és angol nyelven, A/B teszteléssel") }} />
                    <li dangerouslySetInnerHTML={{ __html: t("p1.l2", "<strong>Szegmentáció</strong> vásárlási gyakoriság, kosárérték és termékkategória szerint") }} />
                    <li dangerouslySetInnerHTML={{ __html: t("p1.l3", "<strong>Shoprenter, UNAS, Shopify, WooCommerce</strong> és egyedi rendszer integráció") }} />
                    <li dangerouslySetInnerHTML={{ __html: t("p1.l4", "<strong>GDPR-tiszta</strong> feliratkozás, dupla opt-in, auditálható hozzájárulás") }} />
                  </ul>
                </div>
              </div>
            </div>
            <div className="tabpanel" id="p2" role="tabpanel" aria-labelledby="t2" data-active="false">
              <div className="tab-split">
                <div>
                  <h3 dangerouslySetInnerHTML={{ __html: t("p2.h", "Egy csatorna teljesítménye önmagában semmit nem mond el.") }} />
                  <p className="lede" dangerouslySetInnerHTML={{ __html: t("p2.p", "Paid search, paid social, remarketing és CRO ugyanabban a rendszerben. Először azt keressük meg, hol szivárog el a bevétel: az ajánlatnál, a tölcsérben vagy a mérésnél. Onnan indulunk.") }} />
                  <Link className="link-arrow" href="/growth-marketing" dangerouslySetInnerHTML={{ __html: t("p2.link", "Teljesítménymarketing részletek") }} />
                </div>
                <div className="panel panel-peach">
                  <ul className="checklist">
                    <li dangerouslySetInnerHTML={{ __html: t("p2.l1", "Google, Meta, TikTok, LinkedIn kampánykezelés") }} />
                    <li dangerouslySetInnerHTML={{ __html: t("p2.l2", "Konverzióoptimalizálás és strukturált A/B tesztelés") }} />
                    <li dangerouslySetInnerHTML={{ __html: t("p2.l3", "GA4, szerveroldali mérés, tiszta attribúció") }} />
                    <li dangerouslySetInnerHTML={{ __html: t("p2.l4", "Riport ROAS-ra, CAC-ra és LTV-re") }} />
                  </ul>
                </div>
              </div>
            </div>
            <div className="tabpanel" id="p3" role="tabpanel" aria-labelledby="t3" data-active="false">
              <div className="tab-split">
                <div>
                  <h3 dangerouslySetInnerHTML={{ __html: t("p3.h", "Amit a marketing megígér, azt valakinek meg is kell építenie.") }} />
                  <p className="lede" dangerouslySetInnerHTML={{ __html: t("p3.p", "MVP-től platformfejlesztésig. Webshop-integrációk, számlázás, CRM-bekötés és AI funkciók, amiket a marketingcsapat is használni tud.") }} />
                  <Link className="link-arrow" href="/webfejlesztes" dangerouslySetInnerHTML={{ __html: t("p3.link", "Fejlesztési szolgáltatások") }} />
                </div>
                <div className="panel panel-peach">
                  <ul className="checklist">
                    <li dangerouslySetInnerHTML={{ __html: t("p3.l1", "Webshop és egyedi platform fejlesztés") }} />
                    <li dangerouslySetInnerHTML={{ __html: t("p3.l2", "API-k, ERP, CRM és fizetési integrációk") }} />
                    <li dangerouslySetInnerHTML={{ __html: t("p3.l3", "AI és LLM funkciók: kereső, asszisztens, összefoglaló") }} />
                    <li dangerouslySetInnerHTML={{ __html: t("p3.l4", "Rich text editor szakértelem (ProseMirror, TipTap)") }} />
                  </ul>
                </div>
              </div>
            </div>
            <div className="tabpanel" id="p7" role="tabpanel" aria-labelledby="t7" data-active="false">
              <div className="tab-split">
                <div>
                  <h3 dangerouslySetInnerHTML={{ __html: t("p7.h", "A kreatív ma a legnagyobb növekedési kar.") }} />
                  <p className="lede" dangerouslySetInnerHTML={{ __html: t("p7.p", "A modern PPC legfontosabb változója a kreatív: ha a videó nem állítja meg a görgetést, a legjobb célzás sem segít. Social-first videókat és kreatív rendszert gyártunk, ami a hirdetést, az organikus jelenlétet és a márkát egyszerre szolgálja ki.") }} />
                  <Link className="link-arrow" href="/tartalomgyartas" dangerouslySetInnerHTML={{ __html: t("p7.link", "Nézd meg, mit gyártunk") }} />
                </div>
                <div className="panel panel-peach">
                  <ul className="checklist">
                    <li dangerouslySetInnerHTML={{ __html: t("p7.l1", "Rövid videók: TikTok, Reels, Shorts, LinkedIn") }} />
                    <li dangerouslySetInnerHTML={{ __html: t("p7.l2", "Görgetést megállító hirdetési kreatívok PPC-hez") }} />
                    <li dangerouslySetInnerHTML={{ __html: t("p7.l3", "Forgatókönyv, forgatás, vágás és márkás történetmesélés") }} />
                    <li dangerouslySetInnerHTML={{ __html: t("p7.l4", "Kreatív tesztelés: a legjobban konvertáló hook megtalálása") }} />
                  </ul>
                </div>
              </div>
            </div>
            <div className="tabpanel" id="p8" role="tabpanel" aria-labelledby="t8" data-active="false">
              <div className="tab-split">
                <div>
                  <h3 dangerouslySetInnerHTML={{ __html: t("p8.h", "A webshop bevétele néhány szám szorzata.") }} />
                  <p className="lede" dangerouslySetInnerHTML={{ __html: t("p8.p", "Látogató × konverzió × kosárérték. Három szerény javulás nem összeadódik, hanem összeszorzódik: a vége akár háromszoros bevétel ugyanabból a shopból. Megkeressük, melyik számodon van a legnagyobb tartalék, és azt mozdítjuk először.") }} />
                  <Link className="link-arrow" href="/ecommerce-skalazas" dangerouslySetInnerHTML={{ __html: t("p8.link", "Nézd meg a levezetést") }} />
                </div>
                <div className="panel panel-peach">
                  <ul className="checklist">
                    <li dangerouslySetInnerHTML={{ __html: t("p8.l1", "Forgalom: olcsóbb megtekintés, több minőségi látogató") }} />
                    <li dangerouslySetInnerHTML={{ __html: t("p8.l2", "Konverzió: gyorsabb oldal, tisztább vásárlási út, jobb checkout") }} />
                    <li dangerouslySetInnerHTML={{ __html: t("p8.l3", "Kosárérték és LTV: upsell, elhagyott kosár, visszacsábítás") }} />
                    <li dangerouslySetInnerHTML={{ __html: t("p8.l4", "Fenntarthatóság: organikus forgalom, ami olcsóbbá teszi az egészet") }} />
                  </ul>
                </div>
              </div>
            </div>
            <div className="tabpanel" id="p4" role="tabpanel" aria-labelledby="t4" data-active="false">
              <div className="tab-split">
                <div>
                  <h3 dangerouslySetInnerHTML={{ __html: t("p4.h", "A bevétel nagy része a pénztárfolyamatnál dől el.") }} />
                  <p className="lede" dangerouslySetInnerHTML={{ __html: t("p4.p", "Kutatással kezdünk. Megnézzük, hol akadnak el a felhasználók, és onnan tervezünk vissza: pénztárfolyamat, navigáció, üzenet.") }} />
                  <Link className="link-arrow" href="/ux-ui-design" dangerouslySetInnerHTML={{ __html: t("p4.link", "UX/UI megközelítésünk") }} />
                </div>
                <div className="panel panel-peach">
                  <ul className="checklist">
                    <li dangerouslySetInnerHTML={{ __html: t("p4.l1", "UX audit, hőtérkép- és viselkedéselemzés") }} />
                    <li dangerouslySetInnerHTML={{ __html: t("p4.l2", "Mélyinterjúk és használhatósági tesztek") }} />
                    <li dangerouslySetInnerHTML={{ __html: t("p4.l3", "Információs architektúra, prototípus, design system") }} />
                    <li dangerouslySetInnerHTML={{ __html: t("p4.l4", "Arculat és vizuális rendszerek") }} />
                  </ul>
                </div>
              </div>
            </div>
            <div className="tabpanel" id="p5" role="tabpanel" aria-labelledby="t5" data-active="false">
              <div className="tab-split">
                <div>
                  <h3 dangerouslySetInnerHTML={{ __html: t("p5.h", "Mi van, ha a következő vevőd már nem Google-n keres rád?") }} />
                  <p className="lede" dangerouslySetInnerHTML={{ __html: t("p5.p", "Az online keresések egyre nagyobb része már ChatGPT-ben, Claude-ban és Geminiben történik. Lehetsz első a Google-ben úgy is, hogy közben láthatatlan vagy ott, ahol az emberek ténylegesen kérdeznek.") }} />
                  <Link className="link-arrow" href="/ai-seo" dangerouslySetInnerHTML={{ __html: t("p5.link", "AIO részletek") }} />
                </div>
                <div className="panel panel-peach">
                  <ul className="checklist">
                    <li dangerouslySetInnerHTML={{ __html: t("p5.l1", "Strukturált adat és entitás-optimalizálás") }} />
                    <li dangerouslySetInnerHTML={{ __html: t("p5.l2", "Kérdésalapú tartalom, amit az AI idézni tud") }} />
                    <li dangerouslySetInnerHTML={{ __html: t("p5.l3", "Hivatkozás- és tekintélyépítés") }} />
                    <li dangerouslySetInnerHTML={{ __html: t("p5.l4", "AI-említések követése és riportálása") }} />
                  </ul>
                </div>
              </div>
            </div>
            <div className="tabpanel" id="p6" role="tabpanel" aria-labelledby="t6" data-active="true">
              <div className="tab-split">
                <div>
                  <h3 dangerouslySetInnerHTML={{ __html: t("p6.h", "A növekedés legtöbbször nem marketingkérdés.") }} />
                  <p className="lede" dangerouslySetInnerHTML={{ __html: t("p6.p", "Az árazás, a margin és az értékesítési folyamat többet mozdít a profiton, mint bármelyik hirdetési fiók. Ezért kezdünk mindig a pénzügyi számokkal.") }} />
                  <Link className="link-arrow" href="/kapcsolat" dangerouslySetInnerHTML={{ __html: t("p6.link", "Kezdd egy ingyenes audittal") }} />
                </div>
                <div className="panel panel-peach">
                  <ul className="checklist">
                    <li dangerouslySetInnerHTML={{ __html: t("p6.l1", "Üzleti analitika és audit: margin, termék- és csatorna-jövedelmezőség") }} />
                    <li dangerouslySetInnerHTML={{ __html: t("p6.l2", "Szűk keresztmetszetek feltérképezése") }} />
                    <li dangerouslySetInnerHTML={{ __html: t("p6.l3", "Értékajánlat és ajánlatstruktúra") }} />
                    <li dangerouslySetInnerHTML={{ __html: t("p6.l4", "Értékesítési folyamat fejlesztése") }} />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="band" id="esettanulmanyok">
        <div className="wrap">
          <div className="shead">
            <div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("case.eyebrow", "Esettanulmányok") }} />
              <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("case.title", "Növekedési történetek") }} />
            </div>
            <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("case.lede", "Történetek, amik bemutatják, hogyan dolgozunk együtt cégekkel.") }} />
          </div>
          <div className="cases">
            <article className="case rv">
              <div className="case-media">
                <Image src="/ge/img/m-plantart.webp" width={728} height={484} alt={t("alt9", "Plantart weboldal, webshop és social kampányok")} />
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
                {/* same set as the badges on the Plantart case study page */}
                <div className="chips">
                  <span className="chip" dangerouslySetInnerHTML={{ __html: t("cspa.pill1", "Márkaújratervezés") }} />
                  <span className="chip" dangerouslySetInnerHTML={{ __html: t("cspa.pill2", "Funnel marketing") }} />
                  <span className="chip" dangerouslySetInnerHTML={{ __html: t("cspa.pill3", "Hagyományos és AIO") }} />
                  <span className="chip" dangerouslySetInnerHTML={{ __html: t("cspa.pill4", "CRM bevezetés") }} />
                  <span className="chip" dangerouslySetInnerHTML={{ __html: t("cspa.pill5", "E-mail automatizáció") }} />
                  <span className="chip" dangerouslySetInnerHTML={{ __html: t("cspa.pill6", "Webshop és webfejlesztés") }} />
                </div>
                <div>
                  <Link href="/esettanulmany-plantart" className="tlink">
                    <span dangerouslySetInnerHTML={{ __html: t("case.pa.read", "Esettanulmány elolvasása") }} />
                    <span className="ar">→</span>
                  </Link>
                </div>
              </div>
            </article>
            <article className="case flip rv">
              <div className="case-media">
                <Image src="/ge/img/m-vezessjol.webp" width={733} height={484} alt={t("alt10", "VezessJól autósiskola weboldal és akvizíciós tölcsér")} />
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
                  <span className="chip" dangerouslySetInnerHTML={{ __html: t("chip.consult", "üzleti tanácsadás") }} />
                  <span className="chip" dangerouslySetInnerHTML={{ __html: t("chip.redesign", "weboldal újratervezés") }} />
                  <span className="chip" dangerouslySetInnerHTML={{ __html: t("chip.ux", "UX/UI") }} />
                  <span className="chip" dangerouslySetInnerHTML={{ __html: t("chip.ppc", "PPC") }} />
                </div>
                <div>
                  <Link href="/esettanulmany-vezessjol" className="tlink">
                    <span dangerouslySetInnerHTML={{ __html: t("case.vj.read", "Esettanulmány elolvasása") }} />
                    <span className="ar">→</span>
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="on-navy" id="folyamat">
        <div className="wrap">
          <div className="shead">
            <div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("proc.eyebrow", "Hogyan dolgozunk") }} />
              <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("proc.title", "A növekedésed útvonala") }} />
            </div>
            <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("proc.foot", "A legtöbb cég tudja, hogy valami nem stimmel, de nem tudja, hol. Az első hívás erről szól.") }} />
          </div>
          <div className="steps rv">
            <article className="step">
              <div className="n" dangerouslySetInnerHTML={{ __html: t("proc.s1.n", "1. LÉPÉS") }} />
              <h4 dangerouslySetInnerHTML={{ __html: t("proc.s1.h", "Első hívás") }} />
              <p dangerouslySetInnerHTML={{ __html: t("proc.s1.p", "Harminc perc. Megnézzük, hol tartasz, és hogy van-e értelme közösen dolgozni.") }} />
            </article>
            <article className="step">
              <div className="n" dangerouslySetInnerHTML={{ __html: t("proc.s2.n", "2. LÉPÉS") }} />
              <h4 dangerouslySetInnerHTML={{ __html: t("proc.s2.h", "Audit és diagnózis") }} />
              <p dangerouslySetInnerHTML={{ __html: t("proc.s2.p", "Üzleti modell, tölcsér, mérés és csatornák átvilágítása a saját adataitokból.") }} />
            </article>
            <article className="step">
              <div className="n" dangerouslySetInnerHTML={{ __html: t("proc.s3.n", "3. LÉPÉS") }} />
              <h4 dangerouslySetInnerHTML={{ __html: t("proc.s3.h", "Stratégia és sorrend") }} />
              <p dangerouslySetInnerHTML={{ __html: t("proc.s3.p", "Mi az a három dolog, ami a legtöbb bevételt hozza a következő negyedévben?") }} />
            </article>
            <article className="step">
              <div className="n" dangerouslySetInnerHTML={{ __html: t("proc.s4.n", "4. LÉPÉS") }} />
              <h4 dangerouslySetInnerHTML={{ __html: t("proc.s4.h", "Építés és futtatás") }} />
              <p dangerouslySetInnerHTML={{ __html: t("proc.s4.p", "Fejlesztés, kampányok és flow-k, heti sprintekben, demókkal.") }} />
            </article>
            <article className="step">
              <div className="n" dangerouslySetInnerHTML={{ __html: t("proc.s5.n", "5. LÉPÉS") }} />
              <h4 dangerouslySetInnerHTML={{ __html: t("proc.s5.h", "Optimalizálás és skálázás") }} />
              <p dangerouslySetInnerHTML={{ __html: t("proc.s5.p", "A működő dolgokat felszorozzuk, a többit leállítjuk. Erről negyedévente közösen döntünk.") }} />
            </article>
          </div>
        </div>
      </section>
      <GeTestimonials />
      <section id="arak">
        <div className="wrap">
          <div className="shead">
            <div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("col.eyebrow", "Együttműködés") }} />
              <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("col.title", "Hogyan dolgozunk együtt") }} />
            </div>
            <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("col.lede", "Kiindulópont mindig egy diagnózis. Utána te választod ki, mekkora felelősséget adsz át.") }} />
          </div>
          <div className="audit rv">
            <div>
              <div className="eyebrow" dangerouslySetInnerHTML={{ __html: t("col.start", "Kiindulópont") }} />
              <h3 dangerouslySetInnerHTML={{ __html: t("audit.h", "Mély audit") }} />
              <div className="price" style={{ margin: ".6rem 0 1rem" }} dangerouslySetInnerHTML={{ __html: t("audit.price", "490 000 Ft<small>egyszeri, fix díj</small>") }} />
              <p dangerouslySetInnerHTML={{ __html: t("audit.p", "Egyszeri, fix díjas átvilágítás az üzletről és a marketingről. A végén kapsz egy priorizált listát arról, mi hozza a legtöbb bevételt a következő 90 napban, akkor is, ha utána nem velünk dolgozol.") }} />
              <div style={{ marginTop: "1.7rem" }}>
                <Link href="/kapcsolat" className="btn">
                  <span dangerouslySetInnerHTML={{ __html: t("audit.cta", "Kérem az auditot") }} />
                  <span className="ar">→</span>
                </Link>
              </div>
            </div>
            <ul className="checks">
              <li dangerouslySetInnerHTML={{ __html: t("audit.l1", "Piaci pozíció és növekedési potenciál elemzése") }} />
              <li dangerouslySetInnerHTML={{ __html: t("audit.l2", "Google Ads, Meta Ads és SEO teljesítmény-audit") }} />
              <li dangerouslySetInnerHTML={{ __html: t("audit.l3", "Teljes tölcsér átvizsgálása, bevételszivárgás azonosítása") }} />
              <li dangerouslySetInnerHTML={{ __html: t("audit.l4", "Versenytárs-láthatóság és benchmark") }} />
              <li dangerouslySetInnerHTML={{ __html: t("audit.l5", "Csatorna-ROI bontás és büdzsé-átcsoportosítás") }} />
              <li dangerouslySetInnerHTML={{ __html: t("audit.l6", "Értékesítési folyamat és CRM hatékonyság") }} />
              <li dangerouslySetInnerHTML={{ __html: t("audit.l7", "Márka- és üzenetteszt: érti-e egy kívülálló, mit csináltok") }} />
              <li dangerouslySetInnerHTML={{ __html: t("audit.l8", "Mérés, analitika és attribúció pontossága") }} />
              <li dangerouslySetInnerHTML={{ __html: t("audit.l9", "Árazás, margin és működési szűk keresztmetszetek") }} />
              <li dangerouslySetInnerHTML={{ __html: t("audit.l10", "E-mail lista egészsége és AIO audit") }} />
            </ul>
          </div>
          <div className="tiers rv">
            <div className="tier">
              <h4 dangerouslySetInnerHTML={{ __html: t("t1.h", "Tanácsadói előfizetés") }} />
              <div className="price" dangerouslySetInnerHTML={{ __html: t("t1.price", "650 000 Ft-tól / hó<small>*minimálár, a hatókör függvényében</small>") }} />
              <p dangerouslySetInnerHTML={{ __html: t("t1.p", "Havi stratégiai ülés, priorizálás és folyamatos elérhetőség. A végrehajtás nálatok marad, az irány és az ellenőrzés nálunk.") }} />
              <ul className="checks on-light">
                <li dangerouslySetInnerHTML={{ __html: t("t1.l1", "Havi stratégiai ülések és növekedési audit") }} />
                <li dangerouslySetInnerHTML={{ __html: t("t1.l2", "Hirdetési struktúra felépítése") }} />
                <li dangerouslySetInnerHTML={{ __html: t("t1.l3", "KPI-követés és optimalizálási javaslatok") }} />
                <li dangerouslySetInnerHTML={{ __html: t("t1.l4", "Szakértői konzultáció igény szerint") }} />
              </ul>
            </div>
            <div className="tier">
              <h4 dangerouslySetInnerHTML={{ __html: t("t2.h", "Szakértői menedzsment") }} />
              <div className="price" dangerouslySetInnerHTML={{ __html: t("t2.price", "1 450 000 Ft-tól / hó<small>*minimálár, a hatókör függvényében</small>") }} />
              <p dangerouslySetInnerHTML={{ __html: t("t2.p", "Átvesszük a stratégiát, a végrehajtást és a riportolást. Marketingtől a fejlesztésig a mi csapatunk visz mindent, és az eredményért is mi felelünk.") }} />
              <p style={{ fontSize: ".88rem", color: "var(--muted)", lineHeight: "1.55", marginTop: ".7rem" }} dangerouslySetInnerHTML={{ __html: t("t2.anchor", "Egy senior marketinges, egy fejlesztő és egy designer teljes bérköltsége havi 3 millió forint fölött van. Ennek a feléért egy egész csapatot kapsz, felvétel és felmondás nélkül.") }} />
              <ul className="checks on-light">
                <li dangerouslySetInnerHTML={{ __html: t("t2.l1", "Gyorsan megszüntetett szűk keresztmetszetek") }} />
                <li dangerouslySetInnerHTML={{ __html: t("t2.l2", "Skálázható rendszerek építése") }} />
                <li dangerouslySetInnerHTML={{ __html: t("t2.l3", "Napi szintű közös munka a csapatoddal") }} />
                <li dangerouslySetInnerHTML={{ __html: t("t2.l4", "Kiszámítható, mérhető eredmények") }} />
              </ul>
            </div>
            <div className="tier">
              <h4 dangerouslySetInnerHTML={{ __html: t("t3.h", "Growth inkubátor") }} />
              <div className="price" dangerouslySetInnerHTML={{ __html: t("t3.price", "Bevételmegosztás vagy részesedés<small>egyedi megállapodás alapján</small>") }} />
              <p dangerouslySetInnerHTML={{ __html: t("t3.p", "Bevételmegosztásos partnerség. Kevesebb előzetes költség nálad, nagyobb közös érdekeltség az eredményben.") }} />
              <ul className="checks on-light">
                <li dangerouslySetInnerHTML={{ __html: t("t3.l1", "Teljesítményalapú partnerség") }} />
                <li dangerouslySetInnerHTML={{ __html: t("t3.l2", "Folyamatos optimalizálás") }} />
                <li dangerouslySetInnerHTML={{ __html: t("t3.l3", "Skálázható eredmény fix retainer nélkül") }} />
                <li dangerouslySetInnerHTML={{ __html: t("t3.l4", "Ideiglenes csapattagok a te oldaladon") }} />
              </ul>
            </div>
          </div>
          <p className="fine rv" dangerouslySetInnerHTML={{ __html: t("price.fine", "*A feltüntetett ár a szolgáltatás minimumára. A végleges ár a projekt hatókörétől, méretétől és összetettségétől függ.") }} />
        </div>
      </section>
      <section className="tight-bottom">
        <div className="wrap">
          <div className="news rv">
            <div>
              <div className="eyebrow" dangerouslySetInnerHTML={{ __html: t("lm.eyebrow", "Ingyenes növekedési audit") }} />
              <h2 dangerouslySetInnerHTML={{ __html: t("lm.h", "Találd meg, hol szivárog el a bevétel") }} />
              <p dangerouslySetInnerHTML={{ __html: t("lm.p", "Átnézzük a márkádat, az üzleti modelledet és a marketinged, aztán kapsz egy listát arról, mit javíts először. És arról is, mivel ne foglalkozz.") }} />
            </div>
            <form id="lmForm" onSubmit={(e) => { e.preventDefault(); const ok = e.currentTarget.querySelector<HTMLElement>(".ok"); if (ok) ok.hidden = false; }}>
              <div className="field">
                <input type="email" aria-label="E-mail" required placeholder={t("lm.ph", "te@ceged.hu")} />
                <button className="btn" type="submit" dangerouslySetInnerHTML={{ __html: t("lm.btn", "Kérem az auditot") }} />
              </div>
              <label className="consent">
                <input type="checkbox" required />
                <span dangerouslySetInnerHTML={{ __html: t("lm.consent", "Hozzájárulok, hogy e-mailben megkeressetek, és az Emergence Engineering Kft. az <a href=\"#\">adatkezelési tájékoztató</a> szerint kezelje az adataimat.") }} />
              </label>
              <p className="ok" hidden style={{ marginTop: ".9rem", fontSize: ".85rem", color: "var(--coral-d)", fontWeight: "600" }} dangerouslySetInnerHTML={{ __html: t("lm.ok", "Köszönjük! Ez egy demó űrlap, éles környezetben ide kerül a Klaviyo / CRM beküldés.") }} />
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
              <summary dangerouslySetInnerHTML={{ __html: t("faq.q1", "Miben vagytok mások, mint egy ügynökség?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("faq.a1", "Az ügynökség kívülről dolgozik, és egy-egy csatornáért felel. Mi beépülünk a csapatba, látjuk a margint, az értékesítést és a működést is, és a bevételért felelünk, nem a kampánystatisztikáért. Ha az derül ki, hogy a probléma nem a hirdetés, hanem az árazás vagy a checkout, akkor azt mondjuk meg, még ha nekünk kevesebb hirdetéskezelést is jelent.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("faq.q2", "Lehet kicsiben kezdeni?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("faq.a2", "Igen. A legtöbb együttműködés egy mély audittal indul: ez egyszeri, fix díjas, és a végén akkor is használható útitervet kapsz, ha utána nem velünk dolgozol tovább. Innen lehet tanácsadói előfizetésre vagy teljes menedzsmentre váltani.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("faq.q3", "Mikor látunk eredményt?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("faq.a3", "Az első nyereségek jellemzően 1–2 hónapon belül jönnek: mérés rendbetétele, ajánlat élesítése, e-mail flow-k indítása. Ezek gyorsan hatnak. A nagyobb változások, új tölcsér, új kreatív rendszer, platformfejlesztés: 3–6 hónap alatt épülnek fel, és onnantól kamatosan hoznak.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("faq.q4", "Garantáljátok az eredményt?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("faq.a4", "Számokat nem garantálunk, mert az tisztességtelen lenne: a piac, a termék és a verseny nem a mi kezünkben van. Amit garantálunk, az a folyamat és az átláthatóság, előre definiált KPI-ok, heti riport, és negyedéves felülvizsgálat, ahol őszintén megbeszéljük, mi működik. A growth inkubátor modellben pedig a saját bevételünket is az eredményhez kötjük.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("faq.q5", "Dolgoztok belsős csapattal együtt?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("faq.a5", "Rendszeresen. Van, ahol mi vagyunk a teljes marketing- és fejlesztőcsapat, és van, ahol a meglévő csapat fölé kerülünk senior rétegként: stratégia, kódreview, kampánystruktúra, mérés. A közös munka a ti eszközeitekben zajlik: Slack, Jira, Notion, ami nálatok van.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("faq.q6", "Mennyi a tipikus szerződéses időtáv?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("faq.a6", "Az audit egyszeri. A hosszú távú modellek jellemzően 6 hónapos minimummal indulnak, mert ennél rövidebb idő alatt a rendszerépítés nem tud megtérülni. Utána havi felmondással folytatódnak.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("faq.q7", "Mi van, ha a nulláról indulunk?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("faq.a7", "Akkor is tudunk dolgozni. Mindent fel tudunk építeni: mérést, tölcsért, kreatívot, hirdetést, CRM-et, landing oldalakat, SEO-t és az e-mail rendszert. Nulláról indulva jellemzően az első 4–6 hét a mérésről és az ajánlatról szól, mert enélkül minden más találgatás.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("faq.q8", "Dolgoztok nemzetközi piacra?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("faq.a8", "Igen. A csapat magyar és angol nyelven is dolgozik, és több EU-s, illetve amerikai ügyfelünk van. Több nyelvű Klaviyo-fiókokat, nemzetközi kampánystruktúrákat és lokalizált tartalmat is kezelünk.") }} />
            </details>
            <details>
              <summary dangerouslySetInnerHTML={{ __html: t("faq.q9", "Hogyan mérjük a sikert?") }} />
              <div className="ans" dangerouslySetInnerHTML={{ __html: t("faq.a9", "Bevétel, profit, CAC, ROAS, LTV és működési hatékonyság. Minden együttműködés elején közösen definiáljuk, melyik számnak kell mozdulnia, és milyen mértékben. A riport ezekre épül, nem megjelenésre és like-ra.") }} />
            </details>
          </div>
        </div>
      </section>
      <section className="on-navy" id="kapcsolat">
        <div className="wrap">
          <div className="cta">
            <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("fc.eyebrow", "Beszéljünk") }} />
            <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("fc.title", "Mi tartja vissza a növekedésed?") }} />
            <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("fc.lede", "Beszéljünk arról, hol tartasz, hova akarsz eljutni, és mi áll az útban. Egyetlen hívással kezdődik.") }} />
            <div className="btns rv">
              <a href="mailto:info@emergence-engineering.com" className="btn">
                <span dangerouslySetInnerHTML={{ __html: t("fc.cta1", "Foglalj hívást") }} />
                <span className="ar">→</span>
              </a>
              <a href="mailto:info@emergence-engineering.com" className="btn btn-line" dangerouslySetInnerHTML={{ __html: t("fc.cta2", "Inkább e-mailben kezdenél?") }} />
            </div>
            <p className="rv" style={{ fontSize: ".88rem", color: "#8FA0B8" }} dangerouslySetInnerHTML={{ __html: t("fc.fine", "Harminc perc, prezentáció nélkül. Ha nem látunk közös munkát, a hívás végén ezt mondjuk.") }} />
          </div>
        </div>
      </section>
    </GeShell>
  );
};

export default Index;
