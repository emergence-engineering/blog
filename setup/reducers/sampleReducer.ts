import { createReducer } from "typesafe-actions";
import { addSample } from "../actions/sample/types";

export const sampleReducer = createReducer(null).handleAction(
  addSample,
  (state, action) => action.payload,
);
