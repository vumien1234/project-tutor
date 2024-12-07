import { createAsyncThunk } from "@reduxjs/toolkit";
import SendRequest from "../../utils/sendRequest";

export const createClassAPI = createAsyncThunk("class-create", async (payload, thunkAPI) => {
  try {
    const url = `/class-requests/`;
    const response = await SendRequest(url, payload, thunkAPI, "POST");
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
