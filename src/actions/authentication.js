import { LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_FAIL } from '../constants/authentication';

export const loginPending = () => ({
  type: LOGIN_PENDING,
});

export const loginSuccess = token => ({
  type: LOGIN_SUCCESS,
  payload: { token },
});

export const loginFail = () => ({
  type: LOGIN_FAIL,
});
