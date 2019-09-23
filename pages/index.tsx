import React from "react";
import { connect } from 'react-redux'
import styled from "styled-components";
import getConfig from "next/config";
import {exampleDispatch} from '../setup/actions/mainActions'
import Router from 'next/router';


const Root = styled.div`
  background-color: blue;
`;

class Index extends React.Component {

  render () {
    return  (
      <Root>
      {console.log(getConfig().publicRuntimeConfig)}
          <p>My app</p>
        <button onClick={() => Router.push('/samplePage')}>Go to Sample Page</button>
      </Root>
    )
  }
}

const mapStateToProps = (state: any) => {
  console.log(state)
  return {
    state
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
      exampleDispatch: (value: any) =>
      dispatch(exampleDispatch(value)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)
