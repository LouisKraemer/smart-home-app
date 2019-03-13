import { RESET_SELECTED_BULB, REFRESH_BULBS } from '../constants/yeelight';

export const resetSelectedBulbAction = () => ({
  type: RESET_SELECTED_BULB,
  payload: null,
});

export const refreshBulbs = () => ({
  type: REFRESH_BULBS,
  payload: null,
});
