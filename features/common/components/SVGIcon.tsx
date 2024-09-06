import styled from "styled-components";
import React, { FunctionComponent } from "react";
import Image from "next/image";

const SvgImg = styled(Image)`
  display: inline-block;
  margin: 0 0.1em;
`;

const SVGIcon: FunctionComponent<{ src: string; size?: number }> = ({
  src,
  size,
}) => (
  <SvgImg src={src} height={size || 16} width={size || 16} alt="svgImage" />
);
export default SVGIcon;
