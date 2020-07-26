import styled from "styled-components";

export const Cell = styled.div`
  border-left: 2px solid black;
  :first-child {
    border-left: none;
  }
  border-bottom: 1px solid lightgray;
  flex: 1;
`;
