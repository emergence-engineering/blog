import React from "react";
import App, { AppProps } from "next/app";
import Head from "next/head";
import "../public/global.css";
import "prosemirror-slash-menu-react/dist/styles/menu-style.css";
import { Provider as UniqueIdGeneratorProvider } from "@inline-svg-unique-id/react";

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
          <link
            href="https://fonts.googleapis.com/css2?family=PT+Sans+Narrow:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=PT+Sans+Narrow:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />

          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        {/* @ts-ignore */}
        <UniqueIdGeneratorProvider>
          <Component {...pageProps} />
        </UniqueIdGeneratorProvider>
      </>
    );
  }
}

export default MyApp;
