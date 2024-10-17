import { Extension } from "@tiptap/core";
import { Plugin, PluginKey } from "prosemirror-state";
import { IndexeddbPersistence } from "y-indexeddb";
import { Doc } from "yjs";

type StudentModePluginState =
  | {
      isStudent: false;
    }
  | { isStudent: true; studentDoc: Doc };

export const StudentModePluginKey = new PluginKey<StudentModePluginState>(
  "studentMode",
);

const createStudentYDoc = (docId: string, studentId: string) => {
  const ydoc = new Doc();
  new IndexeddbPersistence(`${docId}/${studentId}`, ydoc);
  return ydoc;
};

export const StudentModeExtension = (
  isStudent: boolean,
  docId?: string,
  studentId?: string,
) =>
  new Extension({
    addProseMirrorPlugins() {
      return [
        new Plugin<StudentModePluginState>({
          key: StudentModePluginKey,
          state: {
            init: () =>
              isStudent && docId && studentId
                ? {
                    isStudent: true,
                    studentDoc: createStudentYDoc(docId, studentId),
                  }
                : { isStudent: false },
            apply: (tr, value) => value,
          },
        }),
      ];
    },
  });
