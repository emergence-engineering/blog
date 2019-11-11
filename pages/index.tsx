import React, { FunctionComponent, useCallback, useRef } from "react";
import { connect, useSelector } from "react-redux";
import styled from "styled-components";
import Link from "next/link";
import { bindActionCreators, Dispatch } from "redux";
import { useFirestoreConnect } from "react-redux-firebase";

import { addSampleAction } from "../setup/actions/sample/actions";
import { RootState } from "../setup/reducers/rootReducer";

const Root = styled.div`
  background-color: white;
`;

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      addSample: addSampleAction,
    },
    dispatch,
  );

const Index: FunctionComponent<{} & ReturnType<typeof mapDispatchToProps>> = ({
  addSample,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const buttonClick = useCallback(() => {
    if (inputRef && inputRef.current) addSample(inputRef.current.value);
  }, [inputRef]);
  useFirestoreConnect([{ collection: "samples" }]);
  const samples = useSelector(
    (state: RootState) => state.firestore.data.samples || {},
  );
  return (
    <Root>
      <Link href="/samplePage">
        <a>Go to Sample Page</a>
      </Link>
      <br />
      <Link href="/auth/login">
        <a>Go to Login Page</a>
      </Link>
      <br />
      <input type="text" ref={inputRef} />
      <button type="button" onClick={buttonClick}>
        Add sample
      </button>

      <div>
        {Object.keys(samples).map(sampleKey => (
          <div key={sampleKey}>
            {`${sampleKey}-value: ${samples[sampleKey].value}`}
          </div>
        ))}
      </div>
    </Root>
  );
};

export default connect(undefined, mapDispatchToProps)(Index);
