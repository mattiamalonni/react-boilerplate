import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducer';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware),
  devTools: import.meta.env.DEV,
});

sagaMiddleware.run(rootSaga);

export default store;
