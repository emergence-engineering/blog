import {
  EditorConfig,
  ElementFormatType,
  LexicalEditor,
  NodeKey,
  SerializedLexicalNode,
  Spread,
} from "lexical";
import React from "react";
import { DecoratorBlockNode } from "@lexical/react/LexicalDecoratorBlockNode";
import LinkPreviewBox from "./LinkPreviewBox";

export type LinkPreviewT = {
  className: Readonly<{
    base: string;
    focus: string;
  }>;
  nodeKey: NodeKey;
  url: string;
  res: ResOfWebsite;
  showClosePreview: boolean;
  onError?: (error: string) => void;
  loadingComponent?: JSX.Element | string;
  onClose: () => void;
};

export type SerializedLinkPreviewNode = Spread<
  {
    url: string;
    res: ResOfWebsite;
    showClosePreview: boolean;

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

export class LinkPreviewNode extends DecoratorBlockNode {
  __url: string;
  __res: ResOfWebsite;
  __showClosePreview: boolean;
  constructor(
    url: string,
    res: ResOfWebsite,
    showClosePreview: boolean,
    format?: ElementFormatType,
    key?: NodeKey,
  ) {
    super(format, key);
    this.__url = url;
    this.__res = res;
    this.__showClosePreview = showClosePreview;
    if (format) this.__format = format;
  }

  static getType() {
    return "LinkPreviewNode";
  }
  static clone(node: LinkPreviewNode): LinkPreviewNode {
    return new LinkPreviewNode(
      node.__url,
      node.__res,
      node.__showClosePreview,
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
      <LinkPreviewBox
        className={className}
        url={this.__url}
        res={this.__res}
        showClosePreview={this.__showClosePreview}
        nodeKey={this.getKey()}
        onClose={() => {
          editor.update(() => {
            if (this.remove) {
              this.remove();
            }
            return true;
          });
        }}
      ></LinkPreviewBox>
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

  getShowClosePreview(): boolean {
    return this.__showClosePreview;
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
      showClosePreview: this.getShowClosePreview(),

      type: "link-preview",
      version: 1,
    };
  }

  static importJSON(
    serializedNode: SerializedLinkPreviewNode,
  ): LinkPreviewNode {
    const node = $createLinkPreviewNode(
      serializedNode.url,
      serializedNode.res,
      serializedNode.showClosePreview,
    );
    node.setFormat(serializedNode.format);
    return node;
  }
}

export function $createLinkPreviewNode(
  url: string,
  res: ResOfWebsite,
  showClosePreview: boolean,
): LinkPreviewNode {
  return new LinkPreviewNode(url, res, showClosePreview);
}
