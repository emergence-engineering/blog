import { SlasMenuState } from "./types";

export enum SlashCases {
  OpenMenu = "openMenu",
  CloseMenu = "closeMenu",
  Execute = "Execute",
  NextItem = "NextItem",
  PrevItem = "PrevItem",
  Ignore = "Ignore",
}

export const getCase = (
  state: SlasMenuState,
  event: KeyboardEvent,
): SlashCases => {
  console.log(event.key);
  if (!state.open && event.key === "/") {
    return SlashCases.OpenMenu;
  }
  if (state.open && event.key === "/") {
    return SlashCases.CloseMenu;
  }
  if (state.open && event.key === "Enter") {
    return SlashCases.Execute;
  }
  if (state.open && event.key === "ArrowDown") {
    return SlashCases.NextItem;
  }
  if (state.open && event.key === "ArrowUp") {
    return SlashCases.PrevItem;
  }
  return SlashCases.Ignore;
};
