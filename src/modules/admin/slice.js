import { createSlice } from "@reduxjs/toolkit";
import {
  fetchOpenClassRequests,
  fetchReceivedClassRequests,
  fetchClassList,
  fetchUserList,
  fetchTutorList,
  fetchSupportList,
  fetchBankData,
} from "./api";

const initialState = {
  openClassRequests: [],  // Đơn mở lớp
  receivedClassRequests: [],  // Đơn nhận lớp
  classList: [],  // Danh sách lớp học
  userList: [],  // Danh sách người dùng
  tutorList: [],  // Danh sách gia sư
  supportList: [],  // Danh sách hỗ trợ
  bankData: [],  // Dữ liệu ngân hàng
  isGetOpenClassRequests: false,
  isGetReceivedClassRequests: false,
  isGetClassList: false,
  isGetUserList: false,
  isGetTutorList: false,
  isGetSupportList: false,
  isGetBankData: false,
};

export const classListSlice = createSlice({
  name: "adminSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOpenClassRequests.fulfilled, (state, action) => {
        state.openClassRequests = action.payload.data;
        state.isGetOpenClassRequests = true
      })
      .addCase(fetchReceivedClassRequests.fulfilled, (state, action) => {
        state.receivedClassRequests = action.payload.data;
        state.isGetReceivedClassRequests = true
      })
      .addCase(fetchClassList.fulfilled, (state, action) => {
        state.classList = action.payload.data;
        state.isGetClassList = true
      })
      .addCase(fetchUserList.fulfilled, (state, action) => {
        state.userList = action.payload.data;
        state.isGetUserList = true
      })
      .addCase(fetchTutorList.fulfilled, (state, action) => {
        state.tutorList = action.payload.data;
        state.isGetTutorList = true
      })
      .addCase(fetchSupportList.fulfilled, (state, action) => {
        state.supportList = action.payload.data;
        state.isGetSupportList = true
      })
      .addCase(fetchBankData.fulfilled, (state, action) => {
        state.bankData = action.payload.data;
        state.isGetBankData = true
      });
  }
});

export default classListSlice.reducer;
