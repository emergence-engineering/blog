import React, { FunctionComponent } from "react";
import Collapsible from "react-collapsible";
import styled from "styled-components";
import JsonView from "react-json-view";

import { ClientStep, StepStatus } from "../types";

const TriggerRoot = styled.button`
  cursor: pointer;
`;

const StepRoot = styled.div`
  display: flex;
`;

const Cell = styled.div`
  border-right: 2px solid black;
  border-left: 2px solid black;
  border-bottom: 1px solid lightgray;
  flex: 1;
`;

const StepsWrapper = styled(Cell)`
  flex: 2;
`;

const StatusWidth = styled(Cell)`
  min-width: 6.5rem;
`;

const Status = styled(StatusWidth)<{ status: StepStatus }>`
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

const Trigger = () => <TriggerRoot>ClientSteps list</TriggerRoot>;

const ClientStepWatcher: FunctionComponent<{ steps: ClientStep[] }> = ({
  steps,
}) => (
  <Collapsible trigger={<Trigger />}>
    <StepRoot>
      <StatusWidth>Status</StatusWidth>
      <Cell>Editor ID</Cell>
      <Cell>Version</Cell>
      <StepsWrapper>Steps</StepsWrapper>
    </StepRoot>
    {steps.map((step, index) => (
      // TODO: Use updatedAt
      <StepRoot key={index}>
        <Status status={step.status}>{step.status}</Status>
        <Cell>{step.pmViewId}</Cell>
        <Cell>{step.version}</Cell>
        <StepsWrapper>
          <JsonView src={step.steps} collapsed />
        </StepsWrapper>
      </StepRoot>
    ))}
  </Collapsible>
);
export default ClientStepWatcher;
