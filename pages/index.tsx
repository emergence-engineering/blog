import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Link from "next/link";
import { bindActionCreators, Dispatch } from "redux";

import { addSampleAction } from "../setup/actions/sample/actions";
import theme from "../utils/theme";

const Root = styled.div`
  display: flex;
  background-color: white;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
`;

const Header = styled.header`
  flex-shrink: 0;
  background-color: ${theme.color.gray1};
  color: white;
  height: 100px;
`;

const Section = styled.div`
  background-color: wheat;
  flex-grow: 1;
  margin-left: 25%;
  margin-right: 25%;
`;
const Footer = styled.footer`
  flex-shrink: 0;
  background-color: black;
  color: white;
  height: 100px;
`;

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      addSample: addSampleAction,
    },
    dispatch,
  );

const Index: FunctionComponent<
  {} & ReturnType<typeof mapDispatchToProps>
> = () => (
  <Root>
    <Header>TODO: header</Header>
    <Section>
      <h1>company landing page</h1>
      <Link href="/blog">
        <a>Go to Blog</a>
      </Link>
    </Section>
    <Footer>TODO: footer</Footer>
  </Root>
);

export default connect(
  undefined,
  mapDispatchToProps,
)(Index);
