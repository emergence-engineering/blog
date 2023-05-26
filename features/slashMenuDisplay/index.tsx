import React, { FC, useEffect, useMemo, useRef } from "react";
import { EditorState } from "prosemirror-state";
import { SlashMenuKey } from "../slashMenuPlugin";
import styled from "styled-components";
import { getElements } from "./utils";
import Image from "next/image";
import ArrowLeft from "/features/slashMenuDisplay/icons/arrow-left.svg";
import { EditorView } from "prosemirror-view";
import { dispatchWithMeta } from "../slashMenuPlugin/utils";
import { SlashMetaTypes } from "../slashMenuPlugin/types";

export interface SlashMenuProps {
  editorState: EditorState;
  editorView: EditorView;
}

const Root = styled.div<{
  top: number;
  height: number;
  outOfBound: boolean;
  openUp: boolean;
  left: number;
}>`
  position: absolute;
  height: 100px;
  width: 300px;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  background-color: deeppink;
  z-index: 100;
  overflow: scroll;
`;
const MenuEement = styled.div<{ selected: boolean }>`
  display: flex;
  background-color: ${(props) => (props.selected ? "gray" : "white")};
  border: 2px solid black;
  border-radius: 0.5rem;
`;
const FilterText = styled.div`
  position: relative;
  top: -1rem;
  color: black;
  background-color: white;
  opacity: 100%;
`;
const NoMatchPlaceHolder = styled.div`
  color: black;
`;
const SlashMenuDisplay: FC<SlashMenuProps> = ({ editorState, editorView }) => {
  const menuState = useMemo(() => {
    if (!editorState) return;
    return SlashMenuKey.getState(editorState);
  }, [editorState]);
  const elements = useMemo(() => {
    if (!menuState) return;

    return getElements(menuState);
  }, [menuState]);
  console.log({ elements });
  const menuRef = useRef();
  useEffect(() => {
    if (!menuRef) return;
    function outsideClickHandler(event: MouseEvent) {
      if (
        menuRef.current &&
        // @ts-ignore
        (!event.target || !menuRef.current.contains(event.target))
      ) {
        dispatchWithMeta(editorView, SlashMenuKey, {
          type: SlashMetaTypes.close,
        });
      }
    }
    document.addEventListener("mousedown", outsideClickHandler);
    return () => {
      document.removeEventListener("mousedown", outsideClickHandler);
    };
  }, [menuRef]);

  const menuPosition = useMemo(() => {
    if (!editorView.state) {
      return {
        left: "0px",
        top: "0px",
        outOfBound: false,
        height: undefined,
        openTop: false,
      };
    }
    const { state } = editorView;
    const container = editorView.dom.parentElement || editorView.dom;
    const box = container.getBoundingClientRect();
    const { to } = state.selection;
    if (to === 0) {
      return { left: "0px", top: "0px" };
    }
    const cursorPos = editorView.coordsAtPos(to);
    console.log(cursorPos.top);
    const outOfBound = 500 + 40 + cursorPos.top > window.innerHeight;
    const height = outOfBound
      ? window.innerHeight - cursorPos.top - 40
      : undefined;
    const openTop = outOfBound && height && height < 40;
    const top = openTop
      ? `${cursorPos.top - box.top - 500}px`
      : `${cursorPos.top - box.top + 32}px`;
    const left = cursorPos.left;
    return {
      top,
      outOfBound,
      height,
      openTop,
      left,
    };
  }, [editorView]);
  return (
    <>
      {menuState?.open ? (
        // @ts-ignore
        <Root
          id={"slashDisplay"}
          ref={menuRef}
          height={menuPosition.height}
          outOfBound={menuPosition.outOfBound}
          top={menuPosition.top}
          left={menuPosition.left}
        >
          {menuState.filter ? (
            <FilterText>{menuState.filter}</FilterText>
          ) : null}
          {menuState.subMenuId ? (
            <div>
              <Image src={ArrowLeft} alt={"Arrow Back"} />
            </div>
          ) : null}
          {elements?.map((el, idx) => (
            <MenuEement
              id={el.id}
              key={`${el.id}-${idx}`}
              selected={el.id === menuState.selected}
            >
              {el.label}
            </MenuEement>
          ))}
          {elements?.length === 0 ? (
            <NoMatchPlaceHolder>No Match</NoMatchPlaceHolder>
          ) : null}
        </Root>
      ) : null}
    </>
  );
};

export default SlashMenuDisplay;
