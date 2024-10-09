import { FC } from "react";

import { ProductCard } from "./TwProductCard";
import { ProductNames } from "./referenceData";

export const TwOurProducts: FC = () => {
  return (
    <div className="mb-4 flex h-full w-full flex-col items-center justify-center gap-12 self-center bg-white px-3 py-12 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] lg:gap-16 lg:py-16 xl:max-w-[1140px] 2xl:max-w-[1320px]">
      <div className="flex w-full items-center justify-center whitespace-nowrap text-4.5xl font-bold uppercase lg:justify-start lg:text-7.5xl">
        Our Products
      </div>
      <div className="mb-4 flex w-full flex-col gap-y-4 lg:flex-row lg:gap-x-4">
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          {Object.values(ProductNames).map((product) => (
            <ProductCard key={product} product={product} lp />
          ))}
        </div>
      </div>
    </div>
  );
};
