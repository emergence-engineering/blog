import dns from "dns/promises";
import net from "net";
import type { NextApiRequest, NextApiResponse } from "next";

// Heuristic AI-visibility check used by the AI SEO page hero widget. Fetches
// the given site plus its robots.txt / llms.txt server-side and scores the
// signals the page copy talks about (crawler access, structured data, entity
// markup, quotable content). No external APIs — plain fetch + parsing.

export type AivCheck = {
  id: string;
  pass: boolean;
  partial?: boolean;
  detail?: string;
  points: number;
  max: number;
};

export type AivResult = {
  url: string;
  score: number;
  checks: AivCheck[];
};

const FETCH_TIMEOUT_MS = 8000;
const MAX_BYTES = 1_500_000;
const AI_BOTS = ["GPTBot", "ClaudeBot", "PerplexityBot", "Google-Extended"];

const isPrivateIp = (ip: string): boolean => {
  if (net.isIPv6(ip)) {
    const low = ip.toLowerCase();
    return (
      low === "::1" ||
      low.startsWith("fc") ||
      low.startsWith("fd") ||
      low.startsWith("fe80") ||
      low.startsWith("::ffff:127.") ||
      low.startsWith("::ffff:10.") ||
      low.startsWith("::ffff:192.168.")
    );
  }
  const parts = ip.split(".").map(Number);
  if (parts.length !== 4) return true;
  const [a, b] = parts;
  return (
    a === 0 ||
    a === 10 ||
    a === 127 ||
    (a === 169 && b === 254) ||
    (a === 172 && b >= 16 && b <= 31) ||
    (a === 192 && b === 168)
  );
};

const assertPublicHost = async (host: string) => {
  if (!host || host === "localhost" || host.endsWith(".local") || host.endsWith(".internal")) {
    throw new Error("blocked");
  }
  if (net.isIP(host)) {
    if (isPrivateIp(host)) throw new Error("blocked");
    return;
  }
  const { address } = await dns.lookup(host);
  if (isPrivateIp(address)) throw new Error("blocked");
};

const fetchText = async (url: string): Promise<{ status: number; text: string; finalUrl: string }> => {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), FETCH_TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      signal: ctrl.signal,
      redirect: "follow",
      headers: {
        "user-agent":
          "Mozilla/5.0 (compatible; GrowthEngineeringAudit/1.0; +https://emergence-engineering.com)",
        accept: "text/html,application/xhtml+xml,text/plain;q=0.9,*/*;q=0.8",
      },
    });
    const finalHost = new URL(res.url).hostname;
    await assertPublicHost(finalHost);
    const reader = res.body?.getReader();
    let text = "";
    let bytes = 0;
    if (reader) {
      const decoder = new TextDecoder();
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        bytes += value.byteLength;
        text += decoder.decode(value, { stream: true });
        if (bytes > MAX_BYTES) {
          ctrl.abort();
          break;
        }
      }
    }
    return { status: res.status, text, finalUrl: res.url };
  } finally {
    clearTimeout(timer);
  }
};

// Minimal robots.txt evaluation: is the given UA blocked from "/"?
const botBlocked = (robots: string, bot: string): boolean => {
  const lines = robots.split(/\r?\n/).map((l) => l.replace(/#.*$/, "").trim());
  let groups: { agents: string[]; disallowAll: boolean; hasAllow: boolean }[] = [];
  let current: { agents: string[]; disallowAll: boolean; hasAllow: boolean } | null = null;
  let collectingAgents = false;
  for (const line of lines) {
    const m = line.match(/^([a-zA-Z-]+)\s*:\s*(.*)$/);
    if (!m) continue;
    const key = m[1].toLowerCase();
    const value = m[2].trim();
    if (key === "user-agent") {
      if (!collectingAgents || !current) {
        current = { agents: [], disallowAll: false, hasAllow: false };
        groups.push(current);
        collectingAgents = true;
      }
      current.agents.push(value.toLowerCase());
    } else {
      collectingAgents = false;
      if (!current) continue;
      if (key === "disallow" && value === "/") current.disallowAll = true;
      if (key === "allow" && (value === "/" || value === "")) current.hasAllow = true;
    }
  }
  const botLow = bot.toLowerCase();
  const specific = groups.find((g) => g.agents.some((a) => a === botLow));
  const wildcard = groups.find((g) => g.agents.includes("*"));
  const group = specific || wildcard;
  if (!group) return false;
  return group.disallowAll && !group.hasAllow;
};

const stripTags = (html: string): string =>
  html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const collectJsonLdTypes = (html: string): string[] => {
  const types: string[] = [];
  const re = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let m: RegExpExecArray | null;
  const walk = (node: unknown) => {
    if (Array.isArray(node)) return node.forEach(walk);
    if (node && typeof node === "object") {
      const obj = node as Record<string, unknown>;
      const t2 = obj["@type"];
      if (typeof t2 === "string") types.push(t2);
      if (Array.isArray(t2)) t2.forEach((x) => typeof x === "string" && types.push(x));
      Object.values(obj).forEach(walk);
    }
  };
  while ((m = re.exec(html))) {
    try {
      walk(JSON.parse(m[1]));
    } catch {
      /* invalid JSON-LD block — ignore */
    }
  }
  return [...new Set(types)];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const raw = typeof req.query.url === "string" ? req.query.url.trim() : "";
  if (!raw) return res.status(400).json({ error: "missing-url" });

  let target: URL;
  try {
    target = new URL(/^https?:\/\//i.test(raw) ? raw : `https://${raw}`);
    if (target.protocol !== "https:" && target.protocol !== "http:") throw new Error("proto");
  } catch {
    return res.status(400).json({ error: "invalid-url" });
  }

  try {
    await assertPublicHost(target.hostname);
  } catch {
    return res.status(400).json({ error: "invalid-url" });
  }

  try {
    const page = await fetchText(target.toString());
    if (page.status >= 400 || !page.text) {
      return res.status(200).json({ error: "unreachable" });
    }
    const html = page.text;
    const origin = new URL(page.finalUrl).origin;

    const [robotsRes, llmsRes] = await Promise.allSettled([
      fetchText(`${origin}/robots.txt`),
      fetchText(`${origin}/llms.txt`),
    ]);
    const robots =
      robotsRes.status === "fulfilled" && robotsRes.value.status === 200 ? robotsRes.value.text : "";
    const llmsOk =
      llmsRes.status === "fulfilled" &&
      llmsRes.value.status === 200 &&
      llmsRes.value.text.trim().length > 0 &&
      !/^\s*</.test(llmsRes.value.text);

    const checks: AivCheck[] = [];
    const add = (id: string, pass: boolean, max: number, opts?: { partial?: boolean; detail?: string; points?: number }) => {
      checks.push({
        id,
        pass,
        partial: opts?.partial,
        detail: opts?.detail,
        max,
        points: opts?.points !== undefined ? opts.points : pass ? max : 0,
      });
    };

    // 1. AI crawlers (robots.txt). Not being blocked is the default state of
    // the web, so full points need an explicit, AI-aware robots.txt; a silent
    // or missing one only gets partial credit.
    const blockedBots = AI_BOTS.filter((b) => botBlocked(robots, b));
    const allowedCount = AI_BOTS.length - blockedBots.length;
    const mentionsAiBot = AI_BOTS.some((b) => robots.toLowerCase().includes(b.toLowerCase()));
    let crawlerPoints: number;
    if (blockedBots.length > 0) {
      crawlerPoints = Math.round((allowedCount / AI_BOTS.length) * 12);
    } else if (mentionsAiBot) {
      crawlerPoints = 20;
    } else if (robots) {
      crawlerPoints = 12;
    } else {
      crawlerPoints = 8;
    }
    add("crawlers", blockedBots.length === 0 && mentionsAiBot, 20, {
      partial: blockedBots.length < AI_BOTS.length && !(blockedBots.length === 0 && mentionsAiBot),
      detail: blockedBots.length ? blockedBots.join(", ") : undefined,
      points: crawlerPoints,
    });

    // 2. llms.txt
    add("llmstxt", llmsOk, 5);

    // 3. Structured data (JSON-LD). Generic boilerplate types (WebSite,
    // WebPage, BreadcrumbList) ship with most CMS themes — only content-rich
    // types earn full points.
    const types = collectJsonLdTypes(html);
    const richTypes = types.filter(
      (t2) => !/^(website|webpage|breadcrumblist|readaction|searchaction|imageobject|sitenavigationelement|listitem|entrypoint)$/i.test(t2),
    );
    add("jsonld", richTypes.length > 0, 15, {
      partial: richTypes.length === 0 && types.length > 0,
      detail: (richTypes.length ? richTypes : types).slice(0, 6).join(", ") || undefined,
      points: richTypes.length > 0 ? 15 : types.length > 0 ? 6 : 0,
    });

    // 4. Entity signals
    const hasOrg = types.some((t2) => /organization|localbusiness|corporation/i.test(t2));
    const hasSameAs = /"sameAs"\s*:/.test(html);
    add("entity", hasOrg, 10, {
      partial: !hasOrg && hasSameAs,
      points: hasOrg ? 10 : hasSameAs ? 5 : 0,
    });

    // 5. Question-style content
    const headings = [...html.matchAll(/<h[23][^>]*>([\s\S]*?)<\/h[23]>/gi)].map((h) =>
      stripTags(h[1]),
    );
    const questionCount = headings.filter((h) => h.trim().endsWith("?")).length;
    const hasFaqSchema = types.some((t2) => /faqpage/i.test(t2));
    add("questions", questionCount > 0 || hasFaqSchema, 10, {
      detail: questionCount ? String(questionCount) : undefined,
    });

    // 6. Title + meta description
    const title = stripTags((html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1] || "");
    const desc =
      (html.match(/<meta[^>]+name=["']description["'][^>]*content=["']([^"']*)["']/i) ||
        html.match(/<meta[^>]+content=["']([^"']*)["'][^>]*name=["']description["']/i) ||
        [])[1] || "";
    const titleOk = title.length >= 10 && title.length <= 75;
    const descOk = desc.length >= 50 && desc.length <= 170;
    add("meta", titleOk && descOk, 10, {
      partial: titleOk !== descOk,
      points: (titleOk ? 5 : 0) + (descOk ? 5 : 0),
    });

    // 7. Quotable text content
    const text = stripTags(html);
    add("content", text.length >= 3000, 15, {
      partial: text.length >= 1200 && text.length < 3000,
      points: text.length >= 3000 ? 15 : text.length >= 1200 ? 7 : 0,
    });

    // 8. Open Graph
    const hasOg = /<meta[^>]+property=["']og:(title|description|image)["']/i.test(html);
    add("og", hasOg, 5);

    // 9. H1 + lang
    const hasH1 = /<h1[\s>]/i.test(html);
    const hasLang = /<html[^>]+lang=["'][a-z]/i.test(html);
    add("h1lang", hasH1 && hasLang, 10, {
      partial: hasH1 !== hasLang,
      points: (hasH1 ? 5 : 0) + (hasLang ? 5 : 0),
    });

    const score = checks.reduce((s, c) => s + c.points, 0);
    const result: AivResult = { url: page.finalUrl, score, checks };
    res.setHeader("Cache-Control", "no-store");
    return res.status(200).json(result);
  } catch {
    return res.status(200).json({ error: "unreachable" });
  }
}
