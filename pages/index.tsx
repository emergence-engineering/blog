import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { bindActionCreators, Dispatch } from "redux";

import { addSampleAction } from "../setup/actions/sample/actions";
import LandingPageSection from "../modules/landingPage/components/LandingPageSection";
import Header from "../modules/common/components/Header";

const Root = styled.div`
  display: flex;
  background-color: white;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
`;

const LandingPageContent = styled.section`
  flex-grow: 1;
  margin-left: 25%;
  margin-right: 25%;
`;
const Footer = styled.footer`
  flex-shrink: 0;
  background-color: black;
  color: white;
  height: 100px;
`;

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      addSample: addSampleAction,
    },
    dispatch,
  );

const Index: FunctionComponent<
  {} & ReturnType<typeof mapDispatchToProps>
> = () => (
  <Root>
    <Header />
    <LandingPageContent>
      <h1>company landing page</h1>
      <LandingPageSection />
      <LandingPageSection />
      <LandingPageSection />
      <LandingPageSection />
    </LandingPageContent>
    <Footer>TODO: footer</Footer>
  </Root>
);

export default connect(
  undefined,
  mapDispatchToProps,
)(Index);
