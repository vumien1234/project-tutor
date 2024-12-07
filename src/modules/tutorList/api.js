import { createAsyncThunk } from "@reduxjs/toolkit";
import SendRequest from "../../utils/sendRequest";

export const fetchListTutor = createAsyncThunk(
	"tutorList/fetchListTutor",
	async ({ page, limit }, thunkAPI) => {
		try {
			const url = `/users?page=${page}&limit=${limit}&role=tutor`;
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
	async ({ page, userName }, thunkAPI) => {
		try {
			const url = `/comments/${userName}?page=${page}`;
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
			const response = await SendRequest(url, { ...params }, thunkAPI, "POST");
			return {
				...params,
				...response
			};
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

