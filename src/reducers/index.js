import { combineReducers } from "redux";

import { yeelightReducer } from "./yeelight";

import { websocketReducer } from "./websocket";

export const rootReducer = combineReducers({
  yeelightReducer,
  websocketReducer
});
