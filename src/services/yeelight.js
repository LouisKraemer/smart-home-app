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

const setPower = (_id, on) => formatAndSend(SET, { _id, on });

const setBri = (_id, bri) => formatAndSend(SET, { _id, bri });

const get = _id => formatAndSend(GET, { _id });

export {
  setPower, getAll, get, setBri,
};
