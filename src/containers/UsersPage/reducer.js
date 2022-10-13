import { createSlice } from '@reduxjs/toolkit';

export const USERS_SCOPE = 'users';

export const initialState = {
  users: [],
};

const usersSlice = createSlice({
  name: USERS_SCOPE,
  initialState,
  reducers: {
    fetchUsers: () => {},
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { fetchUsers, setUsers } = usersSlice.actions;
export default usersSlice;
