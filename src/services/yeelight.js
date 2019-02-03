import { send } from "./websocket";
import { compose } from "ramda";

import { SET, GET_ALL, GET } from "../constants/yeelight";

const getAll = () => formatAndSend(GET_ALL, null);

const setPower = (id, on) => formatAndSend(SET, { id, on });

const get = id => formatAndSend(GET, { id });

const formatAndSend = compose(
  send,
  (endpoint, payload) =>
    JSON.stringify({
      endpoint,
      payload
    })
);

export { setPower, getAll, get };
