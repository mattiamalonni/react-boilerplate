import { createSelector } from '@reduxjs/toolkit';

import { USERS_SCOPE, initialState } from './reducer';

const state = state => state[USERS_SCOPE] || initialState;

export const usersSelector = () => createSelector(state, state => state.users);
