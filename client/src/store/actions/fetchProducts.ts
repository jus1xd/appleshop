import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {Product} from "../../types";

export const fetchAllProducts = createAsyncThunk (
    "fetchProducts",
    async ( _, thunkAPI ) => {
        const res = await axios.get<Promise<Product[]>> (
            "http://localhost:5000/api/products"
        );
        return res.data;
    }
);
export const fetchOneProduct = createAsyncThunk (
    "fetchProduct",
    async ( id: any, thunkAPI ) => {
        const res = await axios.get<Promise<Product[]>> (
            `http://localhost:5000/api/products/${id}`
        );
        return res.data;
    }
);

export const addToCart = createAsyncThunk (
    "addToCart",
    async ( addToCart: any, thunkAPI ) => {
        const res = await axios.put (
            "http://localhost:5000/auth/addToCart",
            addToCart
        );
        return res.data;
    }
);
export const changeQuantity = createAsyncThunk (
    "addToCart",
    async ( idForServerQuantity: any, thunkAPI ) => {
        const res = await axios.put (
            "http://localhost:5000/auth/changeQuantity",
            idForServerQuantity
        );
        return res.data;
    }
);
export const getUserCart = createAsyncThunk (
    "getUserCart",
    async ( userId: any, thunkAPI ) => {
        const res = await axios.get<Promise<Product[]>> (
            `http://localhost:5000/auth/getCart/${userId}`
        );
        return res.data;
    }
);
export const deleteCartItem = createAsyncThunk (
    "deleteCartItem",
    async ( itemToDelete: any, thunkAPI ) => {
        const res = await axios.put<Promise<Product[]>> (
            `http://localhost:5000/auth/deleteCartItem`,
            itemToDelete
        );
        return res.data;
    }
);
