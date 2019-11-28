import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { bindActionCreators, Dispatch } from "redux";

import { addSampleAction } from "../../setup/actions/sample/actions";
import Layout from "../../modules/common/components/Layout";
import { screenSizes, sizes } from "../../utils/theme";
import { ArticleIntro } from "../../types/article";
import BlogPostIntro from "../../modules/blog/components/BlogPostIntro";

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

const article1: ArticleIntro = {
  title: "Everyday javascript ep. 1: Rest/spread operator pt1.",
  author: "Viktor",
  authorLink: null,
  introText: `
Going trough the internet you'll find a lot of in-depth articles about specific issues,
light tutorials, and everything in between. But the javascript landscape is vast, and
sometimes too much information gets in the way of understanding.

Even after years of professional development I see tricks every now and then
which are straightforward conceptually, but easy to miss, and there's no place
where I could read more about real usage, and not a 30 page long detailed article
about every small detail of a given feature.

The goal of this article series is to show the tricks used in real-world
javascript/typescript, aimed at programmers from an intermediate level to advanced.
But don't be afraid if you're a beginner, I think you can understand everything written here,
but in my experience it's better to experience a problem and then find a solution.
`,
  postId: "everyday-javascript-1-spread-operator",
  timestamp: 1574971200000,
};

const Index: FunctionComponent<{} & ReturnType<
  typeof mapDispatchToProps
>> = () => (
  <Layout>
    <Root>
      <ContentWrapper>
        <BlogPostIntro {...article1} />
      </ContentWrapper>
    </Root>
  </Layout>
);

export default connect(undefined, mapDispatchToProps)(Index);
