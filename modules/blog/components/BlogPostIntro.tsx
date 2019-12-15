import styled from "styled-components";
import React, { FunctionComponent } from "react";
import Link from "next/link";

import { convertTimestampToLocaleDateString } from "../../../utils/time";
import AsyncSVGIcon from "../../common/components/AsyncSvgIcon";
import Markdown from "../../article/components/Markdown";
import { ArticleIntro } from "../../../types/article";
import theme from "../../../utils/theme";

const ReadMoreLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-family: ${theme.fontFamily.title};
  font-size: 1.2rem;
  :hover {
    color: ${theme.color.tertiary};
  }
`;

const PostMetadataContainer = styled.div``;

const PostTitle = styled.div`
  font-family: ${theme.fontFamily.title};
  font-weight: 800;
  font-size: 2rem;
  text-decoration: underline;
  text-decoration-color: ${theme.color.tertiary};
`

const Root = styled.div``;

const BlogPostIntro: FunctionComponent<ArticleIntro> = props => {
  const { introText, title, postId, author, timestamp } = props;

  const postDate = convertTimestampToLocaleDateString(timestamp);
  return (
    <Root>
      <PostTitle>{title}</PostTitle>
      <PostMetadataContainer>
        <span>
          By {author} on <AsyncSVGIcon src="/material-calendar.svg" />
          {postDate}
        </span>
      </PostMetadataContainer>
      <Markdown source={introText} />
      <Link href={`/blog/${postId}`}>
        <ReadMoreLink>Read more...</ReadMoreLink>
      </Link>
    </Root>
  );
};

export default BlogPostIntro;
