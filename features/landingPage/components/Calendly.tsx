import React from "react";
import styled from "styled-components";
import { InlineWidget } from "react-calendly";

const Root = styled.div`
  padding-bottom: 5rem;
  width: 100%;
`;

const Calendly = () => {
  return (
    <Root>
      <InlineWidget url="https://calendly.com/viktor-vaczi/chat-with-v" />
    </Root>
  );
};

export default Calendly;
