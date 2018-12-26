import { send } from "./websocket";
import { compose } from "ramda";

import { SET_POWER } from "../constants/yeelight";

const setPower = (id, power) => formatAndSend(SET_POWER, { id, power });

const formatAndSend = compose(
  send,
  (endpoint, payload) =>
    JSON.stringify({
      endpoint,
      payload
    })
);

export { setPower };
