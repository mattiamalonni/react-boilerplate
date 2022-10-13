import { call, put, select, takeLatest } from 'redux-saga/effects';

import { api } from '../../utils';
import { setLoading } from './../App/reducer';
import { fetchUser, setUser } from './reducer';
import { userSelector } from './selectors';

export function* fetchUserWorker({ payload }) {
  const { id } = payload;
  try {
    const user = yield select(userSelector());
    if (!user || user.id != id) yield put(setLoading(true));
    const { data } = yield call(() => api.get(`/users/${id}`));
    yield put(setUser(data));
  } catch (err) {
  } finally {
    yield put(setLoading(false));
  }
}

export default function* homeSaga() {
  yield takeLatest(fetchUser.type, fetchUserWorker);
}
