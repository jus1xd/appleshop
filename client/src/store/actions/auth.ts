import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {AuthResponse, ICartItem} from "../../types";

const baseURL = "http://localhost:5000/api/";

interface IData {
    cart: ICartItem[];
    username?: string;
    email: string;
    password: string;
}

export const login = createAsyncThunk (
    "login",
    async ( {email, password}: IData, thunkAPI ) => {
        const res = await axios.post<AuthResponse> (
            "http://localhost:5000/auth/login",
            {
                email,
                password,
            }
        );
        return res.data;
    }
);

export const register = createAsyncThunk (
    "register",
    async ( user: IData, thunkAPI ) => {
        const res = await axios.post<AuthResponse> (
            "http://localhost:5000/auth/registration",
            {
                username: user.username,
                email: user.email,
                password: user.password,
                cart: user.cart
            }
        );  
        return res.data;
    }
);
export const logout = createAsyncThunk ( "logout", async ( _, thunkAPI ) => {
    const res = await axios.post ( "http://localhost:5000/auth/logout" );
} );
