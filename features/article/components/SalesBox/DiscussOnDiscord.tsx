import Image from "next/image";
import {
  BtnImg,
  BtnText,
  DiscordButton,
  InviteWrapper,
  Text,
  TextSide,
  Title,
} from "../../../landingPage/components/DiscordInvite";
import styled from "styled-components";
import theme from "../../../../utils/theme";

const StyledWrapper = styled(InviteWrapper)`
  margin-top: 2rem;
  background: ${theme.color.gray11};
  padding: 3rem;
  border: 5px solid #5865f2;
  min-height: 13rem;
  gap: 2rem;
`;

const StyledText = styled(Text)`
  font-size: 1rem;
  line-height: 1.4rem;
  text-align: left;
`;

const DiscussOnDiscord = () => (
  <StyledWrapper>
    <TextSide>
      <Title>Join our Discord community!</Title>
      <StyledText>
        Did you like this article? Do you have ideas? Do you have any question?
        Would you like to learn more?
      </StyledText>
      <StyledText style={{ fontWeight: "600" }}>Let’s discuss!</StyledText>
    </TextSide>
    <a
      href={`https://discord.gg/${process.env.NEXT_PUBLIC_DISCORD_INVITE_LINK}`}
      target={"_blank"}
      style={{ textDecoration: "none" }}
    >
      <DiscordButton style={{ width: "330px" }}>
        <BtnImg>
          <Image
            src={"/icons/discord-mark-white.png"}
            alt={""}
            width={41}
            height={31.5}
          />
        </BtnImg>
        <BtnText style={{ fontWeight: "400" }}>Join our server</BtnText>
      </DiscordButton>
    </a>
  </StyledWrapper>
);

export default DiscussOnDiscord;
