import React, { useEffect, useRef, useState } from "react";
import { Dropdown, Toolbar, ToolbarItem } from "../../../../utils/lexical";
import {
  BannerOnToolbar,
  BlockquoteOnToolbar,
  ColoringOnToolbar,
  FontSizeOnToolbar,
  FormatThings,
  HeadingOnToolbar,
  LinkOnToolbar,
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
  }, [isStylingPOpen, isColoringOpen, isFormattingTextOpen]);

  // TODO: its not working

  // const handleClick = useCallback(
  //   ({
  //     event,
  //     ref,
  //   }: {
  //     event: React.MouseEvent<HTMLDivElement>;
  //     ref: React.Ref<HTMLDivElement>;
  //   }) => {
  //     const target = event?.target;
  //     console.log("00" + isStylingPOpen);
  //
  //     isStylingPOpen && !styleRef.current?.contains(target as HTMLDivElement)
  //       ? setIsStylingPOpen(false)
  //       : console.log("b");
  //
  //     isFormattingTextOpen &&
  //     !formatRef.current?.contains(target as HTMLDivElement)
  //       ? setIsFormattingTextOpen(false)
  //       : setIsFormattingTextOpen(true);
  //
  //     isColoringOpen && !colorRef.current?.contains(target as HTMLDivElement)
  //       ? setIsColoringOpen(false)
  //       : setIsColoringOpen(true);
  //
  //     isFontSizeOpen && !fontSizeRef.current?.contains(target as HTMLDivElement)
  //       ? setIsFontSizeOpen(false)
  //       : setIsFontSizeOpen(true);

  // if (
  //   isStylingPOpen ||
  //   isFormattingTextOpen ||
  //   isColoringOpen ||
  //   isFontSizeOpen
  // ) {
  //   ref === styleRef &&
  //   !styleRef.current?.contains(event.target as HTMLDivElement)
  //     ? console.log("Im in")
  //     : setIsStylingPOpen(false);
  //   ref === formatRef &&
  //   formatRef.current?.contains(event.target as HTMLDivElement)
  //     ? setIsFormattingTextOpen(true)
  //     : setIsFormattingTextOpen(false);
  //   ref === colorRef &&
  //   colorRef.current?.contains(event.target as HTMLDivElement)
  //     ? setIsColoringOpen(true)
  //     : setIsColoringOpen(false);
  //   ref === fontSizeRef &&
  //   fontSizeRef.current?.contains(event.target as HTMLDivElement)
  //     ? setIsFontSizeOpen(true)
  //     : setIsFontSizeOpen(false);
  // }
  //   },
  //   [],
  // );

  return (
    <Toolbar>
      <NormalPOnToolbar />

      <div ref={styleRef} onClick={() => setIsStylingPOpen(!isStylingPOpen)}>
        <ToolbarItem>Style P ⬇️</ToolbarItem>
        <Dropdown isOpen={isStylingPOpen} id={"s"}>
          <HeadingOnToolbar />
          <ListingOnToolbar />
          <BannerOnToolbar />
          <BlockquoteOnToolbar />
        </Dropdown>
      </div>

      <div
        ref={formatRef}
        onClick={() => setIsFormattingTextOpen(!isFormattingTextOpen)}
      >
        <ToolbarItem>Format text ⬇️</ToolbarItem>
        <Dropdown isOpen={isFormattingTextOpen} id={"f"}>
          <FormatThings />
          <MonocodeOnToolbar />
        </Dropdown>
      </div>

      <div ref={colorRef} onClick={() => setIsColoringOpen(!isColoringOpen)}>
        <ToolbarItem>Coloring ⬇️</ToolbarItem>
        <Dropdown isOpen={isColoringOpen} id={"c"}>
          <ColoringOnToolbar />
        </Dropdown>
      </div>

      <div ref={fontSizeRef} onClick={() => setIsFontSizeOpen(!isFontSizeOpen)}>
        <ToolbarItem>Font Size ⬇️</ToolbarItem>
        <Dropdown isOpen={isFontSizeOpen} id={"fs"}>
          <FontSizeOnToolbar />
        </Dropdown>
      </div>

      <LinkOnToolbar />
    </Toolbar>
  );
};

export default ToolbarPlugin;
