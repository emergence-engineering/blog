import { ActionType, createReducer } from "typesafe-actions";

import { addSample } from "../actions/sample/types";

const actions = { addSample };

export const sampleReducer = createReducer<
  string | null,
  ActionType<typeof actions>
>(null).handleAction(addSample, (state, action) => action.payload);
