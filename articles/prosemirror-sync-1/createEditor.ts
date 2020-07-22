// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore TODO d.ts
import { exampleSetup } from "prosemirror-example-setup";
import { EditorState, Transaction } from "prosemirror-state";
import { collab } from "prosemirror-collab";
import { EditorView } from "prosemirror-view";

import { mySchema } from "./schema";
import { PMDocument } from "./types";
import postNewSteps from "./postNewSteps";

export default (
  setPmState: (state: EditorState) => void,
  setPmView: (view: EditorView) => void,
  editorID: string,
  serverDoc?: PMDocument,
  DB?: PouchDB.Database<{}>,
) => {
  const editorNode = document.querySelector(editorID);
  if (!serverDoc || !DB || !editorNode) return;
  const doc: PMDocument = serverDoc.doc as any;
  const state = EditorState.create({
    doc: mySchema.nodeFromJSON(doc),
    plugins: [
      ...exampleSetup({ schema: mySchema }),
      collab({ version: doc.version }),
    ],
  });
  const view: EditorView = new EditorView(editorNode, {
    state,
    dispatchTransaction: (tr: Transaction<typeof mySchema>) =>
      postNewSteps(view, setPmState, DB, tr),
  });
  setPmView(view);
};
