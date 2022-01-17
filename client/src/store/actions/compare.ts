import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IData, IUser } from "../../types";

axios.defaults.withCredentials = true;

export const addItem = createAsyncThunk(
  "addItem",
  async ({ email, password }: IData, thunkAPI) => {
    const res = await axios.post(
      "http://localhost:5000/auth/login",
      {
        email,
        password,
      },
      { withCredentials: true }
    );
    return res.data;
  }
);
