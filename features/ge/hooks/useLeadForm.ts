import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export type LeadFormState = "idle" | "sending" | "ok" | "error";

export interface UseLeadFormOptions {
  /** "enquiry" for the full contact forms, "capture" for email-only ones. */
  kind: "enquiry" | "capture";
  /** Which form this is, e.g. "/kapcsolat audit" — lands in the sheet and the subject line. */
  source: string;
}

export interface UseLeadForm {
  state: LeadFormState;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

/**
 * Wires a Growth Engineering / Emergence Engineering form to /api/contact.
 *
 * Serializes whatever named fields the form has, so adding a field to the
 * markup is enough — no change needed here as long as the name matches a
 * spreadsheet column (see LEAD_COLUMNS).
 */
export const useLeadForm = ({ kind, source }: UseLeadFormOptions): UseLeadForm => {
  const { locale } = useRouter();
  const [state, setState] = useState<LeadFormState>("idle");

  // Set on mount rather than at render time so the value is the visitor's
  // clock, never the server's: the API rejects submissions filled in faster
  // than a human plausibly could.
  const mountedAt = useRef(0);
  useEffect(() => {
    mountedAt.current = Date.now();
  }, []);

  const onSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (state === "sending") return;

      // Captured before awaiting: currentTarget is cleared once the handler returns.
      const form = event.currentTarget;
      const payload: Record<string, string> = {
        kind,
        source,
        locale: locale ?? "en",
        t: String(mountedAt.current),
      };
      new FormData(form).forEach((value, key) => {
        if (typeof value === "string") payload[key] = value;
      });
      // Every form carries a required consent checkbox, so reaching submit
      // means it was ticked; record "yes" rather than the browser's "on".
      payload.consent = "yes";

      setState("sending");
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error(String(res.status));
        setState("ok");
        form.reset();
      } catch {
        setState("error");
      }
    },
    [kind, locale, source, state],
  );

  return { state, onSubmit };
};
