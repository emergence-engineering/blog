import getConfig from "next/config";
import "@firebase/auth";
import "@firebase/firestore";
import "@firebase/database";
import { firebase } from "@firebase/app";

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

firebase.initializeApp(firebaseConfig);
firebase.firestore!().settings({});
