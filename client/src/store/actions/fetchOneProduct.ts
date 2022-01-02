import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { ParsedUrlQuery } from "querystring";
import {Product} from "../../types";

export const fetchProduct = createAsyncThunk (
    'fetchProduct',
    async ( id: ParsedUrlQuery, thunkAPI ) => {
        const res = await axios.get<Promise<Product[]>>(`http://localhost:5000/api/products/${id}`)
        return res.data
    }
)