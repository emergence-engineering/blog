import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { GeShell } from "../features/ge/components/GeShell";
import { GeSEO } from "../features/ge/components/GeSEO";
import { useGeT } from "../features/ge/i18n/useGeT";

// Ported from growth-engineers-v4/esettanulmany-vezessjol.html; DOM structure intentionally
// mirrors the static original (see features/ge/README.md).
const EsettanulmanyVezessjol: NextPage = () => {
  const t = useGeT();
  return (
    <GeShell page="esettanulmany-vezessjol">
      <GeSEO
        title={t("mt.csvj", "VezessJól esettanulmány, +93% konverzió, feleannyi érdeklődőszerzési költség | Growth Engineering")}
        description={t("md.csvj", "Új üzleti modell, két weboldal, E-Titán integráció és teljes akvizíciós tölcsér a VezessJólnak. A beiratkozási űrlap újratervezése megduplázta a leadeket feleannyi költségen.")}
        ogTitle={t("ot.csvj", "VezessJól esettanulmány, Growth Engineering")}
        ogDescription={t("od.csvj", "+35% bevétel, +93% konverzió, −50% érdeklődőszerzési költség a VezessJólnál.")}
      />
      <section className="cs-hero on-photo">
        <Image className="bg" src="/ge/img/cover-vezessjol.webp" width={1500} height={1002} alt={t("alt5", "VezessJól oktató egy tanulóval a volán mögött")} aria-label={t("csvj.hero.alt", "")} />
        <div className="wrap">
          <div className="crumbs"><Link href="/" dangerouslySetInnerHTML={{ __html: t("crumb.home", "Főoldal") }} /><span>/</span><Link href="/esettanulmanyok" dangerouslySetInnerHTML={{ __html: t("nav.cases", "Esettanulmányok") }} /><span>/</span>VezessJól</div>
          <h1 dangerouslySetInnerHTML={{ __html: t("csvj.hero.h1", "Felpörgetett konverziók a vezetésoktatásban") }} />
          <p className="hero-lede" dangerouslySetInnerHTML={{ __html: t("csvj.hero.lede", "Nem a büdzsé növelése a megoldás, hanem a tervezés és a jól felépített, hatékony rendszer.") }} />
          <div className="pills">
            <span className="pill" dangerouslySetInnerHTML={{ __html: t("csvj.hero.p1", "üzleti tanácsadás") }} />
            <span className="pill" dangerouslySetInnerHTML={{ __html: t("csvj.hero.p2", "pénzügyi analitika") }} />
            <span className="pill" dangerouslySetInnerHTML={{ __html: t("csvj.hero.p3", "weboldal újratervezés") }} />
            <span className="pill" dangerouslySetInnerHTML={{ __html: t("csvj.hero.p4", "UX/UI design") }} />
            <span className="pill" dangerouslySetInnerHTML={{ __html: t("csvj.hero.p5", "marketingstratégia") }} />
            <span className="pill" dangerouslySetInnerHTML={{ __html: t("csvj.hero.p6", "social kampány") }} />
          </div>
          <dl className="cs-meta">
            <div>
              <dt dangerouslySetInnerHTML={{ __html: t("csvj.meta.client.k", "Ügyfél") }} />
              <dd dangerouslySetInnerHTML={{ __html: t("csvj.meta.client.v", "VezessJól") }} />
            </div>
            <div>
              <dt dangerouslySetInnerHTML={{ __html: t("csvj.meta.industry.k", "Iparág") }} />
              <dd dangerouslySetInnerHTML={{ __html: t("csvj.meta.industry.v", "Oktatás / vezetésoktatás") }} />
            </div>
            <div>
              <dt dangerouslySetInnerHTML={{ __html: t("csvj.meta.timeline.k", "Időtáv") }} />
              <dd dangerouslySetInnerHTML={{ __html: t("csvj.meta.timeline.v", "2025. április") }} />
            </div>
            <div>
              <dt dangerouslySetInnerHTML={{ __html: t("csvj2.meta.web.k", "Weboldal") }} />
              <dd>
                <a href="https://vezessjol.hu/" rel="noopener" style={{ color: "inherit", textDecoration: "underline" }}>vezessjol.hu</a>
                <br />
                <a href="https://vezessjolautosiskola.hu/" rel="noopener" style={{ color: "inherit", textDecoration: "underline" }}>vezessjolautosiskola.hu</a>
              </dd>
            </div>
          </dl>
        </div>
      </section>
      <div className="wrap">
        <div className="cs-metrics rv">
          <div>
            <div className="dnum">+35%</div>
            <div className="lbl" dangerouslySetInnerHTML={{ __html: t("csvj.metric.1", "bevételnövekedés") }} />
          </div>
          <div>
            <div className="dnum">+93%</div>
            <div className="lbl" dangerouslySetInnerHTML={{ __html: t("csvj.metric.2", "több konverzió") }} />
          </div>
          <div>
            <div className="dnum">−50%</div>
            <div className="lbl" dangerouslySetInnerHTML={{ __html: t("csvj.metric.3", "érdeklődőszerzési költség") }} />
          </div>
        </div>
      </div>
      <section>
        <div className="wrap">
          <div className="rv" style={{ background: "#fff", borderRadius: "24px", padding: "clamp(2rem,4vw,3.6rem)", maxWidth: "1060px", marginInline: "auto" }}>
            <h2 style={{ textAlign: "center", marginBottom: "1.8rem" }} dangerouslySetInnerHTML={{ __html: t("csvj.about.h", "Az ügyfélről") }} />
            <div className="prose" style={{ maxWidth: "none" }}>
              <p dangerouslySetInnerHTML={{ __html: t("csvj.about.p1", "A VezessJól különleges küldetésű vezetésoktató vállalkozás: gyakorló vezetéssel segít azoknak, akiknek már van jogosítványuk, de hiányzik az önbizalmuk, vagy évek óta nem vezettek. A tipikus ügyfelük gyakran édesanya, aki szorong attól, hogy a gyerekével a kocsiban vezessen, és irányított, magabiztosságot építő gyakorlást szeretne.") }} />
              <p dangerouslySetInnerHTML={{ __html: t("csvj.about.p2", "A cég két üzletágat működtet. Az egyik a jogosítvánnyal rendelkezők gyakorló vezetése, a másik egy induló autósiskola-ág, amely kezdőket készít fel a nulláról. <strong>Miközben az új vállalkozás épp csak elindult, a meglévő üzlet stagnált és nehezen nőtt.</strong>") }} />
            </div>
          </div>
        </div>
      </section>
      <section className="band">
        <div className="wrap">
          <div className="split flip rv">
            <div className="split-media">
              <Image src="/ge/img/vj-phone.webp" width={1100} height={735} alt={t("alt6", "A VezessJól mobil weboldala használat közben")} aria-label={t("csvj.chal.alt", "")} />
            </div>
            <div>
              <div className="eyebrow" dangerouslySetInnerHTML={{ __html: t("csvj.chal.eyebrow", "A kihívás") }} />
              <h2 dangerouslySetInnerHTML={{ __html: t("csvj.chal.h", "Kihívások") }} />
              <p className="lede" style={{ marginTop: "1.2rem" }} dangerouslySetInnerHTML={{ __html: t("csvj.chal.lede", "Több akadály is hátráltatta a növekedést:") }} />
              <ul className="bullets">
                <li dangerouslySetInnerHTML={{ __html: t("csvj.chal.l1", "Nem volt belső pénzügyi analitika a döntésekhez") }} />
                <li dangerouslySetInnerHTML={{ __html: t("csvj.chal.l2", "A weboldal gyengén konvertált, ezért magas maradt az ügyfélszerzési költség") }} />
                <li dangerouslySetInnerHTML={{ __html: t("csvj.chal.l3", "Az üzleti modell és az árazás nem működött, teljes újragondolást igényelt") }} />
                <li dangerouslySetInnerHTML={{ __html: t("csvj.chal.l4", "A felhasználói út súrlódásos volt, és jelentős lemorzsolódást okozott") }} />
                <li dangerouslySetInnerHTML={{ __html: t("csvj.chal.l5", "A törzsüzlet stagnált, az új, kezdőkre fókuszáló autósiskola-ág nulla ügyféllel indult") }} />
                <li dangerouslySetInnerHTML={{ __html: t("csvj.chal.l6", "Teljes üzleti tervet kellett készíteni az új autósiskolához") }} />
                <li dangerouslySetInnerHTML={{ __html: t("csvj.chal.l7", "Új weboldal, rendszerintegrációk és komplett marketingtölcsér kellett a nulláról") }} />
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="wrap">
          <div className="split rv">
            <div>
              <div className="eyebrow" dangerouslySetInnerHTML={{ __html: t("csvj.appr.eyebrow", "Megközelítés") }} />
              <h2 dangerouslySetInnerHTML={{ __html: t("csvj.appr.h", "Előbb audit, aztán újraépítés") }} />
            </div>
            <div className="prose">
              <p dangerouslySetInnerHTML={{ __html: t("csvj.appr.p1", "<strong>Az üzlet, az ügyfelek és a marketing teljes auditjával kezdtünk.</strong> Ez magában foglalta a részletes piacelemzést, az ár-összehasonlítást, és annak áttekintését, hogyan lesz valakiből ügyfél, illetve hogyan kellene ideális esetben kinéznie a felhasználói útnak. Az üzleti terv és a marketingterv elkészülte után léptünk át a megvalósításba.") }} />
              <p dangerouslySetInnerHTML={{ __html: t("csvj.appr.p2", "<strong>Az üzleti terv elfogadása után megkezdtük az üzleti modell átalakítását, amely a belső folyamatok újragondolását és a weboldal átalakítását is magában foglalta.</strong> A belső csapattal szorosan együttműködve pénzügyi analitikát hoztunk létre a döntéstámogatáshoz, valamint segítettünk a folyamatok digitalizálásában, hogy a cég hatékonyabban működjön és stabil alapokra építve tudjon skálázni.") }} />
            </div>
          </div>
        </div>
      </section>
      <section className="band">
        <div className="wrap">
          <div className="split rv">
            <div className="split-media">
              <Image src="/ge/img/vj-desktop.png" width={733} height={484} alt={t("alt7", "Az újratervezett VezessJól weboldal")} aria-label={t("csvj.web.alt", "")} />
            </div>
            <div>
              <div className="eyebrow" dangerouslySetInnerHTML={{ __html: t("csvj.web.eyebrow", "Design") }} />
              <h2 dangerouslySetInnerHTML={{ __html: t("csvj.web.h", "Weboldal és arculat") }} />
              <div className="prose" style={{ marginTop: "1.2rem" }}>
                <p dangerouslySetInnerHTML={{ __html: t("csvj.web.p1", "Mindkét weboldalt újraterveztük, hogy tükrözze a VezessJól prémium pozicionálását, és könnyebben befogadható legyen az információ. A fókusz a felhasználói út újragondolásán és a fizetett hirdetések megtérülésének javításán volt egy jobban konvertáló oldallal.") }} />
              </div>
              <ul className="bullets">
                <li dangerouslySetInnerHTML={{ __html: t("csvj.web.l1", "Világos vizuális hierarchia a legfontosabb tartalmakra és cselekvésre ösztönzőkre") }} />
                <li dangerouslySetInnerHTML={{ __html: t("csvj.web.l2", "Egyszerűsített főnavigáció, hogy gyorsan megtalálják a megfelelő tanfolyamot") }} />
                <li dangerouslySetInnerHTML={{ __html: t("csvj.web.l3", "Élesített kulcsüzenetek és USP-k, amik érthetően közvetítik az iskola értékét") }} />
                <li dangerouslySetInnerHTML={{ __html: t("csvj.web.l4", "Kiemelt figyelem a mobil használhatóságra, mert az organikus forgalom java mobilról jött") }} />
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="wrap">
          <div className="shead">
            <div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("csvj.dev.eyebrow", "Fejlesztés") }} />
              <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("csvj.dev.h", "Karbantarthatóra építve") }} />
            </div>
            <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("csvj.dev.lede", "A fejlesztőcsapatunk WordPress környezetben építette meg az oldalt, rugalmasra, megbízhatóra és könnyen karbantarthatóra.") }} />
          </div>
          <ul className="devlist">
            <li>
              <h4 dangerouslySetInnerHTML={{ __html: t("csvj.dev1.h", "Webfejlesztés") }} />
              <p dangerouslySetInnerHTML={{ __html: t("csvj.dev1.p", "Oldalstruktúra, sablonok és gördülékeny tartalomkezelés, hogy a csapat könnyen tudja frissíteni az oldalt.") }} />
            </li>
            <li>
              <h4 dangerouslySetInnerHTML={{ __html: t("csvj.dev2.h", "E-Titán integráció") }} />
              <p dangerouslySetInnerHTML={{ __html: t("csvj.dev2.p", "Az autósiskola-ágat összekötöttük a képzések központi adatbázisával, az E-Titánnal, így az új tanulók extra adminisztráció nélkül tudnak jelentkezni a weboldalon.") }} />
            </li>
            <li>
              <h4 dangerouslySetInnerHTML={{ __html: t("csvj.dev3.h", "Teljesítmény") }} />
              <p dangerouslySetInnerHTML={{ __html: t("csvj.dev3.p", "Javított űrlaplogika és gyorsabb oldalbetöltés, hogy a látogatók élménye gördülékenyebb legyen.") }} />
            </li>
            <li>
              <h4 dangerouslySetInnerHTML={{ __html: t("csvj.dev4.h", "Mérés és analitika") }} />
              <p dangerouslySetInnerHTML={{ __html: t("csvj.dev4.p", "Követőeszközök a kulcsmutatók figyelésére és a folyamatos fejlesztés támogatására.") }} />
            </li>
          </ul>
        </div>
      </section>
      <section className="band">
        <div className="wrap">
          <div className="split rv">
            <div className="funnel-fig">
              <svg viewBox="0 0 500 600" role="img" aria-label={t("csvj.fun.figalt", "Marketingtölcsér: ismertségtől az ajánlásig")}>
                <defs>
                  <linearGradient id="fnBody" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#F0764A" />
                    <stop offset="100%" stopColor="#E85D2F" />
                  </linearGradient>
                  <filter id="fnShadow" x="-30%" y="-30%" width="160%" height="160%">
                    <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#7C4DD8" floodOpacity="0.18" />
                  </filter>
                </defs>
                {/* floating leads above the funnel */}
                {([
                  { cx: 140, cy: 122, r: 40, tone: "brand" },
                  { cx: 248, cy: 98, r: 33, tone: "muted" },
                  { cx: 327, cy: 144, r: 41, tone: "ring" },
                  { cx: 147, cy: 204, r: 27, tone: "brand" },
                  { cx: 243, cy: 204, r: 43, tone: "brand" },
                ] as const).map((a, i) => {
                  const headY = a.cy - a.r * 0.26;
                  const headR = a.r * 0.22;
                  const bodyR = a.r * 0.42;
                  const bodyY = a.cy + a.r * 0.55;
                  const muted = a.tone === "muted";
                  return (
                    <g key={i} filter="url(#fnShadow)">
                      <circle cx={a.cx} cy={a.cy} r={a.r} fill="rgba(255,255,255,.55)" stroke="#fff" strokeWidth="2" />
                      {a.tone === "ring" && <circle cx={a.cx} cy={headY} r={headR + 4.5} fill="none" stroke="#2E90FA" strokeWidth="3.5" />}
                      <circle cx={a.cx} cy={headY} r={headR} fill={muted ? "#C9C5D2" : "#7C4DD8"} />
                      <path d={`M ${a.cx - bodyR} ${bodyY} a ${bodyR} ${bodyR} 0 0 1 ${bodyR * 2} 0 z`} fill={muted ? "#C9C5D2" : "url(#fnBody)"} />
                    </g>
                  );
                })}
                {/* funnel: three tapering stages and a two-stage spout */}
                <g filter="url(#fnShadow)" fill="rgba(255,255,255,.75)" stroke="#fff" strokeWidth="2.5" strokeLinejoin="round">
                  <path d="M 70 272 L 430 272 L 393.5 324 L 106.5 324 Z" />
                  <path d="M 109.3 328 L 390.7 328 L 354.3 380 L 145.7 380 Z" />
                  <path d="M 148.5 384 L 351.5 384 L 315 436 L 185 436 Z" />
                  <rect x="182" y="440" width="136" height="52" rx="9" />
                  <rect x="182" y="496" width="136" height="52" rx="9" />
                </g>
                <g fill="#6E6880" fontSize="19" fontWeight="600" fontFamily="inherit" textAnchor="middle">
                  <text x="250" y="305">{t("csvj.fun.s1", "Ismertség")}</text>
                  <text x="250" y="361">{t("csvj.fun.s2", "Mérlegelés")}</text>
                  <text x="250" y="417">{t("csvj.fun.s3", "Konverzió")}</text>
                  <text x="250" y="473">{t("csvj.fun.s4", "Lojalitás")}</text>
                  <text x="250" y="529">{t("csvj.fun.s5", "Ajánlás")}</text>
                </g>
              </svg>
            </div>
            <div>
              <div className="eyebrow" dangerouslySetInnerHTML={{ __html: t("csvj.fun.eyebrow", "Akvizíció") }} />
              <h2 dangerouslySetInnerHTML={{ __html: t("csvj.fun.h", "Ügyfélszerzési tölcsér felépítése") }} />
              <div className="prose" style={{ marginTop: "1.2rem" }}>
                <p dangerouslySetInnerHTML={{ __html: t("csvj.fun.p0", "Mivel a cél a szervezet skálázása volt, és szerettük volna duplájára növelni, heti szinten nagy mennyiségű megkeresést kellett biztosítani a növekedéshez és az utánpótláshoz. Ez azt jelentette, hogy az ügyfélszerzési költség nem mehetett magasra, hogy a marketingköltség ne szálljon el a skálázás során. Ehhez a tölcsér teljes folyamatát a lehető leghatékonyabban kellett kialakítani, minimalizálva a lemorzsolódást és az elvesztegetett budgetet.") }} />
                <p dangerouslySetInnerHTML={{ __html: t("csvj.fun.p1", "Miután újragondoltuk az első vásárlás mögötti üzleti modellt, több marketingcsatornát indítottunk, amelyek a tudatosság különböző szintjein vezetik végig az érdeklődőket, és az újonnan létrehozott landing oldalakra irányítják őket. Azzal, hogy világosan bemutattuk a problémát és a lehetséges megoldásokat, korábban passzív érdeklődőkből minősített leadeket tudtunk csinálni.") }} />
                <p dangerouslySetInnerHTML={{ __html: t("csvj.fun.p2", "Az értékesítés támogatására letölthető anyagokat és automatizált e-mailes nurture folyamatot vezettünk be. Mikrokonverziókat is beépítettünk: már korán bekértük az alapvető elérhetőségeket, így azokat is meg tudtuk keresni, akik nem fejezték be a teljes regisztrációt.") }} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="wrap">
          <div className="shead">
            <div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("csvj.opt.eyebrow", "Optimalizálás") }} />
              <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("csvj.opt.h", "Visszaméréseknek köszönhető optimalizálások") }} />
            </div>
            <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("csvj.opt.lede", "A projekt elején egyértelművé vált, hogy a folyamat közben sok helyen vesztek el ügyfelek, a célunk ennek a minimalizálása volt.") }} />
          </div>
          <div className="bafun rv">
            <div className="baf">
              <h4 dangerouslySetInnerHTML={{ __html: t("csvj2.ba.before", "Előtte") }} />
              <div className="col-f">
                <div className="bstep" style={{ "--w": "100%" } as React.CSSProperties}>
                  <b dangerouslySetInnerHTML={{ __html: t("csvj2.b1.h", "Egyetlen űrlap, 11 mezővel") }} />
                  <span dangerouslySetInnerHTML={{ __html: t("csvj2.b1.p", "minden adat egyszerre, előre") }} />
                </div>
                <div className="bstep bad" style={{ "--w": "56%" } as React.CSSProperties}>
                  <b dangerouslySetInnerHTML={{ __html: t("csvj2.b2.h", "Félbehagyás") }} />
                  <span dangerouslySetInnerHTML={{ __html: t("csvj2.b2.p", "a kitöltők jelentős része megállt félúton") }} />
                </div>
              </div>
            </div>
            <div className="baf">
              <h4 dangerouslySetInnerHTML={{ __html: t("csvj2.ba.after", "Utána") }} />
              <div className="col-f">
                <div className="bstep" style={{ "--w": "100%" } as React.CSSProperties}>
                  <b dangerouslySetInnerHTML={{ __html: t("csvj2.a1.h", "3 lépésre bontottuk") }} />
                  <span dangerouslySetInnerHTML={{ __html: t("csvj2.a1.p", "az első lépésnél csak pár információt kellett megadni") }} />
                </div>
                <div className="bstep" style={{ "--w": "84%" } as React.CSSProperties}>
                  <b dangerouslySetInnerHTML={{ __html: t("csvj2.a2.h", "Utánkövetés") }} />
                  <span dangerouslySetInnerHTML={{ __html: t("csvj2.a2.p", "aki megállt, annak segítség és emlékeztető") }} />
                </div>
                <div className="bstep win" style={{ "--w": "68%" } as React.CSSProperties}>
                  <b dangerouslySetInnerHTML={{ __html: t("csvj2.a3.h", "−48% félbehagyás") }} />
                  <span dangerouslySetInnerHTML={{ __html: t("csvj2.a3.p", "2× annyi lead, feleannyi költségen") }} />
                </div>
              </div>
            </div>
          </div>
          <p className="ba-anno" dangerouslySetInnerHTML={{ __html: t("csvj2.ba.anno", "A több hónapos visszamérés mutatta meg a lyukat: nem a szándék hiányzott, hanem a 11 mezős űrlap állította meg az embereket. Nem mindig a hirdetésekben kell keresni a megoldást.") }} />
        </div>
      </section>
      <section className="socsec">
        <div className="wrap">
          <div className="shead">
            <div>
              <div className="eyebrow" dangerouslySetInnerHTML={{ __html: t("csvj2.soc.eyebrow", "Social média és kampányok") }} />
              <h2 dangerouslySetInnerHTML={{ __html: t("csvj2.soc.h", "A megfelelő közönség, mérhető eredménnyel") }} />
            </div>
            <p className="lede" dangerouslySetInnerHTML={{ __html: t("csvj2.soc.lede", "A célunk az volt, hogy a VezessJól a megfelelő közönséget érje el, és az érdeklődésből mérhető eredmény legyen.") }} />
          </div>
          <ul className="bullets" style={{ marginTop: "1.2rem" }}>
            <li dangerouslySetInnerHTML={{ __html: t("csvj2.soc.l1", "Célzott social kampányok, testre szabott vizuálokkal és szövegvariációkkal") }} />
            <li dangerouslySetInnerHTML={{ __html: t("csvj2.soc.l2", "A hirdetési üzenetek összehangolása az újratervezett landing oldalakkal a konzisztenciáért és a jobb konverzióért") }} />
            <li dangerouslySetInnerHTML={{ __html: t("csvj2.soc.l3", "Szoros eredménykövetés és gyors korrekciók a teljesítmény javításáért") }} />
          </ul>
        </div>
      </section>
      <section className="band">
        <div className="wrap">
          <div className="chead">
            <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("csvj.res.eyebrow", "Eredmények") }} />
            <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("csvj.res.h", "Eredmények és tanulságok") }} />
            <p className="lede rv" style={{ marginTop: "1.4rem" }} dangerouslySetInnerHTML={{ __html: t("csvj2.res.lede", "Már az együttműködés első hónapjaiban a VezessJól minden kulcsmutatóban látható javulást ért el. A legfontosabb területekkel kezdtünk, és lépésről lépésre finomítottunk.") }} />
          </div>
          <div className="res-badges rv">
            <span dangerouslySetInnerHTML={{ __html: t("csvj2.res.b1", "<b>+35%</b> bevétel") }} />
            <span dangerouslySetInnerHTML={{ __html: t("csvj2.res.b2", "<b>+93%</b> konverzió") }} />
            <span dangerouslySetInnerHTML={{ __html: t("csvj2.res.b3", "<b>−50%</b> ügyfélszerzési költség") }} />
          </div>
          <p className="res-close" dangerouslySetInnerHTML={{ __html: t("csvj2.res.close", "A megnövekedett ügyfélszám és a csökkent ügyfélszerzési költség lehetővé tette az oktatók és az autók számának jelentős növelését. A folyamat során az üzleti és marketing visszamérési rendszereinket is folyamatosan fejlesztettük, több AI-alapú eszközt vezettünk be a hirdetések és a pénzügyek elemzésére. Az iparági piacvezető céggel a mai napig együtt dolgozunk, folytatva az eddigi skálázást: a további nagy tervek megvalósításán dolgozunk, és izgatottan várjuk, hogy azokat is megoszthassuk.") }} />
        </div>
      </section>
      <section className="on-navy" id="kapcsolat">
        <div className="wrap">
          <div className="cta">
            <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("fc.eyebrow", "Beszéljünk") }} />
            <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("csvj2.fc.h", "Kíváncsi vagy, nálad mit hozna ugyanez a megközelítés?") }} />
            <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("csvj.fc.lede", "Beszéljünk arról, hol tartasz, hova akarsz eljutni, és mi áll az útban. Egyetlen hívással kezdődik.") }} />
            <div className="btns rv">
              <Link href="/kapcsolat" className="btn">
                <span dangerouslySetInnerHTML={{ __html: t("csvj.fc.cta1", "Foglalj hívást") }} />
                <span className="ar">→</span>
              </Link>
              <Link href="/kapcsolat" className="btn btn-line" dangerouslySetInnerHTML={{ __html: t("csvj.fc.cta2", "Inkább e-mailben kezdenél?") }} />
            </div>
            <p className="rv" style={{ fontSize: ".88rem", color: "#8FA0B8" }} dangerouslySetInnerHTML={{ __html: t("csvj.fc.fine", "Harminc perc, prezentáció nélkül. Ha nem látunk közös munkát, a hívás végén ezt mondjuk.") }} />
          </div>
        </div>
      </section>
    </GeShell>
  );
};

export default EsettanulmanyVezessjol;
