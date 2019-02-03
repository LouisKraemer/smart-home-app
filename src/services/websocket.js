import { eventChannel } from "redux-saga";
import { take, call, put } from "redux-saga/effects";
import { isNil } from "ramda";
import { getAll } from "./yeelight";
import {
  WEBSOCKET_CONNECTED,
  WEBSOCKET_DISCONNECTED
} from "../constants/websocket";

const ws = new WebSocket("ws://192.168.0.10:1880");

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
  const channel = yield call(createSocketChannel, ws);
  while (true) {
    const { endpoint, payload } = yield take(channel);
    yield put({ type: endpoint, payload });
  }
}

const send = data => ws.send(data);

export { handleWs, send };
