import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";

const SamplePage: FunctionComponent<{}> = () => {
  useFirestoreConnect([{ collection: "orders" }]);
  const orders = useSelector(state => state.firestore.data.orders || {});
  return (
    <div>
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

export default SamplePage;
