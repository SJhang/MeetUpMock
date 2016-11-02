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
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let currentUser = action.currentUser;
      return {
        username: currentUser,
        errors: []
      };
    case RECEIVE_ERRORS:
      return {
        username: null,
        errors: action.errors
      };
    case LOGOUT:
      return merge({}, _defaultState);
    default:
      return state;
  }
};

export default SessionReducer;
