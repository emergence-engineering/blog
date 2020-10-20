import { Schema } from "prosemirror-model";
import { schema } from "prosemirror-schema-basic";
import { addListNodes } from "prosemirror-schema-list";
import { addLatexNode } from "prosemirror-latex";

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

const newNodes = withListNodes
  .update("list_item", {
    ...withListNodes.get("list_item"),
    draggable: true,
  })
  .update("paragraph", { ...withListNodes.get("paragraph"), draggable: true })
  .update("heading", { ...withListNodes.get("heading"), draggable: true });

console.log({ newNodes, withListNodes });
export const mySchema = new Schema({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  nodes: newNodes,
  marks: schema.spec.marks,
});
