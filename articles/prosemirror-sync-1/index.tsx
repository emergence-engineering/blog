import React, { FunctionComponent, useEffect, useState } from "react";
import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import { schema } from "prosemirror-schema-basic";
import { exampleSetup } from "prosemirror-example-setup";
import { Schema } from "prosemirror-model";
import PouchDB from "pouchdb";
import styled from "styled-components";
import {
  collab,
  getVersion,
  receiveTransaction,
  sendableSteps,
} from "prosemirror-collab";
import { Step } from "prosemirror-transform";

enum DBCollection {
  PMDocument = "PMDocument",
  ClientSteps = "ClientSteps",
  ServerSteps = "ServerSteps",
}

enum StepStatus {
  NEW = "NEW",
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED",
}

interface PMDocument {
  _id: string;
  _rev?: string;
  collection: DBCollection.PMDocument;
  doc: object;
  version: number;
  updatedAt: string;
}

interface ClientStep {
  collection: DBCollection.ClientSteps;
  pmViewId: string | number;
  status: StepStatus;
  steps: object[];
  version: number;
  docId: string;
}

interface ServerStep {
  collection: DBCollection.ServerSteps;
  step: object;
  version: number;
  pmViewId: string | number;
  docId: string;
}

const initialDoc = {
  content: [
    {
      content: [
        {
          text: "Empty",
          type: "text",
        },
      ],
      type: "paragraph",
    },
  ],
  type: "doc",
};

const EditorWrapper = styled.div`
  display: flex;
`;

const EditorDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const mySchema = new Schema({
  nodes: schema.spec.nodes,
  marks: schema.spec.marks,
});

const Editors: FunctionComponent<{}> = () => {
  const [pmState1, setPmState1] = useState();
  const [pmView1, setPmView1] = useState();
  const [pmState2, setPmState2] = useState();
  const [pmView2, setPmView2] = useState();
  const [serverDoc, setServerDoc] = useState<PMDocument>();
  const [docListener, setDocListener] = useState();
  const [DBS, setDBS] = useState<{
    serverDB: PouchDB.Database<{}>;
    clientDB1: PouchDB.Database<{}>;
    clientDB2: PouchDB.Database<{}>;
  }>();

  // Initialize PouchDB instances
  useEffect(() => {
    (async () => {
      if (DBS) {
        await DBS.serverDB.destroy();
        await DBS.clientDB1.destroy();
        await DBS.clientDB2.destroy();
      }

      const serverDB = new PouchDB("server");
      const clientDB1 = new PouchDB("client1");
      const clientDB2 = new PouchDB("client2");

      clientDB1.sync(serverDB, { live: true });
      clientDB2.sync(serverDB, { live: true });

      serverDB.setMaxListeners(20);
      clientDB1.setMaxListeners(20);
      clientDB2.setMaxListeners(20);

      setDBS({
        serverDB,
        clientDB1,
        clientDB2,
      });
    })();
  }, []);

  // Fill initial serverDB data
  useEffect(() => {
    (async () => {
      if (!DBS) return;
      const docRev = await DBS.serverDB.get("ee").catch(() => {});
      const doc: PMDocument = {
        _id: "ee",
        collection: DBCollection.PMDocument,
        doc: initialDoc,
        version: 0,
        updatedAt: Date.now().toString(),
        // eslint-disable-next-line no-underscore-dangle
        ...(docRev ? { _rev: docRev._rev } : {}),
      };
      DBS.serverDB.put(doc);
    })();
  }, [DBS]);
  // Fetching steps for view 2
  useEffect(() => {
    (async () => {
      if (!DBS || !pmView2) return;
      const listener = DBS.clientDB2.changes({
        since: "now",
        live: true,
        // eslint-disable-next-line @typescript-eslint/camelcase
        include_docs: true,
        // eslint-disable-next-line @typescript-eslint/camelcase
        filter: data =>
          data.collection === DBCollection.ServerSteps &&
          (data as ServerStep).docId === "ee" &&
          (data as ServerStep).version === getVersion(pmView2.state),
      });
      listener.on("change", data => {
        const serverStep: ServerStep = data.doc as any;
        pmView2.dispatch(
          receiveTransaction(
            pmView2.state,
            [Step.fromJSON(mySchema, serverStep.step)],
            [serverStep.pmViewId],
          ),
        );
      });
    })();
  }, [DBS, pmView2]);

  // Fethcing steps for view 1
  // TODO: Same as the one above
  useEffect(() => {
    (async () => {
      if (!DBS || !pmView1) return;
      const listener = DBS.clientDB1.changes({
        since: "now",
        live: true,
        // eslint-disable-next-line @typescript-eslint/camelcase
        include_docs: true,
        // eslint-disable-next-line @typescript-eslint/camelcase
        filter: data =>
          data.collection === DBCollection.ServerSteps &&
          (data as ServerStep).docId === "ee" &&
          (data as ServerStep).version === getVersion(pmView1.state),
      });
      listener.on("change", data => {
        const serverStep: ServerStep = data.doc as any;
        console.log("Listener", serverStep.version);
        pmView1.dispatch(
          receiveTransaction(
            pmView1.state,
            [Step.fromJSON(mySchema, serverStep.step)],
            [serverStep.pmViewId],
          ),
        );
      });
    })();
  }, [DBS, pmView1]);
  // Fetch initial document from DB
  useEffect(() => {
    (async () => {
      if (!DBS) return;
      if (!docListener && !serverDoc) {
        const listener = DBS.clientDB1.changes({
          since: "now",
          live: true,
          // eslint-disable-next-line @typescript-eslint/camelcase
          include_docs: true,
          // eslint-disable-next-line @typescript-eslint/camelcase
          doc_ids: ["ee"],
        });
        setDocListener(listener);
        listener.on("change", data => {
          // TODO: Don't listen to it after it is fetched
          setServerDoc(data.doc as any);
        });
      }
      if (docListener && serverDoc) {
        docListener.cancel();
      }
    })();
  }, [DBS, serverDoc]);
  // Create prosemirror views
  useEffect(() => {
    if (!serverDoc) return;
    const doc: PMDocument = serverDoc.doc as any;
    const state1 = EditorState.create({
      doc: mySchema.nodeFromJSON(doc),
      plugins: [
        ...exampleSetup({ schema: mySchema }),
        collab({ version: doc.version }),
      ],
    });
    const state2 = EditorState.create({
      doc: mySchema.nodeFromJSON(doc),
      plugins: [
        ...exampleSetup({ schema: mySchema }),
        collab({ version: doc.version }),
      ],
    });
    const view1 = new EditorView(document.querySelector("#editor1"), {
      state: state1,
      dispatchTransaction: tr => {
        const newState = view1.state.apply(tr);
        setPmState1(newState);
        view1.updateState(newState);
        const sendable = sendableSteps(newState);
        if (sendable && DBS) {
          const newStep: ClientStep = {
            steps: sendable.steps.map(step => step.toJSON()),
            version: sendable.version,
            status: StepStatus.NEW,
            collection: DBCollection.ClientSteps,
            docId: "ee", // TODO
            pmViewId: sendable.clientID,
          };
          DBS.clientDB1.post(newStep);
        }
      },
    });
    setPmView1(view1);
    const view2 = new EditorView(document.querySelector("#editor2"), {
      state: state2,
      dispatchTransaction: tr => {
        const newState = view2.state.apply(tr);
        setPmState2(newState);
        view2.updateState(newState);
        const sendable = sendableSteps(newState);
        if (sendable && DBS) {
          console.log({ sendable });
          const newStep: ClientStep = {
            steps: sendable.steps.map(step => step.toJSON()),
            version: sendable.version,
            status: StepStatus.NEW,
            collection: DBCollection.ClientSteps,
            docId: "ee", // TODO
            pmViewId: sendable.clientID,
          };
          DBS.clientDB2.post(newStep);
        }
      },
    });
    setPmView2(view2);
  }, [serverDoc]);

  // Server listener
  useEffect(() => {
    (async () => {
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
    })();
  }, [DBS]);

  return (
    <EditorWrapper>
      <EditorDetailsWrapper>
        <div>
          <h5>state.textContent</h5>
          {pmView1 && pmView1.state.doc.textContent}
        </div>
        <div>
          <h5>getVersion</h5>
          {pmView1 && getVersion(pmView1.state)}
        </div>
        <div id="editor1" />
      </EditorDetailsWrapper>
      <EditorDetailsWrapper>
        <div>
          <h5>state.textContent</h5>
          {pmView2 && pmView2.state.doc.textContent}
        </div>
        <div>
          <h5>getVersion</h5>
          {pmView2 && getVersion(pmView2.state)}
        </div>
        <div id="editor2" />
      </EditorDetailsWrapper>
    </EditorWrapper>
  );
};

export default Editors;
