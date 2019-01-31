import { GET, GET_ALL } from "../constants/yeelight";

const INITIAL_STATE = {
  bulbs: []
};

const yeelightReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET:
      const { bulbs } = state;
      const { id, on, bri, name } = action.payload;
      return {
        ...state,
        bulbs: bulbs.map(bulb =>
          bulb.id === id
            ? {
                ...bulb,
                on,
                bri,
                name
              }
            : bulb
        )
      };
    case GET_ALL:
      return {
        ...state,
        bulbs: action.payload
      };
    default:
      return state;
  }
};

export { yeelightReducer };
