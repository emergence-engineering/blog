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

// BIG TODO!
export interface RootState extends StateType<typeof rootReducer> {
  firebase: any;
  firestore: any;
}
export type ReduxStore = ReturnType<typeof createStore>;
