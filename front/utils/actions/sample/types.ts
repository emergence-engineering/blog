import { createAction } from "typesafe-actions";

export const addSample = createAction("sample/ADD")<string>();
