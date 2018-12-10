import { all } from 'redux-saga/effects';

import appSaga from '../Modules/App/saga';

export default function* root() {
  yield all([
    appSaga(),
  ]);
}
