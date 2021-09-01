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

export const getBase64FromUrl = async (url: string): Promise<string> => {
  const data = await fetch(url);
  const blob = await data.blob();
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      const base64data = reader.result as string;
      resolve(base64data);
    };
  });
};

export const createPluginSettings: (
  withResize: boolean,
  isBlock: boolean,
  hasTitle: boolean,
) => ImagePluginSettings = (withResize, isBlock, hasTitle) => ({
  ...defaultSettings,
  enableResize: withResize,
  isBlock,
  hasTitle,
  scaleImage: false,
});

export const createSchema = (pluginSettings: ImagePluginSettings) =>
  new Schema({
    nodes: updateImageNode(schema.spec.nodes, pluginSettings),
    marks: schema.spec.marks,
  });
