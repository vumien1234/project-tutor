import { createSlice } from "@reduxjs/toolkit";
import { fetchListTutor, fetchListTutorDetail } from "./api";

const initialState = {
  listTutor: [],
  listTutorDetail: null, 
  loading: false,
  error: null,
  currentPage: 1,
  totalPages: 0,
  limit: 5,
};

export const listTutorSlice = createSlice({
  name: "listTutor",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload; 
    },
    setLimit: (state, action) => {
      state.limit = action.payload; 
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchListTutor.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchListTutor.fulfilled, (state, action) => {
        state.loading = false;
        state.listTutor = action.payload.data; 
        state.totalPages = action.payload.totalPages; 
        state.error = null;
      })
      .addCase(fetchListTutor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch tutors";
      })

      .addCase(fetchListTutorDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchListTutorDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.listTutorDetail = action.payload;
      })
      .addCase(fetchListTutorDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch tutor detail";
      });
  },
});

export const { setCurrentPage, setLimit } = listTutorSlice.actions;

export default listTutorSlice.reducer;
