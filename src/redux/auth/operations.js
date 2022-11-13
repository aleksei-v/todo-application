import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://goit-task-manager.herokuapp.com/';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    unset() {
        axios.defaults.headers.common.Authorization = ``
    },
};

export const register = createAsyncThunk(
    'auth/register',
    async (credentials, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/users/signup', credentials);
            token.set(data.token);
            return data;
        } catch ({ response }) {
            const error = {
                status: response.status,
                message: response.data.message,
            }
            return rejectWithValue(error)
        };
    },
);

export const login = createAsyncThunk(
        'auth/login',
    async (credentials, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/users/login', credentials);
            token.set(data.token);
            return data;
        } catch ({ response }) {
            const error = {
                status: response.status,
                message: response.data.message,
            };
            return rejectWithValue(error);
        };
    },
);

export const logOut = createAsyncThunk(
        'auth/logout',
    async (credentials, { rejectWithValue }) => {
        try {
            await axios.post('/users/logout', credentials);
            token.unset();
        } catch ({ response }) {
            const error = {
                status: response.status,
                message: response.data.message,
            };
            return rejectWithValue(error);
        };
    },
);


export const refreshCurrentUser = createAsyncThunk(
        'auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            return thunkAPI.rejectWithValue('Unable to fetch user');
        };

        try {
            const { data } = await axios.post('/users/login');
            token.set(persistedToken);
            return data;
        } catch ({ response }) {
            const error = {
                status: response.status,
                message: response.data.message,
            };
            return thunkAPI.rejectWithValue(error);
        };
    },
);