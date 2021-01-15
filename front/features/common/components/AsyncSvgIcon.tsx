import styled from "styled-components";
import React, { FunctionComponent } from "react";

const SvgImg = styled.img`
  display: inline-block;
  height: 1em;
  margin: 0 0.1em;
`;

const AsyncSVGIcon: FunctionComponent<{ src: string }> = (props) => {
  const { src } = props;
  return <SvgImg decoding="async" src={src} />;
};

export default AsyncSVGIcon;
