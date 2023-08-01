import React, { useEffect, useRef, useState } from "react";
import { Dropdown, LeftToolbar, ToolbarItem } from "../../../../utils/lexical";
import { DoOnToolbar, HROnToolbar } from "./OwnLexicalToolbar";

const ToolbarPluginOnTheLeft = ({ show }: { show: boolean }): JSX.Element => {
  const [isInsertingThingsOpen, setIsInsertingThingsOpen] = useState(false);
  const insertRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      const target = event.target;
      if (
        isInsertingThingsOpen &&
        insertRef.current &&
        !insertRef.current.contains(target as HTMLDivElement)
      ) {
        setIsInsertingThingsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [isInsertingThingsOpen]);

  return (
    <LeftToolbar show={show}>
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
  );
};

export default ToolbarPluginOnTheLeft;
