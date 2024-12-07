import { createSlice } from "@reduxjs/toolkit";
import { fetchCourseList } from "./api";

const initialState = {
	courseList: [],
	loading: false,
	error: null,
	currentPage: 1,
	totalPages: 0,
	limit: 5,
	selectedCourseId: null,
};

const listTutorSlice = createSlice({
	name: "listCourse",
	initialState,
	reducers: {
		setCurrentPage: (state, action) => {
			state.currentPage = action.payload;
		},
		setLimit: (state, action) => {
			state.limit = action.payload;
		},
		setSelectedCourseId: (state, action) => {
			state.selectedCourseId = action.payload; // id_lop
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCourseList.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchCourseList.fulfilled, (state, action) => {
				state.loading = false;
				state.courseList = action.payload.data; // Giả sử API trả về dữ liệu ở đây
				state.totalPages = action.payload.totalPages;
				state.error = null;
			})
			.addCase(fetchCourseList.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || "Failed to fetch tutors";
			});
	},
});

export const { setCurrentPage, setLimit, setSelectedCourseId } = listTutorSlice.actions;

export default listTutorSlice.reducer;
