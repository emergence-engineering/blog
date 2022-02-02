import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { buildMenuItems, exampleSetup } from "prosemirror-example-setup";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { applyDevTools } from "prosemirror-dev-toolkit";
import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import { imagePlugin, startImageUpload } from "prosemirror-image-plugin";
import { NodeType, Schema } from "prosemirror-model";
import { MenuItem } from "prosemirror-menu";
import styled from "styled-components";

import ProseMirrorDiv from "../../features/prosemirror/ProseMirrorDiv";
import { DevToolkit } from "../../features/common/components/PMUtils";

import { createPluginSettings, createSchema } from "./schema";
import { createBlockImageDoc, inlineImageDoc } from "./initialDocs";
import { resizeStyle, sideResizeStyle, withoutResizeStyle } from "./styles";

const canInsert = (state: EditorState, nodeType: NodeType) => {
  const { $from } = state.selection;
  for (let d = $from.depth; d >= 0; d -= 1) {
    const index = $from.index(d);
    if ($from.node(d).canReplaceWith(index, index, nodeType)) return true;
  }
  return false;
};

const Root = styled.div<{ withResize: boolean; sideResize: boolean }>`
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
    z-index: 2;
  }
  .imagePluginRoot .text {
    text-align: center;
  }

  ${({ withResize }) => (withResize ? resizeStyle : withoutResizeStyle)}
  ${({ sideResize }) => sideResize && sideResizeStyle}
`;

const DevtoolsWrapper = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
`;

const DevtoolsLink = styled.a`
  margin: 0 0.5rem;
`;

const Select = styled.select`
  margin: 0rem 1rem 0.5rem 0;
`;

const OptionsWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: baseline;
  margin-bottom: 0.5rem;
`;

const ProseMirrorLatex = () => {
  const [pmState, setPmState] = useState<EditorState<Schema>>();
  const [pmView, setPmView] = useState<EditorView<Schema>>();
  const [withResize, setWithResize] = useState<"withResize" | "withoutResize">(
    "withResize",
  );
  const [sideResize, setSideResize] = useState<
    "withSideResize" | "withoutSideResize"
  >("withoutSideResize");
  const [withTitle, setWithTitle] = useState<"withTitle" | "withoutTitle">(
    "withTitle",
  );
  const imagePluginSettings = useMemo(
    () =>
      createPluginSettings(
        withResize === "withResize",
        withTitle === "withTitle",
        withTitle === "withTitle",
      ),
    [withResize, withTitle],
  );
  const imageSchema = useMemo(
    () => createSchema(imagePluginSettings),
    [withResize, withTitle],
  );
  const imageMenuItem = useMemo(
    () =>
      new MenuItem({
        label: "upload image",
        select: (state) => canInsert(state, imageSchema.nodes.image),

        run() {
          document.getElementById("imageselector")?.click();
        },
      }),
    [withResize, withTitle],
  );

  const resizeSelectChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setWithResize(e.target.value);
    },
    [],
  );
  const titleSelectChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setWithTitle(e.target.value);
  }, []);
  const sideResizeSelectChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setSideResize(e.target.value);
    },
    [],
  );
  useEffect(() => {
    const editorNode = document.querySelector("#editor");
    if (!editorNode) return;
    const menu = buildMenuItems(imageSchema).fullMenu;
    menu[1][0].content.push(imageMenuItem);
    menu[1][0].content.shift();
    const state = EditorState.create<typeof imageSchema>({
      doc: imageSchema.nodeFromJSON(
        withTitle
          ? createBlockImageDoc(withTitle === "withTitle")
          : inlineImageDoc,
      ),
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
    // eslint-disable-next-line consistent-return
    return () => {
      view && view.destroy();
    };
  }, [withResize, withTitle]);

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
    <Root
      withResize={withResize === "withResize"}
      sideResize={sideResize === "withSideResize"}
    >
      <OptionsWrapper>
        <Select onChange={resizeSelectChange} value={withResize}>
          <option value="withResize">With resize</option>
          <option value="withoutResize">Without resize</option>
        </Select>
        {withResize === "withResize" && (
          <Select onChange={sideResizeSelectChange} value={sideResize}>
            <option value="withSideResize">With side resize</option>
            <option value="withoutSideResize">Without side resize</option>
          </Select>
        )}
        <Select onChange={titleSelectChange} value={withTitle}>
          <option value="withTitle">With title</option>
          <option value="withoutTitle">Without title</option>
        </Select>
        <input type="file" id="imageselector" onChange={onInputChange} />
      </OptionsWrapper>
      <ProseMirrorDiv id="editor" />
      <DevtoolsWrapper>
        Check out the document structure with
        <DevtoolsLink href="https://github.com/TeemuKoivisto/prosemirror-dev-toolkit">
          prosemirror-dev-toolkit:
        </DevtoolsLink>
        <DevToolkit />
      </DevtoolsWrapper>
    </Root>
  );
};

export default ProseMirrorLatex;
