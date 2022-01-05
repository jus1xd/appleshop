import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {Product} from "../../types";

export const fetchCartProducts = createAsyncThunk (
    'fetchCartProducts',
    async ( _, thunkAPI ) => {
        const res = await axios.get<Promise<Product[]>>('http://localhost:5000/api/products')
        return res.data
    }
)