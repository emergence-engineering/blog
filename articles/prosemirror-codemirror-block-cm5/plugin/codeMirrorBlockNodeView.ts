import { Node } from "prosemirror-model";
import { EditorView as PMEditorView, NodeView } from "prosemirror-view";
import CodeMirror, { Editor } from "codemirror";

import { CodeBlockSettings } from "./types";
import {
  codeMirrorKeymap,
  computeChange,
  forwardSelection,
  setMode,
  valueChanged,
} from "./utils";

export const codeMirrorBlockNodeView: (
  settings: CodeBlockSettings
) => (
  node: Node,
  view: PMEditorView,
  getPos: (() => number) | boolean
) => NodeView = (settings) => (pmNode, view, getPos) => {
  let node = pmNode;
  let updating = false;
  let incomingChanges = false;
  // eslint-disable-next-line prefer-const
  let cm: Editor;
  const getCm = () => cm;
  const getNode = () => node;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore

  cm = CodeMirror(undefined, {
    value: node.textContent,
    lineNumbers: true,
    extraKeys: codeMirrorKeymap(getCm, view, getPos, getNode, settings),
  });
  const dom = cm.getWrapperElement();
  const selectDeleteCB = settings.createSelect(
    settings,
    dom,
    cm,
    node,
    view,
    getPos
  );
  setTimeout(() => cm.refresh(), 20);
  setMode(node.attrs.lang, cm, settings);
  cm.on("beforeChange", () => {
    incomingChanges = true;
  });
  cm.on("cursorActivity", () => {
    if (!updating && !incomingChanges) forwardSelection(cm, view, getPos);
  });
  cm.on("changes", () => {
    if (!updating) {
      valueChanged(cm, node, getPos, view);
      forwardSelection(cm, view, getPos);
    }
    incomingChanges = false;
  });
  cm.on("focus", () => forwardSelection(cm, view, getPos));

  return {
    dom,
    selectNode() {
      cm.focus();
    },
    stopEvent() {
      return true;
    },
    setSelection(anchor, head) {
      cm.focus();
      updating = true;
      cm.setSelection(cm.posFromIndex(anchor), cm.posFromIndex(head));
      updating = false;
    },
    update(updateNode) {
      if (updateNode.type !== node.type) return false;
      if (updateNode.attrs.lang !== node.attrs.lang)
        setMode(updateNode.attrs.lang, cm, settings);
      const oldNode = node;
      node = updateNode;
      const change = computeChange(cm.getValue(), node.textContent);
      if (change) {
        updating = true;
        cm.replaceRange(
          change.text,
          cm.posFromIndex(change.from),
          cm.posFromIndex(change.to)
        );
        updating = false;
      }
      settings.updateSelect(
        settings,
        dom,
        cm,
        updateNode,
        view,
        getPos,
        oldNode
      );
      return true;
    },
    destroy: () => {
      selectDeleteCB();
    },
  };
};
