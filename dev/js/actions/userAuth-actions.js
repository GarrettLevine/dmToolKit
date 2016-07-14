import * as types from './types';

//update login email
export function updateLoginEmail(email) {
  return {
    type: types.UPDATE_LOGIN_EMAIL,
    payload: email,
  };
}

//update login password
export function updateLoginPassword(password) {
  return {
    type: types.UPDATE_LOGIN_PASSWORD,
    payload: password,
  };
}

//update user email create
export function updateCreateEmail(email) {
  return {
    type: types.UPDATE_LOGIN_EMAIL,
    payload: email,
  };
}

//update user password create
export function updateCreatePassword(email) {
  return {
    type: types.UPDATE_LOGIN_EMAIL,
    payload: email,
  };
}

//update user password confirm
export function updateConfirmPasswrod(email) {
  return {
    type: types.UPDATE_LOGIN_EMAIL,
    payload: email,
  };
}

