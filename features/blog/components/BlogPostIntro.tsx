import styled from "styled-components";
import React, { FunctionComponent } from "react";

import { convertTimestampToLocaleDateString } from "../../../utils/time";
import SVGIcon from "../../common/components/SVGIcon";
import Markdown from "../../article/components/Markdown";
import theme from "../../../utils/theme";
import { ArticleIntro } from "../../article/types";
import { UnstyledLink } from "../../../utils/link";

const ReadMoreLink = styled.div`
  text-decoration: none;
  cursor: pointer;
  font-family: ${theme.fontFamily.title};
  font-size: 1.2rem;
  text-align: start;

  :visited {
    color: ${theme.color.gray1};
  }
  :link {
    color: ${theme.color.gray1};
  }
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

export interface BlogPostHeadlineProps {
  title: string;
  author: string;
  timestamp: number;
}

export function BlogPostHeadLine({
  author,
  timestamp,
  title,
}: BlogPostHeadlineProps) {
  const postDate = convertTimestampToLocaleDateString(timestamp);
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <PostMetadataContainer>
        <span>
          By {author} on <SVGIcon src="/material-calendar.svg" />
          {postDate}
        </span>
      </PostMetadataContainer>
    </>
  );
}

export const BlogPostIntro: FunctionComponent<ArticleIntro> = (props) => {
  const { introText, title, postId, author, timestamp } = props;

  return (
    <Root>
      <BlogPostHeadLine title={title} author={author} timestamp={timestamp} />
      <BlogPostIntroText>
        <Markdown source={introText} />
      </BlogPostIntroText>
      <UnstyledLink
        href={`/blog/${postId}`}
        style={{ justifyContent: "flex-start" }}
        passHref
      >
        <ReadMoreLink>Read more...</ReadMoreLink>
      </UnstyledLink>
    </Root>
  );
};
