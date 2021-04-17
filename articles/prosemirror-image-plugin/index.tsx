// eslint-disable-next-line no-use-before-define
import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { buildMenuItems, exampleSetup } from "prosemirror-example-setup";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import applyDevTools from "prosemirror-dev-tools";
import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import {
  imageAlign,
  imagePlugin,
  startImageUpload,
} from "prosemirror-image-plugin";
import { NodeType } from "prosemirror-model";
import { MenuItem } from "prosemirror-menu";
import styled from "styled-components";

import ProseMirrorDiv from "../../features/prosemirror/ProseMirrorDiv";

import { initialDoc, imageSchema, imagePluginSettings } from "./schema";

const canInsert = (state: EditorState, nodeType: NodeType) => {
  const { $from } = state.selection;
  for (let d = $from.depth; d >= 0; d -= 1) {
    const index = $from.index(d);
    if ($from.node(d).canReplaceWith(index, index, nodeType)) return true;
  }
  return false;
};

const imageMenuItem = new MenuItem({
  label: "upload image",
  select: (state) => canInsert(state, imageSchema.nodes.image),

  run() {
    document.getElementById("imageselector")?.click();
  },
});

const Root = styled.div`
  placeholder {
    color: #ccc;
    position: relative;
    top: 6px;
  }
  placeholder:after {
    content: "☁";
    font-size: 200%;
    line-height: 0.1;
    font-weight: bold;
  }

  .imagePluginRoot {
    display: flex;
    flex-direction: column;
    position: relative;
    border-radius: 0.25rem;
  }

  .imagePluginRoot img {
    align-self: center;
    width: 100%;
  }

  .imagePluginRoot[imageplugin-align=${imageAlign.left}] {
    width: 51%;
    float: left;
    margin: 1rem 2rem 0 0;
  }
  .imagePluginRoot[imageplugin-align=${imageAlign.right}] {
    width: 51%;
    float: right;
    margin: 0;
  }
  .imagePluginRoot[imageplugin-align=${imageAlign.center}] {
    width: 51%;
    float: none;
    margin: 0 auto;
  }
  .imagePluginRoot[imageplugin-align=${imageAlign.fullWidth}] {
    width: auto;
    float: none;
    clear: both;
  }

  .alignFullWidthButton,
  .alignRightButton,
  .alignLeftButton,
  .alignCenterButton {
    width: 5rem;
  }

  .imagePluginRoot[imageplugin-align=${imageAlign.left}] [imagealign=${imageAlign.left}] {
    background-color: red;
  }
  .imagePluginRoot[imageplugin-align=${imageAlign.right}] [imagealign=${imageAlign.right}] {
    background-color: red;
  }
  .imagePluginRoot[imageplugin-align=${imageAlign.center}] [imagealign=${imageAlign.center}] {
    background-color: red;
  }
  .imagePluginRoot[imageplugin-align=${imageAlign.fullWidth}] [imagealign=${imageAlign.fullWidth}] {
    background-color: red;
  }

  .imagePluginRoot:hover .imagePluginOverlay {
    opacity: 1;
  }
  .imagePluginOverlay {
    width: 100%;
    display: flex;
    position: absolute;
    justify-content: center;
    transition: all 0.3s ease;
    opacity: 0;
  }
  .imagePluginRoot .text {
    text-align: center;
  }

  // PM Devtools hack
  .__prosemirror-dev-tools__ > div {
    position: static;
  }
`;

const DevtoolsWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

const DevtoolsRoot = styled.div`
  position: relative;
  padding-bottom: 2rem;
`;

const DevtoolsLink = styled.a`
  margin: 0 0.5rem;
`;

const ProseMirrorLatex = () => {
  const [pmState, setPmState] = useState<EditorState<typeof imageSchema>>();
  const [pmView, setPmView] = useState<EditorView<typeof imageSchema>>();
  useEffect(() => {
    const editorNode = document.querySelector("#editor");
    if (!editorNode) return;
    const menu = buildMenuItems(imageSchema).fullMenu;
    menu[1][0].content.push(imageMenuItem);
    menu[1][0].content.shift();
    const state = EditorState.create<typeof imageSchema>({
      doc: imageSchema.nodeFromJSON(initialDoc),
      plugins: [
        ...exampleSetup({
          schema: imageSchema,
          menuContent: menu,
        }),
        imagePlugin(imageSchema, { ...imagePluginSettings }),
      ],
    });
    const view: EditorView<typeof imageSchema> = new EditorView(editorNode, {
      state,
      dispatchTransaction: (tr) => {
        try {
          const newState = view.state.apply(tr);
          view.updateState(newState);
          setPmState(newState);
        } catch (e) {
          console.log(pmState);
          console.log(e);
        }
      },
    });
    setPmView(view);
    applyDevTools(view);
    // Mount PMDevtools into a div instead of showing in the bottom right corner.
    const devtools = document.querySelector(".__prosemirror-dev-tools__");
    const devtoolsRoot = document.getElementById("pmdevtools");
    if (devtools instanceof HTMLElement && devtoolsRoot) {
      devtoolsRoot.appendChild(devtools);
      devtools.style.position = "absolute";
    }
    // eslint-disable-next-line consistent-return
    return () => {
      view && view.destroy();
    };
  }, []);

  const onInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (
        pmView?.state.selection.$from.parent.inlineContent &&
        e.target.files?.length
      ) {
        const file = e.target.files[0];
        startImageUpload(
          pmView,
          file,
          file.name,
          imagePluginSettings,
          imageSchema,
          pmView.state.selection.from,
        );
      }
    },
    [pmView],
  );

  return (
    <Root>
      <input type="file" id="imageselector" onChange={onInputChange} />
      <ProseMirrorDiv id="editor" />
      <DevtoolsWrapper>
        Check out the document structure with
        <DevtoolsLink href="https://github.com/d4rkr00t/prosemirror-dev-tools">
          prosemirror-dev-tools:
        </DevtoolsLink>
        <DevtoolsRoot id="pmdevtools" />
      </DevtoolsWrapper>
    </Root>
  );
};

export default ProseMirrorLatex;
