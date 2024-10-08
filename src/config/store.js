import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import scrollReducer from '../modules/scrollToTop/slices';
import { loadingSlice } from "../components/loading/loadingSlice";
import { authSlice } from "../modules/auth/Login/slices";

const rootReducer = combineReducers({
  loading: loadingSlice.reducer,
  auth: authSlice.reducer,
  scroll: scrollReducer,
});

export const makeStore = (preloadedState) => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat();
    },
    preloadedState
  });

  setupListeners(store.dispatch);
  return store;
};

export const store = makeStore();
