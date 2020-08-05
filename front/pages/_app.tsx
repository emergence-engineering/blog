import React from "react";
import App, { AppInitialProps, AppProps } from "next/app";
import { Provider } from "react-redux";
import withReduxStore from "next-redux-wrapper";
import Head from "next/head";

import { initStore } from "../../setup/createStore";
import { ReduxStore, RootState } from "../../setup/reducers/rootReducer";
import { initializeGA } from "../../utils/google-analytics";

interface MyAppProps extends AppProps, AppInitialProps {
  store: ReduxStore;
  initialState: RootState;
}

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

export default withReduxStore(initStore)(MyApp);
