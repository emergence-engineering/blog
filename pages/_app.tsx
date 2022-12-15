import React from "react";
import App, { AppProps } from "next/app";
import Head from "next/head";
import { createGlobalStyle } from "styled-components";

interface MyAppProps extends AppProps {}

const GlobalStyle = createGlobalStyle`
* {
box-sizing: border-box;
}
`;

class MyApp extends App<MyAppProps> {
  state = {
    gaInitialized: false,
  };

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <GlobalStyle />
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
