import React, { FunctionComponent } from "react";
import styled from "styled-components";

import Layout from "../../features/common/components/Layout";
import {
  BlogPostIntro,
  BlogSEO,
  CommunityBlogItem,
  CommunityBlogs,
} from "../../features/blog/components";
import theme, { screenSizes, sizes } from "../../utils/theme";

import { article1Metadata } from "./everyday-javascript-1-spread-operator";
import { article2Metadata } from "./prosemirror-sync-1";
import { article3Metadata } from "./prosemirror-image-plugin";
import { article4Metadata } from "./prosemirror-link-plugin";

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
  align-items: flex-start;
  flex-direction: column;
`;

const CommunityBlogRoot = styled.div`
  padding: 0.5rem 2rem;
  border-radius: 0.2rem;
  border-style: solid;
  border-color: ${theme.color.gray7};
  border-width: thin;
  margin-top: 4rem;
`;

const CommunityBlogSection: FunctionComponent = () => (
  <CommunityBlogRoot>
    <h1>Follow us on community blog sites as well</h1>
    <CommunityBlogs>
      <CommunityBlogItem
        faIconName="fab fa-medium"
        caption="On Medium.com"
        href="https://medium.com/@emergence_engineering"
      />
      <CommunityBlogItem
        faIconName="fab fa-dev"
        caption="On Dev.to"
        href="https://dev.to/emergence"
      />
    </CommunityBlogs>
  </CommunityBlogRoot>
);

const Blog: FunctionComponent = () => (
  <Layout>
    <BlogSEO />
    <Root>
      <CommunityBlogSection />
      <ContentWrapper>
        <BlogPostIntro {...article4Metadata} />
      </ContentWrapper>
      <ContentWrapper>
        <BlogPostIntro {...article3Metadata} />
      </ContentWrapper>
      <ContentWrapper>
        <BlogPostIntro {...article2Metadata} />
      </ContentWrapper>
      <ContentWrapper>
        <BlogPostIntro {...article1Metadata} />
      </ContentWrapper>
    </Root>
  </Layout>
);

export default Blog;
