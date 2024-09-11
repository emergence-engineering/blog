import React, { FunctionComponent } from "react";
import { TwContact } from "../twLandingPage/twComponents/TwContact";
import { projectDetails } from "../../utils/openSrcPrData";
import ProjectCard from "./ProjectCard";

const TwOpenSource: FunctionComponent = () => {
  return (
    <div className="flex w-full flex-col items-center bg-white text-black">
      <div className="my-3 flex h-24 w-full items-center justify-center text-4xl font-bold text-black md:mx-10 md:my-6 md:text-7.5xl">
        <span className="text-red-600">OPEN</span>&nbsp;<span>SOURCE</span>
      </div>

      <div className="my-3 flex flex-col gap-6 px-3 pb-20 md:pb-36">
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

      <TwContact />
    </div>
  );
};

export default TwOpenSource;
