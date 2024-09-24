import { configureStore } from "@reduxjs/toolkit";
import scrollReducer from "../modules/scrollToTop/slices";
import profileReducer from "../modules/profile/slices";

const store = configureStore({
    reducer: {
        scroll: scrollReducer,
        profile: profileReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
export default store;
