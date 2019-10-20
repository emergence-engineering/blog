import React from "react";

import styled from "styled-components";

const StyledUl = styled.ul`
  margin: 0px;
  font: ${props => props.theme.font};
  color: rgba(86, 86, 86, 0.9);
  background: #ffc107;
  box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.2);
  text-shadow: -1px -1px 0 rgba(15, 73, 168, 0.66);
`;

const List = (props: any) => {
  const { items } = props;
  return (
    <StyledUl>
      {items &&
        items.map((item: string, idx: number) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={idx} style={{ display: "flex" }}>
            {item}
            <button type="button" style={{ marginLeft: "auto" }}>
              Remove
            </button>
          </li>
        ))}
    </StyledUl>
  );
};

export default List;
