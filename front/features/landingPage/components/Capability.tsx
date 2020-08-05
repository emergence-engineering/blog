import styled from "styled-components";

import { screenSizes } from "../../../utils/theme";

export const CapabilitySection = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  min-height: 30rem;
  padding: 3rem 0;
`;

export const CapabilityBoxContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  //grid-template-rows: repeat(auto-fill, 1fr);
  grid-auto-rows: 1fr;
  @media screen and (max-width: ${screenSizes.medium}px) {
    grid-template-columns: 1fr;
  }
`;

export const CapabilityBoxContainerWrapper = styled.div`
  width: 100%;
  max-width: ${screenSizes.maxWidth}px;
`;
