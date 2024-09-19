import React from "react";
import Link from "next/link";

import { convertTimestampToLocaleDateString } from "../../../utils/time";
import { ptSans } from "../../../utils/fonts";

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
    <div className="flex w-full flex-col justify-center gap-4 pb-4">
      <div className="mb-6 flex min-h-[5rem] flex-col justify-center gap-2 pb-2 pl-2">
        <div className="grid grid-cols-1">
          {href ? (
            <Link
              className="cursor-pointer text-left text-[3.5rem] font-bold no-underline"
              href={href}
            >
              {title}
            </Link>
          ) : (
            <h1 className="whitespace-pre-line text-left text-[3.5rem] font-bold">
              {title}
            </h1>
          )}
          <div className="mb-6 mt-4 flex flex-wrap gap-4 md:col-span-8">
            {tags &&
              tags.map((tag, index) => (
                <span
                  key={index}
                  className={`${ptSans.className} h-fit rounded-full border border-black px-3 py-1 text-sm uppercase`}
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
