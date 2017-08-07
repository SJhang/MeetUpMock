import {
  RECEIVE_USER,
  RECEIVE_ERRORS,
  RECEIVE_ALL_USERS
 } from '../actions/user_actions';
import merge from 'lodash/merge';

let _defaultState = {};

export const UserReducer = (state=_defaultState, action) => {
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_USER:
      const newUser = {[action.user.id]: action.user}
      return merge({}, state, newUser);
    case RECEIVE_ALL_USERS:
      newState = action.users;
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
