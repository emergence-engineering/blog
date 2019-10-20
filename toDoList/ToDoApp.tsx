import React, { useCallback, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import List from "./list";

const ToDoApp = () => {
  const [term, setTerm] = useState<string>("");
  const [items, setItems] = useState<string[]>([]);
  const Theme = {
    font: 'normal 16px / normal "Times New Roman", Times, serif;',
  };

  const handleSubmit = useCallback(
    (event: any) => {
      if (term) setItems([...items, term]);
      setTerm("");
    },
    [term],
  );

  const onChange = (event: any) => {
    setTerm(event.target.value);
  };

  return (
    <ThemeProvider theme={Theme}>
      <StyledDiv>
        <StyledButton type="button" onClick={handleSubmit}>
          Submit
        </StyledButton>
        <StyledInput value={term} onChange={onChange} />
        <List items={items} />
      </StyledDiv>
    </ThemeProvider>
  );
};

const StyledInput = styled.input`
  padding: 10px 20px;
  display: inline;
  border: 1px solid #b7b7b7;
  font: ${props => props.theme.font};
  color: rgba(86, 86, 86, 0.9);
  background: rgba(252, 252, 252, 1);
  box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.2) inset;
  text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.66);
`;

const StyledDiv = styled.div`
  border: 1px solid #018dc4;
  width: 50%;
  background: gray;
  margin: auto;
  padding: 10px;
`;
const StyledButton = styled.button`
  padding: 10px 20px;
  border: 1px solid #018dc4;
  border-radius: 3px;
  font: ${props => props.theme.font};
  color: rgba(86, 86, 86, 0.9);
  background: #ffc107;
  box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.2);
  text-shadow: -1px -1px 0 rgba(15, 73, 168, 0.66);
`;

export default ToDoApp;
