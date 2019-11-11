import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { bindActionCreators, Dispatch } from "redux";

import { addSampleAction } from "../setup/actions/sample/actions";
import LandingPageSection from "../common/components/LandingPageSection";
import Header from "../common/components/Header";
import { Footer } from "../common/components/Footer";

const Root = styled.div`
  display: flex;
  background-color: white;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
`;

const LandingPageContent = styled.section`
  background-color: wheat;
  flex-grow: 1;
  margin-left: 25%;
  margin-right: 25%;
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
      <h1>blog main page</h1>
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
