import React, { FunctionComponent } from "react";
import { getVersion } from "prosemirror-collab";
import styled from "styled-components";
import { EditorView } from "prosemirror-view";
import { EditorState } from "prosemirror-state";

import ProseMirrorDiv from "../../../modules/prosemirror/ProseMirrorDiv";
import { mySchema } from "../schema";

const EditorDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Editor: FunctionComponent<{
  id: string;
  view?: EditorView<typeof mySchema>;
  state?: EditorState<typeof mySchema>;
}> = ({ id, view }) => (
  <EditorDetailsWrapper>
    <div>
      <em>version: </em>
      {view && getVersion(view.state)}
    </div>
    <ProseMirrorDiv id={id} />
  </EditorDetailsWrapper>
);

export default Editor;
