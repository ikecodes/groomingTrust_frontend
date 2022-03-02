import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../api/api';
import Toast from '../utils/Toast';

export const getUser = createAsyncThunk(
  'auth/getUser',
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await api.getMe();
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
export const register = createAsyncThunk(
  'auth/register',
  async (formdata, { rejectWithValue }) => {
    try {
      const { data } = await api.signup(formdata);
      Toast('Registration successfull', 'success');
      return data;
    } catch (error) {
      rejectWithValue(error);
      Toast(error?.response?.data?.message, 'error');
    }
  }
);
export const login = createAsyncThunk(
  'auth/login',
  async (formdata, { rejectWithValue }) => {
    try {
      const {
        data: { access_token },
      } = await api.login(formdata);
      Toast('Login successfull', 'success');
      return access_token;
    } catch (error) {
      rejectWithValue(error?.response?.data);
      Toast(error?.response?.data?.message, 'error');
    }
  }
);

const initialState = {
  user: null,
  loading: false,
  token: null,
  data: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetAuth: (state, { payload }) => {
      state.data = null;
      state.token = null;
      state.user = null;
    },
  },
  extraReducers: {
    [getUser.fulfilled]: (state, { payload }) => {
      state.user = { ...payload.data };
    },
    [login.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, { payload }) => {
      localStorage.setItem('token', payload);
      state.token = payload;
      state.loading = false;
    },
    [register.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [register.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { resetAuth } = authSlice.actions;

export default authSlice.reducer;
