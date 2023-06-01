import React from "react";
import App, { AppProps } from "next/app";
import Head from "next/head";
import "../public/global.css";
import "../features/slashMenuDisplay/menu-style.css";

interface MyAppProps extends AppProps {}

class MyApp extends App<MyAppProps> {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
