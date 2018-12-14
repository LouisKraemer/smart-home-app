import { SET_POWER } from "../constants/yeelight";

const setPower = (id, power) => ({
  type: SET_POWER,
  payload: { id, power }
});

export const yeelightActions = { setPower };
