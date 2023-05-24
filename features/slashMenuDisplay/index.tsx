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

const Root = styled.div`
  position: absolute;
  height: 500px;
  width: 500px;
  top: 300px;
  right: 500px;
  background-color: deeppink;
  z-index: 100;
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
  color: lightgray;
  background-color: white;
  opacity: 100%;
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

  // @ts-ignore
  return (
    <>
      {menuState?.open ? (
        // @ts-ignore
        <Root id={"slashDisplay"} ref={menuRef}>
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
        </Root>
      ) : null}
    </>
  );
};

export default SlashMenuDisplay;
