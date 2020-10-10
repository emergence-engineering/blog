// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore TODO d.ts
import { exampleSetup } from "prosemirror-example-setup";
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore TODO d.ts
import applyDevTools from "prosemirror-dev-tools";
import React, { useEffect, useState } from "react";
import { EditorState, Plugin, Selection, Transaction } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import { keymap } from "prosemirror-keymap";
import {
  liftListItem,
  sinkListItem,
  wrapInList,
} from "prosemirror-schema-list";
import { chainCommands, lift } from "prosemirror-commands";
import { liftTarget, ReplaceStep } from "prosemirror-transform";
import { NodeRange } from "prosemirror-model";

import { initialDoc, mySchema } from "../../articles/prosemirror-sync-1/schema";
import Editor from "../../articles/prosemirror-sync-1/components/Editor";
import ArticleWrapper from "../../features/article/components/ArticleWrapper";

const isEmptySelection = (selection: Selection) =>
  selection.from === selection.to;

const listBackspaceFix = new Plugin({
  props: {
    handleKeyDown: (view, event) => {
      // console.log("wtf");
      if (event.key === "Backspace" && isEmptySelection(view.state.selection)) {
        // If the current node is the last item in a list_item then lift out of it
        console.log(view.state.doc.resolve(view.state.selection.from));
      }
      return false;
    },
  },
  appendTransaction: (transactions, state, newState) => {
    const tr = transactions[0];
    if (!tr) return;
    if (tr.steps.length !== 1) return;
    const step = tr.steps[0];
    if (!(step instanceof ReplaceStep)) return;
    const { from } = step;
    const { to } = step;
    if (!from || !to || to - from !== 2) return;
    if (
      state.doc.nodeAt(from) === null &&
      state.doc.nodeAt(from + 1)?.lastChild === state.doc.nodeAt(to) &&
      state.doc.nodeAt(from + 1)?.type === mySchema.nodes.list_item
    ) {
      const retval = (num, size, depth) =>
        newState.tr.lift(
          new NodeRange(
            newState.doc.resolve(num),
            newState.doc.resolve(num + size),
            depth,
            // newState.doc.resolve(num).depth,
          ),
          depth - 1,
          // newState.doc.resolve(num).depth - 1,
        );
      console.log({
        state,
        newState,
        lift,
        NodeRange,
        liftTarget,
        retval,
        from,
        to,
        transactions
      });
      // return retval(from, 0, newState.doc.resolve(from).depth);
      // eslint-disable-next-line consistent-return
      // return retval;
    }
  },
});

export default function Article() {
  const [pmState, setPmState] = useState<EditorState<typeof mySchema>>();
  const [pmView, setPmView] = useState<EditorView<typeof mySchema>>();
  useEffect(() => {
    const editorNode = document.querySelector("#editor");
    if (!editorNode) return;
    const state = EditorState.create<typeof mySchema>({
      doc: mySchema.nodeFromJSON(initialDoc),
      plugins: [
        ...exampleSetup({ schema: mySchema }),
        keymap({
          "Shift-Tab": liftListItem(mySchema.nodes.list_item),
          Tab: chainCommands(
            wrapInList(mySchema.nodes.bullet_list),
            sinkListItem(mySchema.nodes.list_item),
          ),
        }),
        listBackspaceFix,
      ],
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
    return () => {
      view && view.destroy();
    };
  }, []);
  return (
    <ArticleWrapper>
      <Editor
        name="Editor 1."
        id="editor"
        view={pmView}
        state={pmState}
        withoutCollab
      />
    </ArticleWrapper>
  );
}
