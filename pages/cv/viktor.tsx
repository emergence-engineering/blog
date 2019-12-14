import React, { FunctionComponent } from "react";
import styled from "styled-components";

import theme from "../../utils/theme";
import Layout from "../../modules/common/components/Layout";

const Root = styled.div``;

const Name = styled.div`
  font-family: ${theme.fontFamily.title};
  font-size: 2rem;
`;

const BalazsCV: FunctionComponent<{}> = () => {
  console.log("RENDER");
  return (
    <Layout>
      <Root>
        <Name>Balázs Horváth</Name>
      </Root>
    </Layout>
  );
};

export default BalazsCV;
