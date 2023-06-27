import styled from "styled-components";
import React, { FunctionComponent } from "react";

import theme, { sizes } from "../../../utils/theme";

import SalesForm from "./SalesForm";
import DiscordInvite from "./DiscordInvite";

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

const SalesFormSection: FunctionComponent = () => (
  <Root id="contactUs">
    <ContentWrapper style={{ maxWidth: "50rem" }}>
      <Title>Contact us</Title>
      <DiscordInvite />
    </ContentWrapper>
    <ContentWrapper>
      <Title>Or write us a message</Title>
      <SalesForm />
    </ContentWrapper>
  </Root>
);

export default SalesFormSection;
