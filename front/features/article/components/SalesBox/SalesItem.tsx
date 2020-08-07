import styled from "styled-components";
import React, { FunctionComponent } from "react";

import theme from "../../../../utils/theme";

import {
  ArticleSalesFormAction,
  createDisplayModalAction,
  FormType,
} from "./state";

const SaleItemRoot = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem 1rem;
  border: 0.01rem solid transparent;
  :hover {
    border-color: ${theme.color.gray8};
    cursor: pointer;
    box-shadow: 0.3rem 0.3rem 0.3rem ${theme.color.gray8};
  }
  transition: box-shadow 0.2s, border-style 0.2s;
`;
const OptionTextRoot = styled.div`
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
`;
const OptionIcon = styled.img`
  width: 80px;
  height: 80px;
`;
const OptionTitle = styled.div`
  font-family: ${theme.fontFamily.title};
  font-weight: 800;
  font-size: 1.2rem;
  margin-bottom: 0.2rem;
`;
const OptionDescription = styled.div``;
export const SalesItem: FunctionComponent<{
  imgSrc: string;
  optionTitle: string;
  optionDescription: string;
  dispatch: (action: ArticleSalesFormAction) => void;
  actionType: FormType;
}> = ({ imgSrc, optionDescription, optionTitle, dispatch, actionType }) => {
  function dispatchShowModal() {
    dispatch(createDisplayModalAction(actionType));
  }

  return (
    <SaleItemRoot onClick={dispatchShowModal}>
      <OptionIcon src={imgSrc} decoding="async" />
      <OptionTextRoot>
        <OptionTitle>{optionTitle}</OptionTitle>
        <OptionDescription>{optionDescription}</OptionDescription>
      </OptionTextRoot>
    </SaleItemRoot>
  );
};
