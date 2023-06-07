import {
  CommandItem,
  SlashMenuState,
  SubMenu,
  ignoredKeys,
} from "prosemirror-slash-menu";
import { setBlockType, toggleMark } from "prosemirror-commands";
import { schema } from "prosemirror-schema-basic";
import {
  ArrowRight,
  BoldIcon,
  Code,
  H1Icon,
  H2Icon,
  H3Icon,
  ItalicIcon,
  Link,
} from "./icons/defaultIcons";

export enum Icons {
  "Level1" = "Level1",
  "Level2" = "Level2",
  "Level3" = "Level3",
  "Bold" = "Bold",
  "Italic" = "Italic",
  "Link" = "Link",
  "Code" = "Code",
}

const H1Command: CommandItem = {
  id: Icons.Level1,
  label: "H1",
  type: "command",
  command: (view) => {
    console.log("shpould make heading 1");
    setBlockType(schema.nodes.heading, { level: 1 })(
      view.state,
      view.dispatch,
      view,
    );
  },
  available: () => true,
};
const H2Command: CommandItem = {
  id: Icons.Level2,
  label: "H2",
  type: "command",
  command: (view) => {
    console.log("shpould make heading 2");
    setBlockType(schema.nodes.heading, { level: 2 })(
      view.state,
      view.dispatch,
      view,
    );
  },
  available: () => true,
};
const H3Command: CommandItem = {
  id: Icons.Level3,
  label: "H2",
  type: "command",
  command: (view) => {
    console.log("shpould make heading 3");
    setBlockType(schema.nodes.heading, { level: 3 })(
      view.state,
      view.dispatch,
      view,
    );
  },
  available: () => true,
};
const Sub1Command: CommandItem = {
  id: "sub-level-1",
  label: "Sub1",
  type: "command",

  command: () => console.log("sub 1 Command excecuted"),
  available: () => true,
};
const Sub2Command: CommandItem = {
  id: "sub-level-2",
  label: "Sub2",
  type: "command",

  command: () => console.log("Sub2 Command excecuted"),
  available: () => true,
};
const Sub3Command: CommandItem = {
  id: "sub-level-3",
  label: "Sub3",
  type: "command",

  command: () => console.log("Sub3 Command excecuted"),
  available: () => true,
};
const SecondSub1Command: CommandItem = {
  id: "Second-sub-level-1",
  label: "SecondSub1",
  type: "command",

  command: () => console.log("Secondsub 1 Command excecuted"),
  available: () => true,
};
const SecondSub2Command: CommandItem = {
  id: "Second-sub-level-2",
  label: "SecondSub2",
  type: "command",

  command: () => console.log("SecondSub2 Command excecuted"),
  available: () => true,
};
const SecondSub3Command: CommandItem = {
  id: "Second-sub-level-3",
  label: "SecondSub3",
  type: "command",

  command: () => console.log("SecondSub3 Command excecuted"),
  available: () => true,
};
const BoldCommand: CommandItem = {
  id: Icons.Bold,
  label: "Bold",
  type: "command",
  command: (view) => {
    const markType = schema.marks.strong;
    toggleMark(markType)(view.state, view.dispatch, view);
  },
  available: () => true,
};
const ItalicCommand: CommandItem = {
  id: Icons.Italic,
  label: "Italic",
  type: "command",
  command: (view) => {
    const markType = schema.marks.em;
    toggleMark(markType)(view.state, view.dispatch, view);
  },
  available: () => true,
};
const CodeCommand: CommandItem = {
  id: Icons.Code,
  label: "Code",
  type: "command",
  command: (view) => {
    const markType = schema.marks.code;
    toggleMark(markType)(view.state, view.dispatch, view);
  },
  available: () => true,
};
const LinkCommand: CommandItem = {
  id: Icons.Link,
  label: "Link",
  type: "command",
  command: (view) => {
    const markType = schema.marks.link;
    toggleMark(markType)(view.state, view.dispatch, view);
  },
  available: () => true,
};
const SecondSubHeadingsMenu: SubMenu = {
  id: "second-sub-headings",
  label: "Second Sub Headings",
  type: "submenu",
  elements: [SecondSub1Command, SecondSub2Command, SecondSub3Command],
};
const SubHeadingsMenu: SubMenu = {
  id: "sub-headings",
  label: "Sub Headings",
  type: "submenu",

  elements: [Sub1Command, Sub2Command, SecondSubHeadingsMenu, Sub3Command],
};

const HeadingsMenu: SubMenu = {
  id: "headings",
  label: "Headings",
  type: "submenu",
  elements: [H1Command, H2Command, H3Command, SubHeadingsMenu],
};
export const defaultConfig: Partial<SlashMenuState> = {
  filteredElements: [
    HeadingsMenu,
    BoldCommand,
    ItalicCommand,
    CodeCommand,
    LinkCommand,
  ],
  selected: HeadingsMenu.id,
  open: false,
  filter: "",
  ignoredKeys: ignoredKeys,
};
