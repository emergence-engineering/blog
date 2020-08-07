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
import { getTimestamp } from "./time";
import { logger } from "./logger";

async function syncClientStep(
  DBS: DBSI,
  clientStep: ClientStep,
  newStatus: StepStatus,
) {
  DBS.serverDB.put({
    ...clientStep,
    status: newStatus,
  });
}

export default async function processSteps(DBS: DBSI | undefined) {
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
        const clientStep = data.doc;
        if (clientStep?.collection !== DBCollection.ClientSteps) {
          return;
        }
        const syncDoc = await DBS.serverDB.get(clientStep.docId);
        if (
          clientStep.version !== syncDoc.version ||
          syncDoc.collection !== DBCollection.PMDocument
        ) {
          // Set status to StepStatus.REJECTED
          await syncClientStep(DBS, clientStep, StepStatus.REJECTED);
          return;
        }

        logger.log({ clientStep });
        const { steps } = clientStep;
        const doc = steps.reduce(
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore TODO: Typing
          (acc, curr) => Step.fromJSON(mySchema, curr).apply(acc).doc,
          mySchema.nodeFromJSON(syncDoc.doc),
        );

        const newVersion = syncDoc.version + steps.length;
        const timestamp = getTimestamp();
        const serverSteps: ServerStep[] = steps.map((step, index) => ({
          collection: DBCollection.ServerSteps,
          step,
          pmViewId: clientStep.pmViewId,
          version: syncDoc.version + index,
          // eslint-disable-next-line no-underscore-dangle
          docId: syncDoc._id,
          createdAt: timestamp,
          updatedAt: timestamp,
        }));
        logger.log({ syncDoc });
        const newDoc: PMDocument = {
          ...syncDoc,
          version: newVersion,
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          doc: doc.toJSON(),
          // eslint-disable-next-line no-underscore-dangle
          _rev: syncDoc._rev,
          updatedAt: getTimestamp(),
        };
        await DBS.serverDB
          .put(newDoc)
          .then(() => DBS.serverDB.bulkDocs(serverSteps))
          .then(() => syncClientStep(DBS, clientStep, StepStatus.ACCEPTED));
      } catch (e) {
        logger.info("[CAUGHT ERROR] processSteps, ", e);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const clientStep: ClientStep = data.doc as any;
        // Setting status to StepStatus.REJECTED
        await syncClientStep(DBS, clientStep, StepStatus.REJECTED);
      }
    });
}
