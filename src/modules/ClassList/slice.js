import { createSlice } from "@reduxjs/toolkit";
import { fetchClassList, fetchClassListDetail } from "./api";

const initialState = {
  classList: [],
  classListDetail: null,
  loading: false,
  error: null,
  currentPage: 1,
  totalPages: 0
};

export const classListSlice = createSlice({
  name: "classList",
  initialState,
  reducers: {
    clearClassDetail: (state) => {
      state.classListDetail = null;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchClassList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchClassList.fulfilled, (state, action) => {
        state.loading = false;
        state.classList = action.payload;
        state.totalPages = action?.payload?.totalPages;
        state.currentPage = action?.payload?.currentPage;
        console.log("total", action.payload.totalPages);
      })

      .addCase(fetchClassList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Có lỗi xảy ra!";
      })
      .addCase(fetchClassListDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchClassListDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.classListDetail = action.payload;
      })
      .addCase(fetchClassListDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Có lỗi xảy ra!";
      });
  }
});

export const { clearClassDetail, setCurrentPage } = classListSlice.actions;

export default classListSlice.reducer;
