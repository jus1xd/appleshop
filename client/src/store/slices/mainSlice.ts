import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICartItem, MainReducer, Product} from "../../types";
import {addToCart, changeQuantity, fetchAllProducts, getUserCart} from "../actions/fetchProducts";

const initialState: MainReducer = {
    products: [],
    cart: [],
    isLoading: false,
    error: "",
};

export const mainSlice = createSlice ( {
    name: "mainSlice",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchAllProducts.fulfilled.type]: ( state, action: PayloadAction<Product[]> ) => {
            state.isLoading = false;
            state.error = "";
            state.products = action.payload;
        },
        [fetchAllProducts.pending.type]: ( state ) => {
            state.isLoading = true;
        },
        [fetchAllProducts.rejected.type]: ( state, action: PayloadAction<string> ) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [changeQuantity.fulfilled.type]: ( state, action: PayloadAction<ICartItem[]> ) => {
            state.cart = action.payload
        },
        [getUserCart.fulfilled.type]: ( state, action: PayloadAction<ICartItem[]> ) => {
            state.cart = action.payload
        }
    },
} );

export default mainSlice.reducer;
