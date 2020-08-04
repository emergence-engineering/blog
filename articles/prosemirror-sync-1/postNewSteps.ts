import { EditorState, Transaction } from "prosemirror-state";
import { sendableSteps } from "prosemirror-collab";
import { EditorView } from "prosemirror-view";

import { mySchema } from "./schema";
import { ClientStep, DBCollection, DBSchema, DocID, StepStatus } from "./types";
import { getTimestamp } from "./time";

export default function postNewSteps(
  view: EditorView,
  setPmState: (state: EditorState) => void,
  DB: PouchDB.Database<DBSchema>,
  tr: Transaction<typeof mySchema>,
) {
  const newState = view.state.apply(tr);

  view.updateState(newState);
  const sendable = sendableSteps(newState);
  if (sendable) {
    const timestamp = getTimestamp();
    const newStep: ClientStep = {
      steps: sendable.steps.map(step => step.toJSON()),
      version: sendable.version,
      status: StepStatus.NEW,
      collection: DBCollection.ClientSteps,
      docId: DocID,
      pmViewId: sendable.clientID,
      createdAt: timestamp,
      updatedAt: timestamp,
    };
    DB.post(newStep);
  }
  setPmState(newState);
}
