import React from "react";
import { NextPage } from "next";
import Link from "next/link";
import { GeShell } from "../features/ge/components/GeShell";
import { GeTestimonials } from "../features/ge/components/GeTestimonials";
import { GeSEO } from "../features/ge/components/GeSEO";
import { useGeT } from "../features/ge/i18n/useGeT";

// Ported from growth-engineers-v4/rolunk.html; DOM structure intentionally
// mirrors the static original (see features/ge/README.md).
const Rolunk: NextPage = () => {
  const t = useGeT();
  return (
    <GeShell page="rolunk">
      <GeSEO
        title={t("mt.about", "Rólunk | Growth Engineering")}
        description={t("md.about", "Beépülünk a cégedbe, hozzáférünk a számokhoz, és a bevételért felelünk. Ismerd meg a growth engineering elveinket és a 13 fős csapatot.")}
        ogTitle={t("mt.about", "Rólunk | Growth Engineering")}
        ogDescription={t("od.about", "Growth engineering elvek és a csapat mögötte. Beépülünk a cégedbe, és a bevételért felelünk.")}
      />
      <section className="phero">
        <div className="wrap">
          <div className="crumbs rv">
            <Link href="/" dangerouslySetInnerHTML={{ __html: t("crumb.home", "Főoldal") }} />
            <span>/</span>
            <span dangerouslySetInnerHTML={{ __html: t("rol.crumb", "Rólunk") }} />
          </div>
          <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("rol.eyebrow", "Rólunk") }} />
          <h1 className="rv" dangerouslySetInnerHTML={{ __html: t("rol.h1", "Growth engineering <mark>alapelvek</mark>") }} />
          <p className="lede rv" style={{ maxWidth: "75ch" }} dangerouslySetInnerHTML={{ __html: t("rol.lede", "Beépülünk a cégedbe, hozzáférünk a számokhoz, és a bevételért felelünk. Ez néha azt jelenti, hogy azt javasoljuk: a hirdetéssel most ne foglalkozzunk, előbb az árazáson kell változtatni. Kevesebb ügyfelet vállalunk, viszont mélyebben dolgozunk velük.") }} />
        </div>
      </section>
      <section className="band">
        <div className="wrap">
          <div className="shead">
            <div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("rol.pr.eyebrow", "Elvek") }} />
              <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("rol.pr.h", "Ahogy a növekedésre gondolunk") }} />
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
      <section>
        <div className="wrap">
          <div className="shead">
            <div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("rol.team.eyebrow", "Csapat") }} />
              <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("rol.team.h", "Növekedési szakértők körülötted") }} />
            </div>
            <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("rol.team.lede", "Stratégia, marketing, design, fejlesztés és pénzügy egy csapatban. Ugyanezt hat beszállítóval is meg lehet oldani, csak akkor az összehangolás a te dolgod.") }} />
          </div>
          <div className="team rv">
            <article className="mem">
              <div className="ini">GG</div>
              <div className="nm">Gillay Gergely</div>
              <div className="rl" dangerouslySetInnerHTML={{ __html: t("rol.r.ceo", "CEO") }} />
            </article>
            <article className="mem">
              <div className="ini">VV</div>
              <div className="nm">Váczi Viktor</div>
              <div className="rl" dangerouslySetInnerHTML={{ __html: t("rol.r.cto", "CTO") }} />
            </article>
            <article className="mem">
              <div className="ini">BG</div>
              <div className="nm">Bárándi Gergő</div>
              <div className="rl" dangerouslySetInnerHTML={{ __html: t("rol.r.mktstrat", "Marketingstratéga") }} />
            </article>
            <article className="mem">
              <div className="ini">BÁ</div>
              <div className="nm">Balázsi Ádám</div>
              <div className="rl" dangerouslySetInnerHTML={{ __html: t("rol.r.email", "E-mail marketing specialista") }} />
            </article>
            <article className="mem">
              <div className="ini">PG</div>
              <div className="nm">Polgár Gábor</div>
              <div className="rl" dangerouslySetInnerHTML={{ __html: t("rol.r.ppc", "PPC szakértő") }} />
            </article>
            <article className="mem">
              <div className="ini">SC</div>
              <div className="nm">Sengnirane Chounramany</div>
              <div className="rl" dangerouslySetInnerHTML={{ __html: t("rol.r.uxui", "UX/UI designer") }} />
            </article>
            <article className="mem">
              <div className="ini">JV</div>
              <div className="nm">Járfás Vivien</div>
              <div className="rl" dangerouslySetInnerHTML={{ __html: t("rol.r.serviceux", "Service és UX designer") }} />
            </article>
            <article className="mem">
              <div className="ini">CS</div>
              <div className="nm">Csillag Katalin Zsófia</div>
              <div className="rl" dangerouslySetInnerHTML={{ __html: t("rol.r.frontend", "Frontend fejlesztő") }} />
            </article>
            <article className="mem">
              <div className="ini">MI</div>
              <div className="nm">Matejcsok István</div>
              <div className="rl" dangerouslySetInnerHTML={{ __html: t("rol.r.fullstack", "Full stack fejlesztő") }} />
            </article>
            <article className="mem">
              <div className="ini">HK</div>
              <div className="nm">Horváth Kristóf</div>
              <div className="rl" dangerouslySetInnerHTML={{ __html: t("rol.r.fullstack", "Full stack fejlesztő") }} />
            </article>
            <article className="mem">
              <div className="ini">TG</div>
              <div className="nm">Törcsvári Gergő</div>
              <div className="rl" dangerouslySetInnerHTML={{ __html: t("rol.r.fullstack", "Full stack fejlesztő") }} />
            </article>
            <article className="mem">
              <div className="ini">AN</div>
              <div className="nm">Aschenbrenner Norbert</div>
              <div className="rl" dangerouslySetInnerHTML={{ __html: t("rol.r.fullstack", "Full stack fejlesztő") }} />
            </article>
            <article className="mem">
              <div className="ini">VM</div>
              <div className="nm">Valaczka Marika</div>
              <div className="rl" dangerouslySetInnerHTML={{ __html: t("rol.r.finance", "Pénzügyi vezető") }} />
            </article>
          </div>
        </div>
      </section>
      <GeTestimonials tightTop={false} />
      <section>
        <div className="wrap">
          <div className="shead solo">
            <div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("rol.coll.eyebrow", "Együttműködés") }} />
              <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("rol.coll.h", "Hogyan tudsz velünk dolgozni") }} />
            </div>
          </div>
          <div className="cards4 rv">
            <article className="pcard">
              <h3 dangerouslySetInnerHTML={{ __html: t("audit.h", "Mély audit") }} />
              <p dangerouslySetInnerHTML={{ __html: t("audit.p", "Egyszeri, fix díjas átvilágítás az üzletről és a marketingről. A végén kapsz egy priorizált listát arról, mi hozza a legtöbb bevételt a következő 90 napban, akkor is, ha utána nem velünk dolgozol.") }} />
            </article>
            <article className="pcard">
              <h3 dangerouslySetInnerHTML={{ __html: t("t1.h", "Tanácsadói előfizetés") }} />
              <p dangerouslySetInnerHTML={{ __html: t("t1.p", "Havi stratégiai ülés, priorizálás és folyamatos elérhetőség. A végrehajtás nálatok marad, az irány és az ellenőrzés nálunk.") }} />
            </article>
            <article className="pcard">
              <h3 dangerouslySetInnerHTML={{ __html: t("t2.h", "Szakértői menedzsment") }} />
              <p dangerouslySetInnerHTML={{ __html: t("t2.p", "Átvesszük a stratégiát, a végrehajtást és a riportolást. Marketingtől a fejlesztésig a mi csapatunk visz mindent, és az eredményért is mi felelünk.") }} />
            </article>
            <article className="pcard">
              <h3 dangerouslySetInnerHTML={{ __html: t("t3.h", "Growth inkubátor") }} />
              <p dangerouslySetInnerHTML={{ __html: t("t3.p", "Bevételmegosztásos partnerség. Kevesebb előzetes költség nálad, nagyobb közös érdekeltség az eredményben.") }} />
            </article>
          </div>
          <p className="rv" style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link href="/#arak" className="tlink">
              <span dangerouslySetInnerHTML={{ __html: t("rol.coll.link", "Részletes összehasonlítás és árak") }} />
              <span className="ar">→</span>
            </Link>
          </p>
        </div>
      </section>
      <section className="on-navy">
        <div className="wrap">
          <div className="cta">
            <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("fc.eyebrow", "Beszéljünk") }} />
            <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("fc.title", "Mi tartja vissza a növekedésed?") }} />
            <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("fc.lede", "Beszéljünk arról, hol tartasz, hova akarsz eljutni, és mi áll az útban. Egyetlen hívással kezdődik.") }} />
            <div className="btns rv">
              <Link href="/kapcsolat" className="btn">
                <span dangerouslySetInnerHTML={{ __html: t("fc.cta1", "Foglalj hívást") }} />
                <span className="ar">→</span>
              </Link>
              <a href="mailto:info@emergence-engineering.com" className="btn btn-line" dangerouslySetInnerHTML={{ __html: t("fc.cta2", "Inkább e-mailben kezdenél?") }} />
            </div>
            <p className="rv" style={{ fontSize: ".88rem", color: "#8FA0B8" }} dangerouslySetInnerHTML={{ __html: t("fc.fine", "Harminc perc, prezentáció nélkül. Ha nem látunk közös munkát, a hívás végén ezt mondjuk.") }} />
          </div>
        </div>
      </section>
    </GeShell>
  );
};

export default Rolunk;
