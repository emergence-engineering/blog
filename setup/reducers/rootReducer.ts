import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

import { actionTypes } from "../actions/actionTypes";

const exampleInitialState = {
  exampleData: 0,
};

// REDUCERS
export const reducer = (state = exampleInitialState, action: any) => {
  switch (action.type) {
    case actionTypes.SAMPLE:
      return { ...state, exampleData: action.payLoad };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  mainStore: reducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});
