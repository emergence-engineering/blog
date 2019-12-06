import styled from "styled-components";
import React, { FunctionComponent } from "react";
import Link from "next/link";

import { convertTimestampToLocaleDateString } from "../../../utils/time";
import AsyncSVGIcon from "../../common/components/AsyncSvgIcon";
import Markdown from "../../article/components/Markdown";
import { ArticleIntro } from "../../../types/article";

const ReadMoreLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-weight: 800;
`;

const PostMetadataContainer = styled.div``;

const Root = styled.div``;

const BlogPostIntro: FunctionComponent<ArticleIntro> = props => {
  const { introText, title, postId, author, timestamp } = props;

  const postDate = convertTimestampToLocaleDateString(timestamp);
  return (
    <Root>
      <h1>{title}</h1>
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
