import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Link from "next/link";
import { exampleDispatch } from "../setup/actions/mainActions";

const Root = styled.div`
  background-color: blue;
`;

const Index: FunctionComponent<{}> = () => (
  <Root>
    <div>My app</div>
    <Link href="/samplePage">
      <a href="/samplePage">Go to Sample Page</a>
    </Link>
  </Root>
);

const mapStateToProps = (state: any) => ({
  state,
});

const mapDispatchToProps = (dispatch: any) => ({
  exampleDispatch: (value: any) => dispatch(exampleDispatch(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Index);
