import React, { FC, useEffect, useMemo, useRef, useState } from "react";
import { EditorState } from "prosemirror-state";
import { SlashMenuKey } from "../slashMenuPlugin";
import { getElements } from "./utils";
import { EditorView } from "prosemirror-view";
import { dispatchWithMeta, getElementById } from "../slashMenuPlugin/utils";
import { SlashMenuState, SlashMetaTypes } from "../slashMenuPlugin/types";
import { usePopper } from "react-popper";
import { detectOverflow, ModifierArguments, Options } from "@popperjs/core";
import { ArrowLeft } from "./icons/defaultIcons";

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
      fn(props: ModifierArguments<Options>) {
        const { state } = props;
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
    //TODO Maybe typing is not good here
    const domNode = editorView.domAtPos(editorState.selection.to)
      ?.node as HTMLDivElement;
    if (!domNode) return;
    const { top, left, height } = domNode.getBoundingClientRect();
    return {
      getBoundingClientRect() {
        return {
          top: top,
          right: left,
          bottom: top,
          left: left,
          width: 0,
          height: height,
          x: left,
          y: top,
          // TODO missing toJSON causes type error do we really need this?
          toJSON: () =>
            JSON.stringify({
              top: top,
              right: left,
              bottom: top,
              left: left,
              width: 0,
              height: height,
              x: left,
              y: top,
            }),
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

    if (!element || !rootRef.current) return;
    const isTopElement =
      menuState.selected === menuState.filteredElements[0].id;
    if (isTopElement) {
      rootRef.current.scrollTop = 0;
      return;
    }
    const height =
      element.clientHeight +
      parseInt(
        window.getComputedStyle(element).getPropertyValue("margin-top"),
      ) +
      parseInt(
        window.getComputedStyle(element).getPropertyValue("margin-bottom"),
      ) +
      parseInt(
        window.getComputedStyle(element).getPropertyValue("padding-top"),
      ) +
      parseInt(
        window.getComputedStyle(element).getPropertyValue("padding-bottom"),
      );

    const { bottom, top } = element.getBoundingClientRect();
    const containerRect = rootRef.current.getBoundingClientRect();
    const scrollUp = top - height < containerRect.top;
    const visible = scrollUp
      ? top - containerRect.top > height
      : !(bottom > containerRect.bottom);
    if (!visible) {
      if (scrollUp) {
        rootRef.current.scrollTop = element.offsetTop - height / 2;
      } else {
        rootRef.current.scrollTop =
          element.offsetTop - containerRect.height + height + height / 4;
      }
    }
  }, [menuState]);
  useEffect(() => {
    if (rootRef.current === null) {
      return;
    }
    rootRef.current.scrollTop = 0;
  }, [menuState?.filteredElements]);
  const subMenuLabel = useMemo(() => {
    if (menuState.subMenuId) {
      return getElementById(menuState.subMenuId, menuState)?.label;
    }
  }, [menuState]);

  return (
    <>
      {menuState.open ? (
        <div
          //TODO Ts fix, might not be possible, popper is missing its typing I think
          // @ts-ignore
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
              <div className={"menu-element-wrapper"}>
                <div className={"menu-element-icon"}>{ArrowLeft}</div>
                <div className={"submenu-label"}>{subMenuLabel}</div>
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
                id={el.id}
                key={`${el.id}-${idx}`}
              >
                {el?.icon ? (
                  <div className={"menu-element-icon"}> {el.icon}</div>
                ) : null}

                <div className={"menu-element"}>{el.label}</div>
              </div>
            ))}
            {elements?.length === 0 ? (
              <div className={"menu-placeholder"}>No Matching items</div>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SlashMenuDisplay;
