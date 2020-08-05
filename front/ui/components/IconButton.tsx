import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { Button } from "./Button";
import { FlexRow } from "./Layout";
import { Icon, IconProps } from "./Icon";

const IconWrapper = styled(FlexRow)`
  flex-basis: 3.125rem;
  justify-content: flex-start;
`;

const ContentWrapper = styled(FlexRow)`
  justify-content: flex-start;
  align-items: center;
  flex-basis: 80%;
`;

export interface IconButtonProps extends IconProps {
  handleClick?: () => void;
  width?: string;
}

export const IconButton: FunctionComponent<IconButtonProps> = ({
  src,
  children,
  handleClick,
  width,
}) => (
  <Button onClick={handleClick} width={width}>
    <ContentWrapper>
      <IconWrapper>
        <Icon src={src} />
      </IconWrapper>
      {children}
    </ContentWrapper>
  </Button>
);
