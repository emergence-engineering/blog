import React from "react";
import { NextPage } from "next";
import Link from "next/link";
import { GeShell } from "../features/ge/components/GeShell";
import { GeSEO } from "../features/ge/components/GeSEO";

// Hungarian-only legal page; see pages/adatkezeles.tsx for the rationale.
// Company registration details are placeholders — fill before go-live.
const Aszf: NextPage = () => (
  <GeShell page="aszf">
    <GeSEO
      title="Általános Szerződési Feltételek | Growth Engineering"
      description="Az Emergence Engineering Kft. (Growth Engineering) üzletfejlesztési, marketing- és fejlesztési szolgáltatásaira vonatkozó általános szerződési feltételek."
    />
    <section>
      <div className="wrap">
        <div className="legal">
          <h1>Általános Szerződési Feltételek</h1>
          <p>
            Jelen Általános Szerződési Feltételek (a továbbiakban: „ÁSZF”) az
            Emergence Engineering Kft. (márkanevén Growth Engineering, a
            továbbiakban: „Szolgáltató”) által nyújtott üzletfejlesztési,
            marketing-, design- és szoftverfejlesztési szolgáltatásokra
            vonatkoznak.
          </p>

          <h2>1. A Szolgáltató adatai</h2>
          <ul>
            <li>Név: Emergence Engineering Kft.</li>
            <li>Székhely: [székhely címe]</li>
            <li>Cégjegyzékszám: [cégjegyzékszám]</li>
            <li>Adószám: [adószám]</li>
            <li>
              E-mail:{" "}
              <a href="mailto:info@emergence-engineering.com">
                info@emergence-engineering.com
              </a>
            </li>
          </ul>

          <h2>2. A szolgáltatás tárgya</h2>
          <p>
            A Szolgáltató üzleti auditot, tanácsadást, PPC-hirdetéskezelést,
            e-mail-marketinget és automatizációt, konverzióoptimalizálást,
            webshop- és webfejlesztést, UX/UI designt, kreatív- és
            videógyártást, valamint kereső- és AI-optimalizálást nyújt üzleti
            megrendelők részére. A szolgáltatások pontos tartalmát,
            terjedelmét és ütemezését a felek egyedi megállapodásban rögzítik.
          </p>

          <h2>3. Szerződéskötés</h2>
          <p>
            A weboldalon közölt információk és árak tájékoztató jellegűek, nem
            minősülnek ajánlattételnek; a feltüntetett díjak a szolgáltatás
            minimumárai. Szerződés a felek között egyedi ajánlat elfogadásával
            vagy külön írásbeli megállapodással jön létre. Az egyedi
            megállapodás rendelkezései eltérés esetén megelőzik a jelen ÁSZF-et.
          </p>

          <h2>4. Díjazás és fizetés</h2>
          <p>
            A díjazás az egyedi megállapodás szerint egyszeri (pl. audit),
            havidíjas (előfizetés, menedzsment) vagy eredményalapú
            (bevételmegosztás) modellben történik. A számlák fizetési
            határideje — eltérő megállapodás hiányában — a kiállítástól
            számított 8 nap.
          </p>

          <h2>5. Együttműködés és felelősség</h2>
          <p>
            A Megrendelő biztosítja a teljesítéshez szükséges hozzáféréseket
            és információkat. A Szolgáltató a szolgáltatásokat a legjobb
            szakmai tudása szerint nyújtja; konkrét üzleti eredményre
            (bevétel, konverzió) vonatkozó garanciát — eltérő írásbeli
            megállapodás hiányában — nem vállal. A Szolgáltató felelőssége az
            adott megbízás szerződéses díjának mértékéig terjed.
          </p>

          <h2>6. Szellemi tulajdon</h2>
          <p>
            A teljesítés során létrehozott anyagok felhasználási joga — a
            díjak maradéktalan megfizetését követően, eltérő megállapodás
            hiányában — a Megrendelőt illeti. A Szolgáltató jogosult a
            teljesített munkákra referenciaként hivatkozni, kivéve ha a felek
            másként állapodnak meg.
          </p>

          <h2>7. Titoktartás és adatkezelés</h2>
          <p>
            A felek az együttműködés során tudomásukra jutott üzleti titkot
            kötelesek megőrizni. A személyes adatok kezeléséről az{" "}
            <Link href="/adatkezeles">Adatkezelési tájékoztató</Link>{" "}
            rendelkezik.
          </p>

          <h2>8. Megszűnés</h2>
          <p>
            A határozatlan idejű szerződések — eltérő megállapodás hiányában —
            30 napos felmondási idővel, írásban mondhatók fel. A felmondás a
            már teljesített szolgáltatások díját nem érinti.
          </p>

          <h2>9. Irányadó jog</h2>
          <p>
            A jelen ÁSZF-ben nem szabályozott kérdésekben a magyar jog,
            különösen a Polgári Törvénykönyv rendelkezései irányadók. A felek
            a vitáikat elsősorban egyeztetéssel rendezik.
          </p>

          <p className="updated">Hatályos: 2026. augusztus 25-től.</p>
        </div>
      </div>
    </section>
  </GeShell>
);

export default Aszf;
