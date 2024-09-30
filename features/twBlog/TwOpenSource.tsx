import React, { FunctionComponent } from "react";
import { projectDetails } from "../../utils/openSrcPrData";
import ProjectCard from "./ProjectCard";

const TwOpenSource: FunctionComponent = () => {
  return (
    <div className="flex w-full flex-col items-center bg-white py-12 text-black sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] lg:py-16 xl:max-w-[1140px] 2xl:max-w-[1320px]">
      <h1 className="px-3 text-center text-4.5xl font-bold lg:text-7.5xl">
        <span className="text-red-600">OPEN</span>&nbsp;<span>SOURCE</span>
      </h1>

      <div className="my-3 flex flex-col gap-6 pb-20 md:pb-36">
        {projectDetails.map((i, idx) => {
          return (
            <ProjectCard
              title={i.title}
              article={i.article}
              icon={i.icon}
              gitLink={i.gitLink}
              description={i.description}
              command={i.command}
              tags={i.tags}
              key={`${i}_${idx}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TwOpenSource;
