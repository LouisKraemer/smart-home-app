import { eventChannel } from "redux-saga";
import { take, call, put } from "redux-saga/effects";
import ReconnectingWebSocket from "reconnecting-websocket";
import { isNil } from "ramda";
import { getAll } from "./yeelight";
import {
  WEBSOCKET_CONNECTED,
  WEBSOCKET_DISCONNECTED
} from "../constants/websocket";

const RECONNECTION_INTERVAL = 2500;
const WS_SERVER_ADDRESS = "ws://192.168.0.10:1880";

const websocketOptions = {
  maxReconnectionDelay: 100000,
  minReconnectionDelay: 2500,
  connectionTimeout: 2000
};

// let socket = new WebSocket(WS_SERVER_ADDRESS);
const rws = new ReconnectingWebSocket(WS_SERVER_ADDRESS, [], websocketOptions);

const createSocketChannel = socket => {
  return eventChannel(emit => {
    socket.onopen = () => {
      emit({ endpoint: WEBSOCKET_CONNECTED });
      getAll();
    };

    socket.onmessage = e => {
      try {
        const { endpoint, payload } = JSON.parse(e.data);
        if (isNil(endpoint) || isNil(payload)) {
          throw new Error("WRONG_MESSAGE_FORMAT");
        }
        emit({ endpoint, payload });
      } catch (err) {
        console.warn(err);
      }
    };

    socket.onerror = e => {
      // an error occurred
      console.log(e.message);
    };

    socket.onclose = e => {
      // connection closed
      emit({ endpoint: WEBSOCKET_DISCONNECTED });
      console.log(e.code, e.reason);
    };
    return () => {
      socket.close();
    };
  });
};

function* handleWs() {
  const channel = yield call(createSocketChannel, rws);
  while (true) {
    const { endpoint, payload } = yield take(channel);
    yield put({ type: endpoint, payload });
  }
}

const send = data => rws.send(data);

export { handleWs, send };
