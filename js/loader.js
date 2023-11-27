import cssClassModifiers from "./css-class-modifiers.js";
import { elLoader } from "./html-elements.js";

const loader = (value) => {
  const { loaderNone } = cssClassModifiers;
  if (value) elLoader.classList.remove(loaderNone);
  else elLoader.classList.add(loaderNone);
};

export default loader;
