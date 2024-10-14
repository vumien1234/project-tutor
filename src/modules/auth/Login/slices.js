import { createSlice } from "@reduxjs/toolkit";
import { getUserData, loginAction } from "./api";

const initialState = {
  currentUser: {},
  isLogin: false,
  rememberPage: "/"
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      state.users = {};
      state.isLogin = false;
      // remove token in local storage
      localStorage.removeItem("token");
      // redirect to login page
      window.location.href = "/login";
    },
    setRememberPage: (state, action) => {
      state.rememberPage = action.payload;
    },
    updateUserData: (state, action) => {
      state.currentUser = {
        ...state.currentUser,
        ...action.payload
      };
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loginAction.fulfilled, (state, action) => {
      localStorage.setItem("token", action.payload.token);
    });
    builder.addCase(getUserData.fulfilled, (state, action) => {
      state.currentUser = action.payload;
      state.isLogin = true;
    });
    builder.addCase(getUserData.rejected, (state) => {
      state.currentUser = {};
      state.isLogin = false;
      // remove token in local storage
      localStorage.removeItem("token");
    });
  }
});

export const { logOut, setRememberPage, updateUserData } = authSlice.actions;
export default authSlice.reducer;
