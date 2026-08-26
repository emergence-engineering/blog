import React, { FunctionComponent } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import en from "../i18n/en";
import hu from "../i18n/hu";

/**
 * Strip tags and decode the handful of HTML entities the dictionaries use,
 * so the JSON-LD carries plain text.
 */
const toPlainText = (s: string): string =>
  s
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&ndash;/g, "–")
    .replace(/&mdash;/g, "—")
    .replace(/&rsquo;/g, "’")
    .replace(/&ldquo;/g, "“")
    .replace(/&rdquo;/g, "”")
    .replace(/&euro;/g, "€")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();

export interface GeFaqJsonLdProps {
  /** Dictionary key prefix, e.g. "faq." or "em.faq." */
  prefix: string;
  /** Number of q/a pairs under the prefix. */
  count: number;
}

/**
 * FAQPage structured data built from the same dictionary entries that render
 * the on-page <details> accordion, localized to the active locale. (The
 * Hungarian dictionary mirrors the inline fallbacks; kept in sync by tests in
 * spirit — if a key is missing the pair is skipped rather than emitted empty.)
 */
export const GeFaqJsonLd: FunctionComponent<GeFaqJsonLdProps> = ({
  prefix,
  count,
}) => {
  const { locale } = useRouter();
  const dict: Record<string, string> = locale === "hu" ? hu : en;
  const mainEntity = [];
  for (let i = 1; i <= count; i += 1) {
    const q = dict[`${prefix}q${i}`];
    const a = dict[`${prefix}a${i}`];
    if (q && a) {
      mainEntity.push({
        "@type": "Question",
        name: toPlainText(q),
        acceptedAnswer: { "@type": "Answer", text: toPlainText(a) },
      });
    }
  }
  if (!mainEntity.length) return null;
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity,
  };
  return (
    <Head>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
      />
    </Head>
  );
};
