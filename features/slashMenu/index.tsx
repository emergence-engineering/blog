import { Plugin, PluginKey } from "prosemirror-state";
import { MenuElement, SlasMenuState } from "./types";
import { DefaultConfig } from "./defaults";
import {
  dispatchWithMeta,
  findParent,
  getElementById,
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
  openSubMenu = "openSubMenu",
  closeSubMenu = "closeSubMenu",
}

const SlashMenuKey: PluginKey = new PluginKey("slash-menu-plugin");
export interface SlashMenuMeta {
  type: SlashMetaTypes;
  element?: MenuElement;
}
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
        const state: SlasMenuState = SlashMenuKey.getState(editorState);
        const slashCase = getCase(state, event, view);
        console.log({ slashCase });
        switch (slashCase) {
          case SlashCases.OpenMenu:
            dispatchWithMeta(view, SlashMenuKey, { type: SlashMetaTypes.open });
            return true;
          case SlashCases.CloseMenu: {
            const subMenuId = state.subMenuId;
            if (subMenuId) {
              console.log("here");
              dispatchWithMeta(view, SlashMenuKey, {
                type: SlashMetaTypes.closeSubMenu,
                element: getElementById(subMenuId, initialState),
              });
            } else
              dispatchWithMeta(view, SlashMenuKey, {
                type: SlashMetaTypes.close,
              });
            return true;
          }

          case SlashCases.Execute: {
            const menuElement = getElementById(state.selected, state);
            if (!menuElement) return false;
            if (menuElement.type === "command") {
              menuElement.command(view);
              dispatchWithMeta(view, SlashMenuKey, {
                type: SlashMetaTypes.execute,
              });
            }
            if (menuElement.type === "submenu") {
              dispatchWithMeta(view, SlashMenuKey, {
                type: SlashMetaTypes.openSubMenu,
                element: menuElement,
              });
              // TODO Open submenu
            }

            return true;
          }
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
        const meta: SlashMenuMeta = tr.getMeta(SlashMenuKey);
        console.log({ meta });
        switch (meta?.type) {
          case SlashMetaTypes.open:
            return { ...state, open: true };
          case SlashMetaTypes.close:
            return initialState;
          case SlashMetaTypes.execute:
            return initialState;
          case SlashMetaTypes.openSubMenu: {
            const menuElement = meta.element;
            if (menuElement?.type === "submenu") {
              return {
                ...state,
                elements: menuElement.elements,
                selected: menuElement.elements[0].id,
                subMenuId: menuElement.id,
              };
            }
            return state;
          }
          case SlashMetaTypes.closeSubMenu: {
            const menuElement = meta.element;
            if (menuElement?.type === "submenu") {
              const parentId = findParent(
                menuElement.id,
                initialState.elements,
              );
              if (parentId === "root") {
                return { ...initialState, open: true };
              }
              const parent = getElementById(parentId, initialState);
              if (parent?.type !== "submenu") return state;
              return {
                ...state,
                elements: parent.elements,
                selected: parent.elements[0].id,
                subMenuId: parentId,
              };
            }
            return state;
          }

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
