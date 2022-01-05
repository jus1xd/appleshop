import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import { AuthReducer, MainReducer, Product } from "../../types";

import { fetchAllProducts } from "../actions/fetchProducts";

const initialState: AuthReducer = {
  user: {} as IUser,
  isAuth: false,
  //   isLoading: true,
  //   error: "",
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<AuthReducer>) {
      state.user = action.payload.user;
    },
    setAuth(state, action: PayloadAction<AuthReducer>) {
      state.isAuth = action.payload.isAuth;
    },
  },
  extraReducers: {},
});

const { actions, reducer } = authSlice;
export const { setUser, setAuth } = actions;
export default authSlice.reducer;
