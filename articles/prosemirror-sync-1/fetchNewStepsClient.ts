import { getVersion, receiveTransaction } from "prosemirror-collab";
import { Step } from "prosemirror-transform";
import { EditorView } from "prosemirror-view";

import { mySchema } from "./schema";
import { DBCollection, DocID, ServerStep } from "./types";

export default async (DB?: PouchDB.Database<{}>, pmView?: EditorView) => {
  if (!DB || !pmView) return;
  const listener = DB.changes({
    since: "now",
    live: true,
    // eslint-disable-next-line @typescript-eslint/camelcase
    include_docs: true,
    // eslint-disable-next-line @typescript-eslint/camelcase
    filter: data =>
      data.collection === DBCollection.ServerSteps &&
      (data as ServerStep).docId === DocID &&
      (data as ServerStep).version === getVersion(pmView.state),
  });
  listener.on("change", data => {
    const serverStep: ServerStep = data.doc as any;
    pmView.dispatch(
      receiveTransaction(
        pmView.state,
        [Step.fromJSON(mySchema, serverStep.step)],
        [serverStep.pmViewId],
      ),
    );
  });
};
