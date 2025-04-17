import styled from "styled-components";

import theme, { screenSizes, sizes } from "../../../utils/theme";

export const IntroductionSectionWrapper = styled.div`
  width: 100%;
  min-height: 20rem;
  background-color: ${theme.color.gray11};
  background-image: url("/heroBackground.png");
  background-size: cover;
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
  min-width: ${screenSizes.medium}px;
  max-width: 800px;
  height: 100%;
  color: ${theme.color.accent};

  @media only screen and (max-width: 768px) {
    min-width: 100vw;
  }
`;

export const IntroductionParagraph = styled.p`
  font-size: 1.35rem;
`;

export const IntroductionH1 = styled.h1`
  font-size: 2rem;
  font-family: ${theme.fontFamily.title};
  font-weight: 500;
  color: ${theme.color.gray1};
  text-justify: newspaper;

  max-width: 80vw;
  text-align: justify;
  overflow-wrap: break-word;
`;

export const IntroductionFeatureWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media only screen and (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    gap: 0;
  }
`;

export const IntroductionFeatureStart = styled(IntroductionH1)`
  font-size: 2.8rem;
  padding-bottom: 10px;

  width: unset;
  overflow-wrap: unset;

  @media only screen and (max-width: 768px) {
    font-size: 1.6rem;
    padding-bottom: unset;
    margin: unset;
  }
`;

export const IntroductionFeatureBox = styled.div`
  display: flex;
  max-height: 160px;
  // max- min- width hack preserve box size while surrounding text changes
  max-width: 23rem;
  min-width: 23rem;
  align-items: center;
  flex-direction: column;
  row-gap: 3rem;
  overflow: hidden;
`;

export const IntroductionFeatures = styled(IntroductionFeatureStart)`
  padding-bottom: 5px;
  line-height: 3rem;
  border-bottom: 5px solid ${theme.color.tertiary};

  @media only screen and (max-width: 768px) {
    line-height: 2rem;
  }
`;
