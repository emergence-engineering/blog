import styled from "styled-components";

import theme from "../../utils/theme";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  flex-basis: content;
  min-height: 100vh;
  width: 100%;
  background-color: ${theme.color.background};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: ${theme.color.background};
`;

export const NarrowContent = styled(Content)`
  flex-basis: 90%;
  min-width: 90%;
  flex-grow: 1;
`;

export const FullWidthContent = styled(Content)`
  flex-basis: 100%;
  min-width: 100vw;
  flex-grow: 1;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

interface FlexSpacerProps {
  flex?: number;
}
const selectFlex = ({ flex = 1 }: FlexSpacerProps) => flex;
export const FlexSpacer = styled.div`
  flex: ${selectFlex};
`;
