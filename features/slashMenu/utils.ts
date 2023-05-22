import { ItemId, MenuElement, SlasMenuState } from "./types";
import { EditorView } from "prosemirror-view";
import { PluginKey } from "prosemirror-state";
import { SlashMenuMeta } from "./index";

export const getElementIds = (item: MenuElement): ItemId[] => {
  if (item.type === "submenu")
    return [
      item.id,
      ...item.elements.map((item) => getElementIds(item)),
    ].flat();
  return [item.id];
};

export const getAllElementIds = (config: SlasMenuState) =>
  config.elements.map((element) => getElementIds(element)).flat();

export const hasDuplicateIds = (config: SlasMenuState): boolean => {
  const ids = getAllElementIds(config);
  return ids.length !== new Set(ids).size;
};
const getElements = (item: MenuElement): MenuElement[] => {
  if (item.type === "submenu")
    return [item, ...item.elements.map((item) => getElements(item))].flat();
  return [item];
};
export const getAllElements = (config: SlasMenuState) =>
  config.elements.map((element) => getElements(element)).flat();

export const getElementById = (id: ItemId, state: SlasMenuState) =>
  getAllElements(state).find((element) => element.id === id);

export const findParent = (
  id: ItemId,
  elements: MenuElement[],
  subMenu: ItemId | "root" = "root",
): ItemId | "root" => {
  let parentId: ItemId = "root";
  elements.forEach((item) => {
    if (item.type === "submenu") {
      if (item.id === id) parentId = subMenu;
      const elementIds = item.elements.map((item) => item.id);
      if (elementIds.includes(id)) {
        parentId = item.id;
      } else parentId = findParent(id, item.elements, item.id);
    }
    if (item.id === id) parentId = subMenu;
  });
  return parentId;
};
export const getNextItemId = (state: SlasMenuState): ItemId | undefined => {
  const parentId = findParent(state.selected, state.elements);
  const parent = getElementById(parentId, state);
  if (parentId === "root") {
    const nextItemIndex =
      state.elements.findIndex((element) => element.id === state.selected) + 1;
    if (nextItemIndex < state.elements.length) {
      return state.elements[nextItemIndex].id;
    }
  }
  if (parent && parent.type === "submenu") {
    const nextItemIndex =
      parent.elements.findIndex((element) => element.id === state.selected) + 1;
    if (nextItemIndex < parent.elements.length) {
      return parent.elements[nextItemIndex].id;
    }
  }
};
export const getPreviousItemId = (state: SlasMenuState): ItemId | undefined => {
  const parentId = findParent(state.selected, state.elements);
  const parent = getElementById(parentId, state);
  if (parentId === "root") {
    const prevItemIndex =
      state.elements.findIndex((element) => element.id === state.selected) - 1;
    if (prevItemIndex >= 0) {
      return state.elements[prevItemIndex].id;
    }
  }
  if (parent && parent.type === "submenu") {
    const prevItemIndex =
      parent.elements.findIndex((element) => element.id === state.selected) - 1;
    if (prevItemIndex >= 0) {
      return parent.elements[prevItemIndex].id;
    }
  }
};
export const dispatchWithMeta = (
  view: EditorView,
  key: PluginKey,
  meta: SlashMenuMeta,
) => view.dispatch(view.state.tr.setMeta(key, meta));

export const AllowedKeys = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
