import {
  RECEIVE_ALL_GROUPS,
  RECEIVE_GROUP,
  DELETE_GROUP,
  RECEIVE_ERRORS,
} from '../actions/group_actions.js';

import {merge} from 'lodash';

let _defaultState = {
    groups: {},
    currentGroup: {},
    errors: []
  };

export const GroupReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALL_GROUPS:

      newState.groups = action.groups;
      "";
      return newState;
    case RECEIVE_GROUP:
      newState.currentGroup = action.currentGroup;
      return newState;
    case DELETE_GROUP:
      newState.groups = _defaultState;
      return newState;
    case RECEIVE_ERRORS:
      let errors = action.errors;
      newState.errors = errors;
      return newState;
    default:
      return state;
  }
};

export default GroupReducer;
