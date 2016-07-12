import * as types from './types';

export function updateLoginEmail(email) {
  return {
    type: types.UPDATE_LOGIN_EMAIL,
    payload: email,
  };
}

export function updateLoginPassword(password) {
  return {
    type: types.UPDATE_LOGIN_PASSWORD,
    payload: password,
  };
}