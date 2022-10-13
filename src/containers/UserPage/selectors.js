import { createSelector } from '@reduxjs/toolkit';

import { USER_SCOPE, initialState } from './reducer';

const state = state => state[USER_SCOPE] || initialState;

export const userSelector = () => createSelector(state, state => state.user);
