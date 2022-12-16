import React, { FunctionComponent } from "react";
import styled from "styled-components";
import {JsonViewer} from "@textea/json-viewer";

import { ServerStep } from "../types";

import {
  Cell,
  HeaderCell,
  StepRoot,
  CenteredCell,
  WatcherHeader,
} from "./common";

const StepsWrapper = styled(Cell)`
  flex: 2;
`;

const StepsHeaderWrapper = styled(HeaderCell)`
  flex: 2;
`;

const ServerStepWatcher: FunctionComponent<{ steps: ServerStep[] }> = ({
  steps,
}) => (
  <div>
    <WatcherHeader>ServerSteps list</WatcherHeader>
    <StepRoot>
      <HeaderCell>Editor ID</HeaderCell>
      <HeaderCell>Version</HeaderCell>
      <StepsHeaderWrapper>Steps</StepsHeaderWrapper>
    </StepRoot>
    {steps.map((step, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <StepRoot key={index}>
        <CenteredCell>{step.pmViewId}</CenteredCell>
        <CenteredCell>{step.version}</CenteredCell>
        <StepsWrapper>
          <JsonViewer value={step.step} defaultInspectDepth={0}/>
        </StepsWrapper>
      </StepRoot>
    ))}
  </div>
);
export default ServerStepWatcher;
