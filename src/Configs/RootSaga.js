import { all } from 'redux-saga/effects';

import appSaga from '../Modules/App/saga';
import userSaga from '../Modules/User/saga';

export default function* root() {
  yield all([
    appSaga(),
    userSaga(),
  ]);
}
