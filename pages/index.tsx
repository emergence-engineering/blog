import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Root = styled.div`
  background-color: blue;
`;

const Index: FunctionComponent<{ asd: number }> = props => {
  return (
    <Root>
      <p>Hello Next.js</p>
    </Root>
  );
};

export default Index;
