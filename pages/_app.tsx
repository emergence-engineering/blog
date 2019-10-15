import App from "next/app";
import React from "react";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import withReduxStore from "../lib/with-redux-store";
import { rrfProps } from "../setup/createStore";

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Provider store={reduxStore}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <Component {...pageProps} />
        </ReactReduxFirebaseProvider>
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);
