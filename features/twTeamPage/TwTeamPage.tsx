import React from "react";
import { TwMember } from "./TwMember";

export const TwTeamPage = () => {
  return (
    <div className="flex w-full flex-col bg-white">
      <div className="flex w-full flex-col items-center justify-center gap-4 self-center bg-white px-3 py-12 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] lg:gap-16 lg:py-16 xl:max-w-[1140px] 2xl:max-w-[1320px]">
        <h1 className="px-3 text-center text-4.5xl font-bold lg:text-7.5xl">
          MEET THE <span className="text-red-600">TEAM</span>
        </h1>
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          <TwMember
            src="viktor"
            memberName="Viktor Váczi"
            memberRole="CEO"
            memberWorkArea="Fullstack JS | CI/CD | Electrical engineering"
            memberStack="React Node.js Firebase"
            cvLink="/cv/viktor2"
            linkedInLink="https://www.linkedin.com/in/viktor-v%C3%A1czi-58054ba0"
            githubLink="https://github.com/ViktorVaczi90"
          />
          <TwMember
            src="ksisu"
            memberName="Kristóf Horváth"
            memberRole="Scala team lead"
            memberWorkArea="Scala | DevOps | Fullstack JS"
            memberStack="Scala Kubernetes React Angular"
            cvLink="/cv/ksisu2"
            // linkedInLink="https://www.linkedin.com/in/viktor-v%C3%A1czi-58054ba0"
            githubLink="https://github.com/Ksisu"
          />
          <TwMember
            src="torcsi"
            memberName="Gergő Törcsvári"
            memberRole="Scala team lead"
            memberWorkArea="Scala | DevOps | Fullstack JS"
            memberStack="Scala Kubernetes React"
            cvLink="/cv/torcsi2"
            // linkedInLink="https://www.linkedin.com/in/bal%C3%A1zs-horv%C3%A1th-493b5b105"
            githubLink="https://github.com/tg44"
          />
          <TwMember
            src="matejcsok"
            memberName="István Matejcsok"
            memberRole="developer | l33t h4x0r"
            memberWorkArea="Fullstack JS | UI"
            memberStack="Emacs React.js Node.js Firebase CSS"
            linkedInLink="https://www.linkedin.com/in/matejcsok-istv%C3%A1n-3049ab140"
          />
          <TwMember
            src="aron"
            memberName="Áron Horváth"
            memberRole="visionary & chief designer"
            memberWorkArea="Java | Fullstack JS | UI"
            memberStack="Java React.js Node.js Firebase CSS"
          />
          <TwMember
            src="norbi"
            memberName="Norbert Aschenbrenner"
            memberRole="developer"
            memberStack="React Node.js Stripe.js Firebase CSS"
            memberWorkArea="Fullstack JS"
            linkedInLink="https://www.linkedin.com/in/norbert-aschenbrenner-b5009012a/"
          />
          <TwMember
            src="kata"
            memberName="Katalin Zsófia Csillag"
            memberRole="front-end developer"
            memberStack="React CSS HTML"
            memberWorkArea=""
          />
        </div>
      </div>
    </div>
  );
};
