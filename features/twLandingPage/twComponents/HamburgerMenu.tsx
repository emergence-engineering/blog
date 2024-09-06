import { FC, PropsWithChildren, useCallback, useState } from "react";

import { useRouter } from "next/router";
import Link from "next/link";
import MenuIcon from "../../../public/lp/menu.svg";
import CloseIcon from "../../../public/lp/close.svg";

import { scrollToContact } from "../utils/scrollToContact";
import { Button } from "./Button";

const Modal = ({
  fillScreen,
  children,
}: PropsWithChildren<{
  title: string;
  fillScreen?: boolean;
}>) => (
  <div className="fixed left-0 top-0 z-50 flex h-screen w-full items-center justify-center bg-black">
    <div
      className={`${fillScreen ? "min-h-full w-full" : "min-h-[20rem] w-[55%]"}`}
    >
      {children}
    </div>
  </div>
);

export const HamburgerMenu: FC = () => {
  const [isOpened, setIsOpened] = useState(false);
  const router = useRouter();

  const closeMenu = useCallback(() => {
    setIsOpened(false);
  }, []);

  const openMenu = useCallback(() => {
    setIsOpened(true);
  }, []);

  return (
    <div className="flex xl:hidden">
      <div onClick={openMenu} className="cursor-pointer">
        <MenuIcon />
      </div>
      {isOpened ? (
        <Modal title="Menu" fillScreen>
          <div className="flex flex-col bg-black" onClick={closeMenu}>
            <div className="boorder-neutral-700 flex items-center justify-between border-b p-4 text-xl font-bold text-white">
              <h1>Menu</h1>
              <div className="cursor-pointer">
                <CloseIcon />
              </div>
            </div>
            <div className="flex flex-col items-center gap-14 p-8 py-16 text-sm font-bold">
              <Link
                href="/"
                className={`-mb-7 border-b-4 p-1 px-4 text-xs font-bold text-amber-50 hover:border-b-4 hover:border-red-600 lg:text-base ${router.pathname === "/" ? "border-b-4 border-red-600" : "border-transparent"}`}
              >
                HOME
              </Link>
              <Link
                href="/#our-services-section"
                className={`-mb-7 border-b-4 p-1 px-4 text-xs font-bold text-amber-50 hover:border-b-4 hover:border-red-600 lg:text-base ${router.pathname === "/services" ? "border-b-4 border-red-600" : "border-transparent"}`}
              >
                SERVICES
              </Link>
              <Link
                href="/blog"
                className={`-mb-7 border-b-4 p-1 px-4 text-xs font-bold text-amber-50 hover:border-b-4 hover:border-red-600 lg:text-base ${router.pathname === "/blog" ? "border-b-4 border-red-600" : "border-transparent"}`}
              >
                BLOG
              </Link>
              <Link
                href="/team"
                className={`-mb-7 border-b-4 p-1 px-4 text-xs font-bold text-amber-50 hover:border-b-4 hover:border-red-600 lg:text-base ${router.pathname === "/team" ? "border-b-4 border-red-600" : "border-transparent"}`}
              >
                TEAM
              </Link>
              <Link
                href="/references"
                className={`-mb-7 border-b-4 p-1 px-4 text-xs font-bold text-amber-50 hover:border-b-4 hover:border-red-600 lg:text-base ${router.pathname === "/references" ? "border-b-4 border-red-600" : "border-transparent"}`}
              >
                REFERENCES
              </Link>
              <Link
                href="/opensource"
                className={`-mb-7 border-b-4 p-1 px-4 text-xs font-bold text-amber-50 hover:border-b-4 hover:border-red-600 lg:text-base ${router.pathname === "/opensource" ? "border-b-4 border-red-600" : "border-transparent"}`}
              >
                OPEN SOURCE
              </Link>
              <Button label="get a quote" handleClick={scrollToContact} />
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};
