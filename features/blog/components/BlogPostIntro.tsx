import styled from "styled-components";
import React, { FunctionComponent } from "react";

import Link from "next/link";
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

export const PostLink = styled.h1`
  font-family: ${theme.fontFamily.title};
  font-weight: 800;
  font-size: 3.5rem;
  text-decoration-color: ${theme.color.tertiary};
  color: ${theme.color.gray1};
  cursor: pointer;
`;

export const PostTitle = styled(Link)`
  font-family: ${theme.fontFamily.title};
  font-weight: 800;
  font-size: 3.5rem;
  text-decoration-color: ${theme.color.tertiary};
  color: ${theme.color.gray1};
  cursor: pointer;
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
  author?: string;
  timestamp: number;
  href?: string;
  tags?: string[];
}

export function BlogPostHeadLine({
  author,
  timestamp,
  title,
  href,
}: BlogPostHeadlineProps) {
  const postDate = convertTimestampToLocaleDateString(timestamp);
  return (
    <>
      {href ? (
        <PostTitle href={href}>{title}</PostTitle>
      ) : (
        <PostLink>{title}</PostLink>
      )}
      <PostMetadataContainer>
        <span>
          {author ? `By ${author} on` : ""}
          <SVGIcon src="/material-calendar.svg" />
          {postDate}
        </span>
      </PostMetadataContainer>
    </>
  );
}

export const BlogPostIntro: FunctionComponent<
  ArticleIntro & { short?: boolean }
> = ({ introText, title, postId, author, timestamp, short, tags }) => {
  return (
    <Root>
      <BlogPostHeadLine
        title={title}
        author={author}
        timestamp={timestamp}
        href={`/blog/${postId}`}
        tags={tags}
      />
      {!short && (
        <BlogPostIntroText>
          <Markdown source={introText} />
        </BlogPostIntroText>
      )}
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
