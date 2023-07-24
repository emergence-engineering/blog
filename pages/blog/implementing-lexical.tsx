import React from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import styled from "styled-components";
import ArticleShareOgTags from "../../features/article/components/ArticleShareOgTags";
import ArticleHeader from "../../features/article/components/ArticleHeader";
import ArticleWrapper from "../../features/article/components/ArticleWrapper";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
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
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { $createHeadingNode, HeadingNode } from "@lexical/rich-text";
import { $setBlocksType } from "@lexical/selection";
import {
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
  ListItemNode,
  ListNode,
} from "@lexical/list";

const StyledContentEditable = styled(ContentEditable)`
  height: 300px;
  width: 500px;
  padding: 8px;
  border: thin solid red;
`;

const Placeholder = styled.div`
  position: absolute;
  top: 36px;
  left: 8px;
`;

function onError(error: Error): void {
  console.error(error);
}

const theme = {};

interface Props {}

// const MyOnChangePlugin = (props: {
//   onChange: (editorState: EditorState) => void;
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

class BannerNode extends ElementNode {
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
    // element.classList.add(styles.banner.toString());
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

function $createBannerNode(): BannerNode {
  return new BannerNode();
}

// function $isBannerNode(node: LexicalNode): node is BannerNode {
//   return node instanceof BannerNode;
// }

export const INSERT_BANNER_COMMAND = createCommand("insertCommand");

const BannerPlugin = (): null => {
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

const TheBestBannerPlugin = (): JSX.Element => {
  const [editor] = useLexicalComposerContext();

  const bannerOnClick = (e: React.MouseEvent): void => {
    editor.dispatchCommand(INSERT_BANNER_COMMAND, undefined);
  };
  return <button onClick={bannerOnClick}>Banner</button>;
};

type HeadingTags = "h1" | "h2" | "h3";
type ListTags = "ul" | "ol";

const TheBestHeadingPlugin = (): JSX.Element => {
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
    <div>
      {headingTags.map((tag, i) => (
        <button key={i} onClick={() => headingOnClick(tag)}>
          {tag}
        </button>
      ))}
    </div>
  );
};

// TODO: rm node_modules to work
const TheBestListingPlugin = () => {
  const [editor] = useLexicalComposerContext();
  const listingTags: ListTags[] = ["ul", "ol"];

  const listingOnClick = (tag: ListTags): void => {
    if (tag === "ol") {
      editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
      return;
    }
    editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
  };
  return (
    <div>
      {listingTags.map((tag, i) => (
        <button key={i} onClick={() => listingOnClick(tag)}>
          {tag}
        </button>
      ))}
    </div>
  );
};

const ToolbarPlugin = (): JSX.Element => {
  return (
    <div style={{ display: "flex" }}>
      <TheBestHeadingPlugin />
      <TheBestListingPlugin />
      <TheBestBannerPlugin />
    </div>
  );
};

export default function Editor({}: Props): JSX.Element {
  const initialConfig = {
    namespace: "MyEditor",
    theme,
    onError,
    nodes: [HeadingNode, ListNode, ListItemNode, BannerNode],
  };

  return (
    <ArticleWrapper>
      <ArticleShareOgTags url={""} title={""} description={""} imgSrc={""} />
      <ArticleHeader
        title={"Implementing Lexical"}
        author={"x"}
        timestamp={1}
      />
      <LexicalComposer initialConfig={initialConfig}>
        <div style={{ position: "relative" }}>
          <ToolbarPlugin />
          <BannerPlugin />
          <RichTextPlugin
            contentEditable={<StyledContentEditable />}
            placeholder={<Placeholder>Enter some text...</Placeholder>}
            ErrorBoundary={LexicalErrorBoundary}
          />
        </div>
        <HistoryPlugin />
        {/*<MyOnChangePlugin*/}
        {/*  onChange={(editorState) => {*/}
        {/*    console.log(editorState);*/}
        {/*  }}*/}
        {/*/>*/}
      </LexicalComposer>
    </ArticleWrapper>
  );
}
