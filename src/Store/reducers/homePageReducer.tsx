import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCardApiData } from "../../Api";
import { IDataApi } from "../../Pages/Home/types";

export const initialState: IDataApi = {
  search: "",
  cardApiData: [],
  isLoading: false,
  errorMsg: "",
};
export const fetchCardApiData = createAsyncThunk(
  "cardApiData/fetch",
  async (search?: string, thunkAPI?) => {
    try {
      const cardApiData = await getCardApiData(search);
      return cardApiData;
    } catch (error) {
      return thunkAPI.rejectWithValue(`${error}: No results`);
    }
  }
);

export const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setSearchString: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCardApiData.fulfilled, (state, action) => {
        state.cardApiData = action.payload;
        state.isLoading = false;
        state.errorMsg = "";
      })
      .addCase(fetchCardApiData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCardApiData.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMsg = action.payload as string;
      });
  },
});

export const { setSearchString } = homePageSlice.actions;
export default homePageSlice.reducer;
