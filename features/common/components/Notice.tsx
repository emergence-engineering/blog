import React, { FunctionComponent, useEffect, useState } from "react";
import styled from "styled-components";

import theme from "../../../utils/theme";

export enum NoticeType {
  success,
  error,
  info,
}

export interface NoticeProps {
  message: string;
  type: NoticeType;
}

interface MessageProps {
  type: NoticeType;
}

const mapNoticeTypeToColor = (type: NoticeType): string => {
  switch (type) {
    case NoticeType.success:
      return theme.color.success;
    case NoticeType.error:
      return theme.color.error;
    case NoticeType.info:
    default:
      return theme.color.primary;
  }
};

const Root = styled.div``;

const Message = styled.div<MessageProps>`
  min-width: 25rem; /* Set a default minimum width */
  margin-left: -12.5rem; /* Divide value of min-width by 2 */
  height: 3rem;
  color: ${theme.color.gray10}; /* White text color */
  text-align: center; /* Centered text */
  padding: 16px; /* Padding */
  position: fixed; /* Sit on top of the screen */
  z-index: 1; /* Add a z-index if needed */
  left: 50%; /* Center the snackbar */
  bottom: 10rem; /* 30px from the bottom */
  background: ${(props: MessageProps) => mapNoticeTypeToColor(props.type)};
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${theme.fontFamily.title};
  font-weight: 500;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;

  @keyframes fadein {
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: 10rem;
      opacity: 1;
    }
  }

  @keyframes fadeout {
    from {
      bottom: 10rem;
      opacity: 1;
    }
    to {
      bottom: 0;
      opacity: 0;
    }
  }
`;

const delay = (timeout: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, timeout));

const Notice: FunctionComponent<NoticeProps> = ({
  message,
  type = NoticeType.info,
}) => {
  const [displayed, setDisplayed] = useState(false);
  useEffect(() => {
    const removeAfterAnimation = async () => {
      await delay(2500);
      setDisplayed(true);
    };
    removeAfterAnimation();
  }, [displayed, type, message]);
  return (
    <Root>{displayed ? null : <Message type={type}>{message}</Message>}</Root>
  );
};

export default Notice;
