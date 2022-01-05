import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useAppDispatch } from "../../hooks/redux";
import AuthService from "../../services/AuthService";
import { AuthReducer } from "../../types";

interface IData {
  email: string;
  password: string;
}

export const login = createAsyncThunk(
  "login",
  async ({ email, password }: IData, thunkAPI) => {
    const res = await AuthService.login(email, password);
    localStorage.setItem("token", res.data.accessToken);
    const dispatch = useAppDispatch();
    return res.data;
  }
);

export const register = createAsyncThunk(
  "register",
  async ({ email, password }: IData, thunkAPI) => {
    const res = await AuthService.register(email, password);
    localStorage.setItem("token", res.data.accessToken);
    return res.data;
  }
);
export const logout = createAsyncThunk("logout", async (_, thunkAPI) => {
  const res = await AuthService.logout();
  localStorage.removeItem("token");
  return;
});
