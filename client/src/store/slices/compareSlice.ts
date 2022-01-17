import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthReducer, IUser } from "../../types";
import { addItem } from "../actions/compare";

const initialState: CompareReducer = {
  
};
export const compareSlice = createSlice({
  name: "compareSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [addItem.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
        state.
      state.isLoading = false;
      state.error = "";
    },
    [addItem.pending.type]: (state) => {
      state.isLoading = true;
    },
    [addItem.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
const { actions } = compareSlice;
export const {} = actions;
export default compareSlice.reducer;
