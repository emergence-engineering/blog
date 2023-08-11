import {
  $getRoot,
  $insertNodes,
  COMMAND_PRIORITY_CRITICAL,
  EditorConfig,
  ElementFormatType,
  LexicalEditor,
  NodeKey,
  PASTE_COMMAND,
  SerializedLexicalNode,
  Spread,
} from "lexical";
import React, { FC, useEffect } from "react";
import { DecoratorBlockNode } from "@lexical/react/LexicalDecoratorBlockNode";
import { BlockWithAlignableContents } from "@lexical/react/LexicalBlockWithAlignableContents";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

type LinkPreviewT = {
  className: Readonly<{
    base: string;
    focus: string;
  }>;
  nodeKey: NodeKey;
  url: string;
  res: ResOfWebsite;
  onError?: (error: string) => void;
  loadingComponent?: JSX.Element | string;
  onLoad?: () => void;
};

export type SerializedLinkPreviewNode = Spread<
  {
    url: string;
    res: ResOfWebsite;
    format: ElementFormatType;
  },
  SerializedLexicalNode
>;

export type ResOfWebsite = {
  url: string;
  title: string;
  description: string;
  images: Array<string>;
};

const LinkPreviewContainer: FC<LinkPreviewT> = ({
  className,
  nodeKey,
  url,
  res,
}): JSX.Element => {
  return (
    <BlockWithAlignableContents className={className} nodeKey={nodeKey}>
      <a href={url} target={"_blank"}>
        <div className={"previewBox"}>
          <img className={"previewImage"} src={res.images[0]} alt={""} />
          <div className={"previewText"}>
            <div className={"previewTitle"}>{res.title}</div>
            <div className={"previewDescription"}>{res.description}</div>
          </div>
        </div>
      </a>
    </BlockWithAlignableContents>
  );
};

////////////////////////////////////////////////////////////////

export class LinkPreviewNode extends DecoratorBlockNode {
  __url: string;
  __res: ResOfWebsite;
  constructor(
    url: string,
    res: ResOfWebsite,
    format?: ElementFormatType,
    key?: NodeKey,
  ) {
    super(format, key);
    this.__url = url;
    this.__res = res;
    if (format) this.__format = format;
  }

  static getType() {
    return "LinkPreviewNode";
  }
  static clone(node: LinkPreviewNode): LinkPreviewNode {
    return new LinkPreviewNode(
      node.__url,
      node.__res,
      node.__format,
      node.__key,
    );
  }

  decorate(editor: LexicalEditor, config: EditorConfig): JSX.Element {
    const linkPreviewStyle = config.theme.linkPreviewContainer;
    const className = {
      base: linkPreviewStyle.base,
      focus: linkPreviewStyle.focus,
    };

    return (
      <LinkPreviewContainer
        className={className}
        url={this.__url}
        res={this.__res}
        nodeKey={this.getKey()}
      ></LinkPreviewContainer>
    );
  }
  updateDOM(): false {
    return false;
  }

  getURL(): string {
    return this.getLatest().__url;
  }

  getRes(): ResOfWebsite {
    return this.getLatest().__res;
  }

  setFormat(format: ElementFormatType): void {
    const self = this.getWritable();
    self.__format = format;
  }

  exportJSON(): SerializedLinkPreviewNode {
    return {
      ...super.exportJSON(),
      format: this.__format || "",
      url: this.getURL(),
      res: this.getRes(),
      type: "link-preview",
      version: 1,
    };
  }

  static importJSON(
    serializedNode: SerializedLinkPreviewNode,
  ): LinkPreviewNode {
    const node = $createLinkPreviewNode(serializedNode.url, serializedNode.res);
    node.setFormat(serializedNode.format);
    return node;
  }
}

export function $createLinkPreviewNode(
  url: string,
  res: ResOfWebsite,
): LinkPreviewNode {
  return new LinkPreviewNode(url, res);
}

////////////////////////////////////////////////////////////////
export const LinkPreviewPlugin = ({
  showLink,
  fetchingFunction,
}: {
  showLink: boolean;
  fetchingFunction: (link: string) => Promise<ResOfWebsite>;
}): null => {
  const [editor] = useLexicalComposerContext();
  const result = [
    { url: "", title: "", description: "", images: ["/linkprev.jpg", ""] },
  ];
  let alreadyHaveIt: ResOfWebsite | undefined;

  if (!editor.hasNodes([LinkPreviewNode]))
    throw new Error("LinkPreviewNode" + " is not registered in the editor");

  const urlRegexp =
    /((https?:\/\/(www\.)?)|(www\.))[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/;

  useEffect(() => {
    const removeListener = editor.registerCommand(
      PASTE_COMMAND,
      (event: ClipboardEvent) => {
        const clipboardData = event.clipboardData;
        const pastedItem = clipboardData?.getData("text");
        console.log(fetchingFunction);

        if (typeof pastedItem === "string") {
          if (urlRegexp.test(pastedItem)) {
            const createPreview = async () => {
              await fetchingFunction(pastedItem).then((res) => {
                alreadyHaveIt = result.find(
                  (website) => res.url === website.url,
                );
                if (!alreadyHaveIt) {
                  result.unshift(res);
                }
              });

              if (!alreadyHaveIt) {
                editor.update(() => {
                  if (showLink) {
                    $getRoot()
                      .getLastChild()
                      ?.append($createLinkPreviewNode(pastedItem, result[0]));
                  } else {
                    $insertNodes([
                      $createLinkPreviewNode(pastedItem, result[0]),
                    ]);
                  }
                  return true;
                });
              }
            };
            createPreview();
            return !showLink;
          }
          return false;
        }
        return false;
      },
      COMMAND_PRIORITY_CRITICAL,
    );
    return () => {
      removeListener();
    };
  }, [editor, fetchingFunction]);
  return null;
};
