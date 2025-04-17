import { Plugin, PluginKey } from "prosemirror-state";
const MultipleSelectionPluginKey = new PluginKey("multipleSelection");

let activeCursor: HTMLElement | null;
const lastActiveSelection = {
  top: 0,
  left: 0,
};

const updateCursorPosition = (event: MouseEvent) => {
  if (activeCursor) {
    let newHeight = event.y - lastActiveSelection.top;
    let newWidth = event.x - lastActiveSelection.left;

    if (newHeight < 0) {
      activeCursor.style.marginTop = `${newHeight}px`;
      newHeight *= -1;
    } else {
      activeCursor.style.marginTop = "0px";
    }

    if (newWidth < 0) {
      activeCursor.style.marginLeft = `${newWidth}px`;
      newWidth *= -1;
    } else {
      activeCursor.style.marginLeft = "0px";
    }
    activeCursor.style.height = `${newHeight}px`;
    activeCursor.style.width = `${newWidth}px`;
  }
};

const removeActiveUser = () => {
  if (activeCursor) {
    activeCursor.remove();
  }
  activeCursor = null;
};

const createMultipleSelectionPlugin = () =>
  new Plugin({
    key: MultipleSelectionPluginKey,
    props: {
      handleDOMEvents: {
        mousemove(view, event): boolean {
          updateCursorPosition(event);
          return false;
        },
        mouseup(view, event) {
          removeActiveUser();
          return false;
        },
        mousedown(view, event) {
          if (event.target !== view.dom) {
            return false;
          }
          if (activeCursor) {
            activeCursor.remove();
            return false;
          }
          activeCursor = document.createElement("div");
          activeCursor.className = "multipleSelectionCursor";
          activeCursor.style.width = "0px";
          activeCursor.style.height = "0px";
          activeCursor.style.borderRadius = "2px";
          activeCursor.style.border = "1px solid var(--accent-blue-primary)";
          activeCursor.style.background = "var(--accent-blue-secondary)";
          activeCursor.style.opacity = "0.5";
          activeCursor.style.position = "absolute";
          activeCursor.style.top = `${event.y}px`;
          activeCursor.style.left = `${event.x}px`;
          lastActiveSelection.top = event.y;
          lastActiveSelection.left = event.x;
          activeCursor.onmousemove = updateCursorPosition;
          activeCursor.onmouseup = removeActiveUser;
          document.body.appendChild(activeCursor);
          return false;
        },
      },
    },
  });

export default createMultipleSelectionPlugin;
