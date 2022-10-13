import { createSlice } from '@reduxjs/toolkit';

export const APP_SCOPE = 'app';

export const initialState = {
  loading: false,
};

const appSlice = createSlice({
  name: APP_SCOPE,
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = appSlice.actions;
export default appSlice;
