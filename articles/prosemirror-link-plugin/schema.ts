import { schema } from "prosemirror-schema-basic";
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
