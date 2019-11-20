import styled from "styled-components";
import React, { FunctionComponent } from "react";

import theme from "../../../utils/theme";

export const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 40%;
  background-color: ${theme.color.primary};
`;

const SalesFormSection: FunctionComponent<{}> = () => (
  <Root>
    <h1>Contact us</h1>
    <form action="" method="post">
      <div>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="name">What is your name?</label>
        <input type="text" name="name" id="name" required />
      </div>
      <div>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="subject">What is the subject of your message?</label>
        <input type="text" name="subject" id="subject" required />
      </div>
      <div>
        <span>Please describe the issue we can help with.</span>
        <textarea name="message" id="" cols={30} rows={10} />
      </div>
      <div>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="email">What is your email: </label>
        <input type="email" name="email" id="email" required />
      </div>
      <div>
        <input type="submit" value="Send message" />
      </div>
    </form>
  </Root>
);

export default SalesFormSection;
