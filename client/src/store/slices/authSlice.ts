import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {AuthReducer, IUser} from "../../types";
import {login, logout, register} from "../actions/auth";

const initialState: AuthReducer = {
    user: {} as IUser,
    isAuth: false,
    isLoading: true,
    error: "",
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [login.fulfilled.type]: (state, action: PayloadAction<AuthReducer>) => {
      state.isLoading = false;
      state.error = "";
      state.user = action.payload;
      state.isAuth = true;
    },
    [login.pending.type]: (state) => {
      state.isLoading = true;
    },
    [login.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [register.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
      state.isLoading = false;
      state.error = "";
      state.user = action.payload;
      state.isAuth = true;
    },
    [register.pending.type]: (state) => {
      state.isLoading = true;
    },
    [register.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [logout.fulfilled.type]: (state, action: PayloadAction<AuthReducer>) => {
      state.isLoading = false;
      state.error = "";
      state.user = {}
      state.isAuth = false;
    },
    [logout.pending.type]: (state) => {
      state.isLoading = true;
    },
    [logout.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});


const {actions} = authSlice;
export const {} = actions;
export default authSlice.reducer
