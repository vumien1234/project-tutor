import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showScrollToTop: false,
};

const scrollSlice = createSlice({
    name: "scroll",
    initialState: initialState,
    reducers: {
        showScroll: (state) => {
            state.showScrollToTop = true;
        },
        hideScroll: (state) => {
            state.showScrollToTop = false;
        },
    },
});

export const { showScroll, hideScroll } = scrollSlice.actions;
export default scrollSlice.reducer;
