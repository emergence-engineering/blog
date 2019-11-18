import styled from "styled-components";

import theme from "../../../utils/theme";

export const IntroductionParagraph = styled.p`
  width: 50%;
  background-color: rgba(0, 0, 0, 0.03);
  text-align: center;
  font-style: italic;
  font-size: 1.5rem;
  padding: 15px;
  color: white;
`;

export const IntroductionSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 40%;
  background-color: ${theme.color.primary};
`;

export const IntroductionHeader = styled.p`
  font-size: 1.5rem;
  width: 50%;
  font-family: ${theme.fontFamily.title};
  font-weight: 500;
  color: white;
  text-align: justify;
  text-justify: newspaper;
`;

export const MainTitle = styled.div`
  display: inline-block;
  text-align: left;
  font-size: 2rem;
  width: 50%;
  font-family: ${theme.fontFamily.title};
  font-weight: bold;
  color: white;
`;

export const SubTitle = styled.span`
  text-align: left;
  font-size: 1rem;
  width: 50%;
  font-family: ${theme.fontFamily.title};
  font-weight: lighter;
  color: white;
`;

export const HeaderWordEmphasis = styled.span`
  font-size: 1.5rem;
  font-family: ${theme.fontFamily.title};
  color: ${theme.color.tertiary};
`;
