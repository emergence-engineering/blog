import React, { useCallback, useEffect, useState } from "react";
import CodeMirror from "codemirror";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { exampleSetup } from "prosemirror-example-setup";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import applyDevTools from "prosemirror-dev-tools";
import { EditorState, Transaction } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import styled from "styled-components";
import { insertLatexNode, latexPlugin } from "./plugin";

import { initialDoc, mySchema } from "./schema";
import Editor from "./Editor";
import ArticleWrapper from "../../features/article/components/ArticleWrapper";

const insertLatex = insertLatexNode(mySchema);

export default function ProsemirrorLatex() {
  const [pmState, setPmState] = useState<EditorState<typeof mySchema>>();
  const [pmView, setPmView] = useState<EditorView<typeof mySchema>>();
  useEffect(() => {
    const editorNode = document.querySelector("#editor");
    if (!editorNode) return;
    const state = EditorState.create<typeof mySchema>({
      doc: mySchema.nodeFromJSON(initialDoc),
      plugins: [...exampleSetup({ schema: mySchema }), latexPlugin()],
    });
    const view: EditorView<typeof mySchema> = new EditorView(editorNode, {
      state,
      dispatchTransaction: (tr: Transaction<typeof mySchema>) => {
        const newState = view.state.apply(tr);
        view.updateState(newState);
        setPmState(newState);
      },
    });
    setPmView(view);
    applyDevTools(view);
    // eslint-disable-next-line consistent-return
    return () => {
      view && view.destroy();
    };
  }, []);

  const insertLatexCB = useCallback(
    () => pmView && insertLatex(pmView.state, pmView?.dispatch),
    [pmState, pmView],
  );

  return (
    <>
      <button onClick={insertLatexCB} type="button">
        Insert latex node
      </button>
      <Editor name="Editor 1." id="editor" view={pmView} state={pmState} />
    </>
  );
}

