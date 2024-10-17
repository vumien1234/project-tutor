import { createSlice } from "@reduxjs/toolkit";
import { fetchNote } from "./api";

const initialState = {
  classNote: [],
  loading: false,
  error: null,
};

export const classNoteSlice = createSlice({
  name: "classNote",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNote.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNote.fulfilled, (state, action) => {
        state.loading = false;
        state.classNote = action.payload; 
    })
    .addCase(fetchNote.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Có lỗi xảy ra!";
    })
  }
});

// export const {} = classNoteSlice.actions;
export default classNoteSlice.reducer;
