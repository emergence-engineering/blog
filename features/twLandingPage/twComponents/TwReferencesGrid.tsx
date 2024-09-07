import { FC } from "react";
import Image from "next/image";

import AxdraftLogo from "../../../public/lp/Axdraft.png";
import FilteredLogo from "../../../public/lp/Filtered.png";
import MemriseLogo from "../../../public/lp/Memrise.png";
import SwaralinkLogo from "../../../public/lp/Swaralink.png";
import SkiffLogo from "../../../public/lp/Skiff.png";
import LexLogo from "../../../public/lp/Lex.png";
import { Link } from "./Link";

interface ReferenceCardProps {
  logoSrc: string;
  logoWidth: number;
  tag: string;
  alt: string;
  title: string;
  content: string;
  websiteLink: string;
}

const ReferenceCard: FC<ReferenceCardProps> = ({
  logoSrc,
  logoWidth,
  alt,
  title,
  tag,
  content,
  websiteLink,
}) => {
  return (
    <div className="w-full rounded-lg border border-neutral-700 bg-neutral-800">
      <div className="grid grid-cols-[auto,1fr] items-center gap-4 border-b border-neutral-700">
        <div className="border-r border-neutral-700 px-4 py-2">
          <Image src={logoSrc} alt={alt} width={logoWidth} height={50} />
        </div>
        <div className="title pl-2">
          <h2 className="font-pt-sans-narrow text-3xl font-bold">{title}</h2>
        </div>
      </div>

      <div className="flex flex-col gap-4 border-t border-neutral-700 p-4">
        {/*<div className="max-w-max rounded-full border border-solid border-neutral-700 px-4 py-2 font-pt-sans uppercase">*/}
        {/*  {tag}*/}
        {/*</div>*/}
        <p className="font-montserrat text-base">{content}</p>
        <Link href={websiteLink} label="website" website />
      </div>
    </div>
  );
};

export const TwReferencesGrid: FC = () => {
  return (
    <div className="grid w-full gap-4 bg-black sm:grid-cols-1 md:grid-cols-2">
      <ReferenceCard
        logoSrc={AxdraftLogo.src}
        logoWidth={AxdraftLogo.width}
        tag="industry"
        title="Axdraft"
        content="Developed a specialized legal document editor for law firms, enhancing team collaboration and coworker cooperation."
        alt="Axdraft"
        websiteLink="https://axdraft.com/"
      />
      <ReferenceCard
        logoSrc={FilteredLogo.src}
        logoWidth={FilteredLogo.width}
        tag="industry"
        title="Filtered"
        content="Created a solution for firms to organize their content for easier usage."
        alt="Filtered"
        websiteLink="https://filtered.com/"
      />
      <ReferenceCard
        logoSrc={MemriseLogo.src}
        logoWidth={MemriseLogo.width}
        tag="industry"
        alt="Memrise"
        title="Memrise"
        content="Partnered with Memrise to develop a language-learning AI companion that assists users in learning languages through conversation."
        websiteLink="https://www.memrise.com/"
      />
      <ReferenceCard
        logoSrc={SwaralinkLogo.src}
        logoWidth={SwaralinkLogo.width}
        tag="industry"
        title="SwaraLink"
        content="Designed a testing framework for a new Bluetooth product, ensuring production quality on the factory line."
        alt="SwaraLink"
        websiteLink="https://swaralink.com/"
      />
      <ReferenceCard
        logoSrc={SkiffLogo.src}
        logoWidth={SkiffLogo.width}
        tag="industry"
        title="Skiff"
        content="Contributed to feature development for the company, which was later acquired by Notion."
        alt="Skiff"
        websiteLink="https://www.skiff.com/"
      />
      <ReferenceCard
        logoSrc={LexLogo.src}
        logoWidth={LexLogo.width}
        tag="industry"
        title="Lex"
        content="Currently assisting in the creation of a collaborative text editor for writers and editors."
        alt="Lex"
        websiteLink="https://lex.page/"
      />
    </div>
  );
};
