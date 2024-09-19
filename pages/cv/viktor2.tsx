import React, { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";

import { TwLayout } from "../../features/twLandingPage/twComponents/TwLayout";
import ViktorImage from "../../public/bio/viktor.png";
import { TwContact } from "../../features/twLandingPage/twComponents/TwContact";
import GithubIcon from "../../public/icons/github-small.svg";
import LinkedInIcon from "../../public/icons/linkedin-small.svg";

const ViktorCV: FunctionComponent = () => {
  return (
    <TwLayout>
      <div className="flex w-full flex-col items-center justify-center gap-4 bg-white px-3 py-12 lg:gap-16 lg:px-36 lg:py-16">
        <div className="flex w-full flex-col items-center gap-8 md:flex-row md:items-start">
          <div className="relative h-64 w-64 min-w-64">
            <Image
              src={ViktorImage}
              placeholder="blur"
              sizes="100vw"
              alt="Viktor"
              priority
              fill
            />
          </div>
          <div className="flex w-full flex-col rounded border border-solid border-black">
            <div className="flex w-full border-b border-solid border-black">
              <div className="flex w-full items-center border-r border-solid border-black p-4 text-[34px] font-bold uppercase leading-[38px] text-red-600">
                Viktor Váczi
              </div>
              <div className="flex w-full items-center p-4 text-2xl font-bold uppercase text-black">
                ceo
              </div>
            </div>
            <div className="flex w-full gap-3 border-b border-solid border-black px-4 py-6">
              <Link href="https://github.com/ViktorVaczi90" target="_blank">
                <GithubIcon />
              </Link>
              <Link
                href="https://www.linkedin.com/in/viktor-v%C3%A1czi-58054ba0"
                target="_blank"
              >
                <LinkedInIcon />
              </Link>
              {/*<Image*/}
              {/*  src={GithubIcon}*/}
              {/*  onClick={() =>*/}
              {/*    window.open("https://github.com/ViktorVaczi90", "_blank")*/}
              {/*  }*/}
              {/*  alt="github"*/}
              {/*  style={{*/}
              {/*    cursor: "pointer",*/}
              {/*  }}*/}
              {/*/>*/}
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
              <div className="text-[34px] font-bold text-black">
                I have a bachelors degree
              </div>
              <div className="font-montserrat">
                I have a bachelors degree in Electrical Engineering from BUTE
                with an embedded devices specialization. Born with a love in my
                heart for sciences I picked up programming at 8 and did a lot of
                advanced physics courses during my time at the university, and
                have solid mathematics foundations. Worked with a lot of
                different sides of tech, from GPU programming to FPGAs, ARM
                microcontrollers, and the web. I always look at things from the
                business side too, it&apos;s not enough for me for something to
                be interesting, the end-goal should also make sense. My goal
                when working for any business is to help that business achieve
                its goals, and not just writing code, but providing valuable
                feedback. I&apos;m a pro foosball player, and a hobby musician.
              </div>
            </div>
          </div>
        </div>
      </div>
      <TwContact />
    </TwLayout>
  );
};

export default ViktorCV;
