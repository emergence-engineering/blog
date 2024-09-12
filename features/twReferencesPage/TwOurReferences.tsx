import React, { useMemo, useState } from "react";

import { TwContact } from "../twLandingPage/twComponents/TwContact";
import { ProductCard } from "../twLandingPage/twComponents/TwProductCard";
import {
  Product,
  referenceData,
} from "../twLandingPage/twComponents/referenceData";
import { SelectorChip } from "./SelectorChip";

enum SelectOptions {
  ALL = "ALL",
  CLIENT_PROJECTS = "CLIENT PROJECTS",
  OUR_PRODUCTS = "OUR PRODUCTS",
}

type SelectType =
  | SelectOptions.ALL
  | SelectOptions.CLIENT_PROJECTS
  | SelectOptions.OUR_PRODUCTS;

export const TwOurReferences = () => {
  const [selected, setSelected] = useState<SelectType>(SelectOptions.ALL);
  const filteredData = useMemo(() => {
    return Object.entries(referenceData)
      .filter(([key, data]) => {
        switch (selected) {
          case SelectOptions.CLIENT_PROJECTS:
            return data.productType === "CLIENT";
          case SelectOptions.OUR_PRODUCTS:
            return data.productType === "INTERNAL";
          case SelectOptions.ALL:
          default:
            return true;
        }
      })
      .map(([key, data]) => ({ key, ...data }));
  }, [selected]);

  return (
    <div className="flex flex-col bg-white">
      <div className="flex w-full max-w-[1440px] flex-col items-center justify-center gap-4 self-center bg-white px-2 py-12 lg:gap-16 lg:px-2 lg:py-16">
        <h1 className="px-3 text-center text-4.5xl font-bold lg:text-7.5xl">
          OUR <span className="text-red-600">REFERENCES</span>
        </h1>
        <div className="flex w-full flex-col gap-4">
          <div className="flex w-full items-start gap-4">
            <SelectorChip
              label="ALL"
              selected={selected === SelectOptions.ALL}
              handleClick={() => setSelected(SelectOptions.ALL)}
            />
            <SelectorChip
              label={SelectOptions.CLIENT_PROJECTS}
              selected={selected === SelectOptions.CLIENT_PROJECTS}
              handleClick={() => setSelected(SelectOptions.CLIENT_PROJECTS)}
            />
            <SelectorChip
              label={SelectOptions.OUR_PRODUCTS}
              selected={selected === SelectOptions.OUR_PRODUCTS}
              handleClick={() => setSelected(SelectOptions.OUR_PRODUCTS)}
            />
          </div>
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
            {filteredData
              ? filteredData.map((data) => (
                  <ProductCard key={data.key} product={data.key as Product} />
                ))
              : null}
          </div>
        </div>
      </div>
      <TwContact />
    </div>
  );
};
