import styled from "styled-components";
import React, { FunctionComponent, useState } from "react";

import theme, { screenSizes } from "../../utils/theme";

const RepoIcon = styled.i<{ isActive: boolean }>`
  color: ${theme.color.gray1};
  font-size: 5rem;
  color: ${({ isActive }) =>
    isActive ? theme.color.tertiary : theme.color.gray1};
`;
const RepoItemAnchor = styled.a`
  text-align: center;
  text-decoration: none;
  padding: 2rem 4rem;
  @media screen and (max-width: ${screenSizes.small}px) {
    padding: 2rem 0;
  }
  :hover {
    color: ${theme.color.tertiary};
    cursor: pointer;
  }
`;
const RepoCaption = styled.h4<{ isActive: boolean }>`
  color: ${({ isActive }) =>
    isActive ? theme.color.tertiary : theme.color.gray1};
`;
export const RepoItem: FunctionComponent<{
  faIconName: string;
  caption: string;
  href: string;
}> = ({ faIconName, caption, href }) => {
  const [isActive, setIsActive] = useState(false);

  function activate() {
    setIsActive(true);
  }

  function deactivate() {
    setIsActive(false);
  }

  return (
    <RepoItemAnchor
      onMouseEnter={activate}
      onMouseLeave={deactivate}
      href={href}
      target="_blank"
    >
      <RepoIcon className={faIconName} isActive={isActive} />
      <RepoCaption isActive={isActive}>{caption}</RepoCaption>
    </RepoItemAnchor>
  );
};
export const Repos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  justify-content: center;
  @media screen and (max-width: ${screenSizes.small}px) {
    flex-direction: column;
  }
`;
