import styled from "styled-components";
import theme from "../../../utils/theme";

export const Cell = styled.div`
  border-left: 1px solid ${theme.color.gray8};
  :first-child {
    border-left: none;
  }
  border-bottom: 1px solid ${theme.color.gray8};
  flex: 1;
`;

export const HeaderCell = styled(Cell)`
  font-family: "Oswald", sans-serif;
  font-weight: 500;
  text-align: center;
`;
export const WatcherHeader = styled.div`
  font-family: "Oswald", sans-serif;
  text-align: center;
  margin: 1rem 0;
  font-size: 1.4rem;
  font-weight: 500;
`;
export const VersionCell = styled(Cell)`
  text-align: center;
`;
