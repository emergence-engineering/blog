import { EditorContent, useEditor } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import {
  MultipleChoiceOption,
  MultipleChoiceQuestion,
  MultipleChoiceTitle,
} from "./MCQ";
import { useCallback, useEffect, useMemo } from "react";
import { Collaboration } from "@tiptap/extension-collaboration";
import * as Y from "yjs";
import { router } from "next/client";
import { HocuspocusProvider } from "@hocuspocus/provider";
import { StudentModeExtension } from "./StudentModeExtension";

const extensions = [StarterKit];

const content = "<p>Hello World!</p>";

const Tiptap = () => {
  const ydoc = useMemo(() => {
    const doc = new Y.Doc();
    return doc;
  }, []);

  const wsProvider = useMemo(() => {
    const name =
      typeof router.query.docid === "string" ? router.query.docid : "test";
    return new HocuspocusProvider({
      url: "ws://127.0.0.1:1234/example-document",
      name: "example-document",
      document: ydoc,
      // token: "notoken",
    });
  }, []);

  // console.log(wsProvider.document);
  const editor = useEditor({
    extensions: [
      Collaboration.configure({
        document: ydoc, // Configure Y.Doc for collaboration
      }),

      MultipleChoiceOption,
      MultipleChoiceQuestion,
      MultipleChoiceTitle,
      StudentModeExtension(false),
      ...extensions,
    ],
    content,
  });
  useEffect(() => {
    if (editor) {
      import("prosemirror-dev-toolkit").then(({ applyDevTools }) =>
        applyDevTools(editor.view),
      );
    }
  }, [editor]);

  const insertMultipleChoice = useCallback(() => {
    if (!editor) return;
    editor
      .chain()
      .focus()
      .insertContent({
        type: "multipleChoiceQuestion",
        content: [
          {
            type: "multipleChoiceTitle",
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    type: "text",
                    text: "Multiple Choice Question",
                  },
                ],
              },
            ],
          },
          {
            type: "multipleChoiceOption",
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    type: "text",
                    text: "Option 1",
                  },
                ],
              },
            ],
          },
          {
            type: "multipleChoiceOption",
            attrs: { checked: true },
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    type: "text",
                    text: "Option 2",
                  },
                ],
              },
            ],
          },
        ],
      })
      .run();
  }, [editor]);
  return (
    <div>
      <button onClick={insertMultipleChoice}>insert multiplechoice</button>
      <EditorContent editor={editor} />
    </div>
  );
};
export default Tiptap;
