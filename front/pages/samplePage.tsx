import React, { FunctionComponent, useCallback } from "react";
import { useSelector } from "react-redux";
import { useFirebase, useFirestoreConnect } from "react-redux-firebase";

import { RootState } from "../utils/reducers/rootReducer";
import { Button } from "../ui/components/Button";
import withRedirect from "../features/auth/components/withRedirect";
import { UserStatus } from "../features/auth/modules/auth";

const SamplePage: FunctionComponent<{}> = () => {
  const firebase = useFirebase();
  useFirestoreConnect([{ collection: "orders" }]);
  const orders = useSelector(
    (state: RootState) => state.firestore.data.orders || {},
  );

  const logOut = useCallback(() => {
    firebase.auth().signOut();
  }, []);
  return (
    <div>
      <Button type="button" onClick={logOut}>
        Logout
      </Button>
      <div>Component with FirestoreConnect Feature</div>
      <div>
        Just create an a collection named `owners` in Firestore to see how it
        works!
      </div>
      {Object.keys(orders).map(orderId => (
        <div key={orderId}>
          {orderId}: {orders[orderId].owner}
        </div>
      ))}
    </div>
  );
};

export default withRedirect({ [UserStatus.none]: "/auth/login" })(SamplePage);
