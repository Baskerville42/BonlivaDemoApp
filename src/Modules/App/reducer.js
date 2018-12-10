import { handleActions } from 'redux-actions';

import {
  initApp,
} from './actions';

const initialState = {
  isInit: false,
};

export default handleActions({
  [initApp]: state => ({
    ...state,
    isInit: true,
  }),
}, initialState);
