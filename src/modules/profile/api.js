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

export const checkPayment = createAsyncThunk(
  "checkPayment",
  async (payload, thunkAPI) => {
    try {
      const url = `/webhook`;
      const response = await SendRequest(url, payload, thunkAPI, "GET");
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updatePayment = createAsyncThunk(
  "updatePayment",
  async (payload, thunkAPI) => {
    try {
      const url = `/class-requests/${payload.requestId}/xac-nhan`;
      const response = await SendRequest(url, payload, thunkAPI, "POST");
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const fetchLichHoc = createAsyncThunk(
  "getLichHoc",
  async (payload, thunkAPI) => {
    try {
      const url = `/classes`;
      const response = await SendRequest(url, payload, thunkAPI, "GET");
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchLichHocChiTiet = createAsyncThunk(
  "getLichHocChiTiet",
  async (payload, thunkAPI) => {
    try {
      const url = `/classes/${payload.idLop}`;
      const response = await SendRequest(url, payload, thunkAPI, "GET");
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);