import { combineReducers } from '@reduxjs/toolkit';

const context = import.meta.glob('../containers/**/reducer.js', { eager: true });

const reducers = Object.values(context)
  .map(module => module.default)
  .reduce((acc, el) => ({ ...acc, [el.name]: el.reducer }), {});

const rootReducer = combineReducers({ ...reducers });

export default rootReducer;
