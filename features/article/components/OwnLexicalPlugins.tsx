import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  $createParagraphNode,
  $getSelection,
  $isRangeSelection,
  COMMAND_PRIORITY_LOW,
  createCommand,
  EditorConfig,
  ElementNode,
  LexicalNode,
  RangeSelection,
} from "lexical";
import { $setBlocksType } from "@lexical/selection";
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

////////////////////////////////////////////////////////////////
// 1.)
export class BannerNode extends ElementNode {
  // constructor(key?: NodeKey) {
  //   super(key);
  // }

  static getType(): string {
    return "banner";
  }

  static clone(node: BannerNode): BannerNode {
    return new BannerNode(node.__key);
  }

  createDOM(config: EditorConfig): HTMLElement {
    const element = document.createElement("div");
    element.style.backgroundColor = "lightblue";
    return element;
  }

  updateDOM(): false {
    return false;
  }

  insertNewAfter(
    selection: RangeSelection,
    restoreSelection?: boolean | undefined,
  ): LexicalNode | null {
    const newBlock = $createParagraphNode();
    const direction = this.getDirection();
    newBlock.setDirection(direction);
    this.inserAfter(newBlock, restoreSelection);
    return newBlock;
  }

  collapseAtStart(): boolean {
    const p = $createParagraphNode();
    const children = this.getChildren();
    children.forEach((child) => p.append(child));
    this.replace(p);

    return true;
  }
}

export function $createBannerNode(): BannerNode {
  return new BannerNode();
}

// function $isBannerNode(node: LexicalNode): node is BannerNode {
//   return node instanceof BannerNode;
// }

////////////////////////////////////////////////////////////////
// 2.)
export const INSERT_BANNER_COMMAND = createCommand("insertCommand");

////////////////////////////////////////////////////////////////
// 3.)
export const BannerPlugin = (): null => {
  const [editor] = useLexicalComposerContext();
  if (!editor.hasNodes([BannerNode]))
    throw new Error("BannerNode is not registered in the editor");

  editor.registerCommand(
    INSERT_BANNER_COMMAND,
    () => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $setBlocksType(selection, $createBannerNode);
      }
      return true;
    },
    COMMAND_PRIORITY_LOW,
  );
  return null;
};

////////////////////////////////////////////////////////////////

export default function CodeHighlightPlugin(): JSX.Element | null {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    return registerCodeHighlighting(editor);
  }, [editor]);

  return null;
}
