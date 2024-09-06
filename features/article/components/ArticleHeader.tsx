import styled from "styled-components";
import React from "react";
import {
  BlogPostHeadlineProps,
  PostLink,
  PostTitle,
} from "../../blog/components";
import { convertTimestampToLocaleDateString } from "../../../utils/time";

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding-bottom: 1rem;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  min-height: 5rem;
  padding: 0 0 0.5rem 0.5rem;
  margin-bottom: 1.5rem;
`;

export default function ArticleHeader({
  author,
  timestamp,
  title,
  href,
  tags,
}: BlogPostHeadlineProps) {
  const postDate = convertTimestampToLocaleDateString(timestamp);

  return (
    <Root>
      <HeaderWrapper>
        <div className="grid grid-cols-1">
          {href ? (
            <PostTitle
              style={{ textAlign: "left", textDecoration: "none" }}
              href={href}
            >
              {title}
            </PostTitle>
          ) : (
            <PostLink>{title}</PostLink>
          )}
          <div className="mb-6 mt-4 flex flex-wrap gap-4 md:col-span-8">
            {tags &&
              tags.map((tag, index) => (
                <span
                  key={index}
                  className="h-fit rounded-full border border-black px-3 py-1 font-pt-sans text-sm uppercase"
                >
                  {tag}
                </span>
              ))}
          </div>
          <div className="flex items-center space-x-4">
            <span className="font-bold">By {author || "E-E"}</span>
            <div className="h-4 border-l border-black"></div>
            <span className="font-bold">{postDate}</span>
          </div>
        </div>
        <div className="mt-2 w-full border-t border-zinc-300" />
      </HeaderWrapper>
    </Root>
  );
}
