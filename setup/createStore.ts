import getConfig from "next/config";
// import "@firebase/auth";
// import "@firebase/firestore";
// import "@firebase/database";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { getFirebase } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import { rootReducer } from "./reducers/rootReducer";

const {
  FIREBASE_API_KEY,
  FIREBASE_PROJECT_ID,
  FIREBASE_SENDER_ID,
  FIREBASE_APP_ID,
} = getConfig().publicRuntimeConfig;

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: `${FIREBASE_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${FIREBASE_PROJECT_ID}.firebaseio.com`,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: `${FIREBASE_PROJECT_ID}.appspot.com`,
  messagingSenderId: FIREBASE_SENDER_ID,
  appID: FIREBASE_APP_ID,
};

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
};

if (
  firebase.apps.length === 0 &&
  FIREBASE_API_KEY &&
  FIREBASE_PROJECT_ID &&
  FIREBASE_SENDER_ID &&
  FIREBASE_APP_ID
) {
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();
}

export const defaultStore = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument({ getFirebase })),
  ),
);

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: defaultStore.dispatch,
  createFirestoreInstance, // <- needed if using firestore
};
