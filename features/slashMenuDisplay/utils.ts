import { SlashMenuState } from "../slashMenuPlugin/types";
import { getElementById } from "../slashMenuPlugin/utils";

export const getElements = (state: SlashMenuState) => {
  const { subMenuId, filteredElements } = state;
  if (!subMenuId) {
    return filteredElements;
  }
  const subMenu = getElementById(subMenuId, state);
  if (subMenu && subMenu.type === "submenu") {
    return subMenu.elements;
  }
};

export const getVerticalPosition = (
  rootHeight: number,
  y: number,
  clientHeight: number,
  minHeight: number,
  lineHeight: number,
): { top: string; height: string } => {
  const overFlowDown = minHeight + y > window.innerHeight;
  const overFlowUp = rootHeight > y;
  // console.log({
  //   overFlowUp,
  //   minHeight,
  //   y,
  //   overFlowDown,
  //   inner: window.innerHeight,
  // });
  const downWardHeight = overFlowDown ? window.innerHeight - y : rootHeight;
  const upwardHeight = overFlowUp ? y : rootHeight;
  const openUpwards = overFlowDown;
  return {
    top: openUpwards ? `${y - upwardHeight}px` : `${y + lineHeight}px`,
    height: openUpwards ? `${upwardHeight}px` : `${downWardHeight}px`,
  };
};
