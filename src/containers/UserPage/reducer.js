import { createSlice } from '@reduxjs/toolkit';

export const USER_SCOPE = 'user';

export const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: USER_SCOPE,
  initialState,
  reducers: {
    fetchUser: () => {},
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { fetchUser, setUser } = userSlice.actions;
export default userSlice;
