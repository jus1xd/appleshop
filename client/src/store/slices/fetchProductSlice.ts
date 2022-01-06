import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Product} from "../../types";
import {fetchOneProduct} from "../actions/fetchProducts";

const initialState: Product = {
    title: "",
    subTitle: "",
    price: 0,
    quantity: 0,
    picture: "",
    _id: "",
    isLoading: false,
    error: '',
};

export const fetchProductSlice = createSlice ( {
    name: "fetchOneProduct",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchOneProduct.fulfilled.type]: (
            state,
            action: PayloadAction<Product>
        ) => {
            state.title = action.payload.title,
                state.subTitle = action.payload.subTitle,
                state.price = action.payload.price,
                state.quantity = action.payload.quantity,
                state.picture = action.payload.picture,
                state._id = action.payload._id
        },
        [fetchOneProduct.pending.type]: ( state ) => {
            state.isLoading = true;
        },
        [fetchOneProduct.rejected.type]: (
            state,
            action: PayloadAction<string>
        ) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
} );

export default fetchProductSlice.reducer