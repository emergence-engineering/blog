import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Link from "next/link";
import { bindActionCreators, Dispatch } from "redux";

import { addSampleAction } from "../setup/actions/sample/actions";

const Root = styled.div`
  background-color: white;
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
    <h1>company landing page</h1>
    <Link href="/blog">
      <a>Go to Blog</a>
    </Link>
    <br />
  </Root>
);

export default connect(
  undefined,
  mapDispatchToProps,
)(Index);
