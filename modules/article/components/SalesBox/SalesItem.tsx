import styled from "styled-components";
import React, { FunctionComponent } from "react";

import theme from "../../../../utils/theme";

import { ArticleSalesFormAction, DISPLAY_MODAL, FormType } from "./state";

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
export const SalesItem: FunctionComponent<{
  imgSrc: string;
  optionTitle: string;
  optionDescription: string;
  dispatch: (action: ArticleSalesFormAction) => void;
}> = ({ imgSrc, optionDescription, optionTitle, dispatch }) => {
  function dispatchShowModal() {
    dispatch({
      type: DISPLAY_MODAL,
      payload: { formType: FormType.development },
    });
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
