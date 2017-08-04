import {
  RECEIVE_ALL_GROUPS,
  RECEIVE_GROUP,
  DELETE_GROUP
} from '../actions/group_actions.js';

import {merge} from 'lodash';

let _defaultState = {};

export const GroupReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALL_GROUPS:
      newState = action.groups;
      return newState;
    case RECEIVE_GROUP:
      let newGroup = {[action.group.id]: action.group};
      return merge({}, state, newGroup);
    case DELETE_GROUP:
      return newState;
    default:
      return state;
  }
};

export default GroupReducer;
