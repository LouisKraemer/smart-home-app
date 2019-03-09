import { compose } from 'ramda';
import { send } from './websocket';

import { SET, GET_ALL, GET } from '../constants/yeelight';

const formatAndSend = compose(
  send,
  (endpoint, payload) => JSON.stringify({
    endpoint,
    payload,
  }),
);

const getAll = () => formatAndSend(GET_ALL, null);

const setPower = (id, on) => formatAndSend(SET, { id, on });

const setBri = (id, bri) => formatAndSend(SET, { id, bri });

const get = id => formatAndSend(GET, { id });

export {
  setPower, getAll, get, setBri,
};
