import React, { FunctionComponent } from "react";
import { getVersion } from "prosemirror-collab";
import styled from "styled-components";
import { EditorView } from "prosemirror-view";

const EditorDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Editor: FunctionComponent<{ id: string; view: EditorView }> = ({
  id,
  view,
}) => (
  <EditorDetailsWrapper>
    <div>
      <h5>state.textContent</h5>
      {view?.state.doc.textContent}
    </div>
    <div>
      <h5>getVersion</h5>
      {view && getVersion(view.state)}
    </div>
    <div id={id} />
  </EditorDetailsWrapper>
);

export default Editor;
