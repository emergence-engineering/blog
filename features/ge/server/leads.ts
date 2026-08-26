import { JWT } from "google-auth-library";

/**
 * Server-side handling of website form submissions.
 *
 * Every form on the site funnels through here: the row is appended to the
 * "Web leads" spreadsheet and a notification goes to the team inbox with the
 * submitter set as reply-to, so answering a lead is one click in Gmail.
 *
 * Deliberately dependency-light: `google-auth-library` only signs the JWT,
 * the Sheets and Resend calls are plain fetch against their REST APIs.
 */

/** Spreadsheet column order. Matches the header row already in the sheet. */
export const LEAD_COLUMNS = [
  "timestamp",
  "kind",
  "source",
  "locale",
  "name",
  "company",
  "email",
  "website",
  "subject",
  "message",
  "consent",
  "ip",
] as const;

export type LeadColumn = (typeof LEAD_COLUMNS)[number];
export type Lead = Partial<Record<LeadColumn, string>> & { email: string };

const SHEET_TAB = process.env.SHEET_TAB ?? "Sheet1";
const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

/**
 * Cached across warm serverless invocations: the JWT client keeps its own
 * access token until expiry, so we avoid a token round-trip per submission.
 */
let jwtClient: JWT | null = null;

const getJwt = (): JWT => {
  if (jwtClient) return jwtClient;
  const raw = process.env.GCLOUD_SERVICE_ACCOUNT;
  if (!raw) throw new Error("GCLOUD_SERVICE_ACCOUNT is not set");
  const sa = JSON.parse(raw) as { client_email: string; private_key: string };
  jwtClient = new JWT({
    email: sa.client_email,
    key: sa.private_key,
    scopes: SCOPES,
  });
  return jwtClient;
};

/**
 * Appends one submission to the spreadsheet.
 *
 * valueInputOption is RAW on purpose: with USER_ENTERED a message starting
 * with "=" or "+" would be stored as a *formula*, which is the classic
 * spreadsheet-injection vector for anonymous web forms.
 */
export const appendLead = async (lead: Lead): Promise<void> => {
  const sheetId = process.env.SHEET_ID;
  if (!sheetId) throw new Error("SHEET_ID is not set");

  const { token } = await getJwt().getAccessToken();
  const values = [LEAD_COLUMNS.map((column) => lead[column] ?? "")];

  const res = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/` +
      `${encodeURIComponent(SHEET_TAB)}!A1:append` +
      `?valueInputOption=RAW&insertDataOption=INSERT_ROWS`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({ values }),
    },
  );

  if (!res.ok) {
    throw new Error(`Sheets append failed: ${res.status} ${await res.text()}`);
  }
};

const escapeHtml = (value: string): string =>
  value.replace(
    /[<>&"]/g,
    (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;" })[c] as string,
  );

const emailBody = (lead: Lead): string => {
  const rows = LEAD_COLUMNS.filter(
    (column) => column !== "kind" && (lead[column] ?? "").trim(),
  )
    .map(
      (column) =>
        `<tr>` +
        `<td style="padding:4px 14px 4px 0;vertical-align:top;color:#64748b">${column}</td>` +
        `<td style="padding:4px 0;vertical-align:top;white-space:pre-wrap">${escapeHtml(
          lead[column] as string,
        )}</td>` +
        `</tr>`,
    )
    .join("");

  return (
    `<div style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;color:#0f172a">` +
    `<h2 style="margin:0 0 14px">New ${lead.kind === "enquiry" ? "enquiry" : "sign-up"}</h2>` +
    `<table style="border-collapse:collapse;font-size:14px">${rows}</table>` +
    `<p style="margin-top:18px;font-size:13px;color:#64748b">` +
    `Reply to this email to answer ${escapeHtml(lead.email)} directly.</p>` +
    `</div>`
  );
};

/**
 * Sends the team notification. The submitter goes in reply-to, never in
 * `from`: putting their address in `from` would fail SPF and land the
 * notification in spam.
 */
export const sendLeadEmail = async (lead: Lead): Promise<void> => {
  const key = process.env.RESEND_KEY;
  if (!key) throw new Error("RESEND_KEY is not set");

  const to = process.env.LEAD_TO ?? "contact@emergence-engineering.com";
  const from = process.env.LEAD_FROM ?? "EE website <noreply@emergence-engineering.com>";
  const label = lead.kind === "enquiry" ? "enquiry" : "sign-up";

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "content-type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: lead.email,
      subject: `[${label}] ${lead.source ?? "website"} — ${lead.email}`,
      html: emailBody(lead),
    }),
  });

  if (!res.ok) {
    throw new Error(`Resend send failed: ${res.status} ${await res.text()}`);
  }
};
