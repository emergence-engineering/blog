import { schema } from "prosemirror-schema-basic";
import { Schema } from "prosemirror-model";
import OrderedMap from "orderedmap";

// Ugly hack for checking schema spec type..
if (!(schema.spec.nodes instanceof OrderedMap))
  throw new Error("Incorrect schema type");

const codeBlockSpec = schema.spec.nodes.get("code_block");

console.log({ codeBlockSpec });
export default new Schema({
  nodes: schema.spec.nodes.update("code_block", {
    ...(codeBlockSpec || {}),
    attrs: { ...codeBlockSpec?.attrs, lang: { default: null } },
  }),
  marks: schema.spec.marks,
});
