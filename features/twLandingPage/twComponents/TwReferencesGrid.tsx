import { FC } from "react";

import { Link } from "./Link";
import { referenceData, ReferenceNames } from "./referenceData";

const ReferenceCard: FC<{ product: ReferenceNames }> = ({ product }) => {
  const {
    logo: ProductLogo,
    title,
    content,
    websiteLink,
  } = referenceData[product as keyof typeof referenceData];

  return (
    <div className="w-full rounded-lg border border-neutral-700 bg-neutral-800">
      <div className="grid grid-cols-[auto,1fr] items-center gap-4 border-b border-neutral-700">
        <div className="border-r border-neutral-700 px-4 py-2">
          {ProductLogo && <ProductLogo />}
        </div>
        <div className="title pl-2">
          <h2 className="text-3xl font-bold">{title}</h2>
        </div>
      </div>

      <div className="flex flex-col gap-4 border-t border-neutral-700 p-4">
        {/*<div className="max-w-max rounded-full border border-solid border-neutral-700 px-4 py-2 font-pt-sans uppercase">*/}
        {/*  {tag}*/}
        {/*</div>*/}
        <p className={`font-montserrat text-base`}>{content}</p>
        <Link href={websiteLink} label="website" website />
      </div>
    </div>
  );
};

export const TwReferencesGrid: FC = () => {
  return (
    <div className="grid w-full gap-4 bg-black sm:grid-cols-1 md:grid-cols-2">
      <ReferenceCard product={ReferenceNames.AXDRAFT} />
      <ReferenceCard product={ReferenceNames.FILTERED} />
      <ReferenceCard product={ReferenceNames.MEMRISE} />
      <ReferenceCard product={ReferenceNames.SWARALINK} />
      <ReferenceCard product={ReferenceNames.SKIFF} />
      <ReferenceCard product={ReferenceNames.LEX} />
    </div>
  );
};
