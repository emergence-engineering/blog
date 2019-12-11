import styled from "styled-components";
import React, { FunctionComponent } from "react";

import theme, { sizes } from "../../../utils/theme";

import SalesForm from "./SalesForm";

export const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${theme.color.primary};
`;

const ContentWrapper = styled.div`
  padding: 0 ${sizes.sidePadding};
  max-width: 40rem;
  width: 100%;
`;

const Title = styled.h1`
  width: 100%;
  text-align: center;
  color: ${theme.color.gray10};
`;

const SalesFormSection: FunctionComponent<{}> = () => (
  <Root>
    <ContentWrapper>
      <Title>Contact us</Title>
      <SalesForm />
    </ContentWrapper>
  </Root>
);

export default SalesFormSection;
