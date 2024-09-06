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

enum TwReferences {
  placeofcards = "placeofcards",
  szamlabridge = "szamlabridge",
  suggestcat = "suggestcat",
  jumphigher = "jumphigher",
  axdraft = "axdraft",
  lex = "lex",
  skiff = "skiff",
  memrise = "memrise",
  filtered = "filtered",
  swaralink = "swaralink",
}

const images = {
  [TwReferences.placeofcards]: PlaceofcardsImage,
  [TwReferences.szamlabridge]: SzamlabridgeImage,
  [TwReferences.suggestcat]: SuggestcatImage,
  [TwReferences.jumphigher]: JumpHigherImage,
  [TwReferences.axdraft]: AxdraftImage,
  [TwReferences.lex]: LexImage,
  [TwReferences.skiff]: SkiffImage,
  [TwReferences.memrise]: MemriseImage,
  [TwReferences.filtered]: FilteredImage,
  [TwReferences.swaralink]: SwaralinkImage,
};

interface ProductCardProps {
  productName: string;
  productLabel?: string;
  productDescription: string;
  productImage: keyof typeof TwReferences;
  productLink?: string;
  lp?: boolean;
}

export const ProductCard: FC<ProductCardProps> = ({
  productName,
  productLabel,
  productImage,
  productDescription,
  productLink,
  lp,
}) => {
  return (
    <div className="flex flex-col items-center rounded border border-solid border-black shadow-productCard">
      <div className="flex w-full items-center justify-between bg-black p-4">
        <div className="font-pt-sans-narrow text-xl font-bold text-white lg:text-3.5xl">
          {productName}
        </div>
        {productLabel && (
          <div className="flex max-w-half items-center justify-center rounded-3xl bg-product-card-yellow px-3 py-2 font-montserrat text-xs leading-normal lg:text-sm">
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
              src={images[productImage]}
              alt={productName}
              width={productName === "Swaralink" ? 340 : 450}
              height={450}
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority={!lp}
              placeholder="blur"
            />
          </div>
        </div>
        {productLink && (
          <a
            href={productLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto self-end"
          >
            <Button
              label="WEBSITE"
              handleClick={() => {}}
              theme="tertiary"
              className="self-end"
            />
          </a>
        )}
      </div>
    </div>
  );
};
