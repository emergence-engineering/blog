import styled from "styled-components";
import theme from "../../utils/theme";

export const Input = styled.input<{}>`
  border: 1px solid ${theme.color.gray2};
  height: 2.5rem;
  border-radius: 0.125rem;
  color: ${theme.color.gray1};
  font-weight: bold;
  padding-left: 1rem;
  background-color: ${theme.color.gray10};
  box-shadow: 2px 2px 2px 0 ${theme.color.shadow};
  margin: 0.2rem;
`;
