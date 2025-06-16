import React from "react";
import App, { AppProps } from "next/app";
import Head from "next/head";
import "../public/global.css";
import "prosemirror-slash-menu-react/dist/styles/menu-style.css";
import "../articles/prosemirror-image-plugin/skiff-drag-handle.css";
import { Provider as UniqueIdGeneratorProvider } from "@inline-svg-unique-id/react";
import {
  inter,
  jetbrainsMono,
  montserrat,
  ptSans,
  ptSansNarrow,
} from "../utils/fonts";

interface MyAppProps extends AppProps {}

class MyApp extends App<MyAppProps> {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <link
            rel="icon"
            type="image/png"
            sizes="48x48"
            href="/ee-icon-4848.png"
          />
          <link rel="apple-touch-icon" href="/ee-icon-192192.png" />

          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        {/* @ts-ignore */}
        <UniqueIdGeneratorProvider>
          <main
            className={`${ptSansNarrow.variable} ${montserrat.variable} ${ptSans.variable} ${inter.variable} ${jetbrainsMono.variable} font-sansNarrow`}
          >
            <Component {...pageProps} />
          </main>
        </UniqueIdGeneratorProvider>
      </>
    );
  }
}

export default MyApp;
