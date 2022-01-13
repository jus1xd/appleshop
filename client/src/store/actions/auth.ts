import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {IData, IUser} from "../../types";

axios.defaults.withCredentials = true;

export const login = createAsyncThunk (
    "login",
    async ( {email, password}: IData, thunkAPI ) => {
        const res = await axios.post (
            "http://localhost:5000/auth/login",
            {
                email,
                password,
            },
            {withCredentials: true}
        );
        return res.data;
    }
);

export const register = createAsyncThunk (
    "register",
    async ( user: IData, thunkAPI ) => {
        const res = await axios.post<IUser> (
            "http://localhost:5000/auth/registration",
            {
                username: user.username,
                email: user.email,
                password: user.password,
                cart: user.cart,
            },
        );
        return res.data;
    }
);
export const logout = createAsyncThunk ( "logout", async ( _, thunkAPI ) => {
    const res = await axios.post<IUser> (
        "http://localhost:5000/auth/logout",
    );
} );
export const refresh = createAsyncThunk ( "refresh", async ( _, thunkAPI ) => {
    const res = await axios.post<IUser> (
        "http://localhost:5000/auth/refresh",
    );
    return res.data
} );
