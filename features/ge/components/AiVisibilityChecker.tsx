import React, { FormEvent, useState } from "react";
import Link from "next/link";
import { useGeT } from "../i18n/useGeT";
import type { AivResult } from "../../../pages/api/ai-visibility";

// The AI SEO hero widget: type a domain, get an instant heuristic
// "AI visibility" score from /api/ai-visibility (no external APIs).
const CHECK_IDS = [
  "crawlers",
  "llmstxt",
  "jsonld",
  "entity",
  "questions",
  "meta",
  "content",
  "og",
  "h1lang",
] as const;

const HU_LABELS: Record<string, [string, string]> = {
  crawlers: ["AI-crawlerek engedélyezve", "GPTBot, ClaudeBot, PerplexityBot, Google-Extended"],
  llmstxt: ["llms.txt", "Külön összefoglaló az AI-rendszereknek"],
  jsonld: ["Strukturált adatok (JSON-LD)", "Ebből érti meg a gép, mi van az oldalon"],
  entity: ["Entitásjelek", "Organization schema és sameAs hivatkozások"],
  questions: ["Kérdésalapú tartalom", "Kérdő címsorok vagy FAQ schema"],
  meta: ["Title és meta description", "Megfelelő hosszúságú alapmetaadatok"],
  content: ["Idézhető szöveg", "Van elég géppel olvasható tartalom"],
  og: ["Open Graph metaadatok", "Megosztáshoz és előnézetekhez"],
  h1lang: ["H1 és nyelvi attribútum", "Világos főcím és lang jelölés"],
};

export const AiVisibilityChecker: React.FunctionComponent = () => {
  const t = useGeT();
  const [url, setUrl] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "error" | "done">("idle");
  const [result, setResult] = useState<AivResult | null>(null);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!url.trim() || state === "loading") return;
    setState("loading");
    setResult(null);
    try {
      const res = await fetch(`/api/ai-visibility?url=${encodeURIComponent(url.trim())}`);
      const data = await res.json();
      if (!res.ok || data.error || !Array.isArray(data.checks)) {
        setState("error");
        return;
      }
      setResult(data as AivResult);
      setState("done");
    } catch {
      setState("error");
    }
  };

  return (
    <div className="aiv">
      <div className="aiv-kick" dangerouslySetInnerHTML={{ __html: t("seo.aiv.kick", "AI-láthatósági gyorsteszt") }} />
      <h3 dangerouslySetInnerHTML={{ __html: t("seo.aiv.h", "Mennyire lát téged az AI?") }} />
      <form className="aiv-bar" onSubmit={onSubmit}>
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder={t("seo.aiv.ph", "ceged.hu")}
          aria-label={t("seo.aiv.label", "A weboldalad címe")}
          inputMode="url"
          autoComplete="url"
        />
        <button className="btn" type="submit" disabled={state === "loading"}>
          <span
            dangerouslySetInnerHTML={{
              __html: state === "loading" ? t("seo.aiv.loading", "Elemzés…") : t("seo.aiv.go", "Nézzük meg"),
            }}
          />
        </button>
      </form>
      {state === "idle" && (
        <p className="aiv-hint" dangerouslySetInnerHTML={{ __html: t("seo.aiv.hint", "Megnézzük a robots.txt-t, a strukturált adatokat és az idézhető tartalmat, pár másodperc az egész.") }} />
      )}
      {state === "loading" && (
        <p className="aiv-hint" dangerouslySetInnerHTML={{ __html: t("seo.aiv.wait", "Letöltjük az oldalt és végigfuttatjuk az ellenőrzéseket…") }} />
      )}
      {state === "error" && (
        <p className="aiv-hint aiv-err" dangerouslySetInnerHTML={{ __html: t("seo.aiv.err", "Ezt az oldalt most nem tudtuk elérni. Ellenőrizd a címet, vagy próbáld újra kicsit később.") }} />
      )}
      {state === "done" && result && (
        <div className="aiv-res">
          <div className="aiv-score">
            <div className={"aiv-num" + (result.score >= 70 ? " good" : result.score >= 40 ? " mid" : " low")}>
              {result.score}
              <span>/100</span>
            </div>
            <div className="aiv-score-l" dangerouslySetInnerHTML={{ __html: t("seo.aiv.scorel", "AI-láthatósági pontszám") }} />
          </div>
          <ul className="aiv-list">
            {CHECK_IDS.map((id) => {
              const c = result.checks.find((x) => x.id === id);
              if (!c) return null;
              const mark = c.pass ? "✓" : c.partial ? "±" : "✕";
              const cls = c.pass ? "ok" : c.partial ? "part" : "no";
              return (
                <li key={id} className={cls}>
                  <span className="aiv-mark">{mark}</span>
                  <span className="aiv-lbl">
                    <b dangerouslySetInnerHTML={{ __html: t(`seo.aiv.${id}`, HU_LABELS[id][0]) }} />
                    <small dangerouslySetInnerHTML={{ __html: t(`seo.aiv.${id}.d`, HU_LABELS[id][1]) }} />
                  </span>
                </li>
              );
            })}
          </ul>
          <p className="aiv-cta">
            <span dangerouslySetInnerHTML={{ __html: t("seo.aiv.ctal", "Ez csak a gépi gyorsteszt.") }} />{" "}
            <Link href="/kapcsolat#urlap" dangerouslySetInnerHTML={{ __html: t("seo.aiv.ctab", "Kérj teljes AI SEO auditot →") }} />
          </p>
        </div>
      )}
    </div>
  );
};
