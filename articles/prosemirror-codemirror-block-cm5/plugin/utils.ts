import {
  EditorState,
  TextSelection,
  Transaction,
  Selection,
} from "prosemirror-state";
import { EditorView, EditorView as PMEditorView } from "prosemirror-view";
import { Node } from "prosemirror-model";
import CodeMirror, { Editor } from "codemirror";
import { exitCode } from "prosemirror-commands";

import { CodeBlockSettings } from "./types";

const getPosFix = (getPos: (() => number) | boolean) =>
  typeof getPos === "function" ? getPos() || 0 : 0;

export function computeChange(oldVal: string, newVal: string) {
  if (oldVal === newVal) return null;
  let start = 0;
  let oldEnd = oldVal.length;
  let newEnd = newVal.length;
  while (
    start < oldEnd &&
    oldVal.charCodeAt(start) === newVal.charCodeAt(start)
  )
    start += 1;
  while (
    oldEnd > start &&
    newEnd > start &&
    oldVal.charCodeAt(oldEnd - 1) === newVal.charCodeAt(newEnd - 1)
  ) {
    oldEnd -= 1;
    newEnd -= 1;
  }
  return { from: start, to: oldEnd, text: newVal.slice(start, newEnd) };
}

export const asProseMirrorSelection = (
  pmView: PMEditorView,
  cm: Editor,
  getPos: (() => number) | boolean,
) => {
  const offset = getPosFix(getPos) + 1;
  const anchor = cm.indexFromPos(cm.getCursor("anchor")) + offset;
  const head = cm.indexFromPos(cm.getCursor("head")) + offset;
  return TextSelection.create(pmView.state.doc, anchor, head);
};

export const forwardSelection = (
  cm: Editor,
  pmView: PMEditorView,
  getPos: (() => number) | boolean,
) => {
  if (!cm.hasFocus()) return;
  const selection = asProseMirrorSelection(pmView, cm, getPos);
  if (!selection.eq(pmView.state.selection))
    pmView.dispatch(pmView.state.tr.setSelection(selection));
};

export const valueChanged = (
  cm: Editor,
  node: Node,
  getPos: (() => number) | boolean,
  view: PMEditorView,
) => {
  const change = computeChange(node.textContent, cm.getValue());
  if (change) {
    const start = getPosFix(getPos) + 1;
    const tr = view.state.tr.replaceWith(
      start + change.from,
      start + change.to,
      change.text ? view.state.schema.text(change.text) : null,
    );
    view.dispatch(tr);
  }
};

const maybeEscape = (
  unit: "line" | "char",
  dir: -1 | 1,
  view: EditorView,
  getCm: () => Editor,
  getPos: (() => number) | boolean,
  getNode: () => Node,
) => {
  const cm = getCm();
  const node = getNode();
  const pos = cm.getCursor();
  if (
    cm.somethingSelected() ||
    pos.line !== (dir < 0 ? cm.firstLine() : cm.lastLine()) ||
    (unit === "char" && pos.ch !== (dir < 0 ? 0 : cm.getLine(pos.line).length))
  )
    return CodeMirror.Pass;
  view.focus();
  const targetPos = getPosFix(getPos) + (dir < 0 ? 0 : node.nodeSize);
  const selection = Selection.near(view.state.doc.resolve(targetPos), dir);
  view.dispatch(view.state.tr.setSelection(selection).scrollIntoView());
  view.focus();
};

export const codeMirrorKeymap = (
  getCm: () => Editor,
  view: EditorView,
  getPos: (() => number) | boolean,
  getNode: () => Node,
  settings: CodeBlockSettings,
) => {
  const mod = /Mac/.test(navigator.platform) ? "Cmd" : "Ctrl";
  return CodeMirror.normalizeKeyMap({
    Up: () => maybeEscape("line", -1, view, getCm, getPos, getNode),
    Left: () => maybeEscape("char", -1, view, getCm, getPos, getNode),
    Down: () => maybeEscape("line", 1, view, getCm, getPos, getNode),
    Right: () => maybeEscape("char", 1, view, getCm, getPos, getNode),
    "Ctrl-Enter": () => {
      if (exitCode(view.state, view.dispatch)) view.focus();
    },
    // TODO: yjs
    [`${mod}-Z`]: () => settings.undo?.(view.state, view.dispatch),
    [`Shift-${mod}-Z`]: () => settings.redo?.(view.state, view.dispatch),
    [`${mod}-Y`]: () => settings.redo?.(view.state, view.dispatch),
  });
};

const arrowHandler =
  (dir: "left" | "right" | "up" | "down") =>
  (
    state: EditorState,
    dispatch: ((tr: Transaction) => void) | undefined,
    view?: EditorView,
  ) => {
    if (state.selection.empty && view?.endOfTextblock(dir)) {
      const side = dir === "left" || dir === "up" ? -1 : 1;
      const { $head } = state.selection;
      const nextPos = Selection.near(
        state.doc.resolve(side > 0 ? $head.after() : $head.before()),
        side,
      );
      if (nextPos.$head && nextPos.$head.parent.type.name === "code_block") {
        dispatch?.(state.tr.setSelection(nextPos));
        return true;
      }
    }
    return false;
  };

export const codeBlockArrowHandlers = {
  ArrowLeft: arrowHandler("left"),
  ArrowRight: arrowHandler("right"),
  ArrowUp: arrowHandler("up"),
  ArrowDown: arrowHandler("down"),
};

export const setMode = async (
  lang: string,
  cm: Editor,
  settings: CodeBlockSettings,
) => {
  if (lang === "none") {
    cm.setOption("mode", undefined);
    return;
  }
  await settings.languageLoaders?.[lang]?.();
  cm.setOption("mode", lang);
};
