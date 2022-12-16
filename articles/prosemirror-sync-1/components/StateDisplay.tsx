import React, { FunctionComponent } from "react";
import { JsonViewer } from "@textea/json-viewer";

import { PMDocument } from "../types";

const StateDisplay: FunctionComponent<{ serverDoc?: PMDocument }> = ({
  serverDoc,
}) => (
  <div>
    <div>
      <em>Server version</em>: {serverDoc?.version}
    </div>
    <div>{serverDoc && <JsonViewer value={serverDoc.doc} defaultInspectDepth={2}/>}</div>
  </div>
);

export default StateDisplay;
