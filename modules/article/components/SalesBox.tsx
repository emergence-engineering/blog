import styled from "styled-components";
import React, { FunctionComponent } from "react";

import theme from "../../../utils/theme";

const Root = styled.div`
  background: ${theme.color.gray11};
  padding: 1rem;
  color: ${theme.color.gray1};
  border: solid;
  border-color: ${theme.color.gray1};
  border-width: thin;
`;

const Title = styled.div`
  font-size: 2rem;
  font-family: ${theme.fontFamily.title};
  font-weight: 800;
  margin-bottom: 0.8rem;
`;

const SubTitle = styled.div`
  font-family: ${theme.fontFamily.title};
  font-weight: 800;
  font-size: 1.4rem;
  margin-bottom: 0.8rem;
`;

const SaleOptions = styled.div`
  display: flex;
  flex-direction: column;
`;

const SaleItemRoot = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem 1rem;
  :hover {
    border-style: solid;
    border-color: ${theme.color.gray8};
    border-width: 0.01rem;
    cursor: pointer;
    box-shadow: 5px 5px 5px ${theme.color.gray8};
  }
  transition: box-shadow 0.5s, border-style 0.5s;
`;

const OptionTextRoot = styled.div`
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
`;

const OptionIcon = styled.img`
  width: 5rem;
  height: 5rem;
`;

const OptionTitle = styled.div`
  font-family: ${theme.fontFamily.title};
  font-weight: 800;
  font-size: 1.2rem;
  margin-bottom: 0.2rem;
`;

const OptionDescription = styled.div``;

const SalesItem: FunctionComponent<{
  imgSrc: string;
  optionTitle: string;
  optionDescription: string;
}> = ({ imgSrc, optionDescription, optionTitle }) => (
  <SaleItemRoot>
    <OptionIcon src={imgSrc} decoding="async" />
    <OptionTextRoot>
      <OptionTitle>{optionTitle}</OptionTitle>
      <OptionDescription>{optionDescription}</OptionDescription>
    </OptionTextRoot>
  </SaleItemRoot>
);

const SalesBox: FunctionComponent<{}> = () => (
  <Root>
    <Title>Need more assistance?</Title>
    <SubTitle>
      We can help you in finding the most adequate solution for your issue!
    </SubTitle>
    <SaleOptions>
      <SalesItem
        imgSrc="/icons/video-chat.svg"
        optionTitle="Video consultation"
        optionDescription="Book an interactive video consultation with us. Get an interactive one on one or team session with our experienced developers."
      />
      <SalesItem
        imgSrc="/icons/presentation.svg"
        optionTitle="Educate your team"
        optionDescription={`
        We can hold on-site (in the EU) or online trainings. 
        We can help your team to learn new technologies or master certain "grey area" aspects of already used tools.
        `}
      />
      <SalesItem
        imgSrc="/icons/target.svg"
        optionTitle="Hire us to build the product you desire"
        optionDescription={`
        Hire an individual or a team of developers to solve build your product. 
        We can integrate into an ongoing project, or kick off and layout the foundations of an entirely new solution.
        `}
      />
    </SaleOptions>
  </Root>
);

export default SalesBox;
