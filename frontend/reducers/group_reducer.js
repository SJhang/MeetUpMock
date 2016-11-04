import {
  RECEIVE_ALL_GROUPS,
  RECEIVE_GROUP,
  DELETE_GROUP,
  RECEIVE_ERRORS,
} from '../actions/session_actions.js';

import {merge} from 'lodash';

let _defaultState = {
    group: {
      name: null,
      description: null,
      city: null,
      state: null,
      date: null,
      image: null,
      members: {}
    },
    errors: []
  };

export const GroupReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_GROUPS:
      return merge({}, action.groups);
    case RECEIVE_GROUP:
      let currentGroup = action.currentGroup;
      return merge({}, state, { currentGroup });
    case DELETE_GROUP:
      return merge({}, _defaultState);
    case RECEIVE_ERRORS:
      let errors = action.errors;
      return merge({}, state, { errors });
    default:
      return state;
  }
};

export default GroupReducer;
