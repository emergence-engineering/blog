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
`;

const BlogPostIntroText = styled.div`
  p {
    font-family: ${theme.fontFamily.general};
    font-weight: 300;
    font-size: 1.15rem;
  }
`;

const Root = styled.div``;

export const BlogPostIntro: FunctionComponent<ArticleIntro> = props => {
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
      <BlogPostIntroText>
        <Markdown source={introText} />
      </BlogPostIntroText>
      <Link href={`/blog/${postId}`}>
        <ReadMoreLink>Read more...</ReadMoreLink>
      </Link>
    </Root>
  );
};

