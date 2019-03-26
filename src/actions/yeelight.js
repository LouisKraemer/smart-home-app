import { RESET_SELECTED_BULB, REFRESH_BULBS, SELECT_BULB } from '../constants/yeelight';

export const resetSelectedBulbAction = () => ({
  type: RESET_SELECTED_BULB,
  payload: null,
});

export const refreshBulbs = () => ({
  type: REFRESH_BULBS,
  payload: null,
});

export const selectBulbAction = bulb => ({
  type: SELECT_BULB,
  payload: bulb,
});
