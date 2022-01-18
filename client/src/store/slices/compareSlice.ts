import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CompareReducer, Product } from "../../types";

const initialState: CompareReducer = {
  compareItems: [],
};

export const compareSlice = createSlice({
  name: "compareSlice",
  initialState,
  reducers: {
    addCompareItem(state, action: PayloadAction<Product>) {
      state.compareItems.push(action.payload);
    },
    removeCompareItem(state, action: PayloadAction<Product>) {
      state.compareItems = state.compareItems.filter(
        (item) => item._id !== action.payload._id
      );
    },
  },
});

export const { addCompareItem, removeCompareItem } = compareSlice.actions;
export default compareSlice.reducer;
