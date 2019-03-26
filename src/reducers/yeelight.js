import { prop } from 'ramda';
import {
  GET,
  GET_ALL,
  RESET_SELECTED_BULB,
  REFRESH_BULBS,
  SELECT_BULB,
} from '../constants/yeelight';

const INITIAL_STATE = {
  bulbs: [],
  selectedBulb: null,
  refreshing: false,
};

const yeelightReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET: {
      const { bulbs, selectedBulb } = state;
      const { deviceId, ...rest } = action.payload;
      return {
        ...state,
        refreshing: false,
        bulbs: bulbs.map(bulb => (bulb.deviceId === deviceId
          ? {
            ...bulb,
            ...rest,
          }
          : bulb)),
        selectedBulb:
          deviceId === prop('deviceId', selectedBulb) ? { ...selectedBulb, ...rest } : selectedBulb,
      };
    }
    case GET_ALL:
      return {
        ...state,
        bulbs: action.payload,
        refreshing: false,
      };
    case RESET_SELECTED_BULB:
      return {
        ...state,
        selectedBulb: null,
      };
    case REFRESH_BULBS:
      return {
        ...state,
        refreshing: true,
      };
    case SELECT_BULB:
      return {
        ...state,
        selectedBulb: action.payload,
      };
    default:
      return state;
  }
};

export { yeelightReducer };
