import { FC } from "react";
import Link from "next/link";
import Headroom from "react-headroom";
import { useRouter } from "next/router";

import EELogo from "../../../public/lp/ee_logo.svg";
import { scrollToContact } from "../utils/scrollToContact";
import { Button } from "./Button";
import { HamburgerMenu } from "./HamburgerMenu";

export const TwHeader: FC = () => {
  const router = useRouter();
  return (
    <Headroom className="z-30 w-full">
      <div className="flex w-full justify-center border-b-2 border-neutral-700 bg-black">
        <div className="grid w-full max-w-[1440px] grid-flow-col items-center justify-between px-3 py-3 lg:px-2 lg:py-2">
          <Link href="/">
            <div className="flex flex-row items-center gap-1">
              <div className="cursor-pointer">
                <EELogo />
              </div>
              <div className="flex flex-col lg:flex-row lg:gap-1">
                <div className="text-xs font-bold text-amber-50 lg:text-base">
                  EMERGENCE
                </div>
                <div className="text-xs font-light text-amber-50 lg:text-base">
                  ENGINEERING
                </div>
              </div>
            </div>
          </Link>
          <div className="flex flex-row items-center justify-between gap-3 xl:gap-5 2xl:gap-10">
            <div className="hidden xl:mb-2 xl:flex xl:gap-5 2xl:gap-10">
              <Link
                href="/"
                className={`-mb-6 border-b-4 p-1 pb-[15px] text-xs font-bold text-amber-50 hover:border-b-4 hover:border-red-600 lg:text-base ${router.pathname === "/" ? "border-b-4 border-red-600" : "border-transparent"}`}
              >
                HOME
              </Link>
              <Link
                className={`-mb-6 border-b-4 p-1 pb-[15px] text-xs font-bold text-amber-50 hover:border-b-4 hover:border-red-600 lg:text-base ${router.pathname === "/services" ? "border-b-4 border-red-600" : "border-transparent"}`}
                href="/#our-services-section"
              >
                SERVICES
              </Link>
              <Link
                href="/blog"
                className={`-mb-6 border-b-4 p-1 pb-[15px] text-xs font-bold text-amber-50 hover:border-b-4 hover:border-red-600 lg:text-base ${router.pathname === "/blog" ? "border-b-4 border-red-600" : "border-transparent"}`}
              >
                BLOG
              </Link>
              <Link
                href="/team"
                className={`-mb-6 border-b-4 p-1 pb-[15px] text-xs font-bold text-amber-50 hover:border-b-4 hover:border-red-600 lg:text-base ${router.pathname === "/team" ? "border-b-4 border-red-600" : "border-transparent"}`}
              >
                TEAM
              </Link>
              <Link
                href="/references"
                className={`-mb-6 border-b-4 p-1 pb-[15px] text-xs font-bold text-amber-50 hover:border-b-4 hover:border-red-600 lg:text-base ${router.pathname === "/references" ? "border-b-4 border-red-600" : "border-transparent"}`}
              >
                REFERENCES
              </Link>
              <Link
                href="/opensource"
                className={`-mb-6 border-b-4 p-1 pb-[15px] text-xs font-bold text-amber-50 hover:border-b-4 hover:border-red-600 lg:text-base ${router.pathname === "/opensource" ? "border-b-4 border-red-600" : "border-transparent"}`}
              >
                OPEN SOURCE
              </Link>
            </div>
            <Button handleClick={scrollToContact} label="GET A QUOTE" />
            <HamburgerMenu />
          </div>
        </div>
      </div>
    </Headroom>
  );
};
