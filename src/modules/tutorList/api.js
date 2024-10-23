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
	async (username, thunkAPI) => {
	  try {
		const url = `/users/${username}`;
		const response = await SendRequest(url, {}, thunkAPI, "GET");
		return response;
	  } catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	  }
	}
);

export const fetchComment = createAsyncThunk(
	"comment",
	async ({ page}, thunkAPI) => {
	  try {
		const url = `/comments/testuser?page=${page}`;
		const response = await SendRequest(url, {}, thunkAPI, "GET");
		return response;
	  } catch (error) {
		return thunkAPI.rejectWithValue(error.message); 
	  }
	}
  );

  export const fetchPostComment = createAsyncThunk(
    "postComment",
    async (params, thunkAPI) => {
        try {
            const url = '/comments';
            const response = await SendRequest(url, { body: params }, thunkAPI, "POST");
            console.log('createStore111', response)
            return {
              ...params,
              ...response
            };
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message); 
        }
    }
);

  