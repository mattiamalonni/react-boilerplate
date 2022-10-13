import { call, put, select, takeLatest } from 'redux-saga/effects';

import { api } from '../../utils';
import { setLoading } from './../App/reducer';
import { fetchUsers, setUsers } from './reducer';
import { usersSelector } from './selectors';

export function* fetchUsersWorker() {
  try {
    const users = yield select(usersSelector());
    if (!users || !users.length) yield put(setLoading(true));
    const { data } = yield call(() => api.get(`/users`));
    yield put(setUsers(data));
  } catch (err) {
  } finally {
    yield put(setLoading(false));
  }
}

export default function* homeSaga() {
  yield takeLatest(fetchUsers.type, fetchUsersWorker);
}
