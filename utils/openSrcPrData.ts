import github from "/public/github-mark.svg";
import npm from "/public/npm-logo.png";
import gitlab from "/public/gitlab-logo.png";
import { StaticImageData } from "next/image";

export interface OpenSourceProject {
  title: string;
  article: string;
  icon: Array<StaticImageData>;
  gitLink: string;
  description: string;
  command: string;
  tags: string[];
}

export const projectDetails: OpenSourceProject[] = [
  {
    title: "SuggestCat",
    article: "",
    icon: [github, npm],
    gitLink:
      "https://github.com/emergence-engineering/prosemirror-suggestcat-plugin",
    description:
      "SuggestCat adds AI features to your ProseMirror editor such as grammar correction and text completion (soon)",
    command: "npm i prosemirror-suggestcat-plugin",
    tags: ["ProseMirror", "AI", "grammar correction"],
  },
  {
    title: "Slash menu",
    article: "/blog/prosemirror-slash-menu",
    icon: [github, npm],
    gitLink: "https://github.com/emergence-engineering/prosemirror-slash-menu",
    description:
      "A ProseMirror plugin to handle the state of a slash menu. It is intended to be opened inline with /, searched and navigated by keyboard. ",
    command: "npm i prosemirror-slash-menu",
    tags: ["ProseMirror", "keyboard navigation"],
  },
  {
    title: "Slash menu (React)",
    article: "/blog/prosemirror-slash-menu",
    icon: [github, npm],
    gitLink:
      "https://github.com/emergence-engineering/prosemirror-slash-menu-react",
    description:
      "A UI package used together with prosemirror-slash-menu to display the menu with react.",
    command: "npm i prosemirror-slash-menu-react",
    tags: ["ProseMirror", "React", "keyboard navigation"],
  },
  // {
  //   title: "Slash menu (Svelte)",
  // article: "",
  //   icon: [github, npm],
  //   gitLink:
  //     "https://github.com/emergence-engineering/prosemirror-slash-menu-ui",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in erat vel dui mollis egestas vel id lorem. Etiam ullamcorper mollis tellus id lobortis. Nunc pulvinar pulvinar arcu, eget feugiat eros vulputate vitae.",
  //   command: "?",
  //   tags: ["ProseMirror", "Svelte"],
  // },
  {
    title: "Link preview",
    article: "/blog/prosemirror-link-preview",
    icon: [github, npm],
    gitLink:
      "https://github.com/emergence-engineering/prosemirror-link-preview",
    description:
      "This plugin adds Discord and Slack like link previews to your Prosemirror editor as it catches pasted links and renders a preview automatically",
    command: "npm i -S prosemirror-link-preview",
    tags: [
      "ProseMirror",
      "dynamic link previews",
      "rich preview styles",
      "configurable behaviour",
    ],
  },
  {
    title: "Link plugin",
    article: "/blog/prosemirror-link-plugin",
    icon: [gitlab, npm],
    gitLink: "https://gitlab.com/emergence-engineering/prosemirror-link-plugin",
    description:
      "A ProseMirror link plugin which finds occurrences of strings in your document, and does it by only looking at the changed sections, thus saving a lot of time by not re-processing the whole document all the time.",
    command: "npm i -S prosemirror-link-plugin",
    tags: ["ProseMirror", "update on the fly", "alias change detection"],
  },
  {
    title: "Image plugin",
    article: "/blog/prosemirror-image-plugin-2",
    icon: [gitlab, npm],
    gitLink:
      "https://gitlab.com/emergence-engineering/prosemirror-image-plugin",
    description:
      "A framework agnostic plugin for ProseMirror that helps managing images. ",
    command: "npm i -S prosemirror-image-plugin",
    tags: ["ProseMirror", "drag&drop", "image uploading", "image resizing"],
  },
  {
    title: "Paste link",
    article: "",
    icon: [gitlab, npm],
    gitLink: "https://gitlab.com/emergence-engineering/prosemirror-paste-link",
    description:
      "ProseMirror plugin handling paste case when either the editor has selected text or the pasted text is an URL",
    command: "npm i -S prosemirror-paste-link",
    tags: ["ProseMirror", "intelligent paste"],
  },
  {
    title: "Codemirror block",
    article: "/blog/prosemirror-codemirror-block",
    icon: [gitlab, npm],
    gitLink:
      "https://gitlab.com/emergence-engineering/prosemirror-codemirror-block",
    description:
      "Release ProseMirror codeblock plugin that uses the brand-new CodeMirror 6.",
    command: "npm i -S prosemirror-codemirror-block",
    tags: [
      "ProseMirror",
      "customizable language selector",
      "works with YJS history",
    ],
  },
];
