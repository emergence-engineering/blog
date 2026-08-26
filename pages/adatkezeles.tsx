import React from "react";
import { NextPage } from "next";
import { GeShell } from "../features/ge/components/GeShell";
import { GeSEO } from "../features/ge/components/GeSEO";

// Hungarian-only legal page: the controller is a Hungarian entity, so the
// same text is served on both locales until an English translation exists.
// Company registration details are placeholders — fill before go-live.
const Adatkezeles: NextPage = () => (
  <GeShell page="adatkezeles">
    <GeSEO
      title="Adatkezelési tájékoztató | Growth Engineering"
      description="Az Emergence Engineering Kft. (Growth Engineering) adatkezelési tájékoztatója: milyen adatokat kezelünk, milyen célból, és milyen jogaid vannak."
    />
    <section>
      <div className="wrap">
        <div className="legal">
          <h1>Adatkezelési tájékoztató</h1>
          <p>
            Ez a tájékoztató azt írja le, hogy az Emergence Engineering Kft.
            (márkanevén Growth Engineering, a továbbiakban: „Adatkezelő”)
            milyen személyes adatokat kezel a weboldalain, milyen célból és
            jogalapon, valamint hogy milyen jogaid vannak az adataiddal
            kapcsolatban. Az adatkezelés az EU 2016/679 rendelete (GDPR) és az
            Infotv. (2011. évi CXII. törvény) szerint történik.
          </p>

          <h2>1. Az adatkezelő</h2>
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

          <h2>2. Milyen adatokat kezelünk, és miért</h2>
          <p>
            <strong>Kapcsolatfelvétel és hívásfoglalás.</strong> Ha a
            kapcsolati űrlapon, e-mailben vagy hívásfoglaláson keresztül
            megkeresel minket, a megadott adatokat (név, e-mail-cím, cégnév,
            weboldal címe, üzenet) a megkeresés megválaszolására és ajánlat
            készítésére használjuk. Jogalap: szerződés előkészítése (GDPR 6.
            cikk (1) b)) és hozzájárulás (6. cikk (1) a)).
          </p>
          <p>
            <strong>Ingyenes audit kérése.</strong> Az audit-űrlapon megadott
            e-mail-címet és weboldalcímet az audit elkészítésére és az
            eredmény megküldésére használjuk. Jogalap: hozzájárulás, amelyet
            bármikor visszavonhatsz.
          </p>
          <p>
            <strong>E-mailes megkeresés.</strong> Csak akkor keresünk meg
            e-mailben ajánlatokkal vagy tartalommal, ha ehhez kifejezetten
            hozzájárultál. A hozzájárulás bármikor visszavonható a levelekben
            található leiratkozási linkkel vagy az{" "}
            <a href="mailto:info@emergence-engineering.com">
              info@emergence-engineering.com
            </a>{" "}
            címre írt üzenettel.
          </p>

          <h2>3. Meddig tároljuk az adatokat</h2>
          <p>
            A megkeresésekhez kapcsolódó adatokat a cél megvalósulásáig, de
            legfeljebb az utolsó kapcsolatfelvételtől számított 2 évig;
            hozzájáruláson alapuló adatkezelés esetén a hozzájárulás
            visszavonásáig tároljuk. Szerződéskötés esetén a számviteli
            jogszabályok szerinti megőrzési idők irányadók.
          </p>

          <h2>4. Adatfeldolgozók és címzettek</h2>
          <ul>
            <li>
              <strong>Klaviyo, Inc.</strong> — e-mail-küldő és
              marketingplatform (EU–US adatvédelmi keretrendszer szerint).
            </li>
            <li>
              <strong>Google LLC</strong> — reCAPTCHA szolgáltatás az űrlapok
              védelmére.
            </li>
            <li>
              <strong>Plausible Insights OÜ</strong> — süti-mentes,
              anonimizált weboldal-analitika (EU-ban tárolt adatok).
            </li>
            <li>
              <strong>Tárhelyszolgáltató:</strong> [tárhelyszolgáltató neve és
              címe]
            </li>
          </ul>
          <p>
            Személyes adatot harmadik félnek a fentieken túl nem adunk át,
            kivéve ha jogszabály kötelez rá.
          </p>

          <h2 id="sutik">5. Sütik (cookie-k)</h2>
          <p>A weboldal a lehető legkevesebb sütit használja:</p>
          <ul>
            <li>
              <strong>NEXT_LOCALE</strong> — funkcionális süti, a választott
              nyelvet (magyar/angol) jegyzi meg. Nem alkalmas követésre.
            </li>
            <li>
              <strong>Google reCAPTCHA</strong> — az űrlapok bot-védelméhez a
              Google saját sütiket állíthat be.
            </li>
            <li>
              A látogatottságot a <strong>Plausible</strong> méri, amely nem
              használ sütit, és nem gyűjt személyes adatot.
            </li>
          </ul>
          <p>
            Hirdetési vagy közösségimédia-követő sütiket nem használunk. A
            sütiket a böngésződ beállításaiban bármikor törölheted vagy
            letilthatod.
          </p>

          <h2>6. A te jogaid</h2>
          <p>
            Bármikor kérheted a rólad kezelt adatokhoz való hozzáférést, azok
            helyesbítését, törlését vagy kezelésük korlátozását, élhetsz az
            adathordozhatóság jogával, tiltakozhatsz az adatkezelés ellen, és
            a hozzájárulásodat bármikor visszavonhatod. Kérelmedet az{" "}
            <a href="mailto:info@emergence-engineering.com">
              info@emergence-engineering.com
            </a>{" "}
            címen fogadjuk, és legkésőbb 30 napon belül válaszolunk.
          </p>

          <h2>7. Jogorvoslat</h2>
          <p>
            Panaszoddal a Nemzeti Adatvédelmi és Információszabadság
            Hatósághoz (NAIH, 1055 Budapest, Falk Miksa utca 9–11.,{" "}
            <a href="https://www.naih.hu" rel="noopener">
              naih.hu
            </a>
            ) vagy a lakóhelyed szerint illetékes bírósághoz fordulhatsz.
          </p>

          <p className="updated">Utolsó frissítés: 2026. augusztus 25.</p>
        </div>
      </div>
    </section>
  </GeShell>
);

export default Adatkezeles;
