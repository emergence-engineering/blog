import { CommandItem, SlasMenuState, SubMenu } from "./types";
import ArrowRight from "./icons/arrow-right.svg";

const H1Command: CommandItem = {
  id: "level-1",
  label: "H1",
  type: "command",
  icon: ArrowRight,
  command: () => console.log("H1 Command excecuted"),
  available: () => true,
};
const H2Command: CommandItem = {
  id: "level-2",
  label: "H2",
  type: "command",
  icon: ArrowRight,
  command: () => console.log("H2 Command excecuted"),
  available: () => true,
};
const H3Command: CommandItem = {
  id: "level-3",
  label: "H2",
  type: "command",
  icon: ArrowRight,
  command: () => console.log("H2 Command excecuted"),
  available: () => true,
};
const BoldCommand: CommandItem = {
  id: "bold",
  label: "Bold",
  type: "command",
  icon: ArrowRight,
  command: () => console.log("Should make text bold"),
  available: () => true,
};
const ItalicCommand: CommandItem = {
  id: "italic",
  label: "Italic",
  type: "command",
  icon: ArrowRight,
  command: () => console.log("Should make text italic"),
  available: () => true,
};
const HeadingsMenu: SubMenu = {
  id: "headings",
  label: "Headings",
  type: "submenu",
  icon: ArrowRight,
  elements: [H1Command, H2Command, H3Command],
};
export const DefaultConfig: SlasMenuState = {
  elements: [HeadingsMenu, BoldCommand, ItalicCommand],
  selected: HeadingsMenu.id,
};
