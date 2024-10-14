// thunks.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import SendRequest from "../../utils/sendRequest";

export const fetchRegisterClassList = createAsyncThunk("register/fetchRegisterClassList", async (classId, thunkAPI) => {
  try {
    const url = `/class-requests/${classId}/yeu-cau`;
    const response = await SendRequest(url, {}, thunkAPI, "POST");
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
