import styled from "styled-components";
import React, { FunctionComponent } from "react";

import theme, { screenSizes, sizes } from "../../../utils/theme";

import LogoColumn, { Direction, LogoColumnProps } from "./LogoColumn";

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
    { src: "/amazon-web-services.svg", direction: Direction.Horizontal },
    { src: "/google-cloud-platform.svg", direction: Direction.Vertical },
    {
      src: "/Firebase_Logo_Standard_Lockup.svg",
      direction: Direction.Horizontal,
    },
    { src: "/heroku.svg", direction: Direction.Vertical },
  ],
};

const languages: LogoColumnProps = {
  columnName: "Languages",
  logos: [
    { src: "/typescript.svg", direction: Direction.Vertical },
    { src: "/javascript.svg", direction: Direction.Vertical },
    { src: "/Node.js_logo.svg", direction: Direction.Horizontal },
    { src: "/go-6.svg", direction: Direction.Horizontal },
    { src: "/c.svg", direction: Direction.Vertical },
    { src: "/Python-logo-notext.svg", direction: Direction.Vertical },
    { src: "/ruby.svg", direction: Direction.Vertical },
  ],
};

const frameworks: LogoColumnProps = {
  columnName: "Frameworks",
  logos: [
    { src: "/react.svg", direction: Direction.Vertical },
    { src: "/redux.svg", direction: Direction.Vertical },
    { src: "/next-js.svg", direction: Direction.Vertical },
    { src: "/ionic.svg", direction: Direction.Horizontal },
    { src: "/graphql.svg", direction: Direction.Vertical },
    { src: "/apollo.svg", direction: Direction.Vertical },
  ],
};

const databases: LogoColumnProps = {
  columnName: "Databases",
  logos: [
    { src: "/postgres.svg", direction: Direction.Vertical },
    { src: "/sqlite.svg", direction: Direction.Horizontal },
    { src: "/mongodb.svg", direction: Direction.Horizontal },
    { src: "/firebase-db.svg", direction: Direction.Vertical },
    { src: "/couchdb.svg", direction: Direction.Vertical },
  ],
};

const ai: LogoColumnProps = {
  columnName: "Machine Learning/ AI",
  logos: [
    { src: "/tensorflow-2.svg", direction: Direction.Vertical },
    { src: "/pytorch.svg", direction: Direction.Horizontal },
  ],
};

const Title = styled.h1`
  color: ${theme.color.primary1};
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
