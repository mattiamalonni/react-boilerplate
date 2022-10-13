import { all } from 'redux-saga/effects';

const context = import.meta.glob('../containers/**/saga.js', { eager: true });
const sagas = Object.values(context).map(module => module.default);

function* rootSaga() {
  yield all([...sagas.map(saga => saga())]);
}

export default rootSaga;
