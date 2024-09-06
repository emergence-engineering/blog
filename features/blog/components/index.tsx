import styled from "styled-components";
import theme, { screenSizes, sizes } from "../../../utils/theme";

export * from "./BlogPostIntro";
export * from "./BlogSEO";
export * from "./CommunityBlogSite";

export const BlogPostsContentWrapper = styled.div`
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

export const BlogPostsRoot = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;
`;
