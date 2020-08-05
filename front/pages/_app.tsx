import React from "react";
import App, { AppInitialProps, AppProps } from "next/app";
import { Provider } from "react-redux";
import Head from "next/head";

import { initializeGA } from "../../utils/google-analytics";
import { createGlobalStyle } from "styled-components";

interface MyAppProps extends AppProps, AppInitialProps {
}

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
    const { Component, pageProps, store } = this.props;
    return (
      <>
  <GlobalStyle />
  <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </>
    );
  }
}

export default MyApp;
