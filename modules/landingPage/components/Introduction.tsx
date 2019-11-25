import styled from "styled-components";

import theme, { screenSizes, sizes } from "../../../utils/theme";

export const IntroductionParagraph = styled.p`
  width: 50%;
  background-color: rgba(0, 0, 0, 0.03);
  text-align: center;
  font-style: italic;
  font-size: 1.5rem;
  padding: 15px;
  color: white;
`;

export const IntroductionSectionWrapper = styled.div`
  width: 100%;
  min-height: 20rem;
  background-color: ${theme.color.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 ${sizes.sidePadding};
`;

export const IntroductionSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: ${screenSizes.medium}px;
  height: 100%;
  color: ${theme.color.accent};
`;

export const IntroductionHeader = styled.p`
  font-size: 1.5rem;
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
  width: 100%;
  font-family: ${theme.fontFamily.title};
  font-weight: bold;
  color: ${theme.color.accent};
`;

export const SubTitle = styled.span`
  text-align: left;
  font-size: 1rem;
  width: 100%;
  font-family: ${theme.fontFamily.title};
  font-weight: lighter;
  color: white;
`;

export const HeaderWordEmphasis = styled.span`
  font-size: 1.5rem;
  font-family: ${theme.fontFamily.title};
  color: ${theme.color.accent};
`;
