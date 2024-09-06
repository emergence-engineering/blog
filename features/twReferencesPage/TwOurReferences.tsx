import React, { useState } from "react";

import { TwContact } from "../twLandingPage/twComponents/TwContact";
import { ProductCard } from "../twLandingPage/twComponents/TwProductCard";
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

  return (
    <div className="flex flex-col bg-white">
      <div className="flex w-full max-w-[1440px] flex-col items-center justify-center gap-4 self-center bg-white px-2 py-12 lg:gap-16 lg:px-2 lg:py-16">
        <h1 className="px-3 text-center font-pt-sans-narrow text-4.5xl font-bold lg:text-7.5xl">
          OUR{" "}
          <span className="font-pt-sans-narrow text-red-600">REFERENCES</span>
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
            {(selected === SelectOptions.CLIENT_PROJECTS ||
              selected === SelectOptions.ALL) && (
              <>
                <ProductCard
                  productName="Axdraft"
                  productDescription="Developed a specialized legal document editor for law firms, enhancing team collaboration and coworker cooperation."
                  productImage="axdraft"
                  productLink="https://axdraft.com/"
                />
                <ProductCard
                  productName="Filtered"
                  productDescription="Created a solution for firms to organize their content for easier usage."
                  productImage="filtered"
                  productLink="https://filtered.com/"
                />
                <ProductCard
                  productName="Memrise"
                  productDescription="Partnered with Memrise to develop a language-learning AI companion that assists users in learning languages through conversation."
                  productImage="memrise"
                  productLink="https://memrise.com/"
                />
                <ProductCard
                  productName="Swaralink"
                  productDescription="Designed a testing framework for a new Bluetooth product, ensuring production quality on the factory line."
                  productImage="swaralink"
                  productLink="https://swaralink.com/"
                />
                <ProductCard
                  productName="Skiff"
                  productDescription="Contributed to feature development for the company, which was later acquired by Notion."
                  productImage="skiff"
                  productLink="https://skiff.com/"
                />
                <ProductCard
                  productName="Lex"
                  productDescription="Currently assisting in the creation of a collaborative text editor for writers and editors."
                  productImage="lex"
                  productLink="https://lex.page/"
                />
              </>
            )}

            {(selected === SelectOptions.OUR_PRODUCTS ||
              selected === SelectOptions.ALL) && (
              <>
                <ProductCard
                  productName="Place of Cards"
                  productLabel="Place-card editor website"
                  productDescription="Event planners can create place cards with an integrated editor or use our custom made designs, then get your printed place cards in a few days. Our main goal was to create a well automated system."
                  productImage="placeofcards"
                  productLink="https://placeofcards.com/"
                />
                <ProductCard
                  productName="SuggestCat"
                  productLabel="AI plugin for rich text editors"
                  productDescription="SuggestCat adds AI features to your ProseMirror editor such as grammar correction and text completion."
                  productImage="suggestcat"
                  productLink="https://suggestcat.com/"
                />
                <ProductCard
                  productName="SzamlaBridge"
                  productLabel="Invoicing tool for Stripe"
                  productDescription="SzamlaBridge connects Stripe with invoicing platforms to create legal invoices in Hungary. It features an admin panel where you can manage, view, and test your invoices, streamlining your billing process while ensuring compliance."
                  productImage="szamlabridge"
                  productLink="https://szamlabridge.com/"
                />
                <ProductCard
                  productName="JumpHigher"
                  productLabel="AI fitness app"
                  productDescription="JumpHigher integrates physics and AI to track your jumps and gives you feedback in real time. It’s our new build in public experiment."
                  productImage="jumphigher"
                  productLink="https://jumphigher.io/"
                />
              </>
            )}
          </div>
        </div>
      </div>
      <TwContact />
    </div>
  );
};
