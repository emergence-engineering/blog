import React, { ReactChild } from "react";
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

const Anchor = ({
  href,
  children,
  handleClick,
}: {
  href: string;
  children: ReactChild;
  handleClick?: () => void;
}) => (
  <Link href={href} passHref>
    <StyledAnchor onClick={handleClick}>{children}</StyledAnchor>
  </Link>
);

export default Anchor;
