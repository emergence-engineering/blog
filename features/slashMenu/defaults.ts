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
const Sub1Command: CommandItem = {
  id: "sub-level-1",
  label: "Sub1",
  type: "command",
  icon: ArrowRight,
  command: () => console.log("sub 1 Command excecuted"),
  available: () => true,
};
const Sub2Command: CommandItem = {
  id: "sub-level-2",
  label: "Sub2",
  type: "command",
  icon: ArrowRight,
  command: () => console.log("Sub2 Command excecuted"),
  available: () => true,
};
const Sub3Command: CommandItem = {
  id: "sub-level-3",
  label: "Sub3",
  type: "command",
  icon: ArrowRight,
  command: () => console.log("Sub3 Command excecuted"),
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
const SubHeadingsMenu: SubMenu = {
  id: "sub-headings",
  label: "Sub Headings",
  type: "submenu",
  icon: ArrowRight,
  elements: [Sub1Command, Sub2Command, Sub3Command],
};
const HeadingsMenu: SubMenu = {
  id: "headings",
  label: "Headings",
  type: "submenu",
  icon: ArrowRight,
  elements: [H1Command, H2Command, H3Command, SubHeadingsMenu],
};
export const DefaultConfig: SlasMenuState = {
  elements: [HeadingsMenu, BoldCommand, ItalicCommand],
  selected: Sub2Command.id,
  open: true,
};
