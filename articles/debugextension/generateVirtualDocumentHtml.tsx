// ---------------------------------------------------------
// Generate virtual HTML document with all current suggestions applied
// ---------------------------------------------------------
import { Editor, generateHTML } from "@tiptap/core";
import { Suggestion } from "./types";

export function generateVirtualDocumentHtml(
  editor: Editor,
  suggestions: Suggestion[],
): string {
  // If no suggestions, return the original HTML directly
  if (suggestions.length === 0) {
    return editor.getHTML();
  }

  try {
    // Start a transaction from the current state
    let tr = editor.state.tr;

    // Sort suggestions by start position, DESCENDING, to apply changes from the end
    // This avoids shifting indices affecting subsequent replacements within this loop
    const sortedSuggestions = [...suggestions].sort(
      (a, b) => b.deleteRange.from - a.deleteRange.from,
    );

    sortedSuggestions.forEach((suggestion) => {
      const originalFrom = suggestion.deleteRange.from;
      const originalTo = suggestion.deleteRange.to;
      const replacementContent = suggestion.replacementOptions[0].content;

      // Map the original range according to changes *already added to this transaction*
      // Use step MAPPING, not document mapping here
      const mappedFrom = tr.mapping.map(originalFrom);
      const mappedTo = tr.mapping.map(originalTo);

      // Apply the replacement using the mapped range
      if (mappedFrom <= mappedTo) {
        tr.replaceWith(mappedFrom, mappedTo, replacementContent);
      } else {
        console.warn(
          `Skipping suggestion ${suggestion.id} in virtual doc due to invalid range after mapping: ${mappedFrom} > ${mappedTo}`,
        );
      }
    });

    // Get the document resulting from this transaction *without applying it to the actual editor*
    const finalDoc = editor.state.apply(tr).doc;

    // Serialize the final document node to clean HTML using Tiptap's utility
    const html = generateHTML(finalDoc.toJSON(), editor.options.extensions);

    return html;
  } catch (error) {
    console.error("Error generating virtual HTML using Transaction:", error);
    return generateHTML(editor.state.doc.toJSON(), editor.options.extensions);
  }
}