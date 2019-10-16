import { combineReducers, createStore } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

import { StateType } from "typesafe-actions";
import { sampleReducer } from "./sampleReducer";

export const rootReducer = combineReducers({
  sample: sampleReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

export type RootState = StateType<typeof rootReducer>;
export type ReduxStore = ReturnType<typeof createStore>;
