import { createAction } from 'redux-actions';

export const openJobsListRequest = createAction('OPEN_JOBS/LIST/REQUEST');
export const openJobsListSuccess = createAction('OPEN_JOBS/LIST/SUCCESS');
export const openJobsListFailure = createAction('OPEN_JOBS/LIST/FAILURE');
