import styled from "styled-components";
import theme, { screenSizes } from "../../utils/theme";

export const Root = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AuthPaper = styled.div`
  width: 30rem;
  height: 40rem;
  padding: 6rem 5rem 6rem 5rem;
  border: 1px solid ${theme.color.gray9};
  box-shadow: 0.5rem 0.5rem 0.25rem ${theme.color.gray8};
  background: ${theme.color.gray10};
  display: flex;
  flex-direction: column;
  align-items: stretch;
  @media screen and (max-width: ${screenSizes.medium}px) {
    height: 100%;
    width: 100%;
  }
`;

export const Error = styled.div`
  font-size: small;
  padding-top: 0.5rem;
  text-align: center;
  height: 2rem;
  color: ${theme.color.error};
  font-weight: bold;
`;

export const SignInOrUpRoot = styled.div`
  text-align: center;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const RedirectLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;
  :hover {
    text-shadow: 2px 2px 8px ${theme.color.gray3};
  }
`;
