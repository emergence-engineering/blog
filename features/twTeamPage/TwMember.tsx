import React, { FunctionComponent } from "react";
import Image from "next/image";

import Link from "next/link";
import ViktorImage from "../../public/bio/viktor.png";
import MatejcsokImage from "../../public/bio/matejcsok.jpg";
import AronImage from "../../public/bio/aron.jpg";
import DavidImage from "../../public/bio/ldavid.jpg";
import CsengeImage from "../../public/bio/csenge.png";
import ZsofiImage from "../../public/bio/zsofi.png";
import KsisuImage from "../../public/bio/ksisu.png";
import TorcsiImage from "../../public/bio/torcsi.jpeg";
import NorbiImage from "../../public/bio/norbi.png";
import PetraImage from "../../public/bio/petra2.png";
import KataImage from "../../public/bio/kata.jpg";
import GithubIcon from "../../public/icons/github-small.svg";
import LinkedInIcon from "../../public/icons/linkedin-small.svg";

enum TwMembers {
  viktor = "viktor",
  matejcsok = "matejcsok",
  aron = "aron",
  ldavid = "ldavid",
  csenge = "csenge",
  zsofi = "zsofi",
  ksisu = "ksisu",
  torcsi = "torcsi",
  norbi = "norbi",
  petra = "petra",
  kata = "kata",
}

const images = {
  [TwMembers.viktor]: ViktorImage,
  [TwMembers.matejcsok]: MatejcsokImage,
  [TwMembers.aron]: AronImage,
  [TwMembers.ldavid]: DavidImage,
  [TwMembers.csenge]: CsengeImage,
  [TwMembers.zsofi]: ZsofiImage,
  [TwMembers.ksisu]: KsisuImage,
  [TwMembers.torcsi]: TorcsiImage,
  [TwMembers.norbi]: NorbiImage,
  [TwMembers.petra]: PetraImage,
  [TwMembers.kata]: KataImage,
};

interface TwMemberProps {
  src: keyof typeof TwMembers;
  memberName: string;
  memberRole: string;
  memberStack: string;
  memberWorkArea: string;
  cvLink?: string;
  linkedInLink?: string;
  githubLink?: string;
}

export const TwMember: FunctionComponent<TwMemberProps> = ({
  src,
  memberName,
  memberRole,
  memberStack,
  memberWorkArea,
  cvLink,
  linkedInLink,
  githubLink,
}) => {
  return (
    <div className="flex w-full flex-col items-center gap-4 rounded border border-solid border-black p-4">
      <div className="relative h-40 w-40">
        <Image
          src={images[src]}
          placeholder="blur"
          width={160}
          height={160}
          sizes="100vw"
          alt="facePic"
          className="rounded-full"
          priority
        />
      </div>
      <div className="flex flex-col items-center gap-3">
        <div className="text-2xl font-bold leading-[28px] text-red-600">
          {memberName}
        </div>
        <div
          className={`font-montserrat text-base font-bold leading-[23px] text-black`}
        >
          {memberRole}
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div className={`text-center font-montserrat text-xs text-black`}>
          {memberStack}
        </div>
        <div className={`text-center font-montserrat text-xs text-black`}>
          {memberWorkArea}
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          {githubLink && (
            <Link target="_blank" href={githubLink}>
              <GithubIcon />
            </Link>
            // <Image
            //   src={GithubIcon}
            //   onClick={() => window.open(githubLink, "_blank")}
            //   alt="github"
            //   style={{
            //     cursor: "pointer",
            //   }}
            // />
          )}
          {linkedInLink && (
            <Link target="_blank" href={linkedInLink}>
              <LinkedInIcon />
            </Link>
            // <Image
            //   src={LinkedInIcon}
            //   onClick={() => window.open(linkedInLink, "_blank")}
            //   alt="linkedin"
            //   style={{
            //     cursor: "pointer",
            //   }}
            // />
          )}
        </div>
        {/*{cvLink && (*/}
        {/*  <Button*/}
        {/*    label="BIO"*/}
        {/*    theme="tertiary"*/}
        {/*    handleClick={() => router.push(cvLink)}*/}
        {/*  />*/}
        {/*)}*/}
      </div>
    </div>
  );
};
