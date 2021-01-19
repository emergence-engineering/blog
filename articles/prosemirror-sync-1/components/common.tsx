import styled from "styled-components";

import theme from "../../../utils/theme";

export const Cell = styled.div`
  border-left: 1px solid ${theme.color.gray8};
  :first-child {
    border: none;
  }
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
export const CenteredCell = styled(Cell)`
  text-align: center;
`;
export const StepRoot = styled.div`
  display: flex;
  border-bottom: 1px solid ${theme.color.gray8};
  :last-child {
    border: none;
  }
`;
