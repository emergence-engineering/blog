import { Editor } from "codemirror";
import { Node } from "prosemirror-model";
import { EditorView } from "prosemirror-view";

import { CodeBlockSettings } from "./types";

export const defaultCreateSelect = (
  settings: CodeBlockSettings,
  dom: HTMLElement,
  cm: Editor,
  node: Node,
  view: EditorView,
  getPos: (() => number) | boolean,
) => {
  if (!settings.languageLoaders) return () => {};
  const { languageLoaders } = settings;
  const input = document.createElement("input");
  input.setAttribute("list", "brow");
  input.className = "codeblock-input";
  const datalist = document.createElement("datalist");
  datalist.id = "brow";
  datalist.className = "codeblock-datalist";

  const noneOption = document.createElement("option");
  noneOption.value = "none";
  noneOption.textContent = settings.languageNameMap?.none || "none";
  datalist.append(noneOption);
  Object.keys(languageLoaders).forEach((lang) => {
    if (
      settings.languageWhitelist &&
      !settings.languageWhitelist.includes(lang)
    )
      return;
    const option = document.createElement("option");
    option.value = lang;
    option.textContent = settings.languageNameMap?.[lang] || lang;
    datalist.append(option);
  });
  input.value = node.attrs.lang || "none";
  dom.prepend(input);
  dom.prepend(datalist);
  input.onfocus = () => {
    input.value = "";
  };
  input.onchange /*= select.onchange */ = async (e) => {
    if (!(e.target instanceof HTMLInputElement)) return;
    input.blur();
    const lang = e.target.value;
    if (typeof getPos === "function") {
      view.dispatch(
        view.state.tr.setNodeMarkup(getPos(), undefined, {
          ...node.attrs,
          lang,
        }),
      );
    }
  };
  // Delete code.
  return () => {};
};

const defaultUpdateSelect = (
  settings: CodeBlockSettings,
  dom: HTMLElement,
  cm: Editor,
  node: Node,
  view: EditorView,
  getPos: (() => number) | boolean,
  oldNode: Node,
) => {
  if (oldNode.attrs.lang !== node.attrs.lang) {
    const input = dom.querySelector(".codeblock-input");
    if (!(input instanceof HTMLInputElement)) return;
    input.value = node.attrs.lang || "none";
  }
};

export const defaultSettings: CodeBlockSettings = {
  createSelect: defaultCreateSelect,
  updateSelect: defaultUpdateSelect,
};
