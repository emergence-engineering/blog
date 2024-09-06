import { FC } from "react";

import PlaceofcardsImage from "../../../public/lp/placeofcards-sample.png";
import SzamlabridgeImage from "../../../public/lp/szamlabridge-sample.png";
import SuggestcatImage from "../../../public/lp/suggestcat-sample.png";
import JumpHigherImage from "../../../public/lp/jumphigher.png";
import { ProductCard } from "./TwProductCard";

export const TwOurProducts: FC = () => {
  return (
    <div className="mb-4 flex h-full w-full max-w-[1440px] flex-col items-center justify-center gap-12 self-center bg-white px-2 py-12 lg:gap-16 lg:px-2 lg:py-16">
      <div className="flex w-full items-center justify-center whitespace-nowrap font-pt-sans-narrow text-4.5xl font-bold uppercase lg:justify-start lg:text-7.5xl">
        Our Products
      </div>
      <div className="mb-4 flex w-full flex-col gap-y-4 lg:flex-row lg:gap-x-4">
        <div className="flex flex-col gap-y-6 lg:max-w-half">
          <ProductCard
            productName="Place of Cards"
            productLabel="Place-card editor website"
            productDescription="Event planners can create place cards with an integrated editor or use our custom made designs, then get your printed place cards in a few days. Our main goal was to create a well automated system."
            productImage={PlaceofcardsImage.src}
            productLink="https://placeofcards.com/"
          />
          <ProductCard
            productName="SuggestCat"
            productLabel="AI plugin for rich text editors"
            productDescription="SuggestCat adds AI features to your ProseMirror editor such as grammar correction and text completion."
            productImage={SuggestcatImage.src}
            productLink="https://suggestcat.com/"
          />
        </div>
        <div className="flex w-full flex-col justify-center gap-y-6">
          <ProductCard
            productName="SzamlaBridge"
            productLabel="Invoicing tool for Stripe"
            productDescription="SzamlaBridge connects Stripe with invoicing platforms to create legal invoices in Hungary. It features an admin panel where you can manage, view, and test your invoices, streamlining your billing process while ensuring compliance."
            productImage={SzamlabridgeImage.src}
            productLink="https://szamlabridge.com/"
          />
          <ProductCard
            productName="JumpHigher"
            productLabel="AI fitness app"
            productDescription="JumpHigher integrates physics and AI to track your jumps and gives you feedback in real time. It’s our new build in public experiment."
            productImage={JumpHigherImage.src}
            productLink="https://jumphigher.io/"
          />
        </div>
      </div>
    </div>
  );
};
