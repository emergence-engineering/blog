import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { Button } from "../../../ui/components/Button";

interface CollabProps {
  email: string;
  userKey: string;
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Title = styled.div``;

const CollaboratorRow: FunctionComponent<CollabProps> = ({
  email,
  userKey,
}) => (
  <Root>
    <Title>{email}</Title>
    <Button>Remove</Button>
  </Root>
);

export default CollaboratorRow;
