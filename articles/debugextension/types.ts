import { Fragment } from "prosemirror-model";
import { DecorationSet } from "prosemirror-view";

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    aiSuggestion: {
      /**
       * Loads AI suggestions with the given prompt
       */
      loadAiSuggestions: (processedHtml: string) => ReturnType;
      /**
       * Sets AI suggestions directly
       */
      setAiSuggestions: (suggestions: Suggestion[]) => ReturnType;
      /**
       * Approves a suggestion by its ID.
       */
      approveAiSuggestion: (
        suggestionId: string,
        replacementOptionId?: string,
      ) => ReturnType;
      /**
       * Rejects a suggestion by its ID.
       */
      rejectAiSuggestion: (suggestionId: string) => ReturnType;
      /**
       * Sets rejected suggestions
       */
      setAiSuggestionRejections: (rejections: Suggestion[]) => ReturnType;
      /**
       * Approves all remaining suggestions.
       */
      approveAllSuggestions: () => ReturnType;
      /**
       * Rejects all remaining suggestions.
       */
      rejectAllSuggestions: () => ReturnType;
    };
  }
}
// -------------------------
// Define suggestion types
// -------------------------
export interface Suggestion {
  id: string;
  deleteRange: { from: number; to: number };
  deleteText: string;
  replacementOptions: { id: string; content: Fragment }[];
  isRejected: boolean;
}

// Define the plugin state interface.
export interface AiSuggestionState {
  suggestions: Suggestion[];
  rejections: Suggestion[];
  decorations: DecorationSet;
}

// Define action types for the reducer
type SetSuggestionsAction = {
  type: "setSuggestions";
  suggestions: Suggestion[];
};
type RemoveSuggestionAction = {
  type: "removeSuggestion";
  suggestionId: string;
};
type RejectSuggestionAction = {
  type: "rejectSuggestion";
  suggestionId: string;
}; // Renamed for clarity
type SetRejectionsAction = { type: "setRejections"; rejections: Suggestion[] };
type ClearAllSuggestionsAction = { type: "clearAllSuggestions" };
type ClearAllRejectionsAction = { type: "clearAllRejections" }; // Added for completeness
export type AiSuggestionAction =
  | SetSuggestionsAction
  | RemoveSuggestionAction
  | RejectSuggestionAction
  | SetRejectionsAction
  | ClearAllSuggestionsAction
  | ClearAllRejectionsAction;
