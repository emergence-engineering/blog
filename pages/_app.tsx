import App, { AppInitialProps, AppProps } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import withReduxStore from "next-redux-wrapper";

import { initStore } from "../setup/createStore";
import { ReduxStore, RootState } from "../setup/reducers/rootReducer";

interface MyAppProps extends AppProps, AppInitialProps {
  store: ReduxStore;
  initialState: RootState;
}

class MyApp extends App<MyAppProps> {
  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withReduxStore(initStore)(MyApp);
