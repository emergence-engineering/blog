import React from "react";
import {
  Mjml,
  MjmlHead,
  MjmlTitle,
  MjmlPreview,
  MjmlBody,
  MjmlSection,
  MjmlButton,
  MjmlText,
  MjmlColumn,
  MjmlSpacer,
} from "mjml-react";

interface SharedItemInvitationEmailTemplateProps {
  sharedItemTitle: string;
  link: string;
  email: string;
}

export default function SharedItemInvitationEmailTemplate(
  props: SharedItemInvitationEmailTemplateProps,
) {
  const title = `Invitation to collaborate on ${props.sharedItemTitle}`;

  return (
    <Mjml>
      <MjmlHead>
        <MjmlTitle>{title}</MjmlTitle>
        <MjmlPreview>{title}</MjmlPreview>
      </MjmlHead>
      <MjmlBody backgroundColor="grey">
        <MjmlSection backgroundColor="transparent">
          <MjmlColumn>
            <MjmlSpacer height="24px" />
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection>
          <MjmlColumn>
            <MjmlSpacer height="27px" />
            <MjmlText align="center">{props.email}</MjmlText>
            <MjmlSpacer height="5px" />
            <MjmlText align="center">
              invited you to collaborate on a sharedItem
              {props.sharedItemTitle}
            </MjmlText>
            <MjmlSpacer height="32px" />
            <MjmlButton
              borderRadius="2px"
              fontSize="18px"
              fontWeight={500}
              lineHeight="18px"
              fontFamily='"Proxima Nova", "Helvetica Neue", "Helvetica", "Arial"'
              height={60}
              width={210}
              href={props.link}
              padding="0"
              innerPadding="0"
            >
              Collaborate
            </MjmlButton>
            <MjmlSpacer height="71px" />
          </MjmlColumn>
        </MjmlSection>
      </MjmlBody>
    </Mjml>
  );
}
