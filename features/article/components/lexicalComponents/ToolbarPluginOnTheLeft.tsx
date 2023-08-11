import React, { useEffect, useRef, useState } from "react";
import {
  BtnForLeftToolbar,
  Dropdown,
  LeftToolbar,
  ToolbarItem,
} from "../../../../utils/lexical";
import { DoOnToolbar, HROnToolbar } from "./OwnLexicalToolbar";

const OpenToolbarOnTheLeft = ({
  showLeftMenu,
}: {
  showLeftMenu: boolean;
}): JSX.Element => {
  const [isInsertingThingsOpen, setIsInsertingThingsOpen] = useState(false);
  const insertRef = useRef<HTMLDivElement>(null);
  const [leftMenuOpen, setLeftMenuOpen] = useState(false);
  const leftMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      const target = event.target;
      if (
        isInsertingThingsOpen &&
        insertRef.current &&
        !insertRef.current.contains(target as HTMLDivElement)
      ) {
        setIsInsertingThingsOpen(false);
      } else if (
        leftMenuOpen &&
        leftMenuRef.current &&
        !leftMenuRef.current.contains(target as HTMLDivElement)
      ) {
        setLeftMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [isInsertingThingsOpen]);

  return (
    <>
      {!leftMenuOpen && (
        <BtnForLeftToolbar
          showLeftMenu={showLeftMenu}
          onClick={() => {
            setLeftMenuOpen(!leftMenuOpen);
          }}
        >
          {"< "}Open menu
        </BtnForLeftToolbar>
      )}
      {leftMenuOpen && (
        <LeftToolbar show={leftMenuOpen} ref={leftMenuRef}>
          <DoOnToolbar />

          <div
            ref={insertRef}
            onClick={() => setIsInsertingThingsOpen(!isInsertingThingsOpen)}
          >
            <ToolbarItem>Insert things ⬇️</ToolbarItem>
            <Dropdown isOpen={isInsertingThingsOpen} id={"i"}>
              <HROnToolbar />
            </Dropdown>
          </div>
        </LeftToolbar>
      )}
    </>
  );
};

export default OpenToolbarOnTheLeft;
