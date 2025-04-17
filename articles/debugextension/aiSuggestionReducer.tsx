// ---------------------------------------------------------
// Enhanced reducer that handles actions and updates the state.
// ---------------------------------------------------------
import { AiSuggestionAction, AiSuggestionState } from "./types";

export function aiSuggestionReducer(
  state: AiSuggestionState,
  action: AiSuggestionAction,
): AiSuggestionState {
  switch (action.type) {
    case "setSuggestions": {
      return { ...state, suggestions: action.suggestions };
    }
    case "removeSuggestion": {
      // Also remove from rejections if present there
      return {
        ...state,
        suggestions: state.suggestions.filter(
          (s) => s.id !== action.suggestionId,
        ),
        rejections: state.rejections.filter(
          (s) => s.id !== action.suggestionId,
        ),
      };
    }
    case "rejectSuggestion": {
      const suggestion = state.suggestions.find(
        (s) => s.id === action.suggestionId,
      );
      if (!suggestion) return state;

      // Move the suggestion to rejections list
      return {
        ...state,
        suggestions: state.suggestions.filter(
          (s) => s.id !== action.suggestionId,
        ),
        rejections: [...state.rejections, { ...suggestion, isRejected: true }], // Ensure isRejected is true
      };
    }
    case "setRejections": {
      return {
        ...state,
        rejections: action.rejections.map((r) => ({ ...r, isRejected: true })),
      }; // Ensure isRejected is true
    }
    case "clearAllSuggestions": {
      return { ...state, suggestions: [] };
    }
    case "clearAllRejections": {
      return { ...state, rejections: [] };
    }
    default:
      // Ensure exhaustive check if using a specific type for action
      // const _exhaustiveCheck: never = action;
      return state;
  }
}
