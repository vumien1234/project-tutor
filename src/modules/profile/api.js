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
