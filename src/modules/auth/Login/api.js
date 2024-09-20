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

export const getUserData = createAsyncThunk("auth/get-user-data", async (payload, thunkAPI) => {
    const url = "/users/me";
    let res = await SendRequest(url, null, thunkAPI, "GET");
    return res;
});

export const updateUser = createAsyncThunk("auth/update-user", async (payload, thunkAPI) => {
    const url = `/users/${payload.username}`;
    let res = await SendRequest(url, payload, thunkAPI, "PUT");
    return res;
});