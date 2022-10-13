import { createSelector } from '@reduxjs/toolkit';

import { USERS_SCOPE, initialState } from './reducer';

const homeState = state => state[USERS_SCOPE] || initialState;

export const usersSelector = () => createSelector(homeState, state => state.users);
