import React, { FC } from "react";
import { BlockWithAlignableContents } from "@lexical/react/LexicalBlockWithAlignableContents";
import { LinkPreviewT } from "./LinkPreviewNode";

const LinkPreviewBox: FC<LinkPreviewT> = ({
  className,
  nodeKey,
  url,
  res,
  showClosePreview,
  onClose,
}): JSX.Element => {
  return (
    <BlockWithAlignableContents className={className} nodeKey={nodeKey}>
      <a href={url} target={"_blank"}>
        <div className={"previewBox"}>
          <img className={"previewImage"} src={res.images[0]} alt={""} />
          <div className={"previewTextWrapper"}>
            <div className={"previewTitle"}>{res.title}</div>
            <div className={"previewDescription"}>{res.description}</div>
          </div>
          {showClosePreview && (
            <div
              className="closePreview"
              onClick={(e) => {
                e.preventDefault();
                onClose();
              }}
            >
              ×
            </div>
          )}
        </div>
      </a>
    </BlockWithAlignableContents>
  );
};

export default LinkPreviewBox;
