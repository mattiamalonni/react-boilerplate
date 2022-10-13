import { call, put, takeLatest } from 'redux-saga/effects';

import { api } from '../../utils';
import { fetchUsers, setUsers } from './reducer';

export function* fetchUsersWorker() {
  const { data } = yield call(() => api.get(`/users`));
  yield put(setUsers(data));
}

export default function* homeSaga() {
  yield takeLatest(fetchUsers.type, fetchUsersWorker);
}
