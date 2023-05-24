import { EditorView } from "prosemirror-view";

export type ItemId = string | "root";
export type ItemType = "command" | "submenu";

export type MenuItem = {
  id: ItemId;
  label: string;
  type: ItemType;
  icon?: HTMLImageElement;
};
export enum CommandItemKeys {
  command = "command",
}
export interface CommandItem extends MenuItem {
  type: "command";
  command: (view: EditorView) => void;
  available: () => boolean;
}
export type MenuElement = CommandItem | SubMenu;

export interface SubMenu extends MenuItem {
  type: "submenu";
  elements: MenuElement[];
  sideEffect?: () => void;
}
export type SlashMenuState = {
  selected: ItemId;
  filteredElements: MenuElement[];
  open: boolean;
  subMenuId?: ItemId;
  filter: string;
  elements: MenuElement[];
  ignoredKeys: string[];
};

export enum SlashMetaTypes {
  open = "open",
  close = "close",
  execute = "execute",
  nextItem = "nextItem",
  prevItem = "prevItem",
  openSubMenu = "openSubMenu",
  closeSubMenu = "closeSubMenu",
  inputChange = "inputChange",
}

export interface SlashMenuMeta {
  type: SlashMetaTypes;
  element?: MenuElement;
  filter?: string;
}
