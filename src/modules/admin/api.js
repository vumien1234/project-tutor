import { createAsyncThunk } from "@reduxjs/toolkit";
import SendRequest from "../../utils/sendRequest";

export const fetchOpenClassRequests = createAsyncThunk(
  "admin/fetchOpenClassRequests",
  async (_, thunkAPI) => {
    const response = await SendRequest("/class-requests", {}, thunkAPI, "GET");
    return response;
  }
);

export const fetchReceivedClassRequests = createAsyncThunk(
  "admin/fetchReceivedClassRequests",
  async (_, thunkAPI) => {
    const response = await SendRequest("/class-requests/yeu-cau", {}, thunkAPI, "GET");
    return response;
  }
);

export const fetchClassList = createAsyncThunk(
  "admin/fetchClassList",
  async (_, thunkAPI) => {
    const response = await SendRequest("/classes", {}, thunkAPI, "GET");
    return response;
  }
);

export const fetchUserList = createAsyncThunk(
  "admin/fetchUserList",
  async (_, thunkAPI) => {
    const response = await SendRequest("/users?role=student", {}, thunkAPI, "GET");
    return response;
  }
);

export const fetchTutorList = createAsyncThunk(
  "admin/fetchTutorList",
  async (_, thunkAPI) => {
    const response = await SendRequest("/users?role=tutor", {}, thunkAPI, "GET");
    return response;
  }
);

export const fetchSupportList = createAsyncThunk(
  "admin/fetchSupportList",
  async (_, thunkAPI) => {
    const response = await SendRequest("/contacts", {}, thunkAPI, "GET");
    return response;
  }
);

export const fetchBankData = createAsyncThunk(
  "admin/fetchBankData",
  async (_, thunkAPI) => {
    const response = await SendRequest("/webhook?limit=1000&getData=true", {}, thunkAPI, "GET");
    return response;
  }
);

export const updateSupportStatus = createAsyncThunk(
  "admin/updateStatus",
  async (data, thunkAPI) => {
    const response = await SendRequest(`/contacts`, data, thunkAPI, "PUT");
    return response;
  }
);