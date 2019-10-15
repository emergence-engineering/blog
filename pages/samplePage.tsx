import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

const SamplePage: FunctionComponent<{}> = () => (
  <div>
    <p>Component with FirestoreConnect Feature</p>
  </div>
);

const mapStateToProps = (state: any) => ({
  orders: state.firestore.ordered.orders,
});

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "database-name",
    },
  ]),
)(SamplePage);
