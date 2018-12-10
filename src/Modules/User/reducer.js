import { handleActions } from 'redux-actions';

import {
  userLoginRequest,
  userLoginSuccess,
  userLoginFailure,
} from './actions';

const initialState = {
  token: '',
  data: {
    name: '',
    email: '',
  },
  loading: false,
  error: {},
};

export default handleActions({
  [userLoginRequest]: state => ({
    ...state,
    loading: true,
    error: initialState.error,
  }),
  [userLoginSuccess]: (state, { payload }) => ({
    ...state,
    ...payload,
    loading: initialState.loading,
    error: initialState.error,
  }),
  [userLoginFailure]: (state, { payload }) => ({
    ...state,
    ...initialState,
    ...payload,
    loading: initialState.loading,
  }),
}, initialState);
