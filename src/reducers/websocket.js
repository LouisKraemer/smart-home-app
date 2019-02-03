import {
  WEBSOCKET_CONNECTED,
  WEBSOCKET_DISCONNECTED
} from "../constants/websocket";

const INITIAL_STATE = {
  connected: false
};

const websocketReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WEBSOCKET_CONNECTED:
      return {
        ...state,
        connected: true
      };
    case WEBSOCKET_DISCONNECTED:
      return {
        ...state,
        connected: false
      };
    default:
      return state;
  }
};

export { websocketReducer };
