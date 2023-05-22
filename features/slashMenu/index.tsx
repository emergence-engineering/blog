import { Plugin, PluginKey } from "prosemirror-state";
import { SlasMenuState } from "./types";
import { DefaultConfig } from "./defaults";
import {
  dispatchWithMeta,
  getNextItemId,
  getPreviousItemId,
  hasDuplicateIds,
} from "./utils";
import { getCase, SlashCases } from "./cases";

export enum SlashMetaTypes {
  open = "open",
  close = "close",
  execute = "execute",
  nextItem = "nextItem",
  prevItem = "prevItem",
}

const SlashMenuKey: PluginKey = new PluginKey("slash-menu-plugin");

const SlashMenuPlugin = (config?: SlasMenuState) => {
  const initialState = config || DefaultConfig;
  if (hasDuplicateIds(initialState)) {
    throw new Error("Menu elements must have unique id's!");
  }
  return new Plugin<SlasMenuState>({
    key: SlashMenuKey,
    props: {
      handleKeyDown(view, event) {
        const editorState = view.state;
        const state = SlashMenuKey.getState(editorState);
        const slashCase = getCase(state, event);
        console.log({ slashCase });
        switch (slashCase) {
          case SlashCases.OpenMenu:
            dispatchWithMeta(view, SlashMenuKey, { type: SlashMetaTypes.open });
            return true;
          case SlashCases.CloseMenu:
            dispatchWithMeta(view, SlashMenuKey, {
              type: SlashMetaTypes.close,
            });
            return true;
          case SlashCases.Execute:
            dispatchWithMeta(view, SlashMenuKey, {
              type: SlashMetaTypes.execute,
            });
            return true;
          case SlashCases.NextItem:
            dispatchWithMeta(view, SlashMenuKey, {
              type: SlashMetaTypes.nextItem,
            });
            return true;
          case SlashCases.PrevItem:
            dispatchWithMeta(view, SlashMenuKey, {
              type: SlashMetaTypes.prevItem,
            });
            return true;

          default:
            return false;
        }
      },
    },
    state: {
      init() {
        return initialState;
      },
      apply(tr, state, oldEditorState, newEditorState) {
        const meta = tr.getMeta(SlashMenuKey);
        switch (meta?.type) {
          case SlashMetaTypes.open:
            return { ...state, open: true };
          case SlashMetaTypes.close:
            return initialState;
          case SlashMetaTypes.execute:
            return initialState;
          case SlashMetaTypes.nextItem: {
            const nextId = getNextItemId(state);
            if (!nextId) return state;
            return { ...state, selected: nextId };
          }
          case SlashMetaTypes.prevItem: {
            const prevId = getPreviousItemId(state);
            if (!prevId) return state;
            return { ...state, selected: prevId };
          }
        }

        return state;
      },
    },
  });
};
export default SlashMenuPlugin;
