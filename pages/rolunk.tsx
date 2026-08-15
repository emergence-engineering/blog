import React from "react";
import { NextPage } from "next";
import Link from "next/link";
import { GeShell } from "../features/ge/components/GeShell";
import { GeSEO } from "../features/ge/components/GeSEO";
import { useGeT } from "../features/ge/i18n/useGeT";

// Ported from growth-engineers-v4/rolunk.html; DOM structure intentionally
// mirrors the static original (see features/ge/README.md).
const Rolunk: NextPage = () => {
  const t = useGeT();
  return (
    <GeShell page="rolunk">
      <GeSEO
        title={t("mt.about", "Rólunk, Growth Engineers")}
        description={t("md.about", "Beépülünk a cégedbe, hozzáférünk a számokhoz, és a bevételért felelünk. Ismerd meg a growth engineering elveinket és a 13 fős csapatot.")}
        ogTitle={t("mt.about", "Rólunk, Growth Engineers")}
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
          <h1 className="rv" dangerouslySetInnerHTML={{ __html: t("rol.h1", "Growth engineering <mark>elvek</mark>") }} />
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
            <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("rol.pr.lede", "Három elv, ami minden döntésünket meghatározza, a hangzatos kampányok helyett a rendszert, a számokat és a profitot nézzük.") }} />
          </div>
          <div className="cards3 rv">
            <article className="pcard">
              <span className="pnum">01</span>
              <h3 dangerouslySetInnerHTML={{ __html: t("rol.p1.h", "A kampány kifut, a rendszer marad") }} />
              <p dangerouslySetInnerHTML={{ __html: t("rol.p1.p", "Egy jó kampány két hétig hoz. Egy jól bekötött mérés, tölcsér és automatizáció évekig. Az utóbbit építjük, mert az elsőt bárki meg tudja venni.") }} />
            </article>
            <article className="pcard">
              <span className="pnum">02</span>
              <h3 dangerouslySetInnerHTML={{ __html: t("rol.p2.h", "A belső growth csapatod") }} />
              <p dangerouslySetInnerHTML={{ __html: t("rol.p2.p", "Ott vagyunk a Slacketekben és a CRM-etekben, és látjuk ugyanazokat a számokat, amiket ti. Ezért tudjuk megmondani, hogy a probléma a hirdetésnél van-e vagy az értékesítésnél.") }} />
            </article>
            <article className="pcard">
              <span className="pnum">03</span>
              <h3 dangerouslySetInnerHTML={{ __html: t("rol.p3.h", "Bevétel, margin, LTV") }} />
              <p dangerouslySetInnerHTML={{ __html: t("rol.p3.p", "A CTR és az elérés akkor érdekes, ha közben a profit is mozdul. A riportunk ezért a bevétellel kezdődik, és a marketingmutatók csak magyarázatként jönnek utána.") }} />
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
      <section className="on-navy">
        <div className="wrap">
          <div className="quote-grid">
            <div className="rv">
              <div className="eyebrow" dangerouslySetInnerHTML={{ __html: t("rol.tst.eyebrow", "Vélemények") }} />
              <blockquote dangerouslySetInnerHTML={{ __html: t("rol.tst.quote", "„Az Emergence Engineering kivételes. Bármilyen új projektnél és terméknél ők az első választásom. Gyorsan és nagyon magas minőségben dolgoznak. Ritka képességük, hogy értik a korai fázisú termékfelfedezés igényeit, és közben robusztus, skálázható alkalmazásokat is építenek.”") }} />
              <div className="attrib">
                <div className="av">AM</div>
                <div>
                  <div className="who">Andrew Milich</div>
                  <div className="role" dangerouslySetInnerHTML={{ __html: t("rol.tst.role", "társalapító &amp; CEO, Skiff") }} />
                </div>
              </div>
            </div>
            <div className="qside rv">
              <h4 dangerouslySetInnerHTML={{ __html: t("rol.qside.h", "Kikkel dolgozunk együtt?") }} />
              <p className="lede" style={{ fontSize: ".95rem", marginBottom: "1.6rem" }} dangerouslySetInnerHTML={{ __html: t("rol.qside.p", "Olyan cégekkel dolgozunk, ahol valódi skálázási potenciál van, és a vezetés kész nagyobb stratégiai döntéseket is meghozni. Mivel mélyen beépülünk, egyszerre csak néhány partnert vállalunk.") }} />
              <Link href="/kapcsolat" className="btn">
                <span dangerouslySetInnerHTML={{ __html: t("rol.qside.cta", "Foglalj hívást") }} />
                <span className="ar">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="wrap">
          <div className="shead solo">
            <div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("rol.coll.eyebrow", "Együttműködés") }} />
              <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("rol.coll.h", "Hogyan tudsz velünk dolgozni") }} />
            </div>
          </div>
          <div className="cards3 rv">
            <article className="pcard">
              <h3 dangerouslySetInnerHTML={{ __html: t("rol.c1.h", "Mély audit") }} />
              <p dangerouslySetInnerHTML={{ __html: t("rol.c1.p", "Egyszeri, fix díjas átvilágítás, a végén priorizált 90 napos listával.") }} />
            </article>
            <article className="pcard">
              <h3 dangerouslySetInnerHTML={{ __html: t("rol.c2.h", "Tanácsadói előfizetés") }} />
              <p dangerouslySetInnerHTML={{ __html: t("rol.c2.p", "Havi stratégiai ülés és folyamatos elérhetőség. A végrehajtás nálatok marad.") }} />
            </article>
            <article className="pcard">
              <h3 dangerouslySetInnerHTML={{ __html: t("rol.c3.h", "Szakértői menedzsment") }} />
              <p dangerouslySetInnerHTML={{ __html: t("rol.c3.p", "Átvesszük a stratégiát, a végrehajtást és a riportolást, és felelünk az eredményekért.") }} />
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
            <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("rol.fc.h", "Mi tartja vissza a növekedésed?") }} />
            <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("rol.fc.lede", "Beszéljünk arról, hol tartasz, hova akarsz eljutni, és mi áll az útban. Egyetlen hívással kezdődik.") }} />
            <div className="btns rv">
              <Link href="/kapcsolat" className="btn">
                <span dangerouslySetInnerHTML={{ __html: t("rol.fc.cta1", "Foglalj hívást") }} />
                <span className="ar">→</span>
              </Link>
              <a href="mailto:info@emergence-engineering.com" className="btn btn-line" dangerouslySetInnerHTML={{ __html: t("rol.fc.cta2", "Inkább e-mailben kezdenél?") }} />
            </div>
            <p className="rv" style={{ fontSize: ".88rem", color: "#8FA0B8" }} dangerouslySetInnerHTML={{ __html: t("rol.fc.fine", "Harminc perc, prezentáció nélkül. Ha nem látunk közös munkát, a hívás végén ezt mondjuk.") }} />
          </div>
        </div>
      </section>
    </GeShell>
  );
};

export default Rolunk;
