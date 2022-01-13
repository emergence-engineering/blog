import { Plugin, PluginKey } from "prosemirror-state";

import { CodeBlockSettings, LanguageLoaders } from "./types";
import { codeMirrorBlockNodeView } from "./codeMirrorBlockNodeView";
import { codeBlockArrowHandlers } from "./utils";
import { CodeBlockLanguages } from "./languages";
import { defaultSettings } from "./defaults";
import languageLoaders from "./languageLoaders";

export const codeMirrorBlockKey = new PluginKey("codemirror-block");

const codeMirrorBlockPlugin = (settings: CodeBlockSettings) =>
  new Plugin({
    key: codeMirrorBlockKey,
    props: {
      nodeViews: {
        code_block: codeMirrorBlockNodeView(settings),
      },
    },
  });

export default codeMirrorBlockPlugin;

export {
  codeMirrorBlockNodeView,
  codeBlockArrowHandlers,
  codeMirrorBlockPlugin,
  CodeBlockSettings,
  LanguageLoaders,
  CodeBlockLanguages,
  defaultSettings,
  languageLoaders,
};
