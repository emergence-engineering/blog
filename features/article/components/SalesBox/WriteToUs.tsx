import styled from "styled-components";
import theme from "../../../../utils/theme";

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

export const Text = styled.div`
  font-size: ${theme.fontSize.small};
  color: ${theme.color.gray3};
  font-weight: 400;
  line-height: 1.3rem;
`;

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

const WriteToUs = () => (
  <StyledWrapper>
    <TextSide>
      <StyledText>
        Did you like this article? Would you like to learn more?
        <br />
        Write to us at{" "}
        <a href="mailto: contact@emergence-engineering.com">
          contact@emergence-engineering.com
        </a>
      </StyledText>
    </TextSide>
  </StyledWrapper>
);

export default WriteToUs;
