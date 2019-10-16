import { createStandardAction } from "typesafe-actions";

export const addSample = createStandardAction("sample/ADD")<string>();
