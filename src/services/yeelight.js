import { send } from "./websocket";
import { compose } from "ramda";

const setPower = (id, power) =>
  formatAndSend("yeelight::set::power", { id, power });

const formatAndSend = compose(
  send,
  (endpoint, payload) =>
    JSON.stringify({
      endpoint,
      payload
    })
);

export { setPower };
