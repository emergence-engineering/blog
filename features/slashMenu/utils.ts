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
