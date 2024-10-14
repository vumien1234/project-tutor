// registerSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { fetchRegisterClassList } from "./api";

export const registerSlice = createSlice({
  name: "register",
  initialState: {
    classList: [],
    loading: false,
    error: null
  },
  reducers: {
    // Các reducers khác nếu cần
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRegisterClassList.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRegisterClassList.fulfilled, (state, action) => {
        state.loading = false;
        state.classList = action.payload; // lưu classList vào state
      })
      .addCase(fetchRegisterClassList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // lưu lỗi nếu có
      });
  }
});

export default registerSlice.reducer;
