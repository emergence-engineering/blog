import { FC } from "react";

import AxdraftLogo from "../../../public/lp/axdraft.svg";
import FilteredLogo from "../../../public/lp/filtered.svg";
import MemriseLogo from "../../../public/lp/memrise.svg";
import SwaralinkLogo from "../../../public/lp/swaralink.svg";
import SkiffLogo from "../../../public/lp/skiff.svg";
import LexLogo from "../../../public/lp/lex.svg";

export enum ReferenceNames {
  AXDRAFT = "AXDRAFT",
  FILTERED = "FILTERED",
  MEMRISE = "MEMRISE",
  SWARALINK = "SWARALINK",
  SKIFF = "SKIFF",
  LEX = "LEX",
}

export enum ProductNames {
  PLACEOFCARDS = "PLACEOFCARDS",
  SZAMLABRIDGE = "SZAMLABRIDGE",
  SUGGESTCAT = "SUGGESTCAT",
  JUMPHIGHER = "JUMPHIGHER",
}

export type Product = keyof typeof ProductNames | keyof typeof ReferenceNames;

enum ProductTypes {
  INTERNAL = "INTERNAL",
  CLIENT = "CLIENT",
}

export type ProductType = keyof typeof ProductTypes;

export interface ProductDetails {
  logo: FC | undefined;
  alt: string;
  title: string;
  content: string;
  websiteLink: string;
  tag: string | undefined;
  productType: ProductType;
}

export type ReferenceData = {
  [key in ReferenceNames | ProductNames]: ProductDetails;
};

export const referenceData: ReferenceData = {
  [ReferenceNames.FILTERED]: {
    logo: FilteredLogo,
    alt: "Filtered Logo",
    title: "Filtered",
    content:
      "Created a solution for firms to organize their content for easier usage.",
    websiteLink: "https://filtered.com/",
    productType: ProductTypes.CLIENT,
    tag: undefined,
  },
  [ProductNames.PLACEOFCARDS]: {
    logo: undefined,
    alt: "Place of Cards",
    title: "Place of Cards",
    content:
      "Event planners can create place cards with an integrated editor or use our custom made designs, then get your printed place cards in a few days. Our main goal was to create a well automated system",
    websiteLink: "https://placeofcards.com/",
    tag: "Place-card editor website",
    productType: ProductTypes.INTERNAL,
  },
  [ProductNames.SZAMLABRIDGE]: {
    logo: undefined,
    alt: "Szamlabridge",
    title: "Szamlabridge",
    content:
      "SzamlaBridge connects Stripe with invoicing platforms to create legal invoices in Hungary. It features an admin panel where you can manage, view, and test your invoices, streamlining your billing process while ensuring compliance",
    websiteLink: "https://szamlabridge.com/",
    tag: "Invoicing tool for Stripe",
    productType: ProductTypes.INTERNAL,
  },
  [ReferenceNames.MEMRISE]: {
    logo: MemriseLogo,
    alt: "Memrise Logo",
    title: "Memrise",
    content:
      "Partnered with Memrise to develop a language-learning AI companion that assists users in learning languages through conversation.",
    websiteLink: "https://www.memrise.com/",
    productType: ProductTypes.CLIENT,
    tag: undefined,
  },
  [ReferenceNames.AXDRAFT]: {
    logo: AxdraftLogo,
    alt: "Axdraft Logo",
    title: "Axdraft",
    content:
      "Developed a specialized legal document editor for law firms, enhancing team collaboration and coworker cooperation.",
    websiteLink: "https://axdraft.com/",
    productType: ProductTypes.CLIENT,
    tag: undefined,
  },
  [ReferenceNames.LEX]: {
    logo: LexLogo,
    alt: "Lex Logo",
    title: "Lex",
    content:
      "Currently assisting in the creation of a collaborative text editor for writers and editors.",
    websiteLink: "https://lex.page/",
    productType: ProductTypes.CLIENT,
    tag: undefined,
  },
  [ReferenceNames.SWARALINK]: {
    logo: SwaralinkLogo,
    alt: "SwaraLink Logo",
    title: "SwaraLink",
    content:
      "Designed a testing framework for a new Bluetooth product, ensuring production quality on the factory line.",
    websiteLink: "https://swaralink.com/",
    productType: ProductTypes.CLIENT,
    tag: undefined,
  },
  [ProductNames.JUMPHIGHER]: {
    alt: "JumpHigher",
    title: "JumpHigher",
    content:
      "Created a platform that helps users track their progress in their fitness journey.",
    websiteLink: "https://jumphigher.io/",
    tag: "AI fitness app",
    productType: ProductTypes.INTERNAL,
    logo: undefined,
  },
  [ReferenceNames.SKIFF]: {
    logo: SkiffLogo,
    alt: "Skiff Logo",
    title: "Skiff",
    content:
      "Contributed to feature development for the company, which was later acquired by Notion.",
    websiteLink: "https://www.skiff.com/",
    productType: ProductTypes.CLIENT,
    tag: undefined,
  },
  [ProductNames.SUGGESTCAT]: {
    alt: "SuggestCat",
    title: "SuggestCat",
    content:
      "SuggestCat adds AI features to your ProseMirror editor such as grammar correction and text completion.",
    websiteLink: "https://suggestcat.com/",
    tag: "AI plugin for rich text editors",
    productType: ProductTypes.INTERNAL,
    logo: undefined,
  },
};
