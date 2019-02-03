import { prop } from "ramda";
import { GET, GET_ALL, RESET_SELECTED_BULB } from "../constants/yeelight";

const INITIAL_STATE = {
  bulbs: [],
  selectedBulb: null
};

const yeelightReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET:
      const { bulbs, selectedBulb } = state;
      const { id, on, bri, name } = action.payload;
      return {
        ...state,
        bulbs: bulbs.map(bulb =>
          bulb.id === id
            ? {
                ...bulb,
                on,
                name
              }
            : bulb
        ),
        selectedBulb:
          id === prop("id", selectedBulb) || selectedBulb === null
            ? action.payload
            : selectedBulb
      };
    case GET_ALL:
      return {
        ...state,
        bulbs: action.payload
      };
    case RESET_SELECTED_BULB:
      return {
        ...state,
        selectedBulb: null
      };
    default:
      return state;
  }
};

export { yeelightReducer };
