import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';
import { Alert } from 'react-native';

import {
  userLoginFailure,
  userLoginRequest,
  userLoginSuccess,
} from './actions';
import Navigation from '../../Services/Navigation';
import { loginApi } from '../../Services/FakeAPI';

function* userLoginWorker({ payload }) {
  try {
    const response = yield call(loginApi, payload);
    yield put(userLoginSuccess(response));
    yield Navigation.navigate('AppStack');
  } catch (error) {
    yield Alert.alert('Login failure!', error);
    yield put(userLoginFailure({ error }));
  }
}

export default function* () {
  yield takeLatest(userLoginRequest, userLoginWorker);
}
