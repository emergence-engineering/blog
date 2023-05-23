import { SlasMenuState } from "./types";
import { SlashMenuMeta } from "./index";
import {
  findParent,
  getElementById,
  getNextItemId,
  getPreviousItemId,
} from "./utils";

export const openSubMenu = (state: SlasMenuState, meta: SlashMenuMeta) => {
  const menuElement = meta.element;
  if (menuElement?.type === "submenu") {
    return {
      ...state,
      elements: menuElement.elements,
      selected: menuElement.elements[0].id,
      subMenuId: menuElement.id,
    };
  }
  return state;
};

export const closeSubMenu = (
  initialState: SlasMenuState,
  state: SlasMenuState,
  meta: SlashMenuMeta,
) => {
  const menuElement = meta.element;
  if (menuElement?.type === "submenu") {
    const parentId = findParent(menuElement.id, initialState.filteredElements);
    if (parentId === "root") {
      return { ...initialState, open: true };
    }
    const parent = getElementById(parentId, initialState);
    if (parent?.type !== "submenu") return state;
    return {
      ...state,
      elements: parent.elements,
      selected: parent.elements[0].id,
      subMenuId: parentId,
    };
  }
  return state;
};

export const nextItem = (state: SlasMenuState) => {
  const nextId = getNextItemId(state);
  if (!nextId) return state;
  return { ...state, selected: nextId };
};

export const prevItem = (state: SlasMenuState) => {
  const prevId = getPreviousItemId(state);
  if (!prevId) return state;
  return { ...state, selected: prevId };
};
export const filterItems = (state: SlasMenuState, filter: String) => {
  return { ...state, filter };
};
