import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { bindActionCreators, Dispatch } from "redux";

import { addSampleAction } from "../../setup/actions/sample/actions";
import Layout from "../../modules/common/components/Layout";
import theme, { screenSizes, sizes } from "../../utils/theme";
import BlogPostIntro from "../../modules/blog/components/BlogPostIntro";

import { article1Metadata } from "./everyday-javascript-1-spread-operator";

const Root = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;
`;

const ContentWrapper = styled.div`
  background-color: ${theme.color.gray11};
  flex-grow: 1;
  padding: 2rem ${sizes.sidePadding};
  max-width: ${screenSizes.maxWidth}px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
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
        <BlogPostIntro {...article1Metadata} />
      </ContentWrapper>
    </Root>
  </Layout>
);

export default connect(undefined, mapDispatchToProps)(Index);
