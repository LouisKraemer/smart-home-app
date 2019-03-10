import { prop } from 'ramda';
import { GET, GET_ALL, RESET_SELECTED_BULB } from '../constants/yeelight';

const INITIAL_STATE = {
  bulbs: [
    {
      _id: 'test',
      name: 'Test',
      on: true,
    },
    {
      _id: 'test2',
      name: 'Test2',
      on: false,
    },
    {
      _id: 'test3',
      name: 'Test3',
      on: false,
    },
    {
      _id: 'test4',
      name: 'Test4',
      on: false,
    },
    {
      _id: 'test5',
      name: 'Test5',
      on: false,
    },
  ],
  selectedBulb: null,
};

const yeelightReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET: {
      const { bulbs, selectedBulb } = state;
      const {
        _id, on, bri, name,
      } = action.payload;
      return {
        ...state,
        bulbs: bulbs.map(bulb => (bulb._id === _id
          ? {
            ...bulb,
            on,
            name,
          }
          : bulb)),
        selectedBulb:
          _id === prop('_id', selectedBulb) || selectedBulb === null
            ? action.payload
            : selectedBulb,
      };
    }
    case GET_ALL:
      return {
        ...state,
        bulbs: action.payload,
      };
    case RESET_SELECTED_BULB:
      return {
        ...state,
        selectedBulb: null,
      };
    default:
      return state;
  }
};

export { yeelightReducer };
