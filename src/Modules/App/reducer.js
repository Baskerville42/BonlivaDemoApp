import { handleActions } from 'redux-actions';

import {
  initApp,
} from './actions';

const initialState = Map({
  isInit: false,
});

export default handleActions({
  [initApp]: state => state.set('isInit', true),
}, initialState);
