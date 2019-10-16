import App, { AppInitialProps, AppProps } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import withReduxStore from "next-redux-wrapper";
import firebase from "firebase/app";
import { createFirestoreInstance } from "redux-firestore";
import { initStore, rrfConfig } from "../setup/createStore";
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
        <ReactReduxFirebaseProvider
          firebase={firebase}
          config={rrfConfig}
          dispatch={store.dispatch}
          createFirestoreInstance={createFirestoreInstance}
        >
          <Component {...pageProps} />
        </ReactReduxFirebaseProvider>
      </Provider>
    );
  }
}

export default withReduxStore(initStore)(MyApp);
