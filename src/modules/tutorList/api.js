import { createAsyncThunk } from "@reduxjs/toolkit";
import SendRequest from "../../utils/sendRequest";

export const fetchListTutor = createAsyncThunk(
  "tutorList/fetchListTutor",
  async ({ page, limit }, thunkAPI) => {
    try {
      const url = `/users?page=${page}&limit=${limit}`;
      const response = await SendRequest(url, {}, thunkAPI, "GET");
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); 
    }
  }
);
export const fetchListTutorDetail = createAsyncThunk(
  "tutorDetail/fetchListTutorDetail",
  async (testuser, thunkAPI) => {
    try {
      const url = `/users/${testuser}`;
      const response = await SendRequest(url, {}, thunkAPI, "GET"); // Use dynamic URL
      console.log('response', response); // Check the API response
      return response; // Ensure response contains desired data
    } catch (error) {
      console.log('error', error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

  