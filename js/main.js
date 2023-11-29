import cssClassModifiers from "./css-class-modifiers.js";
import {
  elGameRuleModal,
  elPlayVsCpuButton,
  elPlayVsPlayerButton,
  elShowGameRuleButton,
  elStartGameWindow,
} from "./html-elements.js";
import loader from "./loader.js";
import startGameController from "./start-game-controller.js";

// Loader
window.onload = () => {
  loader(false);
  startGameController(false);
};

// Show game rule [showModal() DaisyUI modal controller]
elShowGameRuleButton.onclick = () => {
  elGameRuleModal.showModal();
};

// Start game
elPlayVsPlayerButton.onclick = () => {
  startGameController(false);
};

elPlayVsCpuButton.onclick = () => {
  startGameController(false);
};
