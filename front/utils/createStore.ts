import "firebase/auth";
import "firebase/firestore";

import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { rootReducer } from "./reducers/rootReducer";

// TODO: Type out initialState
export const initStore = (initialState: object) =>
  createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument({}))),
  );
