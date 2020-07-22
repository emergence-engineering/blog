import React, { FunctionComponent, useEffect, useState } from "react";
import styled from "styled-components";

import { DBSI, DocID, PMDocument } from "./types";
import initializeDBS, { fillInitial } from "./initializeDB";
import fetchNewStepsClient from "./fetchNewStepsClient";
import fetchDocument from "./fetchDocument";
import processSteps from "./processSteps";
import createEditor from "./createEditor";
import Editor from "./components/Editor";
import StateDisplay from "./components/StateDisplay";

const EditorWrapper = styled.div`
  display: flex;
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
    fetchNewStepsClient(DBS?.clientDB2, pmView2);
  }, [DBS, pmView2]);

  // Fetching steps for view 1
  useEffect(() => {
    fetchNewStepsClient(DBS?.clientDB1, pmView1);
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
        pmView1,
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
        pmView2,
      ),
    [serverDoc],
  );
  return (
    <>
      <StateDisplay serverDoc={serverDoc} />
      <EditorWrapper>
        <Editor id="editor1" view={pmView1} />
        <Editor id="editor2" view={pmView2} />
      </EditorWrapper>
    </>
  );
};

export default Editors;
