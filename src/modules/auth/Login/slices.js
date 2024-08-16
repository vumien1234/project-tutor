import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getToken } from "./api";

export const loginAsync = createAsyncThunk("auths/getToken", async (params) => {
    const response = await getToken(params);
    return response.data;
});

export const authSlice = createSlice({
    name: "auths",
    // initialState: initialState(),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.pending, (state) => {
                state.status = true;
            })
            .addCase(loginAsync.fulfilled, (state, action) => {
                const { token } = action?.payload;
                localStorage.setItem("token", token);
                // localStorage.setItem("refreshToken", refreshToken);
            })
            .addCase(loginAsync.rejected, (state, action) => {});
    },
});
// export const {} = authSlice.actions;

export default authSlice.reducer;
