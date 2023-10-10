import React, { FunctionComponent } from "react";
import styled from "styled-components";

import Layout from "../../features/common/components/Layout";
import { BlogPostIntro, BlogSEO } from "../../features/blog/components";
import theme, { screenSizes, sizes } from "../../utils/theme";

import { article1Metadata } from "./everyday-javascript-1-spread-operator";
import { article2Metadata } from "./prosemirror-sync-1";
import { article3Metadata } from "./prosemirror-image-plugin";
import { article4Metadata } from "./prosemirror-link-plugin";
import { article5Metadata } from "./prosemirror-image-plugin-2";
import { article6Metadata } from "./prosemirror-codemirror-block";
import { article7Metadata } from "./discord-gitbot";
import { article8Metadata } from "./hasura-vs-postgraphile";
import { article9Metadata } from "./nextjs-postgraphile";
import { article10Metadata } from "./json-schema-from-mustache";
import { article11Metadata } from "./prosemirror-link-preview";
import { article12Metadata } from "./hocuspocus-with-supabase";
import { article13Metadata } from "./prosemirror-slash-menu";
import { article15Metadata } from "./postgraphile-subscriptions";
import { articlePluginSystemMetadata } from "./prosemirror-plugin-system";
import { articlePNPMMetadata } from "./monorepo-workspace-with-pnpm-and-git-submodules";
import { article17Metadata } from "./lexical-link-preview-plugin";

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

// 23 jan 06 - removed this section
// const CommunityBlogRoot = styled.div`
//   padding: 0.5rem 2rem;
//   border-radius: 0.2rem;
//   border-style: solid;
//   border-color: ${theme.color.gray7};
//   border-width: thin;
//   margin-top: 4rem;
// `;

// 23 jan 06 - removed this section
// const CommunityBlogSection: FunctionComponent = () => (
//   <CommunityBlogRoot>
//     <Title>Follow us on community blog sites as well</Title>
//     <CommunityBlogs>
//       <CommunityBlogItem
//         faIconName="fab fa-medium"
//         caption="On Medium.com"
//         href="https://medium.com/@emergence_engineering"
//       />
//       <CommunityBlogItem
//         faIconName="fab fa-dev"
//         caption="On Dev.to"
//         href="https://dev.to/emergence"
//       />
//     </CommunityBlogs>
//   </CommunityBlogRoot>
// );

const Blog: FunctionComponent = () => (
  <Layout>
    <BlogSEO />
    <Root>
      <ContentWrapper>
        <BlogPostIntro {...article17Metadata} />
      </ContentWrapper>
      <ContentWrapper>
        <BlogPostIntro {...articlePluginSystemMetadata} />
      </ContentWrapper>
      <ContentWrapper>
        <BlogPostIntro {...articlePNPMMetadata} />
      </ContentWrapper>
      <ContentWrapper>
        <BlogPostIntro {...article15Metadata} />
      </ContentWrapper>
      <ContentWrapper>
        <BlogPostIntro {...article13Metadata} />
      </ContentWrapper>
      <ContentWrapper>
        <BlogPostIntro {...article12Metadata} />
      </ContentWrapper>
      <ContentWrapper>
        <BlogPostIntro {...article11Metadata} />
      </ContentWrapper>
      <ContentWrapper>
        <BlogPostIntro {...article10Metadata} />
      </ContentWrapper>
      <ContentWrapper>
        <BlogPostIntro {...article9Metadata} />
      </ContentWrapper>
      <ContentWrapper>
        <BlogPostIntro {...article8Metadata} />
      </ContentWrapper>
      <ContentWrapper>
        <BlogPostIntro {...article7Metadata} />
      </ContentWrapper>
      <ContentWrapper>
        <BlogPostIntro {...article6Metadata} />
      </ContentWrapper>
      <ContentWrapper>
        <BlogPostIntro {...article5Metadata} />
      </ContentWrapper>
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
