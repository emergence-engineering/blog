import styled from "styled-components";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";

export const Toolbar = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  padding: 3px 6px;
  border-style: dashed;
  border-color: magenta;
  border-width: 2px;
  border-radius: 30px;
  margin-bottom: 10px;
  background-color: white;
`;

export const LeftToolbar = styled(Toolbar)<{ show: boolean }>`
  flex-direction: column;
  border: 2px dashed magenta;
  padding: 8px;
  display: ${({ show }) => (show ? "flex" : "none")};

  position: fixed;
  top: 180px;
  left: 20px;
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
  top: ${({ id }) => (id === "i" ? "110px" : "35px")};
  left: ${({ id }) => {
    switch (id) {
      case "s":
        return "80px";
      case "f":
        return "170px";
      case "c":
        return "270px";
      case "i":
        return "10px";
      case "fs":
        return "340px";
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
  align-items: baseline;

  min-width: 50px;
  font-size: 14px;

  :hover {
    background: lightpink;
    border-radius: 15px;
  }
`;

export const StyledContentEditable = styled(ContentEditable)`
  height: max-content;
  min-height: 300px;
  width: 100%;
  padding: 8px 8px 24px 8px;
  border-bottom: 5px solid cornflowerblue;
  border-radius: 10px;
  margin-bottom: 10px;

  :focus {
    outline: none;
  }

  //::first-line {
  //  font-size: 24px;
  //  font-weight: bold;
  //}
`;

export const Placeholder = styled.div`
  position: absolute;
  top: 57px;
  left: 12px;
  color: #dddddd;
`;

export const JsonButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
  right: 0;
  position: absolute;
`;
