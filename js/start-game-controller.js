import cssClassModifiers from "./css-class-modifiers.js";
import { elStartGameWindow } from "./html-elements.js";

const startGameController = (value) => {
  const { opacity_0, hidden } = cssClassModifiers;
  if (value) {
    elStartGameWindow.classList.remove(hidden, opacity_0);
  } else {
    elStartGameWindow.classList.add(opacity_0);
    elStartGameWindow.ontransitionend = ({ target }) => {
      if (
        target === elStartGameWindow &&
        elStartGameWindow.classList.contains(opacity_0)
      ) {
        elStartGameWindow.classList.add(hidden);
      }
    };
  }
};

export default startGameController;
