import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  LOGOUT,
  CREATE_IMAGE
} from '../actions/session_actions.js';

import {merge} from 'lodash';

let _defaultState = {
    currentUser: {
      username: null,
      id: null,
      profile_img: null
    },
    errors: []
  };

export const SessionReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let currentUser = action.currentUser;
      return merge({}, state, { currentUser });
    case RECEIVE_ERRORS:
      let errors = action.errors;
      return merge({}, state, { errors });
    case LOGOUT:
      return merge({}, _defaultState);
    default:
      return state;
  }
};

export default SessionReducer;
