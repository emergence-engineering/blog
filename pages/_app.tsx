import React from "react";
import App, { AppProps } from "next/app";
import Head from "next/head";
import "../public/global.css";
import "prosemirror-slash-menu-react/dist/styles/menu-style.css";

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
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
