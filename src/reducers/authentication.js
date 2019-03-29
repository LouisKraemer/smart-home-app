import { LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_FAIL } from '../constants/authentication';

const INITIAL_STATE = {
  pending: false,
  token: null,
};

const authenticationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_PENDING:
      return {
        ...state,
        token: null,
        pending: true,
      };
    case LOGIN_SUCCESS: {
      const { token } = action.payload;
      return {
        ...state,
        token,
        pending: false,
      };
    }
    case LOGIN_FAIL:
      return {
        ...state,
        token: null,
        pending: false,
      };
    default:
      return state;
  }
};

export { authenticationReducer };
