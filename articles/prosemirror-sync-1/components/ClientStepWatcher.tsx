import React, { FunctionComponent } from "react";
import styled from "styled-components";
import {JsonViewer} from "@textea/json-viewer";

import { ClientStep, StepStatus } from "../types";

import {
  Cell,
  HeaderCell,
  CenteredCell,
  WatcherHeader,
  StepRoot,
} from "./common";

const StepsWrapper = styled(HeaderCell)`
  flex: 2.5;
`;

const StatusWidth = styled(HeaderCell)`
  min-width: 5rem;
`;

const Status = styled(Cell)<{ status: StepStatus }>`
  min-width: 5rem;
  color: ${({ status }) =>
    (() => {
      switch (status) {
        case StepStatus.NEW:
          return "orange";
        case StepStatus.REJECTED:
          return "red";
        case StepStatus.ACCEPTED:
          return "green";
        default:
          return "black";
      }
    })()};
`;

const ClientStepWatcher: FunctionComponent<{ steps: ClientStep[] }> = ({
  steps,
}) => (
  <div>
    <WatcherHeader>ClientSteps list</WatcherHeader>
    <StepRoot>
      <StatusWidth>Status</StatusWidth>
      <HeaderCell>Editor ID</HeaderCell>
      <HeaderCell>Version</HeaderCell>
      <StepsWrapper>Steps</StepsWrapper>
    </StepRoot>
    {steps.map((step, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <StepRoot key={index}>
        <Status status={step.status}>{step.status}</Status>
        <CenteredCell>{step.pmViewId}</CenteredCell>
        <CenteredCell>{step.version}</CenteredCell>
        <StepsWrapper>
          <JsonViewer value={step.steps} defaultInspectDepth={0}/>
        </StepsWrapper>
      </StepRoot>
    ))}
  </div>
);
export default ClientStepWatcher;
