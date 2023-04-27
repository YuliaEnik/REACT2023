import { createSlice } from "@reduxjs/toolkit";
import { IData } from "../../Components/Form/types";

type FormType = {
  characters: IData[];
  isSucccess: boolean;
};

const initialState: FormType = {
  characters: [],
  isSucccess: false,
};

export const formPageSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setCharacters: (state, action) => {
      state.characters.push(action.payload);
      state.isSucccess = true;
    },
    succcess(state) {
      state.isSucccess = false;
    },
  },
});

export const { setCharacters, succcess } = formPageSlice.actions;
export default formPageSlice.reducer;
