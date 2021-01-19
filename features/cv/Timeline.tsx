import styled from "styled-components";
import React, { FunctionComponent } from "react";

import theme from "../../utils/theme";

type PositionType = "TOP" | "BOTTOM";
const mapPositionToAlign = (position?: PositionType): string => {
  switch (position) {
    case "TOP":
      return "start";
    case "BOTTOM":
      return "flex-end";
    default:
      return "center";
  }
};
const TimelineItemContainer = styled.div<{ position?: PositionType }>`
  display: flex;
  flex-direction: row;
  align-items: ${({ position }) => mapPositionToAlign(position)};
  padding-top: ${({ position }) => (position === "TOP" ? "0" : "2")}rem;
  padding-bottom: ${({ position }) => (position === "BOTTOM" ? "0" : "2")}rem;
`;
const timelineDotSizeRem = 3;
const TimelineItemLabel = styled.div`
  border-style: solid;
  border-color: ${theme.color.tertiary};
  border-width: 0.1rem;
  border-radius: 50%;
  background-color: ${theme.color.tertiary};
  position: relative;
  height: ${timelineDotSizeRem}rem;
  min-height: ${timelineDotSizeRem}rem;
  width: ${timelineDotSizeRem}rem;
  min-width: ${timelineDotSizeRem}rem;
  right: 1.5rem;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${theme.fontFamily.title};
  font-weight: 800;
  font-size: 1.1rem;
  color: ${theme.color.gray11};
`;
const TimelineItemText = styled.div``;
const TimelineItemDescription = styled.div`
  font-family: ${theme.fontFamily.general};
  font-weight: 200;
`;
const TimelineItemTitle = styled.div`
  font-family: ${theme.fontFamily.title};
  font-size: 1.25rem;
  text-decoration: underline;
  text-decoration-color: ${theme.color.tertiary};
`;

const SpecialEventText = styled.div`
  font-family: ${theme.fontFamily.title};
  background-color: ${theme.color.tertiary};
  color: ${theme.color.gray11};
  display: inline-block;
  padding: 0.15rem 0.25rem;
  border-radius: 2rem%;
`;

const TimelineItemDuration = styled.div`
  font-family: ${theme.fontFamily.title};
  font-size: 1em;
`;

export const TimelineContainerRoot = styled.div`
  padding-top: 2rem;
  padding-left: 4rem;
`;
export const TimelineItem: FunctionComponent<{
  position?: PositionType;
  timelineLabel: string;
  eventTitle: string;
  eventDescription: string;
  duration: string;
  specialEventText?: string;
}> = ({
  position,
  eventTitle,
  eventDescription,
  timelineLabel,
  duration,
  specialEventText,
}) => (
  <TimelineItemContainer position={position}>
    <TimelineItemLabel>{timelineLabel}</TimelineItemLabel>
    <TimelineItemText>
      <TimelineItemTitle>{eventTitle}</TimelineItemTitle>
      {specialEventText ? (
        <SpecialEventText>{specialEventText}</SpecialEventText>
      ) : null}
      {duration !== "" ? (
        <TimelineItemDuration>Duration: {duration}</TimelineItemDuration>
      ) : null}
      <TimelineItemDescription>{eventDescription}</TimelineItemDescription>
    </TimelineItemText>
  </TimelineItemContainer>
);
