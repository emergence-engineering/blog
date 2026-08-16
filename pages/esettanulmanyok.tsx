import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { GeShell } from "../features/ge/components/GeShell";
import { GeSEO } from "../features/ge/components/GeSEO";
import { useGeT } from "../features/ge/i18n/useGeT";

// Ported from growth-engineers-v4/esettanulmanyok.html; DOM structure intentionally
// mirrors the static original (see features/ge/README.md).
const Esettanulmanyok: NextPage = () => {
  const t = useGeT();
  return (
    <GeShell page="esettanulmanyok">
      <GeSEO
        title={t("mt.cases", "Esettanulmányok, Growth Engineering")}
        description={t("md.cases", "Mérhető növekedési történetek: Plantart, VezessJól, Netamin, Számlabridge, Babalesz és startup projektek, az ügyfelek saját adataiból származó számokkal.")}
        ogTitle={t("mt.cases", "Esettanulmányok, Growth Engineering")}
        ogDescription={t("od.cases", "Növekedési történetek, számokkal. A stratégiától a kivitelezésig végig ott voltunk.")}
      />
      <section className="phero">
        <div className="wrap">
          <div className="crumbs rv">
            <Link href="/" dangerouslySetInnerHTML={{ __html: t("crumb.home", "Főoldal") }} />
            <span>/</span>
            <span dangerouslySetInnerHTML={{ __html: t("esl.crumb", "Esettanulmányok") }} />
          </div>
          <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("esl.eyebrow", "Esettanulmányok") }} />
          <h1 className="rv" dangerouslySetInnerHTML={{ __html: t("esl.h1", "Növekedési történetek, <mark>számokkal</mark>") }} />
          <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("esl.lede", "Az alábbi projektekben a stratégiától a kivitelezésig végig ott voltunk. Minden szám az ügyfél saját rendszeréből származik.") }} />
        </div>
      </section>
      <section>
        <div className="wrap">
          <div className="cases">
            <article className="case rv">
              <div className="case-media">
                <Image src="/ge/img/m-plantart.webp" width={728} height={484} alt={t("alt9", "Plantart weboldal, webshop és social kampányok")} />
              </div>
              <div className="case-body">
                <h3 dangerouslySetInnerHTML={{ __html: t("esl.pa.h", "A Plantartból piacvezető és digitális bajnok lett") }} />
                <p dangerouslySetInnerHTML={{ __html: t("esl.pa.p", "Négy évig 500 millió forint körül állt az árbevétel. A márka, a weboldal, a webshop, a CRM, az automatizáció és az akvizíciós tölcsérek újjáépítése után 2024-re <strong>2 milliárd forint fölé ment</strong>, B2B és B2C oldalon egyaránt.") }} />
                <div className="metrics">
                  <div className="m">
                    <div className="dnum">3×</div>
                    <div className="d" dangerouslySetInnerHTML={{ __html: t("esl.pa.m1", "Bevételnövekedés négy év alatt") }} />
                  </div>
                  <div className="m">
                    <div className="dnum">+90%</div>
                    <div className="d" dangerouslySetInnerHTML={{ __html: t("esl.pa.m2", "Több minősített érdeklődő") }} />
                  </div>
                  <div className="m">
                    <div className="dnum">+234%</div>
                    <div className="d" dangerouslySetInnerHTML={{ __html: t("esl.pa.m3", "Konverziós arány növekedés") }} />
                  </div>
                </div>
                <div className="chips">
                  <span className="chip" dangerouslySetInnerHTML={{ __html: t("esl.pa.c1", "márkaújratervezés") }} />
                  <span className="chip" dangerouslySetInnerHTML={{ __html: t("esl.pa.c2", "tölcsérmarketing") }} />
                  <span className="chip" dangerouslySetInnerHTML={{ __html: t("esl.pa.c3", "SEO &amp; AIO") }} />
                  <span className="chip" dangerouslySetInnerHTML={{ __html: t("esl.pa.c4", "CRM") }} />
                  <span className="chip" dangerouslySetInnerHTML={{ __html: t("esl.pa.c5", "e-mail automatizáció") }} />
                  <span className="chip" dangerouslySetInnerHTML={{ __html: t("esl.pa.c6", "webshop") }} />
                </div>
                <div>
                  <Link href="/esettanulmany-plantart" className="tlink">
                    <span dangerouslySetInnerHTML={{ __html: t("esl.pa.read", "Esettanulmány elolvasása") }} />
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
                <h3 dangerouslySetInnerHTML={{ __html: t("esl.vj.h", "Felpörgetett konverziók a vezetésoktatásban") }} />
                <p dangerouslySetInnerHTML={{ __html: t("esl.vj.p", "Két weboldal, új üzleti modell és pénzügyi analitika. A legnagyobb egyetlen nyereséget a beiratkozási űrlap átalakítása hozta: az elérhetőség előrehozásával <strong>feleződött az érdeklődőszerzés költsége</strong>.") }} />
                <div className="metrics">
                  <div className="m">
                    <div className="dnum">+35%</div>
                    <div className="d" dangerouslySetInnerHTML={{ __html: t("esl.vj.m1", "Bevételnövekedés") }} />
                  </div>
                  <div className="m">
                    <div className="dnum">+93%</div>
                    <div className="d" dangerouslySetInnerHTML={{ __html: t("esl.vj.m2", "Több konverzió") }} />
                  </div>
                  <div className="m">
                    <div className="dnum">−50%</div>
                    <div className="d" dangerouslySetInnerHTML={{ __html: t("esl.vj.m3", "Érdeklődőszerzési költség") }} />
                  </div>
                </div>
                <div className="chips">
                  <span className="chip" dangerouslySetInnerHTML={{ __html: t("esl.vj.c1", "üzleti tanácsadás") }} />
                  <span className="chip" dangerouslySetInnerHTML={{ __html: t("esl.vj.c2", "pénzügyi analitika") }} />
                  <span className="chip" dangerouslySetInnerHTML={{ __html: t("esl.vj.c3", "weboldal") }} />
                  <span className="chip" dangerouslySetInnerHTML={{ __html: t("esl.vj.c4", "UX/UI") }} />
                  <span className="chip" dangerouslySetInnerHTML={{ __html: t("esl.vj.c5", "PPC") }} />
                  <span className="chip" dangerouslySetInnerHTML={{ __html: t("esl.vj.c6", "social") }} />
                </div>
                <div>
                  <Link href="/esettanulmany-vezessjol" className="tlink">
                    <span dangerouslySetInnerHTML={{ __html: t("esl.vj.read", "Esettanulmány elolvasása") }} />
                    <span className="ar">→</span>
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="band" id="weblap">
        <div className="wrap">
          <div className="shead">
            <div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("esl2.web.eyebrow", "Weblapfejlesztés") }} />
              <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("esl2.web.h", "Weboldalak, amiket terveztünk és fejlesztettünk") }} />
            </div>
            <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("esl2.web.lede", "Hazai márkák, ahol a tervezéstől a fejlesztésen át a konverzióig mi vittük a webet.") }} />
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
          </div>
        </div>
      </section>
      <section id="appfejlesztes">
        <div className="wrap">
          <div className="shead">
            <div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("esl2.app.eyebrow", "Appfejlesztés") }} />
              <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("esl2.app.h", "Startupok, akikkel dolgoztunk") }} />
            </div>
            <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("esl2.app.lede", "Nemzetközi startupok, ahol korán csatlakoztunk, és a skálázáson át velük maradtunk.") }} />
          </div>
          <div className="scrollhint rv" style={{ marginTop: "1.1rem" }} dangerouslySetInnerHTML={{ __html: t("web.ref.hint", "Görgess tovább <b>→</b>") }} />
          <div className="refscroll rv">
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
      <section className="band" id="sajattermekek">
        <div className="wrap">
          <div className="shead">
            <div>
              <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("esl2.own.eyebrow", "Saját termékek") }} />
              <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("esl2.own.h", "Saját fejlesztésű applikációink") }} />
            </div>
            <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("esl2.own.lede", "Ha nincs megvehető eszköz arra, amire szükségünk van, megépítjük, és gyakran nyílt forráskódúvá tesszük.") }} />
          </div>
          <div className="scrollhint rv" style={{ marginTop: "1.1rem" }} dangerouslySetInnerHTML={{ __html: t("web.ref.hint", "Görgess tovább <b>→</b>") }} />
          <div className="refscroll rv">
            <Link className="refcard" href="/esettanulmany-szamlabridge">
              <div className="shot cover">
                <Image src="/ge/img/p-stripe.webp" alt="A SzámlaBridge felülete: Stripe-számlázás automatizáció" width={600} height={364} />
              </div>
              <div className="rb">
                <div className="rk" dangerouslySetInnerHTML={{ __html: t("esl.szb.eyebrow", "SaaS · Pénzügy") }} />
                <div className="rn">SzámlaBridge</div>
                <p className="rp" dangerouslySetInnerHTML={{ __html: t("esl2.szb.p", "A Stripe és a magyar NAV-bekötésű számlázás közti szakadékot áthidaló middleware, amit mi terveztünk és fejlesztettünk.") }} />
              </div>
            </Link>
            <a className="refcard" href="https://pcbjam.com" rel="noopener">
              <div className="shot cover">
                <Image src="/ge/img/s-pcbjam.jpg" alt="A PCBJam weboldala" width={1280} height={800} />
              </div>
              <div className="rb">
                <div className="rk" dangerouslySetInnerHTML={{ __html: t("esl2.pcb.k", "KiCad a böngészőben") }} />
                <div className="rn">PCBJam</div>
                <p className="rp" dangerouslySetInnerHTML={{ __html: t("esl2.pcb.p", "Teljes PCB-tervező szoftvercsomag, ami WebAssemblyvel fut, teljes egészében a böngészőben. A Hacker News címlapjára került.") }} />
              </div>
            </a>
            <a className="refcard" href="https://suggestcat.com" rel="noopener">
              <div className="shot cover">
                <Image src="/ge/img/s-suggestcat.jpg" alt="A SuggestCat weboldala" width={1280} height={800} />
              </div>
              <div className="rb">
                <div className="rk" dangerouslySetInnerHTML={{ __html: t("esl2.sc.k", "Nyílt forráskódú AI-plugin") }} />
                <div className="rn">SuggestCat</div>
                <p className="rp" dangerouslySetInnerHTML={{ __html: t("esl2.sc.p", "AI-plugin rich text szerkesztőkhöz: nyelvhelyesség-javítás és szövegkiegészítés, ProseMirrorra építve.") }} />
              </div>
            </a>
            <Link className="refcard" href="/kapcsolat">
              <div className="shot">
                <Image src="/ge/img/r-jumphigher.png" alt="JumpHigher AI fitnesz app" width={462} height={330} />
              </div>
              <div className="rb">
                <div className="rk" dangerouslySetInnerHTML={{ __html: t("esl2.jh.k", "AI fitnesz app") }} />
                <div className="rn">JumpHigher</div>
                <p className="rp" dangerouslySetInnerHTML={{ __html: t("esl2.jh.p", "Platform, amit a fejlődés követésére és coacholására építettünk az edzésben.") }} />
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section className="on-navy">
        <div className="wrap">
          <div className="cta">
            <div className="eyebrow rv" dangerouslySetInnerHTML={{ __html: t("fc.eyebrow", "Beszéljünk") }} />
            <h2 className="rv" dangerouslySetInnerHTML={{ __html: t("esl.cta.h", "A tiéd lehet a következő történet") }} />
            <p className="lede rv" dangerouslySetInnerHTML={{ __html: t("esl.cta.lede", "Beszéljünk arról, hol tartasz, hova akarsz eljutni, és mi áll az útban. Egyetlen hívással kezdődik.") }} />
            <div className="btns rv">
              <Link href="/kapcsolat" className="btn">
                <span dangerouslySetInnerHTML={{ __html: t("esl.cta.b1", "Foglalj hívást") }} />
                <span className="ar">→</span>
              </Link>
              <a href="mailto:info@emergence-engineering.com" className="btn btn-line" dangerouslySetInnerHTML={{ __html: t("esl.cta.b2", "Inkább e-mailben kezdenél?") }} />
            </div>
            <p className="rv" style={{ fontSize: ".88rem", color: "#8FA0B8" }} dangerouslySetInnerHTML={{ __html: t("esl.cta.fine", "Harminc perc, prezentáció nélkül. Ha nem látunk közös munkát, a hívás végén ezt mondjuk.") }} />
          </div>
        </div>
      </section>
    </GeShell>
  );
};

export default Esettanulmanyok;
