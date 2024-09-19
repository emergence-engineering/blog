import React, { FC, useState } from "react";
import { OpenSourceProject } from "../../utils/openSrcPrData";
import Markdown from "../article/components/Markdown";
import { Link } from "../twLandingPage/twComponents/Link";

const ProjectCard: FC<OpenSourceProject> = ({
  title,
  article,
  icon,
  gitLink,
  description,
  command,
  tags,
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyContent = async () => {
    const commandText = document.getElementById("commandText")?.innerHTML;

    try {
      if (commandText) {
        await navigator.clipboard.writeText(commandText);
        setIsCopied(true);
      }
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  const hasArticle = article !== "";
  const articleLink = hasArticle ? article : gitLink;
  return (
    <div className="hover:shadow-lg">
      <div className="max-w-sm rounded-lg border border-black p-4 text-black md:max-w-3xl">
        <h2 className="my-3 text-[34px] font-bold">{title}</h2>
        <Markdown source={description} formatLinks={true} />
        <div>
          <div className="mb-8 mt-3 flex justify-between rounded-md border border-gray-300 p-3">
            <span
              className={`mr-2 font-montserrat text-sm text-gray-500`}
              id={"commandText"}
            >
              {command}
            </span>
            <div onClick={copyContent} className="cursor-pointer">
              {isCopied ? (
                <img src="/icons/copied.png" alt="" width={20} height={20} />
              ) : (
                <img src="/icons/copy.png" alt="" width={20} height={20} />
              )}
            </div>
          </div>
          <div className="mt-3 grid grid-cols-1 gap-y-4 md:grid-cols-10 md:gap-4">
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
              {hasArticle && <Link href={articleLink} label={"Post"} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
