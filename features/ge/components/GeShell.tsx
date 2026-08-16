import React, { FunctionComponent, PropsWithChildren } from "react";
import Head from "next/head";
import { GeHeader } from "./GeHeader";
import { GeFooter } from "./GeFooter";
import { useGeSite } from "../hooks/useGeSite";

/**
 * Page shell for the Growth Engineering pages: scoping wrapper (all GE styles
 * live under .ge, page-specific styles under .ge-p-<page>), shared header and
 * footer, and the ported site.js behaviours.
 */
export const GeShell: FunctionComponent<
  PropsWithChildren<{ page: string; bodyClass?: string }>
> = ({ page, bodyClass, children }) => {
  useGeSite();
  return (
    <div className={`ge ge-p-${page}${bodyClass ? ` ${bodyClass}` : ""}`}>
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
      <GeHeader />
      <main>{children}</main>
      <GeFooter />
    </div>
  );
};
