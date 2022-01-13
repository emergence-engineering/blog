// From prosemirror guide
import { TextSelection } from "prosemirror-state";
import { EditorView as PMEditorView } from "prosemirror-view";
import { EditorView } from "@codemirror/view";
import { Node } from "prosemirror-model";

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
  cmView: EditorView,
  getPos: (() => number) | boolean,
) => {
  const offset = (typeof getPos === "function" ? getPos() || 0 : 0) + 1;
  const anchor = cmView.state.selection.main.from + offset;
  const head = cmView.state.selection.main.to + offset;
  return TextSelection.create(pmView.state.doc, anchor, head);
};

export const forwardSelection = (
  cmView: EditorView,
  pmView: PMEditorView,
  getPos: (() => number) | boolean,
) => {
  if (!cmView.hasFocus) return;
  const selection = asProseMirrorSelection(pmView, cmView, getPos);
  if (!selection.eq(pmView.state.selection))
    pmView.dispatch(pmView.state.tr.setSelection(selection));
};

export const valueChanged = (
  textUpdate: string,
  node: Node,
  getPos: (() => number) | boolean,
  view: PMEditorView,
) => {
  const change = computeChange(node.textContent, textUpdate);
  console.log({ change, textContent: node.textContent, textUpdate });
  if (change && typeof getPos === "function") {
    const start = getPos() + 1;
    const pmTr = view.state.tr.replaceWith(
      start + change.from,
      start + change.to,
      change.text ? view.state.schema.text(change.text) : null,
    );
    // TODO: Set selection here
    console.log("valueChanged");
    view.dispatch(pmTr);
  }
};
