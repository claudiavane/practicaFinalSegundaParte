import { request, received, error } from '../shared/redux/baseActions';

import { DO_LOGIN_REQUEST, DO_LOGIN_SUCCESS, DO_LOGIN_ERROR } from './actionTypes';

import UserService from '../services/UserService';

export const doLogin = (email, password) => async (dispatch) => {
  dispatch(request(DO_LOGIN_REQUEST));
  try {
    const response = await UserService.doLogin(email, password);
    dispatch(received(DO_LOGIN_SUCCESS, response.data));
  } catch (err) {
    dispatch(error(DO_LOGIN_ERROR));
    // eslint-disable-next-line
    console.log('AXIOS_ERROR', err);
  }
};

export const doRegister = () => {};
