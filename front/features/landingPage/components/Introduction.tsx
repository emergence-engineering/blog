import styled from "styled-components";

import theme, { screenSizes, sizes } from "../../../utils/theme";

export const IntroductionSectionWrapper = styled.div`
  width: 100%;
  min-height: 20rem;
  background-color: ${theme.color.gray11};
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

export const IntroductionParagraph = styled.p`
  font-size: 1.5rem;
  font-family: ${theme.fontFamily.title};
  font-weight: 500;
  color: ${theme.color.gray1};
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
  color: ${theme.color.gray1};
  text-decoration: underline;
  text-decoration-color: ${theme.color.tertiary};
`;

export const SubTitle = styled.span`
  text-align: left;
  font-size: 1rem;
  width: 100%;
  font-family: ${theme.fontFamily.title};
  font-weight: lighter;
  color: ${theme.color.gray1};
`;

export const HeaderWordEmphasis = styled.span`
  font-size: 1.5rem;
  font-family: ${theme.fontFamily.title};
  color: ${theme.color.accent};
`;
