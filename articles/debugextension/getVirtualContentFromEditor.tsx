import { Editor, generateHTML } from "@tiptap/core";
import { generateVirtualDocumentHtml } from "./generateVirtualDocumentHtml";
import { AiSuggestionPluginKey } from "./aisuggestion";

/**
 * Generates the HTML content as if all current suggestions were applied.
 * @param editor The Tiptap editor instance.
 * @returns The virtual HTML string.
 */
export function getVirtualContentFromEditor(editor: Editor): string {
  if (!editor || editor.isDestroyed) {
    console.warn(
      "Editor instance not available or destroyed for getVirtualContentFromEditor",
    );
    return "";
  }

  const state = AiSuggestionPluginKey.getState(editor.state);
  const currentSuggestions = state?.suggestions || [];

  // Generate virtual HTML with current suggestions applied, or current state HTML if none
  const virtualHtml =
    currentSuggestions.length > 0
      ? generateVirtualDocumentHtml(editor, currentSuggestions)
      : generateHTML(editor.state.doc.toJSON(), editor.options.extensions);

  return virtualHtml;
}