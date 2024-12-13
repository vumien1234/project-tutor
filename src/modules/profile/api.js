import { createAsyncThunk } from "@reduxjs/toolkit";
import SendRequest from "../../utils/sendRequest";

export const fetchCourseList = createAsyncThunk(
  "courseList",
  async ({ page, limit, username }, thunkAPI) => {
    try {
      const url = `/class-requests?page=${page}&limit=${limit}&username=${username}`;
      const response = await SendRequest(url, {}, thunkAPI, "GET");
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchDonDangKy = createAsyncThunk(
  "getDonDangKy",
  async ({ username }, thunkAPI) => {
    try {
      const url = `/class-requests/yeu-cau?username=${username}`;
      const response = await SendRequest(url, {}, thunkAPI, "GET");
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateDonDangKy = createAsyncThunk(
  "updateDonDangKy",
  async (payload, thunkAPI) => {
    try {
      const url = `/class-requests/${payload.requestId}/yeu-cau`;
      const response = await SendRequest(url, payload, thunkAPI, "PUT");
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);