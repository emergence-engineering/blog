import React, { FunctionComponent, useEffect, useState } from "react";
import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
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
import processSteps from "./processSteps";
import createEditor from "./createEditor";

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

  // Server listener
  useEffect(() => {
    processSteps(DBS);
  }, [DBS]);

  // Create prosemirror view for editor 1
  useEffect(
    () =>
      createEditor(
        setPmState1,
        setPmView1,
        "#editor1",
        serverDoc,
        DBS?.clientDB1,
      ),
    [serverDoc],
  );

  // Create prosemirror view for editor 2
  useEffect(
    () =>
      createEditor(
        setPmState2,
        setPmView2,
        "#editor2",
        serverDoc,
        DBS?.clientDB2,
      ),
    [serverDoc],
  );

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
        {/* TODO: ref? */}
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
