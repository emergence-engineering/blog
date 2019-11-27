import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { bindActionCreators, Dispatch } from "redux";

import { addSampleAction } from "../setup/actions/sample/actions";
import BlogPostIntro from "../modules/blog/components/BlogPostIntro";
import Layout from "../modules/common/components/Layout";
import { screenSizes, sizes } from "../utils/theme";

const Root = styled.div`
  display: flex;
  background-color: white;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  padding: 2rem ${sizes.sidePadding};
  max-width: ${screenSizes.maxWidth}px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  <Layout>
    <Root>
      <ContentWrapper>
        <BlogPostIntro />
        <BlogPostIntro />
        <BlogPostIntro />
        <BlogPostIntro />
      </ContentWrapper>
    </Root>
  </Layout>
);

export default connect(undefined, mapDispatchToProps)(Index);
