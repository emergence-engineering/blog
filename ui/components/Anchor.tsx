import React, {FunctionComponent, PropsWithChildren} from "react";
import Link from "next/link";
import styled from "styled-components";

export const StyledAnchor = styled.a`
  text-decoration: inherit;
  color: inherit;
  cursor: pointer;
  user-select: none;
  display: flex;
  height: inherit;
`;

interface AnchorProps extends PropsWithChildren{
  href: string;
  handleClick?: () => void;
}

const Anchor: FunctionComponent<AnchorProps> = ({
  href,
  children,
  handleClick,
}) => (
  <Link href={href} passHref>
    {handleClick ? (
      <StyledAnchor onClick={handleClick}>{children}</StyledAnchor>
    ) : (
      <StyledAnchor>{children}</StyledAnchor>
    )}
  </Link>
);

export default Anchor;
