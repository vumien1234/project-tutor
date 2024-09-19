import { createAsyncThunk } from "@reduxjs/toolkit";
import SendRequest from "../../../utils/sendRequest";

export const loginAction = createAsyncThunk("auth/login", async (payload, thunkAPI) => {
    const url = "/users/login";
    let res = await SendRequest(url, payload, thunkAPI, "POST");
    return res;
});

export const createUser = createAsyncThunk("auth/create-me", async (payload, thunkAPI) => {
    const url = "/users";
    let res = await SendRequest(url, payload, thunkAPI, "POST");
    return res;
});
