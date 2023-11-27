import { elGameRuleModal, elShowGameRuleButton } from "./html-elements.js";
import loader from "./loader.js";

// Loader
window.onload = () => {
  loader(false);
};

elShowGameRuleButton.onclick = () => {
  elGameRuleModal.showModal();
};
