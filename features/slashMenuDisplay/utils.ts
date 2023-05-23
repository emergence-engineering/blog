import { SlasMenuState } from "../slashMenuPlugin/types";
import { getElementById } from "../slashMenuPlugin/utils";

export const getElements = (initialState: SlasMenuState) => {
  const { subMenuId, filteredElements } = initialState;
  if (!subMenuId) {
    return filteredElements;
  }
  const subMenu = getElementById(subMenuId, initialState);
  if (subMenu && subMenu.type === "submenu") {
    return subMenu.elements;
  }
};
