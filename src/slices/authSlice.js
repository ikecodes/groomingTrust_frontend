import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../api/api';

// export const getUser = createAsyncThunk(
//   'auth/getUser',
//   async (arg, { rejectWithValue }) => {
//     try {
//       const { data } = await api.getMe();
//       return data;
//     } catch (error) {
//       rejectWithValue(error);
//     }
//   }
// );

const initialState = {
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetAuth: (state, { payload }) => {
      state.user = null;
    },
    setAuth: (state, { payload }) => {
      state.user = payload;
    },
  },
  extraReducers: {},
});

// Action creators are generated for each case reducer function
export const { setAuth, resetAuth } = authSlice.actions;

export default authSlice.reducer;
