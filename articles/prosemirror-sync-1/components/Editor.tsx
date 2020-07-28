import React, { FunctionComponent } from "react";
import { getVersion } from "prosemirror-collab";
import styled from "styled-components";
import { EditorView } from "prosemirror-view";
import { EditorState } from "prosemirror-state";

import ProseMirrorDiv from "../../../modules/prosemirror/ProseMirrorDiv";
import { mySchema } from "../schema";
import theme from "../../../utils/theme";

const EditorDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-basis: 20rem;
  border-radius: 0.2rem;
  margin: 1rem 0.5rem;
  padding: 0.2rem;
  border: 0.15rem solid ${theme.color.tertiary4};
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
