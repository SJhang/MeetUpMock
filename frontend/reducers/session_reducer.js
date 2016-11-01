import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  LOGOUT
} from '../actions/session_actions.js';

import {merge} from 'lodash';

let _defaultState = {
  username: null,
  errors: []
};

export const SessionReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  debugger
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let currentUser = action.currentUser;
      return merge({}, _defaultState, { currentUser });
    case RECEIVE_ERRORS:
      let errors = action.errors;
      return merge({}, _defaultState, {errors});
    case LOGOUT:
      return merge({}, _defaultState);
    default:
      return state;
  }
};

export default SessionReducer;
