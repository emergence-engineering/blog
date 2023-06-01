import React, { FC, useEffect, useMemo, useRef, useState } from "react";
import { EditorState } from "prosemirror-state";
import { SlashMenuKey } from "../slashMenuPlugin";
import { getElements } from "./utils";
import { EditorView } from "prosemirror-view";
import { dispatchWithMeta } from "../slashMenuPlugin/utils";
import { SlashMetaTypes } from "../slashMenuPlugin/types";
import { usePopper } from "react-popper";
import { detectOverflow } from "@popperjs/core";

export interface SlashMenuDisplayConfig {
  height: number;
  minHeight: number;
  overflowPadding: number;
}

export interface SlashMenuProps {
  editorState: EditorState;
  editorView: EditorView;
  config: SlashMenuDisplayConfig;
}

const SlashMenuDisplay: FC<SlashMenuProps> = ({
  editorState,
  editorView,
  config,
}) => {
  const menuState = useMemo(() => {
    if (!editorState) return;
    return SlashMenuKey.getState(editorState);
  }, [editorState]);
  const elements = useMemo(() => {
    if (!menuState) return;

    return getElements(menuState);
  }, [menuState]);
  const rootRef = useRef(null);

  useEffect(() => {
    if (!rootRef) return;
    function outsideClickHandler(event: MouseEvent) {
      if (
        rootRef.current &&
        // @ts-ignore
        (!event.target || !rootRef.current.contains(event.target))
      ) {
        dispatchWithMeta(editorView, SlashMenuKey, {
          type: SlashMetaTypes.close,
        });
      }
    }
    document.addEventListener("mousedown", outsideClickHandler);
    return () => {
      document.removeEventListener("mousedown", outsideClickHandler);
    };
  }, [rootRef]);
  const [menuHeight, setMenuHeight] = useState(config.height);
  const [shouldFlip, setShouldFlip] = useState(false);

  const heightModifier = useMemo(() => {
    return {
      name: "heightModifier",
      enabled: true,
      phase: "main",
      requiresIfExists: ["offset"],
      fn({ state }) {
        const overflow = detectOverflow(state);
        if (menuHeight < config.minHeight) {
          setShouldFlip(true);
          setMenuHeight(config.height);
          return;
        }
        if (overflow.bottom + config.overflowPadding > 0 && !shouldFlip) {
          const newMenuHeight =
            config.height - config.overflowPadding - overflow.bottom;
          setMenuHeight(newMenuHeight);
          return;
        }
        if (menuHeight < config.height) {
          setMenuHeight(config.height);
          return;
        }
        if (overflow.bottom < -config.minHeight) {
          setShouldFlip(false);
          return;
        }
      },
    };
  }, [config, menuHeight, shouldFlip]);
  const [popperElement, setPopperElement] = React.useState(null);
  const flipModifier = useMemo(() => {
    return { name: "flip", enabled: shouldFlip };
  }, [shouldFlip]);
  const virtualReference = useMemo(() => {
    const { top, left, height } = editorView
      .domAtPos(editorState.selection.to)
      ?.node?.getBoundingClientRect();
    return {
      getBoundingClientRect() {
        return {
          top: top,
          right: left,
          bottom: top,
          left: left,
          width: 0,
          height: height,
        };
      },
    };
  }, [editorState, window.scrollY]);

  const { styles, attributes } = usePopper(virtualReference, popperElement, {
    modifiers: [
      flipModifier,
      heightModifier,
      {
        name: "preventOverflow",
        options: {
          mainAxis: false,
        },
      },
    ],
  });
  console.log({ menuHeight });
  return (
    <>
      {menuState.open ? (
        <div
          ref={setPopperElement}
          style={{ ...styles.popper, height: config.height }}
          {...attributes.popper}
        >
          <div
            id={"slashDisplay"}
            ref={rootRef}
            className={"menu-display-root"}
            style={{
              height: menuHeight,
            }}
          >
            {menuState.filter ? (
              <div className={"menu-filter"}>{menuState.filter}</div>
            ) : null}
            {menuState.subMenuId ? (
              <div>{/*<Image src={ArrowLeft} alt={"Arrow Back"} />*/}</div>
            ) : null}
            {elements?.map((el, idx) => (
              <div
                id={el.id}
                key={`${el.id}-${idx}`}
                className={"menu-element"}
                style={{
                  backgroundColor: `${
                    el.id === menuState.selected ? "gray" : "white"
                  }`,
                }}
              >
                {el.label}
              </div>
            ))}
            {elements?.length === 0 ? (
              <div className={"menu-placeholder"}>No Match</div>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SlashMenuDisplay;
