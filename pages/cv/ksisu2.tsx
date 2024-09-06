import React, { FunctionComponent } from "react";
import Image from "next/image";

import { TwLayout } from "../../features/twLandingPage/twComponents/TwLayout";
import KsisuImage from "../../public/bio/ksisu.png";
import GithubIcon from "../../public/icons/github-small.svg";
import { TwContact } from "../../features/twLandingPage/twComponents/TwContact";

const KsisuCV: FunctionComponent = () => {
  return (
    <TwLayout>
      <div className="flex w-full flex-col items-center justify-center gap-4 bg-white px-3 py-12 lg:gap-16 lg:px-36 lg:py-16">
        <div className="flex w-full flex-col items-center gap-8 md:flex-row md:items-start">
          <div className="relative h-64 w-64 min-w-64">
            <Image
              src={KsisuImage}
              placeholder="blur"
              sizes="100vw"
              alt="Viktor"
              priority
              fill
            />
          </div>
          <div className="flex w-full flex-col rounded border border-solid border-black">
            <div className="flex w-full border-b border-solid border-black">
              <div className="flex w-full items-center border-r border-solid border-black p-4 font-pt-sans-narrow text-[34px] font-bold uppercase leading-[38px] text-red-600">
                Kristóf Horváth
              </div>
              <div className="flex w-full items-center p-4 font-pt-sans-narrow text-2xl font-bold uppercase text-black">
                scala team lead
              </div>
            </div>
            <div className="flex w-full gap-3 border-b border-solid border-black px-4 py-6">
              <Image
                src={GithubIcon}
                onClick={() =>
                  window.open("https://github.com/Ksisu", "_blank")
                }
                alt="github"
                style={{
                  cursor: "pointer",
                }}
              />
              {/*<Image*/}
              {/*  src={LinkedInIcon}*/}
              {/*  onClick={() =>*/}
              {/*    window.open(*/}
              {/*      "https://www.linkedin.com/in/viktor-v%C3%A1czi-58054ba0",*/}
              {/*      "_blank",*/}
              {/*    )*/}
              {/*  }*/}
              {/*  alt="linkedin"*/}
              {/*  style={{*/}
              {/*    cursor: "pointer",*/}
              {/*  }}*/}
              {/*/>*/}
            </div>
            <div className="flex flex-col gap-[10px] p-4">
              <div className="font-pt-sans-narrow text-[34px] font-bold text-black">
                I have a BSc degree
              </div>
              <div className="font-montserrat">
                I have a BSc degree in Informatics from BUTE with software
                architecture specialization. Interested in Scala, hard DevOps
                problems, teaching & a maybe little bit of embedded. Father of
                young kid, enjoying gardening in my free time.
              </div>
            </div>
          </div>
        </div>
      </div>
      <TwContact />
    </TwLayout>
  );
};

export default KsisuCV;
