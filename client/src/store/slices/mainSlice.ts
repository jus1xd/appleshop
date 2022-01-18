import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProduct, MainReducer, Product } from "../../types";
import {
  changeQuantity,
  deleteCartItem,
  fetchAllProducts,
  getUserCart,
} from "../actions/fetchProducts";

const initialState: MainReducer = {
  products: [],
  cart: [],
  isLoading: false,
  error: "",
};

export const mainSlice = createSlice({
  name: "mainSlice",
  initialState,
  reducers: {
    addToLocalCart(state, action: PayloadAction<CartProduct>) {
      const exitingProduct = state.cart.find(
        (product) => product._id === action.payload._id
      );
      if (exitingProduct) {
        state.cart.map((product) =>
          product._id === action.payload._id ? (product.quantity += 1) : product
        );
      } else {
        state.cart.push(action.payload);
      }
    },
    changeLocalQuantity(state, action: PayloadAction<CartProduct>) {
      const exitingProduct = state.cart.find(
        (product) => product._id === action.payload._id
      );
      if (exitingProduct) {
        exitingProduct.quantity = action.payload.quantity;
      }
    },
    removeFromLocalCart(state, action: PayloadAction<string>) {
      state.cart = state.cart.filter(
        (product) => product._id != action.payload
      );
    },
  },
  extraReducers: {
    [fetchAllProducts.fulfilled.type]: (
      state,
      action: PayloadAction<Product[]>
    ) => {
      state.isLoading = false;
      state.error = "";
      state.products = action.payload;
    },
    [fetchAllProducts.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchAllProducts.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [changeQuantity.fulfilled.type]: (
      state,
      action: PayloadAction<CartProduct[]>
    ) => {
      state.cart = action.payload;
    },
    [getUserCart.fulfilled.type]: (
      state,
      action: PayloadAction<CartProduct[]>
    ) => {
      state.cart = action.payload;
    },
    [deleteCartItem.fulfilled.type]: (
      state,
      action: PayloadAction<CartProduct[]>
    ) => {
      state.cart = action.payload;
    },
  },
});
export const { addToLocalCart, changeLocalQuantity, removeFromLocalCart } =
  mainSlice.actions;
export default mainSlice.reducer;
