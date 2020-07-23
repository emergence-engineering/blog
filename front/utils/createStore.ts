import getConfig from "next/config";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { getFirebase } from "react-redux-firebase";

import { rootReducer } from "./reducers/rootReducer";

const {
  FIREBASE_API_KEY,
  FIREBASE_PROJECT_ID,
  FIREBASE_SENDER_ID,
  FIREBASE_APP_ID,
  FUNCTIONS_EMULATOR_HOST,
  FIRESTORE_EMULATOR_HOST,
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

export const rrfConfig = {
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
  FUNCTIONS_EMULATOR_HOST &&
    firebase.functions &&
    firebase
      .functions()
      .useFunctionsEmulator(`http://${FUNCTIONS_EMULATOR_HOST}`);

  const firestore = firebase.firestore();

  if (FIRESTORE_EMULATOR_HOST) {
    // initialize firestore emulator
    firestore.settings({
      host: FIRESTORE_EMULATOR_HOST,
      ssl: false,
    });
  }
}

// TODO: Type out initialState
export const initStore = (initialState: object) =>
  createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(thunk.withExtraArgument({ getFirebase })),
    ),
  );
