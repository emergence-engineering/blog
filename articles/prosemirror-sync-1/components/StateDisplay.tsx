import React, { FunctionComponent } from "react";
import JsonView from "react-json-view";

import { PMDocument } from "../types";

const StateDisplay: FunctionComponent<{ serverDoc?: PMDocument }> = ({
  serverDoc,
}) => (
  <div>
    <div>version: {serverDoc?.version}</div>
    <div>{serverDoc && <JsonView src={serverDoc.doc} collapsed={false} />}</div>
  </div>
);

export default StateDisplay;
