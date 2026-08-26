import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { GeShell } from "../features/ge/components/GeShell";
import { GeSEO } from "../features/ge/components/GeSEO";
import { useGeT } from "../features/ge/i18n/useGeT";

// Ported from growth-engineers-v4/esettanulmany-szamlabridge.html; DOM structure intentionally
// mirrors the static original (see features/ge/README.md).
const EsettanulmanySzamlabridge: NextPage = () => {
  const t = useGeT();
  return (
    <GeShell page="esettanulmany-szamlabridge">
      <GeSEO
        title={t("mt.szb", "Számlabridge esettanulmány: fejlesztői logika helyett üzleti felület | Growth Engineering")}
        description={t("md.szb", "A Stripe és a magyar NAV-bekötésű számlázás közti szakadékot áthidaló middleware UX-újratervezése: proaktív hibakezelés, érthető táblázat-szerkesztés és rugalmas szűrés.")}
        ogTitle={t("ot.szb", "Számlabridge esettanulmány | Growth Engineering")}
        ogDescription={t("od.szb", "Fejlesztői logika helyett üzleti felület: így lett a technokrata MVP-ből magabiztos döntéseket támogató szoftver.")}
      />
      <section className="phero">
        <div className="wrap">
          <div className="phero-grid">
            <div>
              <div className="crumbs rv"><Link href="/" dangerouslySetInnerHTML={{ __html: t("crumb.home", "Főoldal") }} /><span>/</span><Link href="/esettanulmanyok" dangerouslySetInnerHTML={{ __html: t("nav.cases", "Esettanulmányok") }} /><span>/</span>Számlabridge</div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("szb.eyebrow", "Esettanulmány") }} />
              <h1 className="rv">Számlabridge</h1>
              <div className="pills rv" style={{ marginTop: "1rem" }}>
                <span className="pill">UX</span>
                <span className="pill" dangerouslySetInnerHTML={{ __html: t("szb.pill2", "Redesign") }} />
              </div>
              <dl className="szmeta rv">
                <div>
                  <dt dangerouslySetInnerHTML={{ __html: t("szb.m1k", "Időpont") }} />
                  <dd>2026</dd>
                </div>
                <div>
                  <dt dangerouslySetInnerHTML={{ __html: t("szb.m2k", "Terület") }} />
                  <dd dangerouslySetInnerHTML={{ __html: t("szb.m2v", "Pénzügy / SaaS") }} />
                </div>
                <div>
                  <dt dangerouslySetInnerHTML={{ __html: t("szb.m3k", "Weboldal") }} />
                  <dd>
                    <a href="https://www.szamlabridge.com/" rel="noopener">szamlabridge.com</a>
                  </dd>
                </div>
              </dl>
            </div>
            <div className="phero-art rv">
              <Image src="/ge/img/szb-hero.webp" width={680} height={645} alt={t("szb.hero.alt", "A Számlabridge weboldala böngészőben és mobilon")} />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="wrap">
          <div className="chead">
            <div className="eyebrow" dangerouslySetInnerHTML={{ __html: t("szb.in.eyebrow", "A termékről") }} />
            <h2 dangerouslySetInnerHTML={{ __html: t("szb.in.h", "Híd a Stripe és a magyar számlázás között") }} />
            <div className="prose">
              <p dangerouslySetInnerHTML={{ __html: t("szb.in.p1", "A Számlabridge egy klasszikus middleware-megoldás, ami a Stripe és a magyar adózási szabályok közötti szakadékot hidalja át.") }} />
              <p dangerouslySetInnerHTML={{ __html: t("szb.in.p2", "A Stripe a világ egyik legnépszerűbb fizetési kapuja, azonban önmagában nem képes a magyar NAV-bekötéssel rendelkező rendszerek (például a Számlázz.hu) felé megfelelően adatot továbbítani. A kereskedőknek ezért két választásuk maradt: kézzel kiállítani a számlát, vagy egyedi fejlesztéssel API-integrációt kiépíteni minden egyes webshophoz.") }} />
              <p dangerouslySetInnerHTML={{ __html: t("szb.in.p3", "A Számlabridge egy „set-and-forget\" típusú, automatizált szoftver. Az MVP-fázis azonban elsősorban a funkcionális működésre fókuszált, ami a felhasználói élmény rovására ment.") }} />
            </div>
          </div>
        </div>
      </section>
      <section className="band">
        <div className="wrap">
          <div className="chead">
            <div className="eyebrow" dangerouslySetInnerHTML={{ __html: t("szb.fl.eyebrow", "Hogyan működik") }} />
            <h2 dangerouslySetInnerHTML={{ __html: t("szb.fl.h", "A számlázási adatok útja") }} />
          </div>
          <div className="dflow rv">
            <div className="dnode">
              <b dangerouslySetInnerHTML={{ __html: t("szb.fl1.h", "Értékesítő platform") }} />
              <span dangerouslySetInnerHTML={{ __html: t("szb.fl1.p", "A webshop továbbítja a számlázási és fizetési adatokat (név, cím, tételek) a Stripe-nak.") }} />
            </div>
            <div className="darr">→</div>
            <div className="dnode">
              <b dangerouslySetInnerHTML={{ __html: t("szb.fl2.h", "Fizetési platform") }} />
              <span dangerouslySetInnerHTML={{ __html: t("szb.fl2.p", "A vásárló a Stripe-on keresztül fizet, a tranzakció adatai itt keletkeznek.") }} />
            </div>
            <div className="darr">→</div>
            <div className="dnode">
              <b dangerouslySetInnerHTML={{ __html: t("szb.fl3.h", "Számlabridge") }} />
              <span dangerouslySetInnerHTML={{ __html: t("szb.fl3.p", "Sikeres fizetés után a Stripe webhookon értesíti a Számlabridge-et, ami lekéri a részletes adatokat a Stripe API-n keresztül.") }} />
            </div>
            <div className="darr">→</div>
            <div className="dnode">
              <b dangerouslySetInnerHTML={{ __html: t("szb.fl4.h", "Számlázó platform") }} />
              <span dangerouslySetInnerHTML={{ __html: t("szb.fl4.p", "Az adatok validálása után a Számlabridge beküldi azokat a Számlázz.hu-nak.") }} />
            </div>
            <div className="darr">→</div>
            <div className="dnode">
              <b dangerouslySetInnerHTML={{ __html: t("szb.fl5.h", "Számla a vevőnél") }} />
              <span dangerouslySetInnerHTML={{ __html: t("szb.fl5.p", "A Számlázz.hu automatikusan kiküldi a számlát a vevőnek e-mailben.") }} />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="wrap">
          <div className="chead">
            <div className="eyebrow" dangerouslySetInnerHTML={{ __html: t("szb.dg.eyebrow", "Diagnózis") }} />
            <h2 dangerouslySetInnerHTML={{ __html: t("szb.dg.h", "Mit rontott el az MVP-felület?") }} />
          </div>
          <div className="split rv" style={{ marginTop: "2.4rem" }}>
            <div className="shot-soft">
              <Image src="/ge/img/szb-diag.webp" width={763} height={765} alt={t("szb.dg.img1.alt", "A régi Számlabridge-táblázat, ikonokkal és Stripe ID-kkal tele")} />
            </div>
            <ul className="findings">
              <li>
                <h4 dangerouslySetInnerHTML={{ __html: t("szb.f1.h", "Az ikonok nem elég beszédesek") }} />
                <p dangerouslySetInnerHTML={{ __html: t("szb.f1.p", "Az ikonok önmagukban nem hordoztak elég kontextust, a felhasználónak „meg kellett tanulnia\" a jelentésüket, ez növelte a belépési küszöböt. Egyetlen ikon próbálta az egyes szakaszok státuszát leírni, ami nem adott elegendő visszajelzést a hibáról.") }} />
              </li>
              <li>
                <h4 dangerouslySetInnerHTML={{ __html: t("szb.f2.h", "Nem megfelelő elnevezések") }} />
                <p dangerouslySetInnerHTML={{ __html: t("szb.f2.p", "A „Stripe adat\" gomb nem utalt arra, hogy itt a táblázat oszlopait lehet szerkeszteni.") }} />
              </li>
              <li>
                <h4 dangerouslySetInnerHTML={{ __html: t("szb.f3.h", "Adat-túlsúly") }} />
                <p dangerouslySetInnerHTML={{ __html: t("szb.f3.p", "A Stripe ID-k uralták a táblázatot, kiszorítva a releváns üzleti adatokat, például a státuszokat és a fizetés részleteit.") }} />
              </li>
              <li>
                <h4 dangerouslySetInnerHTML={{ __html: t("szb.f4.h", "A szűrő kizárólagossága") }} />
                <p dangerouslySetInnerHTML={{ __html: t("szb.f4.p", "A szűrő egyszerre csak egyetlen szempont szerint működött: státuszt és időszakot nem lehetett kombinálni, így egy-egy specifikus tranzakció megtalálása lassú keresgéléssé vált.") }} />
              </li>
            </ul>
          </div>
          <div className="split rv" style={{ marginTop: "clamp(2rem,5vw,3.5rem)" }}>
            <ul className="findings">
              <li>
                <h4 dangerouslySetInnerHTML={{ __html: t("szb.f5.h", "A fejlesztői logika rátelepszik a felületre") }} />
                <p dangerouslySetInnerHTML={{ __html: t("szb.f5.p", "Az eredeti felület megkövetelte a felhasználótól a rendszer belső architektúrájának ismeretét. A szoftver a saját alapfeladatát, az adatok lekérését és strukturálását, sablonok formájában visszatolta a felhasználóra: pontosan ismernie kellett a Stripe metaadat-mezőinek mélyebb rétegeit.") }} />
              </li>
              <li>
                <h4 dangerouslySetInnerHTML={{ __html: t("szb.f6.h", "Részletek, mint kognitív útvesztő") }} />
                <p dangerouslySetInnerHTML={{ __html: t("szb.f6.p", "A felhasználónak a history lista technikai naplózásából, apró ikonokból és bizonytalan tooltip-szövegekből kellett kikövetkeztetnie a hiba valódi okát, majd segítség nélkül megtalálnia a megoldáshoz vezető funkciót.") }} />
              </li>
              <li>
                <h4 dangerouslySetInnerHTML={{ __html: t("szb.f7.h", "Kényszerű popup-használat") }} />
                <p dangerouslySetInnerHTML={{ __html: t("szb.f7.p", "Olyan kritikus üzleti funkciók, mint a „Teszt számla kiállítása\" vagy az „Adatellenőrzés\", csak a „Részletek\" mögött voltak elérhetőek. Egy egyszerű művelethez is mindenképpen popupot kellett nyitni.") }} />
              </li>
            </ul>
            <div className="shot-soft">
              <Image src="/ge/img/szb-popups.webp" width={680} height={799} alt={t("szb.dg.img2.alt", "A régi felület popupjai: Stripe adat, Részletek és Szűrő")} />
            </div>
          </div>
        </div>
      </section>
      <section className="band">
        <div className="wrap">
          <div className="chead">
            <div className="eyebrow" dangerouslySetInnerHTML={{ __html: t("szb.sol.eyebrow", "Technikai megoldások") }} />
            <h2 dangerouslySetInnerHTML={{ __html: t("szb.sol.h", "Fejlesztői logika helyett üzleti felület") }} />
          </div>
          <div className="split rv" style={{ marginTop: "2.4rem" }}>
            <div className="shot-soft">
              <Image src="/ge/img/szb-new.webp" width={600} height={385} alt={t("szb.s1.alt", "Az új táblázat a hangsúlyos Javítás gombbal")} />
            </div>
            <div>
              <h3 dangerouslySetInnerHTML={{ __html: t("szb.s1.h", "Proaktív hibakezelés és diagnózis") }} />
              <div className="prose" style={{ marginTop: "1rem" }}>
                <p dangerouslySetInnerHTML={{ __html: t("szb.s1.p", "A korábbi, nehezen észrevehető és bizonytalan tooltip-üzeneteket egy <strong>döntéshozatal-alapú hibaelhárító mechanizmus</strong> váltotta fel. Bevezettük a hangsúlyos <strong>„Javítás\" gombot</strong> és a hozzá tartozó intelligens popupot, amely <strong>közérthetően elmagyarázza a hiba pontos okát, és azonnali, egykattintásos javítási lehetőségeket kínál</strong> a felhasználónak.") }} />
              </div>
            </div>
          </div>
          <div className="split rv" style={{ marginTop: "clamp(2rem,5vw,3.5rem)" }}>
            <div>
              <h3 dangerouslySetInnerHTML={{ __html: t("szb.s2.h", "Táblázat szerkesztése") }} />
              <div className="prose" style={{ marginTop: "1rem" }}>
                <p dangerouslySetInnerHTML={{ __html: t("szb.s2.p1", "A félrevezető „Stripe adat\" elnevezést a közérthető „Táblázat szerkesztése\" kifejezésre cseréltük. Bevezettünk egy modern, oszlopalapú szerkesztőfelületet, amely leveszi a technikai terhet az ügyfél válláról: a felhasználónak csak ki kell választania, mely oszlopokra van szüksége (Vevő, Ország, Összeg).") }} />
                <p dangerouslySetInnerHTML={{ __html: t("szb.s2.p2", "Felismertük, hogy a hosszú, táblázatot uraló azonosítókat a felhasználók nem olvassák, csupán másolásra vagy hivatkozásként használják. Az ID-t rövidített, kattintható és másolható hivatkozássá alakítottuk, amivel kritikus helyet szabadítottunk fel a felületen.") }} />
              </div>
            </div>
            <div className="shot-soft">
              <Image src="/ge/img/szb-edit.webp" width={762} height={765} alt={t("szb.s2.alt", "Az új, oszlopalapú Táblázat szerkesztése felület")} />
            </div>
          </div>
          <div className="split rv" style={{ marginTop: "clamp(2rem,5vw,3.5rem)" }}>
            <div className="shot-soft">
              <Image src="/ge/img/szb-filter.webp" width={600} height={330} alt={t("szb.s3.alt", "Az új, többszempontú szűrőpanel")} />
            </div>
            <div>
              <h3 dangerouslySetInnerHTML={{ __html: t("szb.s3.h", "Rugalmas és összetett szűrés") }} />
              <div className="prose" style={{ marginTop: "1rem" }}>
                <p dangerouslySetInnerHTML={{ __html: t("szb.s3.p", "A szűrési rendszert alapjaiban gondoltuk újra: a korábbi kizárólagos választási lehetőségek helyett egy rugalmasabb és átláthatóbb panelt hoztunk létre. Az új megoldás lehetővé teszi, hogy a felhasználó egyszerre több szempontot is érvényesítsen, például státuszt és időintervallumot kombináljon, felgyorsítva ezzel a specifikus tranzakciók keresését.") }} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="wrap">
          <div className="chead">
            <div className="eyebrow" dangerouslySetInnerHTML={{ __html: t("szb.tk.eyebrow", "Tanulságok") }} />
            <h2 dangerouslySetInnerHTML={{ __html: t("szb.tk.h", "A jó felület a motorháztető alá rejti a komplexitást") }} />
            <div className="prose">
              <p dangerouslySetInnerHTML={{ __html: t("szb.tk.p1", "A fejlesztői szemléletű felületalkotás gyakran a rendszer belső logikáját és technikai paramétereit kényszeríti a felhasználóra, ami jelentős kognitív terhelést és bizonytalanságot okoz. A projekt tanulsága, hogy a valódi felhasználói élmény akkor kezdődik, amikor a technológiai komplexitást a szoftver a „motorháztető\" alá rejti, és helyette közérthető, üzleti döntéseken alapuló felületet kínál.") }} />
              <p dangerouslySetInnerHTML={{ __html: t("szb.tk.p2", "Hiba esetén a passzív diagnózis helyett a rendszernek vezetett folyamatot kell kínálnia, amely az észlelés, a megértés és a beavatkozás lépésein visz végig, és biztosítja a döntéshozatal alapjait, hogy a speciális szaktudás nélküli ügyfél is magabiztos döntéshozóvá válhasson.") }} />
            </div>
          </div>
        </div>
      </section>
      <section className="on-navy" id="kapcsolat">
        <div className="wrap">
          <div className="cta">
            <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("fc.eyebrow", "Beszéljünk") }} />
            <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("szb.fc.h", "A te szoftvered is többet tudna egy jobb felülettel?") }} />
            <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("szb.fc.lede", "Egy UX-audittal megmutatjuk, hol veszíted el a felhasználóidat, és mit érdemes először javítani.") }} />
            <div className="btns rv">
              <Link href="/kapcsolat" className="btn">
                <span dangerouslySetInnerHTML={{ __html: t("szb.fc.cta1", "Foglalj hívást") }} />
                <span className="ar">→</span>
              </Link>
              <Link href="/kapcsolat" className="btn btn-line" dangerouslySetInnerHTML={{ __html: t("szb.fc.cta2", "Inkább e-mailben kezdenél?") }} />
            </div>
            <p className="rv" style={{ fontSize: ".88rem", color: "#8FA0B8" }} dangerouslySetInnerHTML={{ __html: t("szb.fc.fine", "Harminc perc, prezentáció nélkül. Ha nem látunk közös munkát, a hívás végén megmondjuk.") }} />
          </div>
        </div>
      </section>
    </GeShell>
  );
};

export default EsettanulmanySzamlabridge;
