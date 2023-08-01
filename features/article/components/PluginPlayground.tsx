import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useEffect } from "react";
import { registerCodeHighlighting } from "@lexical/code";

// const MyOnChangePlugin = (props: {
//   onChange: (editorState: EditorState) => void
// }): null => {
//   const [editor] = useLexicalComposerContext();
//   const { onChange } = props;
//
//   useEffect(() => {
//     return editor.registerUpdateListener(({ editorState }) => {
//       onChange(editorState);
//     });
//   }, [onChange, editor]);
//   return null;
// };

// TODO: listing: rm node_modules to work: the insert commands have problems
// TODO: undo doesnt work only for keyboard command
// TODO: css is not working for:
// code (or maybe I'm using the wrong one?), underline, strikethrough, link, quote, hashtag
// but I guess all of the others are broken too.

export default function CodeHighlightPlugin(): JSX.Element | null {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    return registerCodeHighlighting(editor);
  }, [editor]);

  return null;
}

////////////////////////////////////////////////////////////////

// export class LinkPreviewNode0 extends ElementNode {
//   public pastedLink: string;
//   constructor(key: string) {
//     super(key);
//     this.pastedLink = key;
//   }
//
//   static getType(): string {
//     return "linkPreview";
//   }
//
//   static clone(node: LinkPreviewNode0): LinkPreviewNode0 {
//     return new LinkPreviewNode0(node.__key);
//   }
//
//   createDOM(config: EditorConfig): HTMLElement {
//     const previewImage = document.createElement("img");
//     previewImage.className = config.theme.previewImage;
//     previewImage.setAttribute("src", "/linkprev.jpg");
//
//     const previewDescription = document.createElement("div");
//     previewDescription.className = config.theme.previewDescription;
//     previewDescription.innerText = "Lorem Ipsum";
//
//     const previewBox = document.createElement("div");
//     previewBox.className = config.theme.previewBox;
//     previewBox.appendChild(previewImage);
//     previewBox.appendChild(previewDescription);
//
//     const linkPreviewContainer = document.createElement("a");
//     linkPreviewContainer.className = config.theme.linkPreviewContainer;
//     linkPreviewContainer.href = "www.telex.hu";
//     linkPreviewContainer.target = "_blank";
//     linkPreviewContainer.innerText = this.pastedLink;
//     linkPreviewContainer.appendChild(previewBox);
//
//     return linkPreviewContainer;
//   }
//
//   updateDOM(): false {
//     return false;
//   }
//
//   // insertNewAfter(
//   //   selection: RangeSelection,
//   //   restoreSelection?: boolean | undefined,
//   // ): LexicalNode | null {
//   //   const newBlock = $createParagraphNode();
//   //   const direction = this.getDirection();
//   //   newBlock.setDirection(direction);
//   //   this.inserAfter(newBlock, restoreSelection);
//   //   return newBlock;
//   // }
//
//   collapseAtStart(): boolean {
//     const p = $createParagraphNode();
//     const children = this.getChildren();
//     children.forEach((child) => p.append(child));
//     this.replace(p);
//
//     return true;
//   }
// }

// export function $createLinkPreviewNode(pastedLink: string): LinkPreviewNode0 {
//   return new LinkPreviewNode0(pastedLink);
// }
