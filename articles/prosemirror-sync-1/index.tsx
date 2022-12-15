import React, {
  FunctionComponent,
  Reducer,
  useEffect,
  useReducer,
  useState,
} from "react";
import styled from "styled-components";
import { getVersion } from "prosemirror-collab";
import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";

import theme from "../../utils/theme";

import { DBSchema, DBSI, DocID, PMDocument } from "./types";
import initializeDBS, { fillInitial } from "./initializeDB";
import fetchNewStepsClient from "./fetchNewStepsClient";
import fetchDocument from "./fetchDocument";
import processSteps from "./processSteps";
import createEditor from "./createEditor";
import Editor from "./components/Editor";
import StateDisplay from "./components/StateDisplay";
import {
  defaultHistoryState,
  fetchStepHistory,
  StepHistoryAction,
  stepHistoryReducer,
  StepHistoryState,
} from "./history";
import ClientStepWatcher from "./components/ClientStepWatcher";
import ServerStepWatcher from "./components/ServerStepWatcher";

const EditorWrapper = styled.div`
  display: flex;
  flex-flow: wrap;
`;

const StepsDisplayWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StepWatcherWrapper = styled.div`
  flex: 1;
  flex-basis: 29rem;
  margin: 1rem 0.5rem;
  padding: 0.2rem;
  border: 1px solid ${theme.color.gray8};
  border-radius: 0.1rem;
  background-color: ${theme.color.gray10};
`;

const Editors: FunctionComponent = () => {
  const [pmState1, setPmState1] = useState<EditorState>();
  const [pmView1, setPmView1] = useState<EditorView>();
  const [pmState2, setPmState2] = useState<EditorState>();
  const [pmView2, setPmView2] = useState<EditorView>();
  const [serverDoc, setServerDoc] = useState<PMDocument>();
  const [docListener, setDocListener] =
    useState<PouchDB.Core.Changes<DBSchema>>();
  const [stepHistory, stepHistoryDispatch] = useReducer<
    Reducer<StepHistoryState, StepHistoryAction>
  >(stepHistoryReducer, defaultHistoryState);
  const [stepHistoryListener, setStepHistoryListener] =
    useState<PouchDB.Core.Changes<DBSchema>>();
  const [DBS, setDBS] = useState<DBSI>();

  // Initialize PouchDB instances
  useEffect(() => {
    initializeDBS(DBS, setDBS);
  }, []);

  // Fill initial serverDB data
  useEffect(() => {
    fillInitial(DBS);
  }, [DBS]);

  // Fetching steps for view 1
  useEffect(
    () => fetchNewStepsClient(DBS?.clientDB1, pmView1),
    [DBS, pmView1, pmState1 && getVersion(pmState1)],
  );
  // Fetching steps for view 2
  useEffect(
    () => fetchNewStepsClient(DBS?.clientDB2, pmView2),
    [DBS, pmView2, pmState2 && getVersion(pmState2)],
  );

  // Fetch initial document from DB
  useEffect(() => {
    fetchDocument(
      DBS,
      // TODO
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setDocListener,
      setServerDoc,
      DocID,
      docListener,
      serverDoc,
    );
  }, [DBS, serverDoc]);

  // Fetch step history
  useEffect(() => {
    fetchStepHistory(
      DBS,
      setStepHistoryListener,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      stepHistoryDispatch,
      stepHistoryListener,
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
      <StepsDisplayWrapper>
        <StepWatcherWrapper>
          <ClientStepWatcher steps={stepHistory.client} />
        </StepWatcherWrapper>
        <StepWatcherWrapper>
          <ServerStepWatcher steps={stepHistory.server} />
        </StepWatcherWrapper>
      </StepsDisplayWrapper>
      <EditorWrapper>
        <Editor name="Editor 1." id="editor1" view={pmView1} state={pmState1} />
        <Editor name="Editor 2." id="editor2" view={pmView2} state={pmState2} />
      </EditorWrapper>
    </>
  );
};

export default Editors;
