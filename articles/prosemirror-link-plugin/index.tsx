// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { buildMenuItems, exampleSetup } from "prosemirror-example-setup";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import applyDevTools from "prosemirror-dev-tools";
import { EditorState } from "prosemirror-state";
import { Decoration, EditorView } from "prosemirror-view";
import styled from "styled-components";
import { schema } from "prosemirror-schema-basic";
import {
  autoLinkingPlugin,
  linksKey,
  LinksKeyState,
  LinksMeta,
  LinksMetaType,
} from "prosemirror-link-plugin";

import ProseMirrorDiv from "../../features/prosemirror/ProseMirrorDiv";

import { initialDoc } from "./schema";

const Root = styled.div`
  .autoLink {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: lightblue;
    color: black;
    border: 1px solid blueviolet;
    width: fit-content;
    height: 1.4rem;
    padding: 3px 5px 3px 5px;
    border-radius: 5px;
    margin-left: 3px;
    margin-right: 3px;
    cursor: pointer;
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

export interface LinkSpec {
  id: number;
  alias: string;
}

export const aliasDecoration = (
  start: number,
  end: number,
  alias: string,
  matchPos: number,
  pluginState: LinksKeyState<LinkSpec>,
) => {
  const spec = pluginState.aliasToSpec[alias];
  console.log({ start, end, alias, spec, pluginState });
  return Decoration.inline(
    start,
    end,

    {
      class: "autoLink",
      // It is not a href since a href would exit Next js and go to the link directly, causing a refresh
      onclick: `window.next.router.push('/local/nugget?nuggetId=${spec?.id}')`,
    },
    { id: spec?.id, alias },
  );
};

const ProseMirrorLink = () => {
  const [addInput, setAddInput] = useState("new alias");
  const [pmView, setPmView] = useState<EditorView<typeof schema>>();
  const [pmState, setPmState] = useState<EditorState<typeof schema>>();
  const [aliases, setAliases] = useState([
    // { alias: "typing", id: 1 },
    // { alias: "macska", id: 2 },
  ]);
  useEffect(() => {
    const editorNode = document.querySelector("#editor");
    if (!editorNode) return;
    const state = EditorState.create<typeof schema>({
      doc: schema.nodeFromJSON(initialDoc),
      plugins: [
        ...exampleSetup({
          schema,
        }),
        autoLinkingPlugin(aliases, aliasDecoration),
      ],
    });
    const view: EditorView<typeof schema> = new EditorView(editorNode, {
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
  useEffect(() => {
    if (!pmView) {
      return;
    }
    const meta: LinksMeta<LinkSpec> = {
      type: LinksMetaType.linkUpdate,
      specs: aliases,
    };
    pmView.dispatch(pmView.state.tr.setMeta(linksKey, meta));
  }, [aliases, pmView]);
  return (
    <Root>
      <ProseMirrorDiv id="editor" />
      <div>
        {aliases.map(({ id, alias }) => (
          <div key={id}>
            {alias}
            <button
              onClick={() =>
                setAliases(aliases.filter(({ id: aliasId }) => aliasId !== id))
              }
            >
              Delete alias
            </button>
          </div>
        ))}
        <div>
          <input
            value={addInput}
            onChange={(e) => setAddInput(e.target.value)}
          />
          <button
            onClick={() =>
              !aliases.find(({ alias }) => alias === addInput) &&
              setAliases([
                ...aliases,
                {
                  alias: addInput,
                  id:
                    aliases.reduce((acc, curr) => Math.max(acc, curr.id), 0) +
                    1,
                },
              ])
            }
          >
            Add alias
          </button>
        </div>
      </div>
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

export default ProseMirrorLink;
