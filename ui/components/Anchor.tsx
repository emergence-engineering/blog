import React, { FunctionComponent, PropsWithChildren } from "react";
import styled from "styled-components";
import { UnstyledLink } from "../../utils/link";

export const StyledAnchor = styled.div`
  text-decoration: inherit;
  color: inherit;
  cursor: pointer;
  user-select: none;
  display: flex;
  height: inherit;
`;

interface AnchorProps extends PropsWithChildren {
  href: string;
  handleClick?: () => void;
}

const Anchor: FunctionComponent<AnchorProps> = ({
  href,
  children,
  handleClick,
}) => (
  <UnstyledLink href={href} passHref>
    {handleClick ? (
      <StyledAnchor onClick={handleClick}>{children}</StyledAnchor>
    ) : (
      <StyledAnchor>{children}</StyledAnchor>
    )}
  </UnstyledLink>
);

export default Anchor;
