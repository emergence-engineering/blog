import { FC, useMemo } from "react";
import { EditorState } from "prosemirror-state";
import { SlashMenuKey } from "../slashMenuPlugin";
import styled from "styled-components";
import { getElements } from "./utils";

export interface SlashMenuProps {
  editorState: EditorState;
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
const SlashMenuDisplay: FC<SlashMenuProps> = ({ editorState }) => {
  const menuState = useMemo(() => {
    if (!editorState) return;
    return SlashMenuKey.getState(editorState);
  }, [editorState]);
  const elements = useMemo(() => {
    if (!menuState) return;
    return getElements(menuState);
  }, [menuState]);
  return (
    <>
      {menuState.open ? (
        <Root id={"slashDisplay"}>
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
