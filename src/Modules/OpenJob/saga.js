import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';
import { Alert } from 'react-native';

import {
  openJobsListRequest,
  openJobsListSuccess,
  openJobsListFailure,
} from './actions';
import { openJobsApi } from '../../Services/FakeAPI';

function* getOpenJobsListWorker() {
  try {
    const response = yield call(openJobsApi);
    yield put(openJobsListSuccess(response));
  } catch (error) {
    yield Alert.alert('Failed loading list!', error);
    yield put(openJobsListFailure({ error }));
  }
}

export default function* () {
  yield takeLatest(openJobsListRequest, getOpenJobsListWorker);
}
