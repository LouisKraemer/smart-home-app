import axios from 'axios';
import { NavigationActions } from 'react-navigation';
import { loginPending, loginSuccess, loginFail } from '../actions/authentication';

import { API_URL } from '../../env.config';

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
      NavigationActions.navigate({ routeName: 'Home' });
      // Set the results to the people array.
      // dispatch(fetchDataFulfilled(res.data.results));
      // Error handle the promise and set your errorMessage
    })
    .catch(err => dispatch(loginFail()));
};
