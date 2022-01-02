import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {Product} from "../../types";

export const fetchProduct = createAsyncThunk (
    'fetchProduct',
    async ( id: any, thunkAPI ) => {
        const res = await axios.get<Promise<Product[]>>(`http://localhost:5000/api/products/${id}`)
        return res.data
    }
)