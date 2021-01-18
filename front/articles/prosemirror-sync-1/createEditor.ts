// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { exampleSetup } from "prosemirror-example-setup";
import { EditorState, Transaction } from "prosemirror-state";
import { collab } from "prosemirror-collab";
import { EditorView } from "prosemirror-view";

import { mySchema } from "./schema";
import { PMDocument, DBSchema } from "./types";
import postNewSteps from "./postNewSteps";

const createEditor = (
  setPmState: (state: EditorState<typeof mySchema>) => void,
  setPmView: (view: EditorView<typeof mySchema>) => void,
  editorID: string,
  serverDoc?: PMDocument,
  DB?: PouchDB.Database<DBSchema>,
  outerView?: EditorView,
) => {
  const editorNode = document.querySelector(editorID);
  // If there is no data yet or already initialized
  if (!serverDoc || !DB || !editorNode || outerView) return;
  const { doc } = serverDoc;
  const state = EditorState.create<typeof mySchema>({
    doc: mySchema.nodeFromJSON(doc),
    plugins: [
      ...exampleSetup({ schema: mySchema }),
      collab({
        version: serverDoc.version,
        clientID: editorID === "#editor1" ? "1" : "2",
      }),
    ],
  });
  const view: EditorView<typeof mySchema> = new EditorView(editorNode, {
    state,
    dispatchTransaction: (tr: Transaction<typeof mySchema>) =>
      postNewSteps(view, setPmState, DB, tr),
  });
  setPmView(view);
};

export default createEditor;
