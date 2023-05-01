import React from "react";
import { Provider } from "react-redux";
import { App } from "./App";
import { hydrateRoot } from "react-dom/client";
import "./index.css";
import { createAppStore } from "./Store/store";

const store = createAppStore(window.__PRELOADED_STATE__);
delete window.__PRELOADED_STATE__;

window.addEventListener("load", () => {
  document.getElementById("preloaded-state")?.remove();
});

hydrateRoot(
  document.getElementById("root") as HTMLElement,

  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

declare global {
  interface Window {
    __PRELOADED_STATE__?: object;
  }
}
