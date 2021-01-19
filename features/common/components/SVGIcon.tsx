import styled from "styled-components";
import React, { FunctionComponent } from "react";
import Image from "next/image";

const SvgImg = styled(Image)`
  display: inline-block;
  margin: 0 0.1em;
`;

const SVGIcon: FunctionComponent<{ src: string }> = ({ src }) => (
  <SvgImg src={src} height={16} width={16} />
);
export default SVGIcon;
