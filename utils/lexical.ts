import styled from "styled-components";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";

export const Toolbar = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  padding: 3px 6px;
  border: 2px dotted darkmagenta;
  border-radius: 30px;
  margin-bottom: 10px;
`;

export const Dropdown = styled.div<{ isOpen: boolean; id: string }>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 3px 6px;
  border: 2px dashed lightcoral;
  border-radius: 10px;
  background-color: lightcyan;
  z-index: 10;
  width: 100px;
  justify-content: center;
  text-align: center;

  position: absolute;
  top: 35px;
  left: ${({ id }) => {
    switch (id) {
      case "s":
        return "190px";
      case "f":
        return "270px";
      case "c":
        return "370px";
      case "i":
        return "460px";
      default:
        return 0;
    }
  }};
`;

export const ToolbarItem = styled.button`
  padding: 3px 6px;
  border: none;
  background: none;
  cursor: pointer;
  color: dimgray;
  min-width: 50px;
  :hover {
    background: lightpink;
    border-radius: 5px;
  }
`;

export const StyledContentEditable = styled(ContentEditable)`
  height: 300px;
  width: 100%;
  padding: 8px;
  border: thick solid darkslateblue;
  border-radius: 20px;

  :focus {
    outline: none;
  }
`;

export const Placeholder = styled.div`
  position: absolute;
  top: 60px;
  left: 16px;
`;

export const Styleddiv = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 150px;
  width: 200px;
  height: 200px;
`;
