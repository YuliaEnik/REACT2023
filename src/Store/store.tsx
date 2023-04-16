import { configureStore } from "@reduxjs/toolkit";
import homePageSlice from "./reducers/homePageReducer";

export const store = configureStore({
  reducer: {
    homePage: homePageSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
