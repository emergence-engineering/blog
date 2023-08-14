import styled from "styled-components";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { TreeView } from "@lexical/react/LexicalTreeView";

export const StyledContentEditable = styled(ContentEditable)`
  height: max-content;
  min-height: 300px;
  width: 100%;
  padding: 8px 8px 24px 24px;
  border: 1px solid #c7c7c7;

  border-radius: 0 0 10px 10px;
  margin-bottom: 10px;
  position: relative;

  :focus {
    outline: none;
  }
`;

export const Placeholder = styled.div`
  position: absolute;
  top: 56px;
  left: 28px;
  color: #bbbbbb;
`;

export const StyledTreeView = styled(TreeView)`
  line-height: 1.1;
  background: #f1f1f1;
  color: #000000;
  margin: 0;
  padding: 10px;
  font-size: 12px;
  overflow: auto;
  max-height: 400px;
  border-radius: 10px;
`;

export const Toolbar = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  padding: 3px 6px;
  border: 1px solid #c7c7c7;

  border-radius: 10px 10px 0 0;
  margin-bottom: 10px;
`;

export const ToolbarItem = styled.button`
  padding: 3px 6px;
  border: none;
  background: none;
  cursor: pointer;
  color: black;
  align-items: baseline;

  min-width: 50px;
  font-size: 14px;

  :hover {
    background: #d1e3ff;
    border-radius: 5px;
  }
`;

export const BtnForLeftToolbar = styled(ToolbarItem)<{ showLeftMenu: boolean }>`
  display: ${({ showLeftMenu }) => (showLeftMenu ? "flex" : "none")};
  position: absolute;
  top: 55px;
  left: -110px;
`;

export const LeftToolbar = styled(Toolbar)<{ show: boolean }>`
  flex-direction: column;
  border: 1px solid #c7c7c7;
  border-radius: 10px 0 0 10px;
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
  border-radius: 10px;
  border: 2px solid #c7c7c7;
  background-color: #f8f8f8;

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
        return "160px";
      case "c":
        return "270px";
      case "i":
        return "10px";
      case "fs":
        return "360px";
      case "cb":
        return "455px";
      default:
        return 0;
    }
  }};
`;

export const JsonButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
  right: 5px;
  position: absolute;
  z-index: 1000;
`;
