import { configureStore } from "@reduxjs/toolkit";
import homePageSlice from "./reducers/homePageReducer";
import formPageSlice from "./reducers/formPageReducer";

export const store = configureStore({
  reducer: {
    homePage: homePageSlice,
    formPage: formPageSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
