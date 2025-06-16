import { Schema } from "prosemirror-model";
import { schema } from "prosemirror-schema-basic";
import OrderedMap from "orderedmap";
import {
  defaultSettings,
  ImagePluginSettings,
  updateImageNode,
} from "prosemirror-image-plugin";

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
    {
      content: [
        {
          text: "Start typing!",
          type: "text",
        },
      ],
      type: "paragraph",
    },
    {
      content: [
        {
          text: "Start typing!",
          type: "text",
        },
      ],
      type: "paragraph",
    },
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

export const imagePluginSettings: ImagePluginSettings = {
  ...defaultSettings,
  hasTitle: false,
  enableResize: false,
};

export const imageSchema = new Schema({
  nodes: updateImageNode(schema.spec.nodes, {
    ...imagePluginSettings,
  }),
  marks: schema.spec.marks,
});
