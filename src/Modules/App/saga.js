import {
  takeLatest,
} from 'redux-saga/effects';

import {
  initApp,
} from './actions';

function* appInitWorker() {

}

export default function* () {
  yield takeLatest(initApp, appInitWorker);
}
