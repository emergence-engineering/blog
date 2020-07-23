import App, { AppInitialProps, AppProps } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import withReduxStore from "next-redux-wrapper";
import firebase from "firebase/app";
import { createFirestoreInstance } from "redux-firestore";
import { createGlobalStyle } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { initStore, rrfConfig } from "../utils/createStore";
import { ReduxStore, RootState } from "../utils/reducers/rootReducer";
import { initSentry } from "../features/sentry";

interface MyAppProps extends AppProps, AppInitialProps {
  store: ReduxStore;
  initialState: RootState;
}

interface MyAppLocalState {
  sentryInitialized: boolean;
  analyticsInitialized: boolean;
}

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
`;

const MyAppLocalStateAPI = {
  setSentryInitialized: (state: MyAppLocalState) => ({
    ...state,
    sentryInitialized: true,
  }),
  setAnalyticsInitialized: (state: MyAppLocalState) => ({
    ...state,
    analyticsInitialized: true,
  }),
};

class MyApp extends App<MyAppProps> {
  state: MyAppLocalState = {
    sentryInitialized: false,
    analyticsInitialized: false,
  };

  componentDidMount() {
    if (!this.state.sentryInitialized) {
      initSentry();
      this.setState(MyAppLocalStateAPI.setSentryInitialized);
    }
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <GlobalStyle />
        <ReactReduxFirebaseProvider
          firebase={firebase}
          config={rrfConfig}
          dispatch={store.dispatch}
          createFirestoreInstance={createFirestoreInstance}
        >
          <Component {...pageProps} />
        </ReactReduxFirebaseProvider>
        <ToastContainer position="bottom-right" />
      </Provider>
    );
  }
}

export default withReduxStore(initStore)(MyApp);
