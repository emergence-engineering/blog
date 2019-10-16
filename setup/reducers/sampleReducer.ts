import { createReducer } from "typesafe-actions";
import { addSample } from "../actions/sample/types";

export const sampleReducer = createReducer(undefined).handleAction(
  addSample,
  (state, action) => action.payload,
);
