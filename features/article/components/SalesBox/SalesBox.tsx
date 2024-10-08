import styled from "styled-components";
import React, { FunctionComponent, useReducer } from "react";

import theme from "../../../../utils/theme";

import { articleSalesFormReducer, FormType, initialState } from "./state";
import { SalesItem } from "./SalesItem";
import { SalesModal } from "./SalesModal";

const Root = styled.div`
  margin-top: 2rem;
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

const SalesBox: FunctionComponent = () => {
  const [state, dispatch] = useReducer(articleSalesFormReducer, initialState);

  return (
    <Root>
      <Title>Need more assistance?</Title>
      <SubTitle>
        We can help you in finding the most adequate solution for your issue!
      </SubTitle>
      <SaleOptions>
        <SalesItem
          imgSrc="videoChat"
          optionTitle="Video consultation"
          optionDescription="Book an interactive video consultation with us. Get an interactive one on one or team session with our experienced developers."
          dispatch={dispatch}
          actionType={FormType.videoConsultation}
        />
        <SalesItem
          imgSrc="presentation"
          optionTitle="Educate your team"
          optionDescription={`
        We can hold on-site (in the EU) or online trainings. 
        We can help your team to learn new technologies or master certain "grey area" aspects of already used tools.
        `}
          dispatch={dispatch}
          actionType={FormType.training}
        />
        <SalesItem
          imgSrc="target"
          optionTitle="Hire us to build your product"
          optionDescription={`
        Hire an individual or a team of developers to solve build your product. 
        We can integrate into an ongoing project, or kick off and layout the foundations of an entirely new solution.
        `}
          dispatch={dispatch}
          actionType={FormType.development}
        />
      </SaleOptions>
      <SalesModal
        displayed={state.isFormDisplayed}
        formType={state.formType}
        dispatch={dispatch}
      />
    </Root>
  );
};

export default SalesBox;
