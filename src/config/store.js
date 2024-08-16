
import { configureStore } from '@reduxjs/toolkit';
import scrollReducer from '../modules/scrollToTop/slices';

const store = configureStore({
    reducer: {
        scroll: scrollReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
export default store;
