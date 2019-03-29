import { combineReducers } from 'redux';

import { yeelightReducer } from './yeelight';

import { websocketReducer } from './websocket';

import { authenticationReducer } from './authentication';

export const rootReducer = combineReducers({
  authenticationReducer,
  yeelightReducer,
  websocketReducer,
});
