import React, { FunctionComponent } from "react";
import styled from "styled-components";
import getConfig from "next/config";

const Root = styled.div`
  background-color: blue;
`;

const Index: FunctionComponent<{}> = props => (
  <Root>
    {console.log(getConfig().publicRuntimeConfig)}
    <p>Hello Next.js</p>
  </Root>
);

export default Index;
