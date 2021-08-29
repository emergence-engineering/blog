// eslint-disable-next-line no-use-before-define
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
import applyDevTools from "prosemirror-dev-tools";
import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import { imagePlugin, startImageUpload } from "prosemirror-image-plugin";
import { NodeType, Schema } from "prosemirror-model";
import { MenuItem } from "prosemirror-menu";
import styled from "styled-components";

import ProseMirrorDiv from "../../features/prosemirror/ProseMirrorDiv";

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

  // PM Devtools hack
  .__prosemirror-dev-tools__ > div {
    position: static;
  }
`;

const DevtoolsWrapper = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
`;

const DevtoolsRoot = styled.div`
  position: relative;
  padding-bottom: 2rem;
`;

const DevtoolsLink = styled.a`
  margin: 0 0.5rem;
`;

const ProseMirrorLatex = () => {
  const [pmState, setPmState] = useState<EditorState<Schema>>();
  const [pmView, setPmView] = useState<EditorView<Schema>>();
  const [withResize, setWithResize] = useState(true);
  const [sideResize, setSideResize] = useState(false);
  const [hasTitle, setHasTitle] = useState(false);
  const imagePluginSettings = useMemo(
    () => createPluginSettings(withResize, hasTitle, hasTitle),
    [withResize, hasTitle],
  );
  const imageSchema = useMemo(
    () => createSchema(imagePluginSettings),
    [withResize, hasTitle],
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
    [withResize, hasTitle],
  );

  const resizeSelectChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      setWithResize(e.target.value === "withResize");
    },
    [],
  );
  const titleSelectChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setHasTitle(e.target.value === "withTitle");
  }, []);
  const sideResizeSelectChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      setSideResize(e.target.value === "withSideResize");
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
        hasTitle ? createBlockImageDoc(hasTitle) : inlineImageDoc,
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
    const devtoolsRoot = document.getElementById("pmdevtools");
    if (devtoolsRoot) devtoolsRoot.innerHTML = "";
    applyDevTools(view);
    // Mount PMDevtools into a div instead of showing in the bottom right corner.
    const devtools = document.querySelector(".__prosemirror-dev-tools__");

    if (devtools instanceof HTMLElement && devtoolsRoot) {
      devtoolsRoot.appendChild(devtools);
      devtools.style.position = "absolute";
    }
    // eslint-disable-next-line consistent-return
    return () => {
      view && view.destroy();
    };
  }, [withResize, hasTitle]);

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
    <Root withResize={withResize} sideResize={sideResize}>
      <select onChange={resizeSelectChange} defaultValue="withResize">
        <option value="withResize">With resize</option>
        <option value="withoutResize">Without resize</option>
      </select>
      {withResize && (
        <select
          onChange={sideResizeSelectChange}
          defaultValue="withoutSideResize"
        >
          <option value="withSideResize">With side resize</option>
          <option value="withoutSideResize">Without side resize</option>
        </select>
      )}
      <select onChange={titleSelectChange} defaultValue="withoutTitle">
        <option value="withTitle">With title</option>
        <option value="withoutTitle">Without title</option>
      </select>
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
