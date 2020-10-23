// eslint-disable-next-line import/prefer-default-export
import { Plugin, PluginKey } from "prosemirror-state";
import CodeMirror from "codemirror";
import OrderedMap from "orderedmap";
import { NodeSpec, Schema } from "prosemirror-model";
import { setBlockType } from "prosemirror-commands";
import("codemirror/mode/javascript/javascript");

export const latexEditor = "latexEditor";

type latexPluginState = undefined;

const latexPluginKey = new PluginKey("latexPlugin");

const latexEditorNode: NodeSpec = {
  code: true,
  content: "text*",
  defining: true,
  group: "block",
  marks: "",
  parseDOM: [{ tag: "pre", preserveWhitespace: "full" }],
  toDOM() {
    return ["pre", ["code", 0]];
  },
  attrs: { open: { default: false } },
};

export const latexPlugin = <T extends Schema>(): Plugin<latexPluginState, T> =>
  new Plugin({
    key: latexPluginKey,
    props: {
      nodeViews: {
        [latexEditor]: (node, view, getPos, decorations) => {
          // TODO: Create button to change 'open' node attribute
          // TODO: Show embedded code editor if node.attrs.open is true
          const code = document.createElement("div");
          console.log("console.log", code);
          const cm = new CodeMirror(code, {
            value: node.attrs.text,
            mode: node.attrs.language,
            lineNumbers: true,
          });
          cm.getScrollerElement().contentEditable = false;
          let updating = false,
            attrs = node.attrs;
          cm.on("changes", () => {
            if (updating) return;
            attrs = { text: cm.getValue(), language: attrs.language };
            sendAction((state, pos) =>
              state.tr.setNodeType(pos, null, attrs).action(),
            );
          });
          setTimeout(() => cm.refresh(), 50);
          // TODO: Show KaTeX rendered HTML if node.attrs.open is false
          // const dom = document.createElement("div");
          // dom.textContent = "TODO!";
          // return { dom };
          return {
            update(node) {
              if (attrs.text != node.attrs.text)
                incrementalNewValue(cm, attrs.text, node.attrs.text);
              if (attrs.language != node.attrs.language)
                cm.setOption("mode", node.attrs.language);
              attrs = node.attrs;
              return true;
            },

            parseRule() {
              return { node: latexEditor, attrs };
            },

            dom: cm.getWrapperElement(),

            select() {
              cm.focus();
              return true;
            },
          };
        },
      },
    },
  });
function maybeEscapeCode(sendAction, unit, dir) {
  return function (cm) {
    let pos = cm.getCursor();
    if (
      cm.somethingSelected() ||
      pos.line != (dir < 0 ? cm.firstLine() : cm.lastLine()) ||
      (unit == "char" && pos.ch != (dir < 0 ? 0 : cm.getLine(pos.line).length))
    )
      return CodeMirror.Pass;
    view.focus();
    sendAction((state, pos) =>
      Selection.near(state.doc.resolve(pos + (dir < 0 ? 0 : 1)), dir).action(),
    );
  };
}

function incrementalNewValue(cm, oldVal, newVal) {
  let start = 0,
    oldEnd = oldVal.length,
    newEnd = newVal.length;
  while (start < oldEnd && oldVal.charCodeAt(start) == newVal.charCodeAt(start))
    ++start;
  while (
    oldEnd > start &&
    newEnd > start &&
    oldVal.charCodeAt(oldEnd - 1) == newVal.charCodeAt(newEnd - 1)
  ) {
    oldEnd--;
    newEnd--;
  }
  cm.replaceRange(
    newVal.slice(start, newEnd),
    cm.posFromIndex(start),
    cm.posFromIndex(oldEnd),
    "docUpdate",
  );
}

// TODO: Fix typing so addLatexNode adds the "latexEditor" key to the OrderedMap
export const addLatexNode = (
  nodes: OrderedMap<NodeSpec>,
): OrderedMap<NodeSpec> => nodes.addToEnd(latexEditor, latexEditorNode);

export const insertLatexNode = <T extends Schema>(
  schema: T,
): ReturnType<typeof setBlockType> => setBlockType(schema.nodes.latexEditor);
