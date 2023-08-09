import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import React, { useCallback, useEffect, useState } from "react";
import { ToolbarItem } from "../../../../utils/lexical";
import {
  $createParagraphNode,
  $getSelection,
  $isRangeSelection,
  FORMAT_TEXT_COMMAND,
  REDO_COMMAND,
  UNDO_COMMAND,
} from "lexical";
import { $patchStyleText, $setBlocksType } from "@lexical/selection";
import {
  INSERT_CHECK_LIST_COMMAND,
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
} from "@lexical/list";
import { INSERT_HORIZONTAL_RULE_COMMAND } from "@lexical/react/LexicalHorizontalRuleNode";
import { INSERT_BANNER_COMMAND } from "./Banner";
import { $createHeadingNode, $createQuoteNode } from "@lexical/rich-text";
import { $createLinkNode } from "@lexical/link";
import { registerCodeHighlighting } from "@lexical/code";

export const DoOnToolbar = () => {
  const [editor] = useLexicalComposerContext();

  const undoRedo = (e: React.MouseEvent) => {
    const target = e.currentTarget;
    const id = target.id;

    if (id === "undo") {
      console.log("ajdi");
      editor.dispatchCommand(UNDO_COMMAND, undefined);
    }
    editor.dispatchCommand(REDO_COMMAND, undefined);
  };

  return (
    <>
      <ToolbarItem id={"undo"} onClick={(e) => undoRedo(e)}>
        {"<<"}
      </ToolbarItem>
      <ToolbarItem id={"redo"} onClick={(e) => undoRedo(e)}>
        {">>"}
      </ToolbarItem>
    </>
  );
};

export const NormalPOnToolbar = () => {
  const [editor] = useLexicalComposerContext();

  const normalPOnClick = () => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $setBlocksType(selection, () => $createParagraphNode());
      }
    });
  };

  return <ToolbarItem onClick={normalPOnClick}>Normal P</ToolbarItem>;
};
export const BannerOnToolbar = (): JSX.Element => {
  const [editor] = useLexicalComposerContext();

  const bannerOnClick = (): void => {
    editor.dispatchCommand(INSERT_BANNER_COMMAND, undefined);
  };
  return <ToolbarItem onClick={bannerOnClick}>Banner</ToolbarItem>;
};

type HeadingTags = "h1" | "h2" | "h3";
type ListTags = "ul" | "ol" | "checklist";

export const HeadingOnToolbar = (): JSX.Element => {
  const [editor] = useLexicalComposerContext();
  const headingTags: HeadingTags[] = ["h1", "h2", "h3"];

  const headingOnClick = (tag: HeadingTags): void => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $setBlocksType(selection, () => $createHeadingNode(tag));
      }
    });
  };

  return (
    <>
      {headingTags.map((tag, i) => (
        <ToolbarItem key={i} onClick={() => headingOnClick(tag)}>
          {tag}
        </ToolbarItem>
      ))}
    </>
  );
};

export const ListingOnToolbar = () => {
  const [editor] = useLexicalComposerContext();
  const listingTags: ListTags[] = ["ul", "ol", "checklist"];

  const listingOnClick = (tag: ListTags): void => {
    if (tag === "ol") {
      editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
      return;
    } else if (tag === "checklist") {
      editor.dispatchCommand(INSERT_CHECK_LIST_COMMAND, undefined);
      return;
    }
    editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
  };
  return (
    <>
      {listingTags.map((tag, i) => (
        <ToolbarItem key={i} onClick={() => listingOnClick(tag)}>
          {tag}
        </ToolbarItem>
      ))}
    </>
  );
};

export const BlockquoteOnToolbar = () => {
  const [editor] = useLexicalComposerContext();

  const blockquoteOnClick = () => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $setBlocksType(selection, () => $createQuoteNode());
      }
    });
  };

  return <ToolbarItem onClick={blockquoteOnClick}>quote</ToolbarItem>;
};

export const MonocodeOnToolbar = (): JSX.Element => {
  const [editor] = useLexicalComposerContext();

  const codeOnClick = (): void => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, "code");
  };
  return <ToolbarItem onClick={codeOnClick}>mono code</ToolbarItem>;
};

export const LinkOnToolbar = (): JSX.Element => {
  const [editor] = useLexicalComposerContext();
  const [isLink, setIsLink] = useState(false);
  const [link, setLink] = useState("");
  const [isSeen, setIsSeen] = useState(false);
  const linkRegex =
    /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

  const linkOnClick = useCallback(() => {
    setIsLink(!isLink);
    setIsSeen(true);
  }, [editor, isLink]);

  const handleLinkEnter = useCallback(
    (link: string) => {
      if (link === "") {
        alert("link is empty");
        setIsSeen(false);
        return;
      }
      if (!linkRegex.test(link)) {
        alert("invalid link");
        setIsSeen(false);
        return;
      }
      setIsSeen(false);
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          $setBlocksType(selection, () => $createLinkNode(link));
        }
      });
    },
    [editor, isLink],
  );

  return (
    <>
      <ToolbarItem onClick={linkOnClick}>Link</ToolbarItem>

      {isSeen && (
        <div>
          <input
            type="text"
            placeholder="http://"
            value={link}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setLink(e.target.value);
            }}
            onKeyDown={(e: React.KeyboardEvent) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleLinkEnter(link);
              }
            }}
          />
        </div>
      )}
    </>
  );
};

export const FormatThings = () => {
  const [editor] = useLexicalComposerContext();
  const formattingTextOptions = [
    "bold",
    "italic",
    "underline",
    "strikethrough",
    "highlight",
    "subscript",
    "superscript",
  ];

  const formattingTextOnClick = (tag: string): void => {
    switch (tag) {
      case "bold":
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold");
        break;
      case "italic":
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic");
        break;
      case "underline":
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline");
        break;
      case "strikethrough":
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, "strikethrough");
        break;
      case "highlight":
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, "highlight");
        break;
      case "subscript":
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, "subscript");
        break;
      case "superscript":
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, "superscript");
        break;
      default:
        console.log("no bro");
        break;
    }
  };

  return (
    <>
      {formattingTextOptions.map((tag, i) => (
        <ToolbarItem key={i} onClick={() => formattingTextOnClick(tag)}>
          {tag}
        </ToolbarItem>
      ))}
    </>
  );
};
//
// const FONT_SIZE_OPTIONS: [string, string][] = [
//   ["10px", "10px"],
//   ["11px", "11px"],
//   ["12px", "12px"],
//   ["13px", "13px"],
//   ["14px", "14px"],
//   ["15px", "15px"],
//   ["16px", "16px"],
//   ["17px", "17px"],
//   ["18px", "18px"],
//   ["19px", "19px"],
//   ["20px", "20px"],
// ];

export const FontSizeOnToolbar = (): JSX.Element => {
  const [editor] = useLexicalComposerContext();
  const fontSizeOptions = [
    "10px",
    "12px",
    "14px",
    "16px",
    "18px",
    "20px",
    "24px",
    "28px",
    "32px",
  ];

  const fontSizeOnClick = useCallback(
    (size: string) => {
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          $patchStyleText(selection, {
            ["font-size"]: size,
          });
        }
      });
    },
    [editor],
  );

  return (
    <>
      {fontSizeOptions.map((size, i) => (
        <ToolbarItem key={i} onClick={() => fontSizeOnClick(size)}>
          {size}
        </ToolbarItem>
      ))}
    </>
  );
};

export const ColoringOnToolbar = () => {
  const [editor] = useLexicalComposerContext();
  const [fontColor, setFontColor] = useState<string>("#000000");
  const [backgrColor, setBackgrColor] = useState("#000000");

  const applyStyleText = useCallback(
    (styles: Record<string, string>) => {
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          $patchStyleText(selection, styles);
        }
      });
    },
    [editor],
  );

  const onFontColorSelect = useCallback(
    (value: string) => {
      setFontColor(value);
      applyStyleText({ color: value });
    },
    [applyStyleText],
  );

  const onBackgrColorSelect = useCallback(
    (value: string) => {
      setBackgrColor(value);
      applyStyleText({ "background-color": value });
    },
    [applyStyleText],
  );

  return (
    <>
      <ToolbarItem>
        Text:
        <input
          type={"color"}
          value={fontColor}
          onChange={(e) => onFontColorSelect(e.target.value)}
        />
      </ToolbarItem>
      <ToolbarItem>
        Backgr.:
        <input
          type={"color"}
          value={backgrColor}
          onChange={(e) => onBackgrColorSelect(e.target.value)}
        />
      </ToolbarItem>
    </>
  );
};

export const HROnToolbar = () => {
  const [editor] = useLexicalComposerContext();

  const hrOnClick = (): void => {
    editor.dispatchCommand(INSERT_HORIZONTAL_RULE_COMMAND, undefined);
  };
  return <ToolbarItem onClick={hrOnClick}>--- hr ---</ToolbarItem>;
};

export const SaveToJsonOnToolbar = ({ onClick }: { onClick: () => void }) => {
  return <ToolbarItem onClick={onClick}>to JSON</ToolbarItem>;
};

export const LoadFromJsonOnToolbar = ({ data }: { data: string }) => {
  const [editor] = useLexicalComposerContext();

  const loadOnClick = () => {
    const editorState = editor.parseEditorState(data);
    editor.setEditorState(editorState);
    return null;
  };
  return <ToolbarItem onClick={loadOnClick}>to Editor </ToolbarItem>;
};

export function CodeHighlightPlugin(): JSX.Element | null {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    return registerCodeHighlighting(editor);
  }, [editor]);

  return null;
}
