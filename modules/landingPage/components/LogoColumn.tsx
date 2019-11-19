import styled from "styled-components";
import React, { FunctionComponent } from "react";

import { LogoColumnProps, renderLogo } from "./Logo";

const LogoColumnRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 30px;
`;

const LogoColumn: FunctionComponent<LogoColumnProps> = ({
  logos,
  columnName,
}) => (
  <LogoColumnRoot>
    <h2>{columnName}</h2>
    {logos.map(renderLogo)}
  </LogoColumnRoot>
);

export default LogoColumn;
