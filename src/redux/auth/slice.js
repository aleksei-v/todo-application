import { createSlice } from "@reduxjs/toolkit";
import { register, login, logOut, refreshCurrentUser } from "./operations";

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
};
const isSuccessAuth = (state, { payload }) => {
    state.user = payload.user;
    state.token = payload.token;
    state.isLoggedIn = true;
    state.isLoading = false;
};

const initialState = {
    user: { name: null, email: null },
    token: null,
    error: null,
    isLoggedIn: false,
    isLoading: false,
    isRefresing: false
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [register.pending]: handlePending,
        [register.fulfilled]: isSuccessAuth,
        [register.rejected]: handleRejected,
        [login.pending]: handlePending,
        [login.fulfilled]: isSuccessAuth,
        [login.rejected]: handleRejected,
        [logOut.pending]: handlePending,
        [logOut.fulfilled](state) {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = null;
            state.isLoading = false;
        },
        [logOut.rejected]: handleRejected,
        [refreshCurrentUser.pending](state) {
            state.isRefreshing = true;
        },
        [refreshCurrentUser.fulfilled](state, { payload }) {
            state.user = payload;
            state.isLoggedIn = true;
            state.isRefresing = false;
        },
        [refreshCurrentUser.rejected](state) {
            state.isRefreshing = false;
        },
    },
});

export default authSlice.reducer;