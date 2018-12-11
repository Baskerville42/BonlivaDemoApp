import { handleActions } from 'redux-actions';

import {
  openJobsListRequest,
  openJobsListSuccess,
  openJobsListFailure,
} from './actions';

const initialState = {
  list: [],
  loading: false,
  error: {},
};

export default handleActions({
  [openJobsListRequest]: state => ({
    ...state,
    loading: true,
    error: initialState.error,
  }),
  [openJobsListSuccess]: (state, { payload }) => ({
    ...state,
    ...payload,
    loading: initialState.loading,
    error: initialState.error,
  }),
  [openJobsListFailure]: (state, { payload }) => ({
    ...state,
    ...initialState,
    ...payload,
    loading: initialState.loading,
  }),
}, initialState);
