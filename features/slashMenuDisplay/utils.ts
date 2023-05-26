import { SlashMenuState } from "../slashMenuPlugin/types";
import { getElementById } from "../slashMenuPlugin/utils";

export const getElements = (state: SlashMenuState) => {
  const { subMenuId, filteredElements } = state;
  if (!subMenuId) {
    return filteredElements;
  }
  const subMenu = getElementById(subMenuId, state);
  console.log({ subMenu });
  if (subMenu && subMenu.type === "submenu") {
    return subMenu.elements;
  }
};

export const getPosition = () => {};
