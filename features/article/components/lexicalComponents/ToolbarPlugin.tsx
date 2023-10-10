import React, { useEffect, useRef, useState } from "react";
import { Dropdown, Toolbar, ToolbarItem } from "../../../../utils/lexical";
import {
  BlockquoteOnToolbar,
  CodeBlockOnToolbar,
  ColoringOnToolbar,
  FontSizeOnToolbar,
  FormatThings,
  HeadingOnToolbar,
  ListingOnToolbar,
  MonocodeOnToolbar,
  NormalPOnToolbar,
} from "./OwnLexicalToolbar";

const ToolbarPlugin = (): JSX.Element => {
  const [isStylingPOpen, setIsStylingPOpen] = useState(false);
  const [isFormattingTextOpen, setIsFormattingTextOpen] = useState(false);
  const [isColoringOpen, setIsColoringOpen] = useState(false);
  const [isFontSizeOpen, setIsFontSizeOpen] = useState(false);

  const styleRef = useRef<HTMLDivElement>(null);
  const formatRef = useRef<HTMLDivElement>(null);
  const colorRef = useRef<HTMLDivElement>(null);
  const fontSizeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      const target = event.target;

      if (
        isStylingPOpen &&
        !styleRef.current?.contains(target as HTMLDivElement)
      ) {
        setIsStylingPOpen(false);
      } else if (
        isFormattingTextOpen &&
        !formatRef.current?.contains(target as HTMLDivElement)
      ) {
        setIsFormattingTextOpen(false);
      } else if (
        isColoringOpen &&
        !colorRef.current?.contains(target as HTMLDivElement)
      ) {
        setIsColoringOpen(false);
      } else if (
        isFontSizeOpen &&
        !fontSizeRef.current?.contains(target as HTMLDivElement)
      ) {
        setIsFontSizeOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [isStylingPOpen, isColoringOpen, isFormattingTextOpen, isFontSizeOpen]);

  return (
    <Toolbar>
      <NormalPOnToolbar />

      <div ref={styleRef} onClick={() => setIsStylingPOpen(!isStylingPOpen)}>
        <ToolbarItem title={"Change the paragraphs"}>Style P ⭣</ToolbarItem>
        <Dropdown isOpen={isStylingPOpen} id={"s"}>
          <HeadingOnToolbar />
          <ListingOnToolbar />
          <BlockquoteOnToolbar />
          <CodeBlockOnToolbar />
        </Dropdown>
      </div>

      <div
        ref={formatRef}
        onClick={() => setIsFormattingTextOpen(!isFormattingTextOpen)}
      >
        <ToolbarItem title={"Change the format"}>Format text ⭣</ToolbarItem>
        <Dropdown isOpen={isFormattingTextOpen} id={"f"}>
          <FormatThings />
          <MonocodeOnToolbar />
        </Dropdown>
      </div>

      <div ref={colorRef} onClick={() => setIsColoringOpen(!isColoringOpen)}>
        <ToolbarItem title={"Change text or background color"}>
          Coloring ⭣
        </ToolbarItem>
        <Dropdown isOpen={isColoringOpen} id={"c"}>
          <ColoringOnToolbar />
        </Dropdown>
      </div>

      <div ref={fontSizeRef} onClick={() => setIsFontSizeOpen(!isFontSizeOpen)}>
        <ToolbarItem title={"Change font size"}>Font Size ⭣</ToolbarItem>
        <Dropdown isOpen={isFontSizeOpen} id={"fs"}>
          <FontSizeOnToolbar />
        </Dropdown>
      </div>
    </Toolbar>
  );
};

export default ToolbarPlugin;
