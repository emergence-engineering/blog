import styled from "styled-components";
import React, { FunctionComponent } from "react";

import theme, { screenSizes, sizes } from "../../../utils/theme";

import LogoColumn, { LogoColumnProps } from "./LogoColumn";

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 ${sizes.sidePadding};
`;

const LogoTableContainer = styled.div`
  max-width: ${screenSizes.maxWidth}px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media screen and (max-width: ${screenSizes.medium}px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const cloudTech: LogoColumnProps = {
  columnName: "Cloud",
  logos: [
    {
      src: "/Firebase_Logo_Standard_Lockup.svg",
      scale: 1.25,
    },
    { src: "/amazon-web-services.svg", scale: 1.2 },
    { src: "/google-cloud-platform.svg", scale: 1.4 },
    { src: "/heroku.svg", scale: 0.4 },
  ],
};

const languages: LogoColumnProps = {
  columnName: "Languages",
  logos: [
    { src: "/typescript.svg", scale: 0.65 },
    { src: "/javascript.svg", scale: 0.65 },
    { src: "/Node.js_logo.svg", scale: 0.85 },
    { src: "/go-6.svg", scale: 0.8 },
    { src: "/c.svg", scale: 0.65 },
    { src: "/Python-logo-notext.svg", scale: 0.7 },
  ],
};

const frameworks: LogoColumnProps = {
  columnName: "Frameworks",
  logos: [
    { src: "/react.svg", scale: 0.75 },
    { src: "/redux.svg", scale: 0.75 },
    { src: "/next-js.svg", scale: 0.8 },
    { src: "/ionic.svg", scale: 1 },
    { src: "/graphql.svg", scale: 0.65 },
    { src: "/apollo.svg", scale: 0.7 },
  ],
};

const databases: LogoColumnProps = {
  columnName: "Databases",
  logos: [
    { src: "/firebase-db.svg", scale: 0.5 },
    { src: "/postgres.svg", scale: 0.6 },
    { src: "/sqlite.svg", scale: 0.9 },
    { src: "/mongodb.svg", scale: 1.2 },
    { src: "/couchdb.svg", scale: 0.8 },
  ],
};

const ai: LogoColumnProps = {
  columnName: "Machine Learning/ AI",
  logos: [
    { src: "/tensorflow-2.svg", scale: 0.65 },
    { src: "/pytorch.svg", scale: 1.2 },
  ],
};

const Title = styled.h1`
  color: ${theme.color.gray1};
  font-family: "Oswald", sans-serif;
`;

const TechnologySection: FunctionComponent = () => (
  <Root>
    <Title>Our competences</Title>
    <LogoTableContainer>
      <LogoColumn {...cloudTech} />
      <LogoColumn {...languages} />
      <LogoColumn {...frameworks} />
      <LogoColumn {...databases} />
      <LogoColumn {...ai} />
    </LogoTableContainer>
  </Root>
);

export default TechnologySection;
