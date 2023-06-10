import { qs, el } from "./config.js";
import { createAppTimeTill } from "./createAppTimeTill.js";

(function () {
  const app = createAppTimeTill();
  const render = () => {
    el.container.append(app);
  };
  render();
})();
