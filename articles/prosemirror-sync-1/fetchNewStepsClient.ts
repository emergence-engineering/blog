import { getVersion, receiveTransaction } from "prosemirror-collab";
import { Step } from "prosemirror-transform";
import { EditorView } from "prosemirror-view";

import { mySchema } from "./schema";
import { DBCollection, DBSchema, DocID, ServerStep } from "./types";

const fetchNewStepsClient = (
  DB?: PouchDB.Database<DBSchema>,
  pmView?: EditorView,
) => {
  if (!DB || !pmView) return;
  const listener = DB.changes({
    live: true,
    include_docs: true,
    filter: (data) =>
      data.collection === DBCollection.ServerSteps &&
      (data as ServerStep).docId === DocID &&
      (data as ServerStep).version === getVersion(pmView.state),
  });
  listener.on("change", (data) => {
    const serverStep = data.doc;
    if (serverStep?.collection !== DBCollection.ServerSteps) {
      return;
    }
    getVersion(pmView.state) === serverStep.version &&
      pmView.dispatch(
        receiveTransaction(
          pmView.state,
          [Step.fromJSON(mySchema, serverStep.step)],
          [serverStep.pmViewId],
        ),
      );
  });
  // eslint-disable-next-line consistent-return
  return () => listener.cancel();
};

export default fetchNewStepsClient;
