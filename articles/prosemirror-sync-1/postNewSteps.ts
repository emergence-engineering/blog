import { EditorState, Transaction } from "prosemirror-state";
import { sendableSteps } from "prosemirror-collab";
import { EditorView } from "prosemirror-view";

import { mySchema } from "./schema";
import { ClientStep, DBCollection, DocID, StepStatus } from "./types";

export default (
  view: EditorView,
  setPmState: (state: EditorState) => void,
  DB: PouchDB.Database<{}>,
  tr: Transaction<typeof mySchema>,
) => {
  const newState = view.state.apply(tr);
  setPmState(newState);
  view.updateState(newState);
  const sendable = sendableSteps(newState);
  if (sendable) {
    const newStep: ClientStep = {
      steps: sendable.steps.map(step => step.toJSON()),
      version: sendable.version,
      status: StepStatus.NEW,
      collection: DBCollection.ClientSteps,
      docId: DocID,
      pmViewId: sendable.clientID,
    };
    DB.post(newStep);
  }
};
