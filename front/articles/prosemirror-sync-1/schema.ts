import { Schema } from "prosemirror-model";
import { schema } from "prosemirror-schema-basic";
import { addListNodes } from "prosemirror-schema-list";

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

export const mySchema = new Schema({
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block"),
  marks: schema.spec.marks,
});
