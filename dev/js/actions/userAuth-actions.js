import * as types from './types';

import * as providers from '../providers/userAuth-provider';

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
    type: types.UPDATE_CREATE_EMAIL,
    payload: email,
  };
}

//update user password create
export function updateCreatePassword(password) {
  return {
    type: types.UPDATE_CREATE_PASSWORD,
    payload: password,
  };
}

//update user password confirm
export function updateConfirmPassword(password) {
  return {
    type: types.UPDATE_CONFIRM_PASSWORD,
    payload: password,
  };
}

//show user create form
export function toggleCreateUser() {
  return {
    type: types.TOGGLE_CREATE_USER,
  };
}

//user login
export function loginUser() {
  return {
    type: types.LOGIN_USER,
  };
}

//user creation
export function createUser() {
  return {
    type: types.CREATE_USER,
  };
}


