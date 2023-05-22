import { SlasMenuState } from "./types";
import { EditorView } from "prosemirror-view";
import { AllowedKeys, getElementById } from "./utils";

export enum SlashCases {
  OpenMenu = "openMenu",
  CloseMenu = "closeMenu",
  Execute = "Execute",
  NextItem = "NextItem",
  PrevItem = "PrevItem",
  inputChange = "InputChange",
  addChar = "addChar",
  removeChar = "removeChar",
  Ignore = "Ignore",
}
const defaultConditions = {
  shouldOpen: (state: SlasMenuState, event: KeyboardEvent) =>
    !state.open && event.key === "/",
  shouldClose: (state: SlasMenuState, event: KeyboardEvent) =>
    state.open &&
    (event.key === "/" ||
      event.key === "Escape" ||
      event.key === "Backspace") &&
    state.filter.length === 0,
};
export const getCase = (
  state: SlasMenuState,
  event: KeyboardEvent,
  view: EditorView,
): SlashCases => {
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
    if (
      event.key === "Escape" ||
      (event.key === "Backspace" && state.filter.length === 0)
    ) {
      return SlashCases.CloseMenu;
    }
    if (state.filter.length > 0 && event.key === "Backspace") {
      return SlashCases.removeChar;
    }
    if (AllowedKeys.includes(event.key)) {
      return SlashCases.addChar;
    }
  }

  return SlashCases.Ignore;
};
