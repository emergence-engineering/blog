import React, { FunctionComponent } from "react";
import styled from "styled-components";
import JsonView from "react-json-view";

import { ClientStep, StepStatus } from "../types";

import { Cell, HeaderCell, VersionCell, WatcherHeader } from "./common";

const StepRoot = styled.div`
  display: flex;
`;

const StepsWrapper = styled(HeaderCell)`
  flex: 2;
`;

const StatusWidth = styled(HeaderCell)`
  min-width: 6.5rem;
`;

const Status = styled(Cell)<{ status: StepStatus }>`
  min-width: 6.5rem;
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
        <Cell>{step.pmViewId}</Cell>
        <VersionCell>{step.version}</VersionCell>
        <StepsWrapper>
          <JsonView src={step.steps} collapsed />
        </StepsWrapper>
      </StepRoot>
    ))}
  </div>
);
export default ClientStepWatcher;
