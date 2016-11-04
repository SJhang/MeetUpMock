import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  LOGOUT
} from '../actions/session_actions.js';

import {merge} from 'lodash';

let _defaultState = {
    groupId: {
      naem: null,
      description: null,
      city: null,
      state: null,
      date: null,
      image: null,
      groupMembers: []
    }
  };

export const GroupReducer = (state = _defaultState, action) => {
  Object.freeze(state);
};
