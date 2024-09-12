import { FC } from "react";

import { ProductCard } from "./TwProductCard";
import { ProductNames } from "./referenceData";

export const TwOurProducts: FC = () => {
  return (
    <div className="mb-4 flex h-full w-full max-w-[1440px] flex-col items-center justify-center gap-12 self-center bg-white px-2 py-12 lg:gap-16 lg:px-2 lg:py-16">
      <div className="flex w-full items-center justify-center whitespace-nowrap text-4.5xl font-bold uppercase lg:justify-start lg:text-7.5xl">
        Our Products
      </div>
      <div className="mb-4 flex w-full flex-col gap-y-4 lg:flex-row lg:gap-x-4">
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
          <ProductCard product={ProductNames.PLACEOFCARDS} lp />
          <ProductCard product={ProductNames.SUGGESTCAT} lp />
          <ProductCard product={ProductNames.SZAMLABRIDGE} lp />
          <ProductCard product={ProductNames.JUMPHIGHER} lp />
        </div>
      </div>
    </div>
  );
};
