import { compose } from 'ramda';
import {
  SET_BRIGHT_ENDPOINT,
  SET_NAME_ENDPOINT,
  SET_POWER_ENDPOINT,
  GET_ALL,
  GET,
  SET_COLOR_TEMPERATURE,
} from 'smart-home-config/yeelight';
import { send } from './websocket';

const formatAndSend = compose(
  send,
  (type, payload) => JSON.stringify({
    type,
    payload,
  }),
);

const getAll = () => formatAndSend(GET_ALL, null);

const setPower = (deviceId, power) => formatAndSend(SET_POWER_ENDPOINT, { deviceId, power });

const setBright = (deviceId, bright) => formatAndSend(SET_BRIGHT_ENDPOINT, { deviceId, bright });

const setColorTemperature = (deviceId, ct) => formatAndSend(SET_COLOR_TEMPERATURE, { deviceId, ct });

const get = deviceId => formatAndSend(GET, { deviceId });

export {
  setPower, getAll, get, setBright, setColorTemperature,
};
