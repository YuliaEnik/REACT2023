import { Provider } from "react-redux";
import { App } from "./App";
import { hydrateRoot } from "react-dom/client";
import "./index.css";
import { createAppStore } from "./Store/store";
import { BrowserRouter } from "react-router-dom";

document.querySelectorAll("html > script, html > input").forEach((s) => {
  s.parentNode?.removeChild(s);
});

const store = createAppStore(window.__PRELOADED_STATE__);
delete window.__PRELOADED_STATE__;

window.addEventListener("load", () => {
  document.getElementById("preloaded-state")?.remove();
});

hydrateRoot(
  document.getElementById("root") as HTMLElement,
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

declare global {
  interface Window {
    __PRELOADED_STATE__?: object;
  }
}
