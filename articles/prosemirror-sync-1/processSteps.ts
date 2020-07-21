import { Step } from "prosemirror-transform";

import {
  ClientStep,
  DBCollection,
  DBSI,
  PMDocument,
  ServerStep,
  StepStatus,
} from "./types";
import { mySchema } from "./schema";

export default async (DBS: DBSI | undefined) => {
  if (!DBS) return;
  DBS.serverDB
    .changes({
      since: "now",
      live: true,
      // eslint-disable-next-line @typescript-eslint/camelcase
      include_docs: true,
      filter: data =>
        data.collection === DBCollection.ClientSteps &&
        data.status === StepStatus.NEW,
    })
    .on("change", async data => {
      try {
        const clientStep: ClientStep = data.doc as any;
        const syncDoc: PMDocument = (await DBS.serverDB.get(
          clientStep.docId,
        )) as any;
        console.log(syncDoc.version);
        if (clientStep.version !== syncDoc.version) {
          // TODO: Set status to StepStatus.REJECTED
          return;
        }
        let doc = mySchema.nodeFromJSON(syncDoc.doc);
        const { steps } = clientStep;
        // TODO: Reduce BALAZS!!!
        for (let i = 0; i < steps.length; i += 1) {
          const result = Step.fromJSON(mySchema, steps[i]).apply(doc);
          doc = result.doc;
        }

        const newVersion = syncDoc.version + steps.length;
        const serverSteps: ServerStep[] = steps.map((step, index) => ({
          collection: DBCollection.ServerSteps,
          step,
          pmViewId: clientStep.pmViewId,
          version: syncDoc.version + index,
          // eslint-disable-next-line no-underscore-dangle
          docId: syncDoc._id,
        }));
        const newDoc: PMDocument = {
          ...syncDoc,
          version: newVersion,
          doc: doc.toJSON(),
          // eslint-disable-next-line no-underscore-dangle
          _rev: syncDoc._rev,
          updatedAt: Date.now().toString(),
        };
        await DBS.serverDB
          .put(newDoc)
          .then(() => DBS.serverDB.bulkDocs(serverSteps));
      } catch (e) {
        // TODO: Set status to StepStatus.REJECTED
        console.log(e);
        // TODO
      }
    });
};
