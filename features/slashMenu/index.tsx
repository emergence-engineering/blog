import { Plugin, PluginKey } from "prosemirror-state";
import { SlasMenuState } from "./types";
import { DefaultConfig } from "./defaults";
import { hasDuplicateIds } from "./utils";

const SlashMenuKey: PluginKey = new PluginKey("slash-menu-plugin");
const SlashMenuPlugin = (config?: SlasMenuState) => {
  const initialState = config || DefaultConfig;
  if (hasDuplicateIds(initialState)) {
    throw new Error("Menu elements must have unique id's!");
  }
  return new Plugin<SlasMenuState>({
    key: SlashMenuKey,
    props: {},
    state: {
      init() {
        return initialState;
      },
      apply(tr, state, oldEditorState, newEditorState) {
        console.log({ selected: state.selected });
        return state;
      },
    },
  });
};
export default SlashMenuPlugin;
