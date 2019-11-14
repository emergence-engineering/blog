import React, { PureComponent } from "react";
import styled from "styled-components";

const EditorRoot = styled.div`
  width: 100%;
  height: 500px;
`;

const codeContent = `
  componentDidMount() {
    if (window.ace) {
      const editor = window.ace.edit("editor");
      editor.setTheme("ace/theme/monokai");
      editor.session.setMode("ace/mode/javascript");
    }
  }
`;

export default class CodeEditor extends PureComponent {
  // componentDidMount() {
  //   if (window.ace) {
  //     const editor = window.ace.edit("editor");
  //     editor.setTheme("ace/theme/monokai");
  //     editor.session.setMode("ace/mode/javascript");
  //     editor.resize()
  //   }
  // }

  render() {
    return (
      <>
        <h1>Code</h1>
        <EditorRoot id="editor">{codeContent}</EditorRoot>;
      </>
    );
  }
}
