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
  font-size: 1.4rem;
  font-family: ${theme.fontFamily.title};
  font-weight: 500;
  color: ${theme.color.gray1};
  text-align: justify;
  text-justify: newspaper;
`;
