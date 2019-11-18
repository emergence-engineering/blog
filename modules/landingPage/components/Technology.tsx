import styled from "styled-components";
import React, { FunctionComponent } from "react";

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 55%;
`;

const LogoTableContainer = styled.div`
  width: 75%;
  display: flex;
  flex-direction: row;
`;

const LogoColumnRoot = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoImg = styled.img`
  width: 100px;
  height: auto;
`;

interface LogoColumnProps {
  columnName: string;
  logos: string[];
}

const LogoColumn: FunctionComponent<LogoColumnProps> = ({
  logos,
  columnName,
}) => (
  <LogoColumnRoot>
    <h3>{columnName}</h3>
    {logos.map(logo => (
      <LogoImg src={logo} />
    ))}
  </LogoColumnRoot>
);

const cloudTech: LogoColumnProps = {
  columnName: "Cloud",
  logos: [
    "/amazon-web-services.svg",
    "/google-cloud-platform.svg",
    "/Firebase_Logo_Standard_Lockup.svg",
    "/heroku.svg",
  ],
};

const languages: LogoColumnProps = {
  columnName: "Languages",
  logos: [
    "/typescript.svg",
    "/javascript.svg",
    "/Node.js_logo.svg",
    "/go-6.svg",
    "/Python-logo-notext.svg",
    "/ruby.svg",
  ],
};

const TechnologySection: FunctionComponent = () => (
  <Root>
    <LogoTableContainer>
      <LogoColumn {...cloudTech} />
      <LogoColumn {...languages} />
    </LogoTableContainer>
  </Root>
);

export default TechnologySection;
