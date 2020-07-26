import React, { FunctionComponent } from "react";
import Collapsible from "react-collapsible";
import styled from "styled-components";
import JsonView from "react-json-view";

import { ServerStep } from "../types";

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

const Trigger = () => <TriggerRoot>ServerSteps list</TriggerRoot>;

const ServerStepWatcher: FunctionComponent<{ steps: ServerStep[] }> = ({
  steps,
}) => (
  <Collapsible trigger={<Trigger />}>
    <StepRoot>
      <Cell>Editor ID</Cell>
      <Cell>Version</Cell>
      <StepsWrapper>Steps</StepsWrapper>
    </StepRoot>
    {steps.map((step, index) => (
      // TODO: Use updatedAt
      <StepRoot key={index}>
        <Cell>{step.pmViewId}</Cell>
        <Cell>{step.version}</Cell>
        <StepsWrapper>
          <JsonView src={step.step} collapsed />
        </StepsWrapper>
      </StepRoot>
    ))}
  </Collapsible>
);
export default ServerStepWatcher;
