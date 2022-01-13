import React from "react";
import App, { AppInitialProps, AppProps } from "next/app";
import Head from "next/head";
import { createGlobalStyle } from "styled-components";
import "codemirror/lib/codemirror.css";

import { initializeGA } from "../features/analytics/google-analytics";

interface MyAppProps extends AppProps, AppInitialProps {}

const GlobalStyle = createGlobalStyle`
* {
box-sizing: border-box;
}
`;

class MyApp extends App<MyAppProps> {
  state = {
    gaInitialized: false,
  };

  setGaInitialized = () => ({ gaInitialized: true });

  componentDidMount(): void {
    if (!this.state.gaInitialized) {
      initializeGA();
      this.setState(this.setGaInitialized);
    }
  }

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
