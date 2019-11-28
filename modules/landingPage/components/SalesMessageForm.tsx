import styled from "styled-components";
import React, { FunctionComponent } from "react";

import theme, { screenSizes, sizes } from "../../../utils/theme";
import { Button } from "../../common/components/Button";

export const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 40%;
  background-color: ${theme.color.primary};
`;

const SalesRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.8rem 0;
  @media screen and (max-width: ${screenSizes.medium}px) {
    flex-direction: column;
  }
`;

const InputWrapper = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const Label = styled.label`
  flex: 1;
  font-family: ${theme.fontFamily.title};
  font-size: 1.2rem;
  letter-spacing: 0.08rem;
  color: ${theme.color.gray10};
`;

const SalesSpan = styled.span`
  flex: 1;
  font-family: ${theme.fontFamily.title};
  letter-spacing: 0.08rem;
  font-size: 1.2rem;
  color: ${theme.color.gray10};
`;

const SalesForm = styled.form``;

const ContentWrapper = styled.div`
  padding: 0 ${sizes.sidePadding};
  max-width: 40rem;
  width: 100%;
`;

const TextArea = styled.textarea`
  resize: none;
  display: block;
  margin: 0;
  padding: 0.6rem;
  color: inherit;
  width: 100%;
  font-family: inherit;
  font-size: 1rem;
  font-weight: inherit;
  border: none;
  border-radius: 0.2rem;
  transition: box-shadow 0.2s;
`;

const Title = styled.h1`
  width: 100%;
  text-align: center;
  color: ${theme.color.gray10};
`;

const Input = styled.input`
  display: block;
  margin: 0;
  padding: 0.6rem;
  color: inherit;
  width: 100%;
  font-family: inherit;
  font-size: 1rem;
  font-weight: inherit;
  border: none;
  border-radius: 0.2rem;
  transition: box-shadow 0.2s;
`;

const SendButton = styled(Button)`
  font-size: 1rem;
  font-weight: 200;
`;

const SalesFormSection: FunctionComponent<{}> = () => (
  <Root>
    <ContentWrapper>
      <Title>Contact us</Title>
      <SalesForm action="" method="post">
        <SalesRow>
          <Label htmlFor="name">Name</Label>
          <InputWrapper>
            <Input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Rick Sanchez"
            />
          </InputWrapper>
        </SalesRow>
        <SalesRow>
          <Label htmlFor="subject">Title</Label>
          <InputWrapper>
            <Input
              type="text"
              name="subject"
              id="subject"
              required
              placeholder="Let me out"
            />
          </InputWrapper>
        </SalesRow>
        <SalesRow>
          <SalesSpan>Message</SalesSpan>
          <InputWrapper>
            <TextArea
              name="message"
              id=""
              rows={10}
              placeholder="I want to get schwifty, can you help me?"
            />
          </InputWrapper>
        </SalesRow>
        <SalesRow>
          <Label htmlFor="email">Email</Label>
          <InputWrapper>
            <Input
              type="email"
              name="email"
              id="email"
              required
              placeholder="simple@rick.com"
            />
          </InputWrapper>
        </SalesRow>
        <SalesRow>
          <div />
          <SendButton type="submit" color="secondary">
            Send message
          </SendButton>
        </SalesRow>
      </SalesForm>
    </ContentWrapper>
  </Root>
);

export default SalesFormSection;
