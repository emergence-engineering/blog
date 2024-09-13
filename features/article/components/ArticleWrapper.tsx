import React, { PropsWithChildren } from "react";
import styled from "styled-components";

import { screenSizes } from "../../../utils/theme";
import { TwLayout } from "../../twLandingPage/twComponents/TwLayout";
import { TwContact } from "../../twLandingPage/twComponents/TwContact";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  background: white;
  width: 100%;
  @media (max-width: 769px) {
    padding: 0.5rem;
  }
`;

const BlogContent = styled.section`
  flex-grow: 1;
  display: flex;
  min-height: 100vh;
  max-width: ${screenSizes.medium}px;
  width: 100%;
  padding: 2rem 0rem;
  flex-direction: column;
  justify-content: center;
  text-align: justify;
  text-justify: inter-word;
  h1 {
    font-size: 3.5rem;
    text-decoration-color: black;
    font-family: "PT Sans Narrow", sans-serif;
    font-weight: 700;
  }
  h2 {
    font-size: 1.4rem;
    font-family: "PT Sans Narrow", sans-serif;
  }
  h3 {
    font-size: 1.3rem;
    margin: 0.5rem 0 0.5rem;
    font-family: "PT Sans Narrow", sans-serif;
  }
  h4 {
    font-size: 1.15rem;
    margin: 0.5rem 0 0.5rem;
    font-family: "PT Sans Narrow", sans-serif;
  }
  a {
    font-weight: 600;
    text-decoration: underline;
  }
  blockquote {
    font-style: italic;
  }
  p {
    font-family: Montserrat, sans-serif;
  }
  ,
  li {
    font-weight: 300;
  }
  p {
    margin: 0.25rem 0 0.25rem;
  }
`;

const ArticleWrapper = ({ children }: PropsWithChildren) => (
  <TwLayout>
    <Root>
      <BlogContent>{children}</BlogContent>
      <TwContact />
    </Root>
  </TwLayout>
);

export default ArticleWrapper;
