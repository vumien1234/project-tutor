// thunks.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import SendRequest from "../../utils/sendRequest";

export const fetchRegisterClassList = createAsyncThunk(
  "register/fetchRegisterClassList",
  async (data, thunkAPI) => {
    try {
      const url = `/class-requests/${data?.id}/yeu-cau`; 
      const response = await SendRequest(url, data, thunkAPI, "POST");
      return response; // Return the response payload
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);