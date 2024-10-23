import { createSlice } from "@reduxjs/toolkit";
import { fetchComment, fetchListTutor, fetchListTutorDetail, fetchPostComment } from "./api";

const initialState = {
  listTutor: [],
  comment: [],
  postComment: '',
  listTutorDetail: null,
  loading: false,
  error: null,
  currentPage: 1,
  totalPages: 0,
  limit: 5,
};

const listTutorSlice = createSlice({
  name: "listTutor",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setPostComment: (state, action) => {
      state.postComment = action.payload;
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
      // Chi tiết gia sư
      .addCase(fetchListTutorDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchListTutorDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.listTutorDetail = action.payload;
        state.error = null;
      })
      .addCase(fetchListTutorDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch tutor detail";
      })
      // Danh sách bình luận
      .addCase(fetchComment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchComment.fulfilled, (state, action) => {
        state.loading = false;
        state.comment = action.payload.data;
        state.totalPages = action.payload.totalPages;
        state.error = null;
      })
      .addCase(fetchComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch comments";
      })
      // Post bình luận
      .addCase(fetchPostComment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPostComment.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        // Thêm bình luận mới vào đầu mảng comment
        state.comment.unshift(action.payload);
        state.postComment = '';
      })
      
      .addCase(fetchPostComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to post comment";
      });
  },
});

export const { setCurrentPage, setLimit, setPostComment } = listTutorSlice.actions;

export default listTutorSlice.reducer;
