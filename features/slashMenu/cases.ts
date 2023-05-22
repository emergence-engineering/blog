import { SlasMenuState } from "./types";
import { EditorView } from "prosemirror-view";
import { getElementById } from "./utils";

export enum SlashCases {
  OpenMenu = "openMenu",
  CloseMenu = "closeMenu",
  Execute = "Execute",
  NextItem = "NextItem",
  PrevItem = "PrevItem",
  Ignore = "Ignore",
}
const defaultConditions = {
  shouldOpen: (state: SlasMenuState, event: KeyboardEvent) =>
    !state.open && event.key === "/",
  shouldClose: (state: SlasMenuState, event: KeyboardEvent) =>
    state.open && event.key === "/",
};
export const getCase = (
  state: SlasMenuState,
  event: KeyboardEvent,
  view: EditorView,
): SlashCases => {
  console.log(event.key);
  const selected = getElementById(state.selected, state);
  if (defaultConditions.shouldOpen(state, event)) {
    return SlashCases.OpenMenu;
  }
  if (defaultConditions.shouldClose(state, event)) {
    return SlashCases.CloseMenu;
  }
  if (state.open) {
    if (event.key === "ArrowDown") {
      return SlashCases.NextItem;
    }
    if (event.key === "ArrowUp") {
      return SlashCases.PrevItem;
    }
    if (
      event.key === "Enter" ||
      event.key === "Tab" ||
      (event.key === "ArrowRight" && selected?.type === "submenu")
    ) {
      return SlashCases.Execute;
    }
    if (event.key === "Escape" || event.key === "Backspace") {
      return SlashCases.CloseMenu;
    }
  }

  return SlashCases.Ignore;
};
