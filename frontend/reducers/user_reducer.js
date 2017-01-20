import {
  RECEIVE_USER,
  RECEIVE_ERRORS,
  RECEIVE_ALL_USERS
 } from '../actions/user_actions';
import merge from 'lodash/merge';

let _defaultState = {
  userDetail: {},
  errors: []
};

export const UserReducer = (state=_defaultState, action) => {
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_USER:
      newState.userDetail = action.user;
      return newState;
    case RECEIVE_ALL_USERS:
      return newState;
    case RECEIVE_ERRORS:
      let errors = action.errors;
      newState.errors = errors;
      return newState;
    default:
      return state;
  }
};

export default UserReducer;
