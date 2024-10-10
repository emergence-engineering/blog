import { EditorContent, useEditor } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import {
  MultipleChoiceOption,
  MultipleChoiceQuestion,
  MultipleChoiceTitle,
} from "./MCQ";
import { useCallback, useEffect } from "react";

const extensions = [StarterKit];

const content = "<p>Hello World!</p>";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      MultipleChoiceOption,
      MultipleChoiceQuestion,
      MultipleChoiceTitle,
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
