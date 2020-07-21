import React, { FunctionComponent, useEffect, useState } from "react";
import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import { exampleSetup } from "prosemirror-example-setup";
import styled from "styled-components";
import {
  collab,
  getVersion,
  receiveTransaction,
  sendableSteps,
} from "prosemirror-collab";
import { Step } from "prosemirror-transform";

import {
  ClientStep,
  DBCollection,
  DBSI,
  DocID,
  PMDocument,
  ServerStep,
  StepStatus,
} from "./types";
import { initialDoc, mySchema } from "./schema";
import initializeDBS, { fillInitial } from "./initializeDB";
import fetchNewStepsClient from "./fetchNewStepsClient";
import fetchDocument from "./fetchDocument";

const EditorWrapper = styled.div`
  display: flex;
`;

const EditorDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Editors: FunctionComponent<{}> = () => {
  const [pmState1, setPmState1] = useState();
  const [pmView1, setPmView1] = useState();
  const [pmState2, setPmState2] = useState();
  const [pmView2, setPmView2] = useState();
  const [serverDoc, setServerDoc] = useState<PMDocument>();
  const [docListener, setDocListener] = useState();
  const [DBS, setDBS] = useState<DBSI>();

  // Initialize PouchDB instances
  useEffect(() => {
    initializeDBS(DBS, setDBS);
  }, []);

  // Fill initial serverDB data
  useEffect(() => {
    fillInitial(DBS);
  }, [DBS]);

  // Fetching steps for view 2
  useEffect(() => {
    fetchNewStepsClient(DBS, pmView2);
  }, [DBS, pmView2]);

  // Fetching steps for view 1
  useEffect(() => {
    fetchNewStepsClient(DBS, pmView1);
  }, [DBS, pmView1]);

  // Fetch initial document from DB
  useEffect(() => {
    fetchDocument(
      DBS,
      setDocListener,
      setServerDoc,
      DocID,
      docListener,
      serverDoc,
    );
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
            docId: DocID, // TODO
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
            docId: DocID, // TODO
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
