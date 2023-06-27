import styled from "styled-components";
import theme from "../../../utils/theme";
import { clickable } from "../../../utils/mixins";
import Image from "next/image";

export const InviteWrapper = styled.div`
  width: 100%;
  min-height: 15rem;
  background-color: ${theme.color.background};
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
  }
`;

export const TextSide = styled.div`
  max-width: 60%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const Line = styled.div`
  width: 0.5rem;
  height: 6rem;
  background-color: #5865f2;
  border-radius: 20px;
`;

export const Title = styled.div`
  font-size: 2.2rem;
  font-family: ${theme.fontFamily.title};
`;

export const Text = styled.div`
  font-size: ${theme.fontSize.small};
  color: ${theme.color.gray3};
  font-weight: 400;
  line-height: 1.3rem;
`;

export const DiscordButton = styled.div`
  width: 250px;
  height: 50px;
  border-radius: 10px;
  background-color: #5865f2;
  ${clickable};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  :hover {
    background-color: #717eff;
  }
`;

export const BtnImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BtnText = styled.div`
  color: ${theme.color.white};
  font-family: ${theme.fontFamily.title};
  font-size: 1.5rem;
`;

const DiscordInvite = () => (
  <InviteWrapper>
    <TextSide>
      <TitleWrapper>
        <Line />
        <Title>
          Join our <br />
          Discord community!
        </Title>
      </TitleWrapper>
      <Text>
        Whether you have questions about our solutions with GraphQL or Firebase,
        or you want to know more about our ideas of LLM / AI integration to your
        project, you are in the right place! We can also help you build a whole
        collaborative UI or just a collaborative text editor - using TipTap and
        ProseMirror. <br /> <b>Join us and let’s have a chat!</b>
      </Text>
    </TextSide>
    <a
      href={`https://discord.gg/${process.env.NEXT_PUBLIC_DISCORD_INVITE_LINK}`}
      target={"_blank"}
      style={{ textDecoration: "none" }}
    >
      <DiscordButton>
        <BtnImg>
          <Image
            src={"/icons/discord-mark-white.png"}
            alt={""}
            width={41}
            height={31.5}
          />
        </BtnImg>
        <BtnText>Join our server</BtnText>
      </DiscordButton>
    </a>
  </InviteWrapper>
);

export default DiscordInvite;
