import { compose } from 'ramda';
import { send } from './websocket';

import {
  SET_BRIGHT_ENDPOINT,
  SET_NAME_ENDPOINT,
  SET_POWER_ENDPOINT,
  GET_ALL,
  GET,
} from '../constants/yeelight';

const formatAndSend = compose(
  send,
  (endpoint, payload) => JSON.stringify({
    endpoint,
    payload,
  }),
);

const getAll = () => formatAndSend(GET_ALL, null);

const setPower = (deviceId, power) => formatAndSend(SET_POWER_ENDPOINT, { deviceId, power });

const setBright = (deviceId, bright) => formatAndSend(SET_BRIGHT_ENDPOINT, { deviceId, bright });

const get = deviceId => formatAndSend(GET, { deviceId });

export {
  setPower, getAll, get, setBright,
};
