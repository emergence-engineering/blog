import React, { useCallback } from "react";
import { useRouter } from "next/router";
import { ArticleIntro } from "../article/types";
import Markdown from "../article/components/Markdown";
import { Link as CustomLink } from "../twLandingPage/twComponents/Link";
import { convertTimestampToLocaleDateString } from "../../utils/time";

const PostCard: React.FC<ArticleIntro> = ({
  author,
  timestamp,
  title,
  introText,
  url,
  tags,
}) => {
  const router = useRouter();
  const readableDate = convertTimestampToLocaleDateString(timestamp);
  const authorString = author ? author : "E-E";
  const path = url.replace(/^https?:\/\/[^\/]+\/(.+)$/, "$1");

  const redirectToPost = useCallback(() => {
    router.push(path);
  }, [router, path]);

  return (
    <div className="cursor-pointer" onClick={redirectToPost}>
      <div className="transform rounded-lg border border-black p-4 text-[14px] text-black transition duration-200 hover:scale-[1.02] hover:shadow-lg md:text-base">
        <div className="flex items-center space-x-4 text-xs">
          <span className={`font-montserrat font-bold`}>By {authorString}</span>
          <div className="h-4 border-l border-black"></div>
          <span className={`font-montserrat font-bold`}>{readableDate}</span>
        </div>
        <h2 className="my-3 text-[28px] font-bold leading-normal md:text-[34px]">
          {title}
        </h2>

        <Markdown source={introText} formatLinks={true} />
        <div className="mt-8 grid grid-cols-1 items-center gap-y-4 md:grid-cols-10 md:gap-4">
          <div className="flex flex-wrap gap-2 md:col-span-8">
            {tags &&
              tags.map((tag, index) => (
                <span
                  key={index}
                  className={`h-fit rounded-full border border-black px-3 py-1 font-sans text-sm uppercase`}
                >
                  {tag}
                </span>
              ))}
          </div>
          <div className="flex justify-self-end md:col-span-2 md:items-center md:justify-center">
            {path && <CustomLink href={path} label="READ MORE" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
