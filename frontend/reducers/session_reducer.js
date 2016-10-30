import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  LOGOUT
} from '../actions/session_actions.js';

import merge from 'lodash/merge';

let _defaultState = {
  username: null,
  errors: []
};

export default (state = _defaultState) => next => action => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, action.currentUser);
    case RECEIVE_ERRORS:
      return merge({}, state, action.errors);
    case LOGOUT:
      return merge({}, state, action.user, action.errors);
    default:
      return state;
  }
};
