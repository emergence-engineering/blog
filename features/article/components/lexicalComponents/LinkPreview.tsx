import {
  $insertNodes,
  COMMAND_PRIORITY_LOW,
  DOMExportOutput,
  EditorConfig,
  ElementFormatType,
  LexicalEditor,
  NodeKey,
  PASTE_COMMAND,
} from "lexical";
import React, { FC, useEffect } from "react";
import { DecoratorBlockNode } from "@lexical/react/LexicalDecoratorBlockNode";
import { BlockWithAlignableContents } from "@lexical/react/LexicalBlockWithAlignableContents";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $createAutoLinkNode } from "@lexical/link";

type LinkPreviewT = {
  className: Readonly<{
    base: string;
    focus: string;
  }>;
  nodeKey: NodeKey;
  url: string;
  onError?: (error: string) => void;
  loadingComponent?: JSX.Element | string;
  onLoad?: () => void;
};

const LinkPreviewContainer: FC<LinkPreviewT> = ({
  className,
  nodeKey,
  url,
}): JSX.Element => {
  return (
    <BlockWithAlignableContents className={className} nodeKey={nodeKey}>
      <a href={url} target={"_blank"}>
        {/*<span>{url}</span>*/}
        <div className={"previewBox"}>
          <img className={"previewImage"} src={"/linkprev.jpg"} />
          <div className={"previewDescription"}>Lorem ipsum</div>
        </div>
      </a>
    </BlockWithAlignableContents>
  );
};

////////////////////////////////////////////////////////////////
export class LinkPreviewNode extends DecoratorBlockNode {
  __url: string;
  constructor(url: string, format?: ElementFormatType, key?: NodeKey) {
    super(format, key);
    this.__url = url;
  }

  static getType() {
    return "LinkPreviewNode";
  }
  static clone(node: LinkPreviewNode): LinkPreviewNode {
    return new LinkPreviewNode(node.__url, node.__format, node.__key);
  }

  decorate(editor: LexicalEditor, config: EditorConfig): JSX.Element {
    const linkPreviewStyle = config.theme.linkPreviewContainer;
    const className = {
      base: linkPreviewStyle.base,
      focus: linkPreviewStyle.focus,
    };

    return (
      <>
        <LinkPreviewContainer
          className={className}
          url={this.__url}
          nodeKey={this.getKey()}
        ></LinkPreviewContainer>
      </>
    );
  }
  updateDOM(): false {
    return false;
  }

  exportDOM(editor: LexicalEditor): DOMExportOutput {
    return super.exportDOM(editor);
  }
}

export function $createLinkPreviewNode(url: string): LinkPreviewNode {
  return new LinkPreviewNode(url);
}

////////////////////////////////////////////////////////////////

// export class WorkingLinkNode extends LinkNode {
//   __url: string;
//   static getType() {
//     return "LinkNode";
//   }
//   static clone(node: WorkingLinkNode): WorkingLinkNode {
//     return new WorkingLinkNode(node.__url);
//   }
//
//   constructor(url: string, attributes?: LinkAttributes, key?: NodeKey) {
//     super(url, attributes, key);
//     this.__url = url;
//     console.log("im in");
//   }
//
//   createDOM(config: EditorConfig): HTMLAnchorElement {
//     console.log("Creating");
//     const workingLink = document.createElement("a");
//     workingLink.href = this.__url;
//     workingLink.text = this.__url;
//     workingLink.target = "__blank";
//     workingLink.className = config.theme.mylink;
//     return workingLink;
//   }
//
//   updateDOM(prevNode: LinkNode, dom: HTMLAnchorElement): boolean {
//     return false;
//   }
// }
// export function $createWorkingLinkNode(url: string): WorkingLinkNode {
//   return new WorkingLinkNode(url);
// }

////////////////////////////////////////////////////////////////
export const LinkPreviewPlugin = (): null => {
  const [editor] = useLexicalComposerContext();
  if (!editor.hasNodes([LinkPreviewNode]))
    throw new Error("LinkPreviewNode is not registered in the editor");

  const urlRegexp =
    /((https?:\/\/(www\.)?)|(www\.))[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

  useEffect(() => {
    const removeListener = editor.registerCommand(
      PASTE_COMMAND,
      (event: ClipboardEvent) => {
        const clipboardData = event.clipboardData;
        const pastedItem = clipboardData?.getData("text");

        if (typeof pastedItem === "string") {
          if (urlRegexp.test(pastedItem)) {
            editor.update(() => {
              $insertNodes([
                $createAutoLinkNode(pastedItem),
                $createLinkPreviewNode(pastedItem),
              ]);
            });
            return true;
          }
          return false;
        }
        return false;
      },
      COMMAND_PRIORITY_LOW,
    );
    return () => {
      removeListener();
    };
  }, [editor]);
  return null;
};
