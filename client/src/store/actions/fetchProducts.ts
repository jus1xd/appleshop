import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {Product} from "../../types";

export const fetchAllProducts = createAsyncThunk (
    'fetchProducts',
    async ( _, thunkAPI ) => {
        const res = await axios.get<Promise<Product[]>> ( 'http://localhost:5000/api/products' )
        return res.data
    }
)
export const fetchOneProduct = createAsyncThunk (
    'fetchProduct',
    async ( id: any, thunkAPI ) => {
        const res = await axios.get<Promise<Product[]>> ( `http://localhost:5000/api/products/${id}` )
        return res.data
    }
)
export const addToCart = createAsyncThunk (
    'addToCart',
    async ( addToCart: any, thunkAPI ) => {
        await axios.put ( 'http://localhost:5000/auth/addToCart', addToCart )
    }
)