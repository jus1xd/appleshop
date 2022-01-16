import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AuthReducer, IUser} from "../../types";
import {login, logout, refresh, register} from "../actions/auth";

const initialState: AuthReducer = {
    user: {} as IUser,
    isAuth: false,
    isLoading: false,
    error: "",
};
export const authSlice = createSlice ( {
    name: "authSlice",
    initialState,
    reducers: {},
    extraReducers: {
        [login.fulfilled.type]: ( state, action: PayloadAction<IUser> ) => {
            state.isLoading = false;
            state.error = "";
            state.user = action.payload;
            state.isAuth = true;
        },
        [login.pending.type]: ( state ) => {
            state.isLoading = true;
        },
        [login.rejected.type]: ( state, action: PayloadAction<string> ) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [register.fulfilled.type]: ( state, action: PayloadAction<IUser> ) => {
            state.isLoading = false;
            state.error = "";
            state.user = action.payload;
            state.isAuth = true;
        },
        [register.pending.type]: ( state ) => {
            state.isLoading = true;
        },
        [register.rejected.type]: ( state, action: PayloadAction<string> ) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [logout.fulfilled.type]: ( state ) => {
            state.isLoading = false;
            state.error = "";
            state.user = {} as IUser
            state.isAuth = false;
        },
        [logout.pending.type]: ( state ) => {
            state.isLoading = true;
        },
        [logout.rejected.type]: ( state, action: PayloadAction<string> ) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [refresh.fulfilled.type]: ( state, action: PayloadAction<IUser> ) => {
            state.isAuth = true;
            state.user = action.payload;
        },
        [refresh.pending.type]: ( state ) => {
            state.isLoading = true
        },
        [refresh.rejected.type]: ( state ) => {
            state.isAuth = false;
            state.user = {} as IUser;
        },
    },
} );
const {actions} = authSlice;
export const {} = actions;
export default authSlice.reducer
