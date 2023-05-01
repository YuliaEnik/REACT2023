import { StrictMode } from "react";
import { renderToPipeableStream } from "react-dom/server";
import { RootState, createAppStore } from "./Store/store";
import { StaticRouter } from "react-router-dom/server";
import { Response } from "express";
import { Provider as ReduxProvider } from "react-redux";
import { getCardDataServer } from "Api";
import { App } from "App";

import { initialState as forms } from "./Store/reducers/formPageReducer";
import { initialState as home } from "./Store/reducers/homePageReducer";

const getAppStateTemplate = (state: object) => {
  const stringifiedAppState = `
    <script type="text/javascript" id="preloaded-state">
	    // WARNING: See the following for security issues around embedding JSON in HTML:
	    // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
	    window.__PRELOADED_STATE__ = ${JSON.stringify(state).replace(
        /</g,
        "\\u003c"
      )}
	  </script>
  `;

  return stringifiedAppState;
};

const getTemplateParts = (template: string, state: object) => {
  const stringifiedAppState = getAppStateTemplate(state);

  return template
    .replace("<!--ssr-preload-state-->", stringifiedAppState)
    .split("<!--ssr-body-->");
};

export const render = (url: string, res: Response, template: string) => {
  getCardDataServer((/* apiResult */) => {
    const preloadedState: RootState = {
      home: home,
      form: forms,
    };

    const store = createAppStore(preloadedState, true);
    const [partBefore, partAfter] = getTemplateParts(
      template,
      store.getState()
    );
    res.write(partBefore);

    const { pipe } = renderToPipeableStream(
      <StrictMode>
        <StaticRouter location={url}>
          <ReduxProvider store={store}>
            <App />
          </ReduxProvider>
        </StaticRouter>
      </StrictMode>,
      {
        onShellReady() {
          pipe(res);
        },
        onAllReady() {
          res.write(partAfter);
          res.end();
        },
        onError(err) {
          console.error(err);
        },
      }
    );
  });
};
