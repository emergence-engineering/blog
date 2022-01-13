import { Editor } from "codemirror";
import { EditorState, Transaction } from "prosemirror-state";
import { Node } from "prosemirror-model";
import { EditorView } from "prosemirror-view";

export type LanguageLoaders = Record<string, () => Promise<unknown>>;
export type CodeBlockSettings = {
  createSelect: (
    settings: CodeBlockSettings,
    dom: HTMLElement,
    cm: Editor,
    node: Node,
    view: EditorView,
    getPos: (() => number) | boolean
  ) => () => void;
  updateSelect: (
    settings: CodeBlockSettings,
    dom: HTMLElement,
    cm: Editor,
    node: Node,
    view: EditorView,
    getPos: (() => number) | boolean,
    oldNode: Node
  ) => void;
  languageLoaders?: LanguageLoaders;
  languageNameMap?: Record<string, string>;
  languageWhitelist?: string[];
  undo?: (state: EditorState, dispatch: (tr: Transaction) => void) => void;
  redo?: (state: EditorState, dispatch: (tr: Transaction) => void) => void;
};
