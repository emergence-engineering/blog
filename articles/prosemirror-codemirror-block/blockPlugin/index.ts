import { Plugin, PluginKey } from "prosemirror-state";
import { EditorView as PMEditorView, NodeView } from "prosemirror-view";
import { EditorState } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import { basicSetup } from "@codemirror/basic-setup";
import { Node } from "prosemirror-model";

import { forwardSelection, valueChanged } from "./utils";

export const codeMirrorBlockKey = new PluginKey("codemirror-block");

export const codeMirrorBlockNodeView: (
  node: Node,
  view: PMEditorView,
  getPos: (() => number) | boolean,
) => NodeView = (node, view, getPos) => {
  let updating = false;
  const state = EditorState.create({
    extensions: basicSetup,
    doc: node.textContent,
  });
  const codeMirrorView = new EditorView({
    state,
    dispatch: (tr) => {
      if (!updating) {
        const textUpdate = tr.state.toJSON().doc;
        valueChanged(textUpdate, node, getPos, view);
        forwardSelection(codeMirrorView, view, getPos);
        codeMirrorView.update([tr]);
        codeMirrorView.focus();
      }
    },
  });
  return {
    dom: codeMirrorView.dom,
    selectNode() {
      codeMirrorView.focus();
    },
    stopEvent() {
      return true;
    },
    setSelection: (anchor, head) => {
      console.log("setSelection");
      codeMirrorView.focus();
      updating = true;
      // This is probably incorrect, maybe it should be anchor: anchor - getPos() or smth.
      codeMirrorView.dispatch({ selection: { anchor, head } });
      updating = false;
    },
  };
};

const codeMirrorBlockPlugin = new Plugin({
  key: codeMirrorBlockKey,
  props: {
    nodeViews: {
      code_block: codeMirrorBlockNodeView,
    },
  },
});

export default codeMirrorBlockPlugin;
