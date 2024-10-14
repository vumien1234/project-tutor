import { createAsyncThunk } from "@reduxjs/toolkit";
import SendRequest from "../../utils/sendRequest";

export const fetchClassList = createAsyncThunk("classList/fetchClassList", async (_, thunkAPI) => {
  try {
    const url = "/class-requests";
    const response = await SendRequest(url, {}, thunkAPI, "GET");
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchClassListDetail = createAsyncThunk("class-requests", async (classId, thunkAPI) => {
  try {
    const url = `/class-requests/${classId}`;
    const response = await SendRequest(url, {}, thunkAPI, "GET");
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
