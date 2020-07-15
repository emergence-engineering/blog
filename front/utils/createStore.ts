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
  FIREBASE_DATABASE_NAME,
  FIREBASE_MESSAGING_SENDER_ID,
} = getConfig().publicRuntimeConfig;

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: `${FIREBASE_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${FIREBASE_DATABASE_NAME}.firebaseio.com`,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: `${FIREBASE_PROJECT_ID}.appspot.com`,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
};

export const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
};

if (
  firebase.apps.length === 0 &&
  FIREBASE_API_KEY &&
  FIREBASE_PROJECT_ID &&
  FIREBASE_MESSAGING_SENDER_ID &&
  FIREBASE_DATABASE_NAME
) {
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();
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
