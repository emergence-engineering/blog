import React, { FunctionComponent } from "react";
import { getVersion } from "prosemirror-collab";
import styled from "styled-components";
import { EditorView } from "prosemirror-view";
import { EditorState } from "prosemirror-state";

import ProseMirrorDiv from "../../../modules/prosemirror/ProseMirrorDiv";

const EditorDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Editor: FunctionComponent<{
  id: string;
  view: EditorView;
  state: EditorState;
}> = ({ id, view }) => (
  <EditorDetailsWrapper>
    {id}
    <div>
      <h5>state.textContent</h5>
      {view?.state.doc.textContent}
    </div>
    <div>
      <h5>getVersion</h5>
      {view && getVersion(view.state)}
    </div>
    <ProseMirrorDiv id={id} />
  </EditorDetailsWrapper>
);

export default Editor;
