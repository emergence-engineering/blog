import { Schema } from "prosemirror-model";
import { schema } from "prosemirror-schema-basic";

export const initialDoc = {
  content: [
    {
      content: [
        {
          text: "Empty",
          type: "text",
        },
      ],
      type: "paragraph",
    },
  ],
  type: "doc",
};
export const mySchema = new Schema({
  nodes: schema.spec.nodes,
  marks: schema.spec.marks,
});
