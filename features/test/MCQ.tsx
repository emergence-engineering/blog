import { Node } from "@tiptap/react";

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    multipleChoiceQuestion: {
      setMultipleChoiceQuestion: ({
        id,
      }: /* todo replace `any` - ts rule: no implicit any */
      any) => ReturnType;
    };
  }
}

export type Choice = {
  id: string;
  isCorrect: boolean;
};

export const options = [
  "shuffle",
  "instantFeedback",
  "partialCredit",
  "allowMultipleAnswers",
  "makePoll",
] as const;

export const MultipleChoiceTitle: Node<unknown, unknown> = Node.create({
  name: "multipleChoiceTitle",
  group: "block",
  content: "(heading | paragraph)*",
  isolating: true,

  parseHTML() {
    return [
      {
        tag: "div[data-multipleChoiceTitle]",
      },
    ];
  },

  renderHTML({ node }) {
    return [
      "div",
      {
        class: "multiple-choice-title",
      },
      0,
    ];
  },
});

export const MultipleChoiceOption: Node<unknown, unknown> = Node.create({
  name: "multipleChoiceOption",
  group: "block",
  content: "(heading | paragraph)*",
  addAttributes() {
    return {
      checked: {
        default: false,
      },
      editable: {
        default: true,
      },
    };
  },
  isolating: true,

  addNodeView() {
    return ({ node, view, getPos }) => {
      const dom = document.createElement("div");
      dom.style.border = "1px solid black";
      dom.style.display = "flex";

      // Create a container for the content
      const content = document.createElement("div");
      const checkbox = document.createElement("input");
      const button = document.createElement("button");
      button.innerHTML = "Delete";
      button.style.border = "1px solid black";
      button.onclick = () => {
        const pos = getPos();
        const currentNode = view.state.doc.nodeAt(pos);
        if (!currentNode) return;
        const tr = view.state.tr;
        tr.delete(pos, pos + currentNode.nodeSize);
        view.dispatch(tr);
      };
      checkbox.type = "checkbox";
      checkbox.checked = node.attrs.checked;
      // TODO: Get this from the index of the current node and the parent node's correctAnswer attribute
      checkbox.onclick = (e) => {
        e.preventDefault();
        const currentNode = view.state.doc.nodeAt(getPos());
        if (!currentNode) return;
        // update the checked attribute of this node
        const tr = view.state.tr;
        tr.setNodeMarkup(getPos(), undefined, {
          checked: !currentNode.attrs.checked,
        });
        // find the other "checked" siblings and set their checked attribute to false
        const resPos = view.state.doc.resolve(getPos());
        const parent = resPos.parent;
        const parentIdx = resPos.index();
        const parentPos = resPos.before();

        // remove checked
        parent.forEach((child, offset, idx) => {
          if (idx === parentIdx) return;
          if (child.attrs.checked) {
            const pos = parentPos + 1 + parent.resolve(offset).pos;
            tr.setNodeMarkup(pos, undefined, {
              checked: false,
            });
          }
        });
        view.dispatch(tr);
      };
      dom.append(checkbox);
      dom.append(content);
      dom.append(button);

      return {
        // Pass the node view container …
        dom,
        contentDOM: content,
        update: (node) => {
          console.log("update", node.attrs.checked);
          checkbox.checked = node.attrs.checked;
          return false;
        },
        // … and the content containe;
      };
    };
  },

  parseHTML() {
    return [
      {
        tag: "div[data-multipleChoiceOption]",
      },
    ];
  },

  renderHTML({ node }) {
    return [
      "div",
      {
        class: "multiple-choice-question",
      },
      0,
    ];
  },
});

export const MultipleChoiceQuestion: Node<unknown, unknown> = Node.create({
  name: "multipleChoiceQuestion",
  group: "block",
  content: "multipleChoiceTitle multipleChoiceOption+",

  isolating: true,

  defining: true,

  draggable: true,

  selectable: false,

  inline: false,

  addAttributes() {
    return {
      id: {
        // default: v4(),
      },
      points: {
        default: 1,
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "div[data-multipleChoiceQuestion]",
      },
    ];
  },

  renderHTML({ node }) {
    return [
      "div",
      {
        "data-multipleChoiceQuestion": node.attrs.choices,
        class: "multiple-choice-question",
        style:
          "position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; background: #000; color: #fff; display: flex; align-items: center; justify-content: center;",
      },
      0,
    ];
  },

  addCommands() {
    return {
      setMultipleChoiceQuestion:
        ({ choices, allowMultipleAnswers, id }) =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            prompt: null,
            attrs: {},
          });
        },
    };
  },

  addNodeView() {
    return ({ view, node, getPos }) => {
      const dom = document.createElement("div");
      dom.style.border = "1px solid red";
      // Give other elements containing text `contentEditable = false`
      const label = document.createElement("span");
      label.innerHTML = "Node view";
      label.contentEditable = false;

      // Create a container for the content
      const content = document.createElement("div");
      const addNewOptionBtn = document.createElement("button");
      addNewOptionBtn.innerHTML = "Add new option";
      addNewOptionBtn.style.border = "1px solid black";
      addNewOptionBtn.onclick = () => {
        // send a transaction that adds a new option node
        const pos = getPos();
        const currentNode = view.state.doc.nodeAt(pos);
        if (!currentNode) return;
        const lastPos = pos + currentNode.nodeSize - 1;
        const nodeToInsert = view.state.schema.node(
          "multipleChoiceOption",
          {
            checked: false,
          },
          view.state.schema.node(
            "paragraph",
            {},
            view.state.schema.text("New option"),
          ),
        );
        view.dispatch(view.state.tr.insert(lastPos, nodeToInsert));
        if (!currentNode) return;
        console.log("add new option");
      };

      // Append all elements to the node view container
      dom.append(label, content);
      dom.append(addNewOptionBtn);

      return {
        // Pass the node view container …
        dom,
        contentDOM: content,
        // … and the content containe;
      };
    };
  },

  addKeyboardShortcuts() {
    return {};
  },
});

export default MultipleChoiceQuestion;
