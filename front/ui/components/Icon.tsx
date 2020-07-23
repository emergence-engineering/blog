import styled from "styled-components";

import { clickable } from "../../utils/mixins";

export interface IconProps {
  src: string;
}

export const Icon = styled.img.attrs({
  decoding: "async",
  alt: "",
})<IconProps>`
  width: 1.6rem;
  height: 1.6rem;
`;

export const ClickIcon = styled(Icon)`
  ${clickable}
`;
