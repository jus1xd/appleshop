import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {MainReducer, Product} from "../../types";
import {fetchProducts} from "../actions/fetchProducts";

const initialState: MainReducer = {
    products: [],
    cart: [],
    isLoading: false,
    error: ''
}

export const mainSlice = createSlice ( {
    name: 'mainSlice',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchProducts.fulfilled.type]: ( state, action: PayloadAction<Product[]> ) => {
            state.isLoading = false;
            state.error = ''
            state.products = action.payload;
        },
        [fetchProducts.pending.type]: ( state ) => {
            state.isLoading = true;
        },
        [fetchProducts.rejected.type]: ( state, action: PayloadAction<string> ) => {
            state.isLoading = false;
            state.error = action.payload
        },
    }
} )
console.log (mainSlice.reducer)
export default mainSlice.reducer