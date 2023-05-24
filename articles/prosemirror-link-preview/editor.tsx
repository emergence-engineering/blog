import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import { Schema, DOMParser, Node } from "prosemirror-model";
import { schema } from "prosemirror-schema-basic";
import { exampleSetup } from "prosemirror-example-setup";
import { useEffect } from "react";
import { prosemirrorToYDoc, ySyncPlugin } from "y-prosemirror";
import {
  addPreviewNode,
  applyYjs,
  createDecorationsYjs,
  findPlaceholderYjs,
  IDefaultOptions,
  previewPlugin,
} from "prosemirror-link-preview";
import ProseMirrorDiv from "../../features/prosemirror/ProseMirrorDiv";
import "prosemirror-link-preview/dist/styles/styles.css";

const mySchema = new Schema({
  nodes: addPreviewNode(schema.spec.nodes),
  marks: schema.spec.marks,
});

const initialDoc = Node.fromJSON(mySchema, {
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
      type: "preview",
      attrs: {
        src: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Codinglogo.jpg",
        alt: "Image",
        title: "Emergence Engineering",
        description:
          "Emergence Engineering is a software engineering company from Budapest (EU).",
        url: "https://emergence-engineering.com/",
      },
    },
  ],
  type: "doc",
});

export default function Home() {
  const ydoc = prosemirrorToYDoc(initialDoc);

  useEffect(() => {
    const yXmlFragment = ydoc.getXmlFragment("prosemirror");

    const v = new EditorView(document.querySelector("#editor") as HTMLElement, {
      state: EditorState.create({
        doc: DOMParser.fromSchema(mySchema).parse(
          document.createElement("div"),
        ),
        plugins: [
          ...exampleSetup({ schema: mySchema }),
          ySyncPlugin(yXmlFragment),
          previewPlugin(
            async (link: string) => {
              const data = await fetch("/api/link-preview", {
                method: "POST",
                body: JSON.stringify({
                  link,
                }),
              });
              const {
                data: { url, title, description, images },
              } = await data.json();
              return { url, title, description, images };
            },
            applyYjs,
            createDecorationsYjs,
            findPlaceholderYjs,
            { openLinkOnClick: true } as IDefaultOptions,
          ),
        ],
      }),
    });

    return () => {
      v.destroy();
    };
  }, []);

  return (
    <ProseMirrorDiv>
      <div id="editor" />
    </ProseMirrorDiv>
  );
}
