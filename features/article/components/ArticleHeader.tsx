import React from "react";
import Link from "next/link";

import { convertTimestampToLocaleDateString } from "../../../utils/time";

interface BlogPostHeadlineProps {
  title: string;
  author?: string;
  timestamp: number;
  href?: string;
  tags?: string[];
}

export default function ArticleHeader({
  author,
  timestamp,
  title,
  href,
  tags,
}: BlogPostHeadlineProps) {
  const postDate = convertTimestampToLocaleDateString(timestamp);

  return (
    <div className="flex w-full flex-col justify-center gap-4">
      <div className="mb-6 flex min-h-[5rem] flex-col justify-center gap-2">
        <div className="grid grid-cols-1">
          {href ? (
            <Link
              className="cursor-pointer text-left text-5xl font-bold leading-none no-underline md:text-[3.5rem]"
              href={href}
            >
              {title}
            </Link>
          ) : (
            <h1 className="whitespace-pre-line text-left text-5xl font-bold leading-none md:text-[3.5rem]">
              {title}
            </h1>
          )}
          <div className="mb-6 mt-4 flex flex-wrap gap-2 md:col-span-8 md:gap-4">
            {tags &&
              tags.map((tag, index) => (
                <span
                  key={index}
                  className="h-fit rounded-full border border-black px-3 py-2 font-sans text-xs uppercase"
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
      </div>
    </div>
  );
}
