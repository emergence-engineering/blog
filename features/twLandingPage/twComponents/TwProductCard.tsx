import { FC } from "react";
import Image from "next/image";

import PlaceofcardsImage from "../../../public/lp/placeofcards-sample.png";
import SzamlabridgeImage from "../../../public/lp/szamlabridge-sample.png";
import SuggestcatImage from "../../../public/lp/suggestcat-sample.png";
import JumpHigherImage from "../../../public/lp/jumphigher.png";
import AxdraftImage from "../../../public/lp/axdraft_reference.png";
import LexImage from "../../../public/lp/lex_reference.png";
import SkiffImage from "../../../public/lp/skiff_reference.png";
import MemriseImage from "../../../public/lp/memrise_reference.png";
import FilteredImage from "../../../public/lp/filtered_reference.png";
import SwaralinkImage from "../../../public/lp/swaralink_reference.png";

import { Button } from "./Button";
import {
  referenceData,
  ProductNames,
  ReferenceNames,
  Product,
} from "./referenceData";

const images = {
  [ProductNames.PLACEOFCARDS]: PlaceofcardsImage,
  [ProductNames.SZAMLABRIDGE]: SzamlabridgeImage,
  [ProductNames.SUGGESTCAT]: SuggestcatImage,
  [ProductNames.JUMPHIGHER]: JumpHigherImage,
  [ReferenceNames.AXDRAFT]: AxdraftImage,
  [ReferenceNames.LEX]: LexImage,
  [ReferenceNames.SKIFF]: SkiffImage,
  [ReferenceNames.MEMRISE]: MemriseImage,
  [ReferenceNames.FILTERED]: FilteredImage,
  [ReferenceNames.SWARALINK]: SwaralinkImage,
};

interface ProductCardProps {
  product: Product;
  lp?: boolean;
}

export const ProductCard: FC<ProductCardProps> = ({ product, lp }) => {
  const {
    title: productName,
    content: productDescription,
    websiteLink: productLink,
    tag: productLabel,
  } = referenceData[product as keyof typeof referenceData];

  return (
    <div className="flex flex-col items-center rounded border border-solid border-black shadow-productCard">
      <a
        href={productLink || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-full w-full flex-col"
      >
        <div className="flex min-h-[68px] w-full items-center justify-between bg-black p-4">
          <div className="text-xl font-bold text-white lg:text-3.5xl">
            {productName}
          </div>
          {productLabel && (
            <div className="flex max-w-half items-center justify-center rounded-3xl bg-product-card-yellow px-3 py-2 font-montserrat text-xs leading-normal lg:text-sm">
              {" "}
              {productLabel}
            </div>
          )}
        </div>
        <div className={`flex w-full flex-grow flex-col justify-between p-4`}>
          <div className="flex flex-col gap-4">
            <div className="font-montserrat text-sm lg:text-base">
              {productDescription}
            </div>
            <div className="relative mb-4 flex w-full justify-center">
              <Image
                src={images[product as keyof typeof images]}
                alt={productName}
                width={product === ReferenceNames.SWARALINK ? 340 : 450}
                height={450}
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority={!lp}
                placeholder="blur"
              />
            </div>
          </div>
          {productLink && (
            <div className="mt-auto self-end">
              <Button
                label="WEBSITE"
                handleClick={() => {}}
                theme="tertiary"
                className="self-end"
              />
            </div>
          )}
        </div>
      </a>
    </div>
  );
};
