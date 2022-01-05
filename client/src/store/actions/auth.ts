import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useAppDispatch } from "../../hooks/redux";
import AuthService from "../../services/AuthService";
import { AuthReducer } from "../../types";

const baseURL = 'http://localhost:5000/api/'

interface IData {
  email: string;
  password: string;
}

export const login = createAsyncThunk(
  "login",
  async ({ email, password }: IData, thunkAPI) => {
    const res = await axios.post('http://localhost:5000/api/login', {email, password});
    return res.data;
  }
);

export const register = createAsyncThunk(
  "register",
  async ({ email, password }: IData, thunkAPI) => {
    const res = await axios.post('http://localhost:5000/api/register', {email, password});
    return res.data;
  }
);
export const logout = createAsyncThunk("logout", async (_, thunkAPI) => {
  const res = await axios.post('http://localhost:5000/api/logout');
  return;
});
