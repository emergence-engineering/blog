import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { bindActionCreators, Dispatch } from "redux";

import { addSampleAction } from "../setup/actions/sample/actions";
import Header from "../modules/common/components/Header";
import BlogPostIntro from "../modules/blog/components/BlogPostIntro";

const Root = styled.div`
  display: flex;
  background-color: white;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
`;

const LandingPageContent = styled.section`
  flex-grow: 1;
  margin-left: 25%;
  margin-right: 25%;
`;

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      addSample: addSampleAction,
    },
    dispatch,
  );

const Index: FunctionComponent<{} & ReturnType<
  typeof mapDispatchToProps
>> = () => (
  <Root>
    <Header />
    <LandingPageContent>
      <h1>BLOG MAIN PAGE</h1>
      <BlogPostIntro />
      <BlogPostIntro />
      <BlogPostIntro />
      <BlogPostIntro />
    </LandingPageContent>
  </Root>
);

export default connect(undefined, mapDispatchToProps)(Index);
