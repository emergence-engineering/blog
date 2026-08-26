import type { NextApiRequest, NextApiResponse } from "next";

import { appendLead, Lead, LEAD_COLUMNS, sendLeadEmail } from "../../features/ge/server/leads";

/**
 * Single endpoint behind every form on the site. Appends the submission to
 * the "Web leads" spreadsheet and emails the team; the two run independently
 * so one failing does not lose the lead.
 */

const MAX_FIELD = 5000;
const MIN_FILL_MS = 3000;
const RATE_LIMIT = { max: 5, windowMs: 10 * 60 * 1000 };

/**
 * Best-effort rate limit. Serverless instances are not shared, so this only
 * slows down a burst that happens to land on one instance — enough to blunt
 * naive floods, not a substitute for a real limiter if abuse starts.
 */
const hits = new Map<string, number[]>();

const rateLimited = (ip: string): boolean => {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT.windowMs);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > RATE_LIMIT.max;
};

const clientIp = (req: NextApiRequest): string => {
  const forwarded = req.headers["x-forwarded-for"];
  const raw = Array.isArray(forwarded) ? forwarded[0] : forwarded;
  return (raw ?? req.socket.remoteAddress ?? "").split(",")[0].trim();
};

const isEmail = (value: string): boolean =>
  /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value) && value.length <= 200;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "method-not-allowed" });
  }

  const body = (req.body ?? {}) as Record<string, unknown>;
  const str = (key: string): string =>
    typeof body[key] === "string" ? (body[key] as string).trim().slice(0, MAX_FIELD) : "";

  // Spam guards: bots fill the off-screen honeypot and submit far faster than
  // a human can type. Both cases get a 200 so the bot learns nothing.
  const filledFor = Date.now() - Number(body.t ?? 0);
  if (str("company_url") || !Number(body.t) || filledFor < MIN_FILL_MS) {
    return res.status(200).json({ ok: true });
  }

  const email = str("email");
  if (!isEmail(email)) return res.status(400).json({ error: "invalid-email" });

  const ip = clientIp(req);
  if (ip && rateLimited(ip)) return res.status(429).json({ error: "rate-limited" });

  const lead: Lead = { email, timestamp: new Date().toISOString(), ip };
  LEAD_COLUMNS.forEach((column) => {
    if (column === "timestamp" || column === "ip" || column === "email") return;
    const value = str(column);
    if (value) lead[column] = value;
  });
  lead.kind = lead.kind === "enquiry" ? "enquiry" : "capture";

  // The /kapcsolat audit form asks which audit is wanted via a select named
  // "audit". There is no column of its own for it — it is the subject.
  const audit = str("audit");
  if (audit && !lead.subject) lead.subject = audit;

  const [sheet, mail] = await Promise.allSettled([appendLead(lead), sendLeadEmail(lead)]);

  if (sheet.status === "rejected") console.error("[contact] sheet append failed", sheet.reason);
  if (mail.status === "rejected") console.error("[contact] email send failed", mail.reason);

  // Both sinks down means the submission is genuinely lost — tell the user so
  // the form can offer the mailto fallback instead of a false "thanks".
  if (sheet.status === "rejected" && mail.status === "rejected") {
    return res.status(502).json({ error: "delivery-failed" });
  }

  return res.status(200).json({ ok: true });
}
