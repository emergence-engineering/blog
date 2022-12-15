import React, { FunctionComponent } from "react";
import { getVersion } from "prosemirror-collab";
import styled from "styled-components";
import { EditorView } from "prosemirror-view";
import { EditorState } from "prosemirror-state";

import theme from "../../../utils/theme";
import ProseMirrorDiv from "../../../features/prosemirror/ProseMirrorDiv";

const EditorDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-basis: 29rem;
  margin: 1rem 0.5rem;
  padding: 0.2rem;
  border: 1px solid ${theme.color.gray8};
  border-radius: 0.1rem;
  background-color: ${theme.color.gray10};
`;

const Editor: FunctionComponent<{
  name: string;
  id: string;
  view?: EditorView;
  state?: EditorState;
}> = ({ id, view, name }) => (
  <EditorDetailsWrapper>
    <div>
      <h3>{name}</h3>
      <em>version: </em>
      {view && getVersion(view.state)}
    </div>
    <ProseMirrorDiv id={id} />
  </EditorDetailsWrapper>
);

export default Editor;
