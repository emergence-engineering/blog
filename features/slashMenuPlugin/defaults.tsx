import { CommandItem, SlashMenuState, SubMenu } from "./types";
import { setBlockType, toggleMark } from "prosemirror-commands";
import { schema } from "prosemirror-schema-basic";
import { ignoredKeys } from "./utils";
import {
  BoldIcon,
  H1Icon,
  H2Icon,
  H3Icon,
  ItalicIcon,
} from "../slashMenuDisplay/icons/HeadingIcon";

const H1Command: CommandItem = {
  id: "level-1",
  label: "H1",
  type: "command",
  icon: H1Icon,
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
  id: "level-2",
  label: "H2",
  type: "command",
  icon: H2Icon,
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
  id: "level-3",
  label: "H2",
  type: "command",
  icon: H3Icon,
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
  id: "bold",
  label: "Bold",
  type: "command",
  icon: BoldIcon,
  command: (view) => {
    const markType = schema.marks.strong;
    toggleMark(markType)(view.state, view.dispatch, view);
  },
  available: () => true,
};
const ItalicCommand: CommandItem = {
  id: "italic",
  label: "Italic",
  type: "command",
  icon: ItalicIcon,
  command: (view) => {
    const markType = schema.marks.em;
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
  icon: (
    <svg
      width="17"
      height="9"
      viewBox="0 0 20 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="7" cy="2" r="1.5" stroke="black" />
      <circle cx="13" cy="2" r="1.5" stroke="black" />
      <path
        d="M1 5V5C5.10924 11.2847 14.2339 11.522 18.6643 5.45942L19 5"
        stroke="black"
        strokeMiterlimit="1.86218"
        strokeLinecap="round"
      />
    </svg>
  ),
  elements: [H1Command, H2Command, H3Command, SubHeadingsMenu],
};
const testElements = (elementNumber: number): CommandItem[] => {
  let arr: CommandItem[] = [];
  for (let i = 0; i < elementNumber; i++) {
    arr.push({
      id: `test-${i}`,
      label: `Test-${i}`,
      type: "command",

      command: () => console.log(`Test command Excecute ${i}`),
      available: () => true,
    });
  }
  return arr;
};
export const defaultConfig: Partial<SlashMenuState> = {
  filteredElements: [
    HeadingsMenu,
    BoldCommand,
    ItalicCommand,
    testElements(10),
  ].flat(),
  selected: HeadingsMenu.id,
  open: false,
  filter: "",
  ignoredKeys: ignoredKeys,
  // elements: [HeadingsMenu, BoldCommand, ItalicCommand],
};
