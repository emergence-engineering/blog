import { exampleSetup } from "prosemirror-example-setup";
import { EditorState } from "prosemirror-state";
import { collab, sendableSteps } from "prosemirror-collab";
import { EditorView } from "prosemirror-view";

import { mySchema } from "./schema";
import {
  ClientStep,
  DBCollection,
  DocID,
  PMDocument,
  StepStatus,
} from "./types";

export default (
  setPmState: (state: EditorState) => void,
  setPmView: (view: EditorView) => void,
  editorID: string,
  serverDoc?: PMDocument,
  DB?: PouchDB.Database<{}>,
) => {
  if (!serverDoc) return;
  const doc: PMDocument = serverDoc.doc as any;
  const state = EditorState.create({
    doc: mySchema.nodeFromJSON(doc),
    plugins: [
      ...exampleSetup({ schema: mySchema }),
      collab({ version: doc.version }),
    ],
  });
  const view1 = new EditorView(document.querySelector(editorID), {
    state,
    dispatchTransaction: tr => {
      const newState = view1.state.apply(tr);
      setPmState(newState);
      view1.updateState(newState);
      const sendable = sendableSteps(newState);
      if (sendable && DB) {
        const newStep: ClientStep = {
          steps: sendable.steps.map(step => step.toJSON()),
          version: sendable.version,
          status: StepStatus.NEW,
          collection: DBCollection.ClientSteps,
          docId: DocID, // TODO
          pmViewId: sendable.clientID,
        };
        DB.post(newStep);
      }
    },
  });
  setPmView(view1);
};
