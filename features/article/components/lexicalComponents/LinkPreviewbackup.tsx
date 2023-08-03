import { DOMExportOutput, EditorConfig, LexicalEditor } from "lexical";
import { AutoLinkNode } from "@lexical/link";

export class LinkPreviewNode extends AutoLinkNode {
  static getType() {
    return "linkPreview";
  }
  static clone(node: LinkPreviewNode): LinkPreviewNode {
    return new LinkPreviewNode(node.__key);
  }
  createDOM(config: EditorConfig): HTMLAnchorElement {
    let previewImage = document.createElement("img");
    previewImage.className = config.theme.previewImage;
    previewImage.setAttribute("src", "/linkprev.jpg");

    const previewDescription = document.createElement("div");
    previewDescription.className = config.theme.previewDescription;
    previewDescription.innerText = "Lorem Ipsum";

    const previewBox = document.createElement("div");
    previewBox.className = config.theme.previewBox;
    previewBox.appendChild(previewImage);
    previewBox.appendChild(previewDescription);

    const linkPreviewContainer = super.createDOM(config);
    linkPreviewContainer.className = config.theme.linkPreviewContainer;
    linkPreviewContainer.target = "_blank";
    linkPreviewContainer.appendChild(previewBox);

    return linkPreviewContainer;
  }

  updateDOM(prevNode: AutoLinkNode, dom: HTMLAnchorElement): boolean {
    return false;
  }

  exportDOM(editor: LexicalEditor): DOMExportOutput {
    return super.exportDOM(editor);
  }
}
