import React, { FC, useEffect, useMemo, useRef, useState } from "react";
import { EditorState } from "prosemirror-state";
import { SlashMenuKey } from "../slashMenuPlugin";
import { getElements } from "./utils";
import { EditorView } from "prosemirror-view";
import { dispatchWithMeta } from "../slashMenuPlugin/utils";
import { SlashMenuState, SlashMetaTypes } from "../slashMenuPlugin/types";
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
  const menuState: SlashMenuState = useMemo(() => {
    if (!editorState) return;
    return SlashMenuKey.getState(editorState);
  }, [editorState]);
  const elements = useMemo(() => {
    if (!menuState) return;

    return getElements(menuState);
  }, [menuState]);
  const rootRef = useRef<HTMLDivElement>(null);

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
          setMenuHeight(config.height);
          return;
        }
        return;
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

  useEffect(() => {
    const element = document.getElementById(menuState.selected);
    if (!element) return;
    if (!rootRef.current) return;
    const { bottom, height, top } = element.getBoundingClientRect();
    const containerRect = rootRef.current.getBoundingClientRect();
    const scrollUp = top - height < containerRect.top;
    const visible = scrollUp
      ? top - containerRect.top > height
      : bottom + height / 2 - containerRect.bottom < height;
    if (!visible) {
      if (scrollUp) {
        rootRef.current.scrollTop = element.offsetTop - height / 2;
      } else rootRef.current.scrollTop = rootRef.current.scrollTop + height;
    }
  }, [menuState]);

  const filterHeight = useMemo(() => {
    const element = document.getElementById("menu-filter");
    if (!element) return;
    return element.clientHeight;
  }, [config]);
  return (
    <>
      {menuState.open ? (
        <div
          ref={setPopperElement}
          style={{
            ...styles.popper,
            height: config.height,
            padding: "0.5rem",
          }}
          {...attributes.popper}
        >
          {menuState.filter ? (
            <div className={"menu-filter-wrapper"}>
              <div id={"menu-filter"} className={"menu-filter "}>
                {menuState.filter}
              </div>
            </div>
          ) : null}

          <div
            id={"slashDisplay"}
            ref={rootRef}
            className={"menu-display-root"}
            style={{
              height: menuHeight,
            }}
          >
            {menuState.subMenuId ? (
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-arrow-left menu-backarrow"
                >
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
              </div>
            ) : null}
            {elements?.map((el, idx) => (
              <div
                className={"menu-element-wrapper"}
                style={{
                  backgroundColor: `${
                    el.id === menuState.selected ? "#f1f1f1" : "white"
                  }`,
                }}
              >
                <div className={"menu-element-icon"}>
                  <svg
                    width="17"
                    height="9"
                    viewBox="0 0 20 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="7" cy="2" r="1.5" stroke="black" />
                    <circle cx="13" cy="2" r="1.5" stroke="black" />
                    <path
                      d="M1 5V5C5.10924 11.2847 14.2339 11.522 18.6643 5.45942L19 5"
                      stroke="black"
                      strokeMiterlimit="1.86218"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div
                  id={el.id}
                  key={`${el.id}-${idx}`}
                  className={"menu-element"}
                >
                  {el.label}
                </div>
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
