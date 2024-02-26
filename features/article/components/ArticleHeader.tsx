import styled from "styled-components";
import { BlogPostHeadlineProps, PostTitle } from "../../blog/components";
import { convertTimestampToLocaleDateString } from "../../../utils/time";
import React from "react";
import theme from "../../../utils/theme";
// import { Tag } from "../../landingPage/components/OpenSrcPrCard";

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding-bottom: 1rem;
`;

// const TagWrapper = styled.div`
//   display: flex;
//   gap: 1rem;
//   align-items: center;
// `;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  min-height: 5rem;

  padding: 0 0 0.5rem 0.5rem;
  border-left: 7px solid ${theme.color.tertiary};
`;

const Details = styled.div`
  font-family: ${theme.fontFamily.title};
  font-weight: 300;
  font-size: 1rem;
`;

export default function ArticleHeader({
  author,
  timestamp,
  title,
}: BlogPostHeadlineProps) {
  const postDate = convertTimestampToLocaleDateString(timestamp);

  return (
    <Root>
      {/*<TagWrapper>*/}
      {/*  <Tag>Postgraphile</Tag>*/}
      {/*  <Tag>Postgraphile</Tag>*/}
      {/*</TagWrapper>*/}
      <HeaderWrapper>
        <PostTitle style={{ textAlign: "left", textDecoration: "none" }}>
          {title}
        </PostTitle>
        <Details>
          {author ? `By ${author} on` : ""} {postDate}
        </Details>
      </HeaderWrapper>
    </Root>
  );
}
