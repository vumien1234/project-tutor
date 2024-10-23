import { createAsyncThunk } from "@reduxjs/toolkit";
import SendRequest from "../../utils/sendRequest";

export const fetchCourceList = createAsyncThunk(
  "courceList",
  async ({ page, limit, id }, thunkAPI) => {
    try {
      const url = `/class-requests/${id}/yeu-cau?page=${page}&limit=${limit}`;
      const response = await SendRequest(url, {}, thunkAPI, "GET");
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
