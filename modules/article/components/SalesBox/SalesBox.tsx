import styled from "styled-components";
import React, { FunctionComponent, useReducer } from "react";

import theme from "../../../../utils/theme";

import { articleSalesFormReducer, initialState } from "./state";
import { SalesItem } from "./SalesItem";
import { SalesModal } from "./SalesModal";

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

const SalesBox: FunctionComponent<{}> = () => {
  const [state, dispatch] = useReducer(articleSalesFormReducer, initialState);

  return (
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
          dispatch={dispatch}
        />
        <SalesItem
          imgSrc="/icons/presentation.svg"
          optionTitle="Educate your team"
          optionDescription={`
        We can hold on-site (in the EU) or online trainings. 
        We can help your team to learn new technologies or master certain "grey area" aspects of already used tools.
        `}
          dispatch={dispatch}
        />
        <SalesItem
          imgSrc="/icons/target.svg"
          optionTitle="Hire us to build the product you desire"
          optionDescription={`
        Hire an individual or a team of developers to solve build your product. 
        We can integrate into an ongoing project, or kick off and layout the foundations of an entirely new solution.
        `}
          dispatch={dispatch}
        />
      </SaleOptions>
      <SalesModal displayed={state.isFormDisplayed} dispatch={dispatch} />
    </Root>
  );
};

export default SalesBox;
