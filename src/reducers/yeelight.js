import { SET_POWER } from "../constants/yeelight";

const INITIAL_STATE = {
  bulbs: [
    {
      id: "1234",
      power: "on",
      name: "BLABLABLA"
    }
  ]
};

const yeelightReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_POWER:
      const { bulbs } = state;
      const { id, power } = action.payload;
      return {
        ...state,
        bulbs: bulbs.map(bulb =>
          bulb.id === id
            ? {
                ...bulb,
                power
              }
            : bulb
        )
      };
    default:
      return state;
  }
};

export { yeelightReducer };
