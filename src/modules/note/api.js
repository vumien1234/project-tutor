import { createAsyncThunk } from "@reduxjs/toolkit";
import SendRequest from "../../utils/sendRequest";

export const fetchNote = createAsyncThunk("class-requests-note", async (classId, thunkAPI) => {
  try {
    const url = `/class-requests/${classId}/yeu-cau`;
    const response = await SendRequest(url, {}, thunkAPI, "POST");
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
