import React, { FunctionComponent } from "react";
import styled from "styled-components";

import theme, { screenSizes, sizes } from "../../../utils/theme";
import { oswald } from "../../../utils/fonts";
import { Member, Members } from "./AboutUsSection";

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 20rem;
  background-color: ${theme.color.background2};
  padding: 4rem ${sizes.sidePadding};
  width: 100%;
`;

const SectionTitle = styled.h1`
  color: ${theme.color.gray1};
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 3rem;
`;

const BigAmpersand = styled.div`
  color: ${theme.color.gray1};
  font-size: 8rem;
  font-weight: 700;
  line-height: 1;
  align-self: flex-start;
  margin-top: 0;
  @media screen and (max-width: ${screenSizes.medium}px) {
    align-self: center;
    font-size: 6rem;
    margin: 1.5rem 0;
  }
`;

const ColumnsRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  max-width: ${screenSizes.maxWidth}px;
  @media screen and (max-width: ${screenSizes.medium}px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
`;

const ColumnTitle = styled.h2`
  color: ${theme.color.gray1};
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0 0 1.5rem;
`;

const ItemList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
  color: ${theme.color.gray1};
  font-size: 1.15rem;
  line-height: 2;
`;

const engineeringItems = [
  "ProseMirror / TipTap",
  "YJS / collaborative applications",
  "AI-first development",
  "Hard engineering problems",
];

const businessItems = ["Marketing", "Strategy", "Content", "E-commerce"];

const WhatWeDoSection: FunctionComponent = () => (
  <Root>
    <SectionTitle className={`${oswald.className}`}>What We do</SectionTitle>
    <ColumnsRow>
      <Column>
        <ColumnTitle className={`${oswald.className}`}>Engineering</ColumnTitle>
        <ItemList className={`${oswald.className}`}>
          {engineeringItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ItemList>
        <Member
          src={Members.viktor}
          memberName="Viktor Váczi"
          memberRole="CTO & Co-CEO"
          memberWorkArea=""
          memberStack=""
          cvLink="/cv/viktor"
          linkedInLink="https://www.linkedin.com/in/viktor-v%C3%A1czi-58054ba0"
          githubLink="https://github.com/ViktorVaczi90"
        />
      </Column>
      <BigAmpersand className={`${oswald.className}`}>&amp;</BigAmpersand>
      <Column>
        <ColumnTitle className={`${oswald.className}`}>
          Business Development
        </ColumnTitle>
        <ItemList className={`${oswald.className}`}>
          {businessItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ItemList>
        <Member
          src={Members.greg}
          memberName="Greg Gillay"
          memberRole="COO & Co-CEO"
          memberWorkArea=""
          memberStack=""
          linkedInLink="https://hu.linkedin.com/in/gergely-gillay-0359b919b"
        />
      </Column>
    </ColumnsRow>
  </Root>
);

export default WhatWeDoSection;
