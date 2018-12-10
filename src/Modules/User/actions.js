import { createAction } from 'redux-actions';

export const userLoginRequest = createAction('USER/LOGIN/REQUEST');
export const userLoginSuccess = createAction('USER/LOGIN/SUCCESS');
export const userLoginFailure = createAction('USER/LOGIN/FAILURE');
