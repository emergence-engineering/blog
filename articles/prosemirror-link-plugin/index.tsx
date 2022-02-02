// eslint-disable-next-line no-use-before-define
import React, {
  ChangeEvent,
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { exampleSetup } from "prosemirror-example-setup";
import { applyDevTools } from "prosemirror-dev-toolkit";
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
import { Button } from "../../features/common/components/Button";
import { Input } from "../../features/common/components/Input";
import theme from "../../utils/theme";
import { DevToolkit } from "../../features/common/components/PMUtils";

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
`;

const DevtoolsWrapper = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
`;

const DevtoolsLink = styled.a`
  margin: 0 0.5rem;
`;

const VerticalWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 30rem;
  align-items: baseline;
  justify-content: space-between;
  margin: 0.5rem 0;
`;

const ChangedAliasWrapper = styled.div`
  display: flex;
  border-radius: 0.5rem;
  background-color: ${theme.color.primary};
  padding: 0.3rem;
  color: ${theme.color.fontWhite};
`;

const ChangeListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 1rem;
  min-height: 2rem;
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
  return Decoration.inline(
    start,
    end,

    {
      class: "autoLink",
      onclick: `alert('You clicked on "${alias}"')`,
    },
    { id: spec?.id, alias },
  );
};

const AliasListItem: FunctionComponent<
  LinkSpec & {
    setAliases: (aliases: LinkSpec[]) => void;
    aliases: LinkSpec[];
  }
> = ({ id, alias, setAliases, aliases }) => {
  const onButtonClick = useCallback(
    () => setAliases(aliases.filter(({ id: aliasId }) => aliasId !== id)),
    [aliases, id],
  );
  return (
    <VerticalWrapper key={id}>
      {alias}
      <Button onClick={onButtonClick} type="button">
        Delete alias
      </Button>
    </VerticalWrapper>
  );
};

const AddedLink: FunctionComponent<{ link: LinkSpec }> = ({ link }) => (
  <ChangedAliasWrapper>{`alias: ${link.alias}, id: ${link.id}`}</ChangedAliasWrapper>
);
const RemovedLink: FunctionComponent<{ link: LinkSpec }> = ({ link }) => (
  <ChangedAliasWrapper>{`alias: ${link.alias}, id: ${link.id}`}</ChangedAliasWrapper>
);

const ProseMirrorLink = () => {
  const [addInput, setAddInput] = useState("new alias");
  const [pmView, setPmView] = useState<EditorView<typeof schema>>();
  const [pmState, setPmState] = useState<EditorState<typeof schema>>();
  const [aliases, setAliases] = useState<LinkSpec[]>([
    { alias: "typing", id: 1 },
  ]);
  const [addedLinks, setAddedLinks] = useState<LinkSpec[]>();
  const [removedLinks, setRemovedLinks] = useState<LinkSpec[]>();
  useEffect(() => {
    const editorNode = document.querySelector("#editor");
    if (!editorNode) return;
    const state = EditorState.create<typeof schema>({
      doc: schema.nodeFromJSON(initialDoc),
      plugins: [
        ...exampleSetup({
          schema,
        }),
        autoLinkingPlugin(
          aliases,
          aliasDecoration,
          setAddedLinks,
          setRemovedLinks,
        ),
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

  const onInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setAddInput(e.target.value),
    [],
  );
  const onAddAliasClick = useCallback(() => {
    !aliases.find(({ alias }) => alias === addInput) &&
      setAliases([
        ...aliases,
        {
          alias: addInput,
          id: aliases.reduce((acc, curr) => Math.max(acc, curr.id), 0) + 1,
        },
      ]);
    setAddInput("");
  }, [aliases, addInput]);
  return (
    <Root>
      <ProseMirrorDiv id="editor" />
      <div>
        {aliases.map(({ id, alias }) => (
          <AliasListItem
            id={id}
            alias={alias}
            key={id}
            setAliases={setAliases}
            aliases={aliases}
          />
        ))}
        <VerticalWrapper>
          <Input
            value={addInput}
            onChange={onInputChange}
            placeholder="Enter new alias here"
          />
          <Button onClick={onAddAliasClick} type="button">
            Add alias
          </Button>
        </VerticalWrapper>
      </div>
      <div>
        Recently added links:
        <ChangeListWrapper>
          {addedLinks?.map((alias, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <AddedLink link={alias} key={index} />
          ))}
        </ChangeListWrapper>
      </div>
      <div>
        Recently removed links:
        <ChangeListWrapper>
          {removedLinks?.map((alias, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <RemovedLink link={alias} key={index} />
          ))}
        </ChangeListWrapper>
      </div>
      <DevtoolsWrapper>
        Check out the document structure with
        <DevtoolsLink href="https://github.com/d4rkr00t/prosemirror-dev-tools">
          prosemirror-dev-tools:
        </DevtoolsLink>
        <DevToolkit />
      </DevtoolsWrapper>
    </Root>
  );
};

export default ProseMirrorLink;
