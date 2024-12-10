import { createAsyncThunk } from "@reduxjs/toolkit";
import SendRequest from "../../utils/sendRequest";

export const fetchClassList = createAsyncThunk("classList/fetchClassList", async (_, thunkAPI) => {
  try {
    const url = "/class-requests";
    const response = await SendRequest(url, {
      status: "pending",
      due: "false",
    }, thunkAPI, "GET");
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

// Ung Tuyen
export const applyClass = createAsyncThunk("class-requests/applyClass", async (payload, thunkAPI) => {
  try {
    const url = `/class-requests/${payload.classId}/yeu-cau`;
    const response = await SendRequest(url, payload, thunkAPI, "POST");
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// lay danh sach ung tuyen

export const fetchApplyList = createAsyncThunk("class-requests/fetchApplyList", async (classId, thunkAPI) => {
  try {
    const url = `/class-requests/${classId}/yeu-cau`;
    const response = await SendRequest(url, {}, thunkAPI, "GET");
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});