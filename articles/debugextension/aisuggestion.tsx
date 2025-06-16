import { createNodeFromContent, Editor, Extension } from "@tiptap/core";
import { EditorState, Plugin, PluginKey, Transaction } from "@tiptap/pm/state";
import { Step } from "@tiptap/pm/transform";
import { Decoration, DecorationSet, EditorView } from "@tiptap/pm/view";
import {
  DOMSerializer,
  Fragment,
  Node as ProseMirrorNode,
  Slice,
} from "prosemirror-model";

import "@tiptap/core";
import { recreateTransform } from "@fellow/prosemirror-recreate-transform";
import { Mapping, ReplaceStep } from "prosemirror-transform";
import { AiSuggestionAction, AiSuggestionState, Suggestion } from "./types";
import { aiSuggestionReducer } from "./aiSuggestionReducer";

// Unique plugin key
export const AiSuggestionPluginKey = new PluginKey<AiSuggestionState>(
  "aiSuggestion",
);

const processStep = (originalDoc: ProseMirrorNode) => {
  let mapping = new Mapping();
  return (step: Step, index: number) => {
    if (!(step instanceof ReplaceStep)) {
      throw new Error("Should not happen: step is not a ReplaceStep");
      return null;
    }
    const invertedMapping = mapping.invert();
    const deleteRange = {
      from: invertedMapping.map(step.from),
      to: invertedMapping.map(step.to),
    };
    mapping.appendMap(step.getMap());
    // --- Refine Fragment ---
    // Attempt to remove adjacent empty paragraph nodes often included by slice
    let refinedContent = step.slice.content;
    if (refinedContent.childCount > 1) {
      const firstChild = refinedContent.firstChild;
      const lastChild = refinedContent.lastChild;

      if (
        lastChild?.type.name === "paragraph" &&
        lastChild.content.size === 0
      ) {
        refinedContent = refinedContent.cut(
          0,
          refinedContent.size - lastChild.nodeSize,
        );
      } else if (
        refinedContent.childCount > 1 &&
        firstChild?.type.name === "paragraph" &&
        firstChild.content.size === 0
      ) {
        refinedContent = refinedContent.cut(firstChild.nodeSize);
      }
    }
    const deleteText = originalDoc.textBetween(
      deleteRange.from,
      deleteRange.to,
      "",
    );

    // Create the suggestion object using the refined content
    const suggestion: Suggestion | null = {
      id: `suggestion-${Date.now()}-${deleteRange.from}-${deleteRange.to}-${index}`,
      deleteRange: deleteRange,
      deleteText: deleteText,
      replacementOptions: [{ id: "1", content: refinedContent }], // Use refinedContent
      isRejected: false,
    };

    return suggestion;
  };
};

// ---------------------------------------------------------------
// Generate suggestions based on the diff between the original text and the AI processed text.
// ---------------------------------------------------------------
function computeDiffSuggestions(
  editor: Editor,
  processedHtml: string,
): Suggestion[] {
  const originalDoc = editor.state.doc;
  const schema = editor.schema;

  // Parse the processed HTML into a ProseMirror node
  const processedNode = createNodeFromContent(processedHtml, schema, {
    // Ensure preserveWhitespace is not set, use default
    slice: false,
  }) as ProseMirrorNode;

  // Create a transaction for diffing
  const tr = editor.state.tr;
  tr.replaceWith(0, originalDoc.content.size, processedNode.content);

  const newTr = recreateTransform(originalDoc, processedNode, {
    wordDiffs: false,
    simplifyDiff: false,
    complexSteps: false,
  });
  // Convert simplified changes into Suggestion objects
  const processStepsCb = processStep(originalDoc);

  const suggestions = newTr.steps
    .map(processStepsCb)
    .filter((s): s is Suggestion => s !== null);

  // Keep the overlap removal for now
  return suggestions;
}

// Helper function to dispatch actions by appending to the meta array
function dispatchAction(
  tr: Transaction,
  dispatch: ((tr: Transaction) => void) | undefined,
  action: AiSuggestionAction,
) {
  if (!dispatch) return;
  const currentActions = tr.getMeta(AiSuggestionPluginKey)?.actions || [];
  dispatch(
    tr.setMeta(AiSuggestionPluginKey, { actions: [...currentActions, action] }),
  );
}

// Helper function to get text content from a Fragment
function getTextFromFragment(fragment: Fragment): string {
  let text = "";
  fragment.forEach((node) => {
    if (node.isText && node.text) {
      text += node.text;
    } else if (node.content && node.content.size) {
      text += getTextFromFragment(node.content);
    }
  });
  return text;
}

// ----------------------------------------------------------------------------------
// Improved decorations for each suggestion that match Tiptap Pro's styling more closely
// ----------------------------------------------------------------------------------
function createDecorations(
  state: AiSuggestionState,
  doc: EditorState["doc"],
): DecorationSet {
  const decorations: Decoration[] = [];
  const schema = doc.type.schema; // Get schema from the document node
  const serializer = DOMSerializer.fromSchema(schema);

  state.suggestions.forEach((suggestion) => {
    const { from, to } = suggestion.deleteRange;
    // const deleteText = suggestion.deleteText; // No longer needed here
    // const contentText = getTextFromFragment(suggestion.replacementOptions[0].content); // No longer needed here

    // Inline decoration for text to be removed - red strikethrough
    decorations.push(
      Decoration.inline(from, to, {
        class: "cursor-pointer ai-suggestion-delete",
        style:
          "text-decoration: line-through; color: #e53e3e; background-color: rgba(254, 202, 202, 0.2);",
        "data-ai-suggestion-id": suggestion.id,
        "data-ai-suggestion-action": "delete",
      }),
    );

    // Widget decoration at the end of the removed text to show what would be added - green text
    // console.log(
    //   `[createDecorations] Attempting to add widget for suggestion ${suggestion.id} at pos ${to}`,
    // );
    try {
      const widgetDecoration = Decoration.widget(
        to, // Position of the widget
        () => {
          // Serialize the suggestion Fragment to a DOM DocumentFragment
          const fragment = suggestion.replacementOptions[0].content;
          const domFragment = serializer.serializeFragment(fragment);

          // --- Modification Start ---
          // Apply styles and class directly to the top-level nodes in the fragment
          const childNodes = Array.from(domFragment.childNodes);

          childNodes.forEach((node) => {
            // Apply styles only to Element nodes
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as HTMLElement;
              element.classList.add("ai-suggestion-add"); // Add class
              // Apply minimal essential inline styles
              element.style.color = "#38a169";
              element.style.backgroundColor = "rgba(209, 250, 229, 0.3)";
              element.style.borderRadius = "2px"; // Keep border radius
              // Avoid inline padding/margin which might cause spacing issues
              // Rely on the .ai-suggestion-add CSS class for spacing if needed
              element.style.cursor = "pointer";
              // Add data attributes for click handling
              element.dataset.aiSuggestionId = suggestion.id;
              element.dataset.aiSuggestionAction = "add";
            } else if (
              node.nodeType === Node.TEXT_NODE &&
              node.textContent?.trim()
            ) {
              // Optionally wrap non-empty text nodes in a styled span
              const wrapperSpan = document.createElement("span");
              wrapperSpan.className = "ai-suggestion-add";
              wrapperSpan.style.color = "#38a169";
              wrapperSpan.style.backgroundColor = "rgba(209, 250, 229, 0.3)";
              wrapperSpan.style.borderRadius = "2px";
              wrapperSpan.style.cursor = "pointer";
              wrapperSpan.dataset.aiSuggestionId = suggestion.id;
              wrapperSpan.dataset.aiSuggestionAction = "add";
              wrapperSpan.appendChild(node.cloneNode()); // Append the original text node
              // Replace the original text node with the wrapped one
              domFragment.replaceChild(wrapperSpan, node);
            }
          });

          return domFragment; // Return the DocumentFragment itself
          // --- Modification End ---
        },
        {
          side: 1, // Place widget immediately after the deletion range
          key: `widget-${suggestion.id}`,
        },
      );
      if (widgetDecoration) {
        decorations.push(widgetDecoration);
        // console.log(
        //   `[createDecorations] Successfully created and pushed widget for ${suggestion.id}`,
        // );
      } else {
        console.error(
          `[createDecorations] Decoration.widget returned null/undefined for ${suggestion.id}`,
        );
      }
    } catch (error) {
      console.error(
        `[createDecorations] Error creating/pushing widget for ${suggestion.id}:`,
        error,
      );
    }
  });

  // Log the final array structure, focusing on widget presence
  // console.log(
  //   "[createDecorations] Final decorations array before DecorationSet.create:",
  //   JSON.stringify(
  //     decorations.map((d) => ({
  //       from: d.from,
  //       to: d.to,
  //       isWidget: !!d.spec.widget,
  //       specKeys: Object.keys(d.spec),
  //     })),
  //     null,
  //     2,
  //   ),
  // );
  return DecorationSet.create(doc, decorations);
}

// ----------------------------------------------------------------------------------
// Create the TipTap extension.
// ----------------------------------------------------------------------------------
const AiSuggestionExtension = Extension.create({
  name: "aiSuggestion",
  addOptions() {
    return {};
  },
  addProseMirrorPlugins() {
    return [
      new Plugin({
        key: AiSuggestionPluginKey,
        state: {
          init: (_, { doc }) => {
            // Initialize with empty suggestions and rejections
            const initialState: AiSuggestionState = {
              suggestions: [],
              rejections: [],
              decorations: DecorationSet.empty,
            };
            return initialState;
          },
          apply: (
            tr: Transaction,
            value: AiSuggestionState,
            oldState,
            newState,
          ) => {
            // Get the array of actions from meta
            const metaActions = tr.getMeta(AiSuggestionPluginKey)?.actions as
              | AiSuggestionAction[]
              | undefined;
            let nextState = value;

            // Map suggestions and rejections through the transaction first
            const mappedSuggestions = value.suggestions.map((s) => ({
              ...s,
              deleteRange: {
                from: tr.mapping.map(s.deleteRange.from),
                to: tr.mapping.map(s.deleteRange.to, -1),
              },
            }));

            const mappedRejections = value.rejections.map((s) => ({
              ...s,
              deleteRange: {
                from: tr.mapping.map(s.deleteRange.from),
                to: tr.mapping.map(s.deleteRange.to, -1),
              },
            }));

            nextState = {
              ...nextState,
              suggestions: mappedSuggestions,
              rejections: mappedRejections,
            };

            // Apply reducer actions if any meta actions are present
            if (metaActions && metaActions.length > 0) {
              // Apply all actions sequentially using the reducer
              nextState = metaActions.reduce(aiSuggestionReducer, nextState);
            }

            // Only recalculate decorations if the document or suggestions/rejections changed significantly
            if (tr.docChanged || (metaActions && metaActions.length > 0)) {
              // We need to consider both suggestions and rejections for decoration if needed
              // For now, decorations are only based on active suggestions
              nextState.decorations = createDecorations(
                nextState,
                newState.doc,
              );
            } else {
              // If only selection changed, map decorations
              nextState.decorations = value.decorations.map(tr.mapping, tr.doc);
            }

            return nextState;
          },
        },
        props: {
          // Expose the decorations so ProseMirror renders them.
          decorations(state) {
            // Always return the latest decorations from the plugin state
            return AiSuggestionPluginKey.getState(state)?.decorations;
          },
          // Handle click events on decorated elements.
          handleDOMEvents: {
            click: (view: EditorView, event: Event) => {
              const target = event.target as HTMLElement;

              // Check if this is a suggestion element (either delete or add)
              const suggestionId = target.getAttribute("data-ai-suggestion-id");
              if (suggestionId) {
                const state = AiSuggestionPluginKey.getState(view.state);
                const suggestion = state?.suggestions.find(
                  (s) => s.id === suggestionId,
                );

                if (!suggestion) return false;

                // Use editor commands
                const { commands } = this.editor;

                if (
                  window.confirm(
                    `Approve suggestion? Replace "${suggestion.deleteText}" with "${getTextFromFragment(suggestion.replacementOptions[0].content)}". Click OK to approve, Cancel to reject.`,
                  )
                ) {
                  commands.approveAiSuggestion(
                    suggestionId,
                    suggestion.replacementOptions[0].id,
                  );
                } else {
                  commands.rejectAiSuggestion(suggestionId);
                }
                return true;
              }
              return false;
            },
          },
        },
      }),
    ];
  },

  // Command to force loading (or reloading) the AI suggestions.
  addCommands() {
    return {
      loadAiSuggestions:
        (processedHtml: string) =>
        ({ editor }) => {
          const suggestions = computeDiffSuggestions(editor, processedHtml);
          editor.commands.setAiSuggestions(suggestions);
          return true;
        },
      setAiSuggestions:
        (suggestions: Suggestion[]) =>
        ({ tr, dispatch }) => {
          // Use dispatchAction to prepare the state update meta
          dispatchAction(tr, dispatch, { type: "setSuggestions", suggestions });
          // Dispatch the transaction to apply the state update
          if (dispatch) {
            dispatch(tr);
          }
          return true;
        },
      approveAiSuggestion:
        (suggestionId: string, replacementOptionId: string = "1") =>
        ({ editor, tr, dispatch }) => {
          const state = AiSuggestionPluginKey.getState(editor.state);
          const suggestion = state?.suggestions.find(
            (s) => s.id === suggestionId,
          );
          const replacementOption = suggestion?.replacementOptions.find(
            (opt) => opt.id === replacementOptionId,
          );

          if (!suggestion || !replacementOption || !dispatch) return false;

          const { from, to } = suggestion.deleteRange;
          const content = replacementOption.content;

          // Use replaceRange with Slice for pure insertions, replaceWith for replacements
          if (from === to) {
            const slice = new Slice(content, 0, 0);
            tr.replaceRange(from, from, slice);
          } else {
            tr.replaceWith(from, to, content);
          }

          dispatchAction(tr, dispatch, {
            type: "removeSuggestion",
            suggestionId,
          });
          dispatch(tr);
          return true;
        },
      rejectAiSuggestion:
        (suggestionId: string) =>
        ({ tr, dispatch }) => {
          // Use dispatchAction to reject the suggestion
          dispatchAction(tr, dispatch, {
            type: "rejectSuggestion",
            suggestionId,
          });
          // Dispatch the transaction to apply the state update
          if (dispatch) {
            dispatch(tr);
          }
          return true;
        },
      setAiSuggestionRejections:
        (rejections: Suggestion[]) =>
        ({ tr, dispatch }) => {
          // Use dispatchAction to set rejections
          dispatchAction(tr, dispatch, { type: "setRejections", rejections });
          // Dispatch the transaction to apply the state update
          if (dispatch) {
            dispatch(tr);
          }
          return true;
        },
      approveAllSuggestions:
        () =>
        ({ editor, tr, dispatch }) => {
          const state = AiSuggestionPluginKey.getState(editor.state);
          if (!state || !dispatch || state.suggestions.length === 0)
            return false;

          const sortedSuggestions = [...state.suggestions].sort(
            (a, b) => b.deleteRange.from - a.deleteRange.from,
          );

          sortedSuggestions.forEach((suggestion) => {
            const replacementOption = suggestion.replacementOptions[0];
            const originalFrom = suggestion.deleteRange.from;
            const originalTo = suggestion.deleteRange.to;

            const mappedFrom = tr.mapping.map(originalFrom);
            const mappedTo = tr.mapping.map(originalTo);
            const content = replacementOption.content;

            if (mappedFrom <= mappedTo) {
              // Use replaceRange with Slice for pure insertions, replaceWith for replacements
              if (mappedFrom === mappedTo) {
                const slice = new Slice(content, 0, 0);
                tr.replaceRange(mappedFrom, mappedFrom, slice);
              } else {
                tr.replaceWith(mappedFrom, mappedTo, content);
              }
            } else {
              // Warning might still be useful, but keep it concise
              console.warn(
                `Skipping suggestion ${suggestion.id} in approveAll due to invalid mapping: ${mappedFrom} > ${mappedTo}`,
              );
            }
          });

          dispatchAction(tr, dispatch, { type: "clearAllSuggestions" });
          dispatch(tr);
          return true;
        },
      rejectAllSuggestions:
        () =>
        ({ editor, tr, dispatch }) => {
          if (!dispatch) return false;
          const state = AiSuggestionPluginKey.getState(editor.state);
          if (!state) return false;

          const rejections = [...state.rejections, ...state.suggestions];

          // Dispatch multiple actions using the helper
          dispatchAction(tr, dispatch, { type: "clearAllSuggestions" });
          dispatchAction(tr, dispatch, { type: "setRejections", rejections });

          return true;
        },
    };
  },
});

export { AiSuggestionExtension };
