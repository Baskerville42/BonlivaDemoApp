import { combineReducers } from 'redux';

import appState from '../Modules/App/reducer';
import userState from '../Modules/User/reducer';
import openJobsState from '../Modules/OpenJob/reducer';

export default combineReducers({
  appState,
  userState,
  openJobsState,
});
