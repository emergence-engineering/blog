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

export const EmailWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Email = styled.a`
  width: 100%;
  text-align: center;
`;

const SalesFormSection: FunctionComponent = () => (
  <Root id="contactUs">
    <ContentWrapper style={{ maxWidth: "50rem" }}>
      <Title>Contact us at </Title>
      <EmailWrapper>
        <Email href="mailto: contact@emergence-engineering.com">
          contact@emergence-engineering.com
        </Email>
      </EmailWrapper>
    </ContentWrapper>
    <ContentWrapper>
      <Title>Or write us a message</Title>
      <SalesForm />
    </ContentWrapper>
  </Root>
);

export default SalesFormSection;
