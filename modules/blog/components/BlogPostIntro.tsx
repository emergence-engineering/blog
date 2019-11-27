import styled from "styled-components";
import React, { FunctionComponent } from "react";
import Link from "next/link";

import { convertTimestampToLocaleDateString } from "../../../utils/time";
import AsyncSVGIcon from "../../common/components/AsyncSvgIcon";

const Description = styled.p`
  font-weight: lighter;
  text-align: justify;
  text-justify: distribute;
`;

const ReadMoreLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-weight: 800;
`;

const PostMetadataContainer = styled.div``;

const Root = styled.div``;

interface BlogPostIntro {
  title: string;
  introText: string;
  author: string;
  authorLink: string | null;
  postId: string;
  timestamp: number;
}

const content: BlogPostIntro = {
  title: "Post title",
  author: "Balázs",
  authorLink: null,
  introText: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`,
  postId: "article-1",
  timestamp: 1573478828692,
};

const BlogPostIntro: FunctionComponent<{}> = () => {
  const { introText, title, postId, author, timestamp } = content;

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
      <Description>{introText}</Description>
      <Link href={`/blog/${postId}`}>
        <ReadMoreLink>Read more...</ReadMoreLink>
      </Link>
    </Root>
  );
};

export default BlogPostIntro;
