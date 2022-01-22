import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../types";
import { fetchOneProduct } from "../actions/fetchProducts";

const initialState: Product = {
  isLoading: false,
  error: '',
} as Product;

export const fetchProductSlice = createSlice({
  name: "fetchOneProduct",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchOneProduct.fulfilled.type]: (
      state,
      action: PayloadAction<Product>
    ) => {
      (state.title = action.payload.title),
        (state.subTitle = action.payload.subTitle),
        (state.price = action.payload.price),
        (state.picture = action.payload.picture),
        (state._id = action.payload._id);
    },
    [fetchOneProduct.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchOneProduct.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default fetchProductSlice.reducer;
