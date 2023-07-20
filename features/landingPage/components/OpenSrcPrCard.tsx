import styled from "styled-components";
import { FC, useState } from "react";
import theme, { screenSizes } from "../../../utils/theme";
import Image, { StaticImageData } from "next/image";
import { clickable } from "../../../utils/mixins";
import Link from "next/link";

const Root = styled.div`
  width: 100%;
  max-width: 55rem;
  min-height: 14rem;
  background-color: white;
  border-radius: 5px;
  border: 1px solid ${theme.color.gray8};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 2.5rem 2.5rem 1rem 2.5rem;
  gap: 1rem;

  @media screen and (max-width: ${screenSizes.medium}px) {
    margin: 1rem;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 1rem;

  @media screen and (max-width: ${screenSizes.large}px) {
    flex-direction: column-reverse;
    gap: unset;
  }
`;

const Title = styled.div`
  font-family: ${theme.fontFamily.title};
  font-size: 1.9rem;
  color: ${theme.color.gray2};
  font-weight: 700;
  line-height: 3rem;

  ${Root}:hover & {
    color: ${theme.color.tertiary};
  }

  @media screen and (max-width: ${screenSizes.medium}px) {
    font-size: 1.4rem;
  }
`;

const SourceIconWrapper = styled.div`
  height: 2rem;
  display: flex;
  align-items: center;
`;

const SourceIcon = styled.div`
  min-width: 3rem;
  min-height: 1.7rem;
  position: relative;

  :hover {
    opacity: 0.5;
  }
`;

const Text = styled.div`
  font-family: ${theme.fontFamily.general};
  color: ${theme.color.gray2};
  font-size: 0.9rem;
  font-weight: 300;
  margin-bottom: 1rem;
`;

const BottomWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: ${screenSizes.large}px) {
    flex-direction: column;
    align-items: flex-end;
    gap: 1rem;
  }
`;

const LeftSide = styled.div`
  width: 50%;
  border: 1px solid ${theme.color.gray8};
  border-radius: 5px;
  padding: 0.5rem;
  color: ${theme.color.gray5};

  display: flex;
  align-items: center;
  gap: 0.3rem;

  @media screen and (max-width: ${screenSizes.large}px) {
    width: 100%;
  }
`;

const CommandWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;

const Command = styled.div`
  font-family: monospace;
  color: ${theme.color.gray5};
  font-size: 0.8rem;
`;

const CopyIcon = styled.div`
  ${clickable}
`;

const RightSide = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;

  @media screen and (max-width: ${screenSizes.large}px) {
    width: 100%;
  }
`;

export const Tag = styled.div`
  background-color: ${theme.color.tertiary};
  border-radius: 5px;
  height: 2rem;
  padding: 6px 8px;
  margin: 0.3rem 0;
  width: max-content;

  font-family: ${theme.fontFamily.general};
  color: #ffffff;
  font-size: 14px;
  font-weight: 200;
  text-align: center;

  @media screen and (max-width: ${screenSizes.large}px) {
    height: 1.5rem;
    padding: 4px 6px;
    font-size: 11px;
  }
`;

const OpenSrcPrCard: FC<{
  title: string;
  article: string;
  icon: Array<StaticImageData>;
  gitLink: string;
  description: string;
  command: string;
  tags: Array<string>;
}> = ({ title, article, icon, gitLink, description, command, tags }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyContent = async () => {
    const commandText = document.getElementById("commandText")?.innerHTML;

    try {
      if (commandText) {
        await navigator.clipboard.writeText(commandText);
        setIsCopied(true);
      }
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const articleLink = article === "" ? gitLink : article;

  return (
    <Root>
      <Wrapper>
        <TitleWrapper>
          <Link href={articleLink} style={{ textDecoration: "unset" }} passHref>
            <Title>{title}</Title>
          </Link>
          <SourceIconWrapper>
            {icon.map((icon, i) => (
              <SourceIcon style={{ cursor: "pointer" }} key={i}>
                <a href={gitLink} target={"_blank"}>
                  <Image
                    src={icon}
                    alt={""}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </a>
              </SourceIcon>
            ))}
          </SourceIconWrapper>
        </TitleWrapper>
        <Text>{description}</Text>
        <BottomWrapper>
          <LeftSide>
            {" > "}
            <CommandWrapper>
              <Command id={"commandText"}>{command}</Command>
              <CopyIcon onClick={copyContent}>
                {isCopied ? (
                  <Image
                    src={"/icons/copied.png"}
                    alt={""}
                    width={20}
                    height={20}
                  />
                ) : (
                  <Image
                    src={"/icons/copy.png"}
                    alt={""}
                    width={20}
                    height={20}
                  />
                )}
              </CopyIcon>
            </CommandWrapper>
          </LeftSide>
          <RightSide>
            {tags.map((tag, i) => (
              <Tag key={i}>{tag}</Tag>
            ))}
          </RightSide>
        </BottomWrapper>
      </Wrapper>
    </Root>
  );
};

export default OpenSrcPrCard;
