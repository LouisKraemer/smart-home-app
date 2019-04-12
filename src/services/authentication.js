import axios from 'axios';
import { loginPending, loginSuccess, loginFail } from '../actions/authentication';

import { setToken } from './storage';

import { API_URL } from '../environment';

const instance = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
});

export const login = ({ pseudo, password }) => (dispatch) => {
  dispatch(loginPending());
  instance
    .post('/login', { pseudo, password })
    .then(({ data }) => {
      dispatch(loginSuccess(data));
      setToken(data);
    })
    .catch(err => dispatch(loginFail()));
};
