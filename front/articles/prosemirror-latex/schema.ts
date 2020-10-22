import { Schema } from "prosemirror-model";
import { schema } from "prosemirror-schema-basic";
import { addListNodes } from "prosemirror-schema-list";
import { addLatexNode } from "prosemirror-latex";
import OrderedMap from "orderedmap";

// Ugly hack for checking schema spec type..
if (!(schema.spec.nodes instanceof OrderedMap))
  throw new Error("Incorrect schema type");

export const initialDoc = {
  content: [
    {
      content: [
        {
          text: "Start typing!",
          type: "text",
        },
      ],
      type: "paragraph",
    },
  ],
  type: "doc",
};

const withListNodes = addLatexNode(
  addListNodes(schema.spec.nodes, "paragraph block*", "block"),
);
//
const newNodes = withListNodes
  .update("list_item", {
    ...withListNodes.get("list_item"),
    draggable: true,
  })
  .update("paragraph", { ...withListNodes.get("paragraph"), draggable: true })
  .update("heading", { ...withListNodes.get("heading"), draggable: true });

export const mySchema = new Schema({
  nodes: newNodes,
  marks: schema.spec.marks,
});
