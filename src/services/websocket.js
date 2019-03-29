import ReconnectingWebSocket from 'reconnecting-websocket';
import { isNil } from 'ramda';
import { getAll } from './yeelight';
import { WEBSOCKET_CONNECTED, WEBSOCKET_DISCONNECTED } from '../constants/websocket';

import { WEBSOCKET_URL } from '../../env.config';

import { store } from '../../App';

const websocketOptions = {
  maxReconnectionDelay: 100000,
  minReconnectionDelay: 0,
  connectionTimeout: 2000,
};

let rws;

export const initWebsocket = (token) => {
  rws = new ReconnectingWebSocket(`${WEBSOCKET_URL}/${token}`, [], websocketOptions);

  rws.onopen = () => {
    store.dispatch({ type: WEBSOCKET_CONNECTED });
    getAll();
  };

  rws.onmessage = (e) => {
    try {
      const { endpoint, payload } = JSON.parse(e.data);
      if (isNil(endpoint) || isNil(payload)) {
        throw new Error('WRONG_MESSAGE_FORMAT');
      }
      store.dispatch({ type: endpoint, payload });
    } catch (err) {
      console.warn(err);
    }
  };

  rws.onerror = (e) => {
    // an error occurred
    console.log(e.message);
  };

  rws.onclose = (e) => {
    // connection closed
    store.dispatch({ type: WEBSOCKET_DISCONNECTED });
    console.log(e.code, e.reason);
  };
};

export const send = data => rws.send(data);
