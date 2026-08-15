import React, { FunctionComponent, PropsWithChildren } from "react";
import Head from "next/head";
import { EnHeader } from "./EnHeader";
import { EnFooter } from "./EnFooter";
import { useGeSite } from "../hooks/useGeSite";

/**
 * Page shell for the English-only startup-facing pages (index-en,
 * contact-en). Same scoping and behaviours as GeShell with the
 * Emergence Engineering-branded header/footer.
 */
export const EnShell: FunctionComponent<
  PropsWithChildren<{ page: string }>
> = ({ page, children }) => {
  useGeSite();
  return (
    <div className={`ge ge-p-${page}`}>
      <Head>
        <link
          rel="preload"
          href="/ge/fonts/archivo-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/ge/fonts/inter-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <EnHeader />
      <main>{children}</main>
      <EnFooter />
    </div>
  );
};
