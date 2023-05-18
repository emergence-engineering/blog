import { ItemId, MenuElement, SlasMenuState } from "./types";

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

const getElementById = (id: ItemId, config: SlasMenuState) =>
  getAllElements(config).find((element) => element.id === id);

const findParent = (
  id: ItemId,
  state: SlasMenuState,
): MenuElement | undefined => {
  let parentId;
  state.elements.forEach((item) => {
    // if we dont filter out the searched ItemId, we will return a submenu id as its own parent
    const ids = getElementIds(item).filter((id) => id !== item.id);
    console.log(ids);
    // if (item.type === "submenu") return;
    if (ids.includes(id)) {
      parentId = ids[0];
    }
  });

  return parentId ? getElementById(parentId, state) : undefined;
};
export const getNextItemId = (state: SlasMenuState) => {
  const parent = findParent(state.selected, state);
  console.log("inNext", parent);
  if (!parent) {
    const nextItemIndex =
      state.elements.findIndex((element) => element.id === state.selected) + 1;
    if (nextItemIndex < state.elements.length) {
      // TODO go to next item
      const nextItemId = state.elements[nextItemIndex].id;
      console.log({ nextItemId });
      // console.log("should go to next item in main menu");
    }
  }
  if (parent && parent.type === "submenu") {
    const nextItemIndex =
      parent.elements.findIndex((element) => element.id === state.selected) + 1;
    if (nextItemIndex < parent.elements.length) {
      const nextItemId = parent.elements[nextItemIndex].id;
      console.log({ nextItemId });
      // TODO go to next item in sub menu
      // console.log("should go to next item in main menu");
    }
  }
};
export const getPreviousItemId = (state: SlasMenuState) => {
  const parent = findParent(state.selected, state);
  if (!parent) {
    const prevItemIndex =
      state.elements.findIndex((element) => element.id === state.selected) - 1;
    if (prevItemIndex >= 0) {
      // TODO go to previous item
      const prevItemId = state.elements[prevItemIndex].id;
      console.log({ prevItemId });
      // console.log("should go to next item in main menu");
    }
  }
  if (parent && parent.type === "submenu") {
    const prevItemIndex =
      parent.elements.findIndex((element) => element.id === state.selected) - 1;
    if (prevItemIndex >= 0) {
      const prevItemId = parent.elements[prevItemIndex].id;
      console.log({ prevItemId });
      // TODO go to previous item in sub menu
      // console.log("should go to next item in main menu");
    }
  }
};
