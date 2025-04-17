import { Editor } from "@tiptap/core";
import { Blockquote } from "@tiptap/extension-blockquote";
import { BulletList } from "@tiptap/extension-bullet-list";
import { Document } from "@tiptap/extension-document";
import { ListItem } from "@tiptap/extension-list-item";
import { Paragraph } from "@tiptap/extension-paragraph";
import { Text } from "@tiptap/extension-text";
import { Schema } from "@tiptap/pm/model";
import { schema as basicSchema } from "prosemirror-schema-basic"; // Or your actual schema
import { builders } from "prosemirror-test-builder";
import { beforeEach, describe, expect, it } from "vitest";
import { AiSuggestionExtension } from "./aisuggestion";

// Assuming your functions are exported or accessible for testing
// You might need to adjust imports based on your actual file structure and exports

// Define a basic schema and builders for creating test documents
// const testSchema = new Schema({
//     nodes: basicSchema.spec.nodes, // Use the nodes object directly
//     marks: basicSchema.spec.marks
// });

// // Correct usage of builders
// const { doc, p, blockquote, text } = builders(testSchema, {
//     doc: { nodeType: testSchema.nodes.doc },
//     p: { nodeType: testSchema.nodes.paragraph },
//     blockquote: { nodeType: testSchema.nodes.blockquote },
//     text: { nodeType: testSchema.nodes.text }
//     // Add other nodes used in your tests
// });

// --- Setup for Helper tests ---
const basicTestSchema = new Schema({
  nodes: basicSchema.spec.nodes,
  marks: basicSchema.spec.marks,
});

const helperBuilders = builders(basicTestSchema, {
  doc: { nodeType: basicTestSchema.nodes.doc },
  p: { nodeType: basicTestSchema.nodes.paragraph },
  blockquote: { nodeType: basicTestSchema.nodes.blockquote },
  text: { nodeType: basicTestSchema.nodes.text },
});

describe("AiSuggestionExtension - Paragraph Insertions", () => {
  let editor: Editor;
  // Declare builders to be defined in beforeEach
  // @ts-ignore
  let doc: typeof helperBuilders.doc,
    p: typeof helperBuilders.p,
    blockquote: typeof helperBuilders.blockquote,
    text: typeof helperBuilders.text;

  beforeEach(() => {
    // Initialize the editor before each test
    editor = new Editor({
      extensions: [
        ListItem,
        BulletList,
        Document,
        Paragraph,
        Text,
        Blockquote, // Added Blockquote for helper tests if needed elsewhere
        AiSuggestionExtension,
      ],
      content: "", // Start empty
      // Ensure the schema is explicitly passed if not automatically inferred
      editorProps: {
        attributes: {
          // Optional: add attributes if needed
        },
      },
      // You might need to pass the schema explicitly depending on setup
      // schema: testSchema
    });

    // Get schema from the editor instance
    const editorSchema = editor.schema;

    // Define builders using the editor's schema
    // Note: Ensure the nodes exist in the editor's schema (they should via extensions)
    const buildersResult = builders(editorSchema, {
      doc: { nodeType: editorSchema.nodes.doc },
      p: { nodeType: editorSchema.nodes.paragraph },
      blockquote: { nodeType: editorSchema.nodes.blockquote },
      text: { nodeType: editorSchema.nodes.text },
    });
    // Assign to variables in the outer scope
    doc = buildersResult.doc;
    p = buildersResult.p;
    blockquote = buildersResult.blockquote;
    text = buildersResult.text;
  });

  it("should correctly handle inserting paragraphs between existing paragraphs", () => {
    const initialHtml = "<p>Line 1</p><p>Line 2</p><p>Line 3</p>";
    const processedHtml =
      "<p>Line 1</p><p>-----</p><p>Line 2</p><p>-----</p><p>Line 3</p>";
    // 1. Set initial content
    editor.commands.setContent(initialHtml);
    // 2. Load suggestions based on processed HTML
    editor.commands.loadAiSuggestions(processedHtml);
    // 3. Approve suggestions
    editor.commands.approveAllSuggestions();
    // 4. Test the final HTML
    expect(editor.getHTML()).toBe(processedHtml);
  });

  it("should correctly handle removing an empty paragraph", () => {
    const initialHtml = "<p>Hello</p><p></p><p>World</p>";
    const processedHtml = "<p>Hello</p><p>World</p>";

    // 1. Set initial content
    editor.commands.setContent(initialHtml);

    // 2. Load suggestions based on processed HTML
    editor.commands.loadAiSuggestions(processedHtml);

    // 3. Approve all suggestions
    editor.commands.approveAllSuggestions();

    // 4. Test the final HTML
    expect(editor.getHTML()).toBe(processedHtml);
  });

  it("should correctly handle inserting a single empty paragraph", () => {
    const initialHtml = "<p>Hello</p><p>World</p>";
    const processedHtml = "<p>Hello</p><p></p><p>World</p>";

    // 1. Set initial content
    editor.commands.setContent(initialHtml);

    // 2. Load suggestions based on processed HTML
    editor.commands.loadAiSuggestions(processedHtml);

    // 3. Approve all suggestions
    editor.commands.approveAllSuggestions();

    // 4. Test the final HTML
    expect(editor.getHTML()).toBe(processedHtml);
  });

  it("should replace multiple spaces with a single space within a paragraph", () => {
    // 1. Initial State
    const initialHtml = "<p>Hello   World</p>"; // Multiple spaces
    editor.commands.setContent(initialHtml);
    // editor.getHTML() might already be "<p>Hello   World</p>" if Tiptap preserves it,
    // or potentially "<p>Hello World</p>" depending on input handling.
    // For the test, let's assume setContent preserves the input HTML structure.

    // 2. AI Processed State (The goal)
    const processedHtml = "<p>Hello World</p>"; // Single space

    // --- Simulation ---
    // 3. Load suggestions
    editor.commands.loadAiSuggestions(processedHtml);
    // The plugin state should contain one suggestion:
    // - deleteRange: Covering the "   " (three spaces) text node in the original.
    // - replacementOptions[0].content: A Fragment containing a text node with " " (one space).
    // - Crucially, the `trimCommonWhitespace` check should NOT filter this,
    //   as the texts "   " and " " are different even after trimming common ends (which are none here).

    // 4. Approve all suggestions
    editor.commands.approveAllSuggestions();
    // --- End Simulation ---

    // 5. Assert Final State
    // The editor content should now match the processed HTML.
    expect(editor.getHTML()).toBe(processedHtml);
    // Final HTML: "<p>Hello World</p>"
  });

  it("should refine insertion slice by taking the first node when multiple nodes are sliced", () => {
    const initialHtml = "<p>First line.</p><p>Third line.</p>";
    editor.commands.setContent(initialHtml);

    const processedHtml =
      "<p>First line.</p><p>Second line.</p><p></p><p>Third line.</p>";

    editor.commands.loadAiSuggestions(processedHtml);
    editor.commands.approveAllSuggestions();

    expect(editor.getHTML()).toBe(processedHtml);
  });

  it("should refine insertion slice by taking the last node if the first is empty", () => {
    const initialHtml = "<p>First line.</p><p>Third line.</p>";
    editor.commands.setContent(initialHtml);

    const processedHtml =
      "<p>First line.</p><p></p><p>Second line.</p><p>Third line.</p>";

    editor.commands.loadAiSuggestions(processedHtml);
    editor.commands.approveAllSuggestions();

    expect(editor.getHTML()).toBe(processedHtml);
  });

  it("should correctly format list items with paragraphs", () => {
    const initialHtml = "<p>With wagging tails</p>";
    editor.commands.setContent(initialHtml);

    const processedHtml = `<ul><li><p>With wagging tails</p></li></ul>`;

    editor.commands.loadAiSuggestions(processedHtml);
    editor.commands.approveAllSuggestions();

    expect(editor.getHTML()).toBe(processedHtml);
  });

  it("should correctly handle mixed paragraphs and list items", () => {
    const initialHtml =
      "<p>With wagging tails and eyes so bright,</p><p>A loyal friend, a furry light.</p><p>They greet us with a joyful bark,</p><p>A happy dance in sun or dark.</p>";
    editor.commands.setContent(initialHtml);

    const processedHtml =
      "<ul><li><p>With wagging tails and eyes so bright,</p></li></ul><p>A loyal friend, a furry light.</p><ul><li><p>They greet us with a joyful bark,</p></li></ul><p>A happy dance in sun or dark.</p>";

    editor.commands.loadAiSuggestions(processedHtml);
    editor.commands.approveAllSuggestions();

    expect(editor.getHTML()).toBe(processedHtml);
  });
});
