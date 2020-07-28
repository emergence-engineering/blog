import React, { FunctionComponent } from "react";
import styled from "styled-components";
import JsonView from "react-json-view";

import { ServerStep } from "../types";

import { Cell, HeaderCell, VersionCell, WatcherHeader } from "./common";

const StepRoot = styled.div`
  display: flex;
`;

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
        <Cell>{step.pmViewId}</Cell>
        <VersionCell>{step.version}</VersionCell>
        <StepsWrapper>
          <JsonView src={step.step} collapsed />
        </StepsWrapper>
      </StepRoot>
    ))}
  </div>
);
export default ServerStepWatcher;
