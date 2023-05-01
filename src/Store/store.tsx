import {
  configureStore,
  PreloadedState,
  combineReducers,
} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import homePageSlice from "./reducers/homePageReducer";
import formPageSlice from "./reducers/formPageReducer";

const reducers = combineReducers({
  home: homePageSlice,
  form: formPageSlice,
});

export const createAppStore = (
  initialState?: PreloadedState<RootState>,
  isServer = false
) => {
  const store = configureStore({
    reducer: reducers,
    preloadedState: initialState,
    devTools: !isServer,
  });

  setupListeners(store.dispatch);
  return store;
};
export type RootState = ReturnType<typeof reducers>;
export type AppStore = ReturnType<typeof createAppStore>;
export type AppDispatch = AppStore["dispatch"];
