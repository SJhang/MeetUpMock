import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  LOGOUT
} from '../actions/session_actions.js';

import {merge} from 'lodash';

let _defaultState = {
    eventId: {
      title: null,
      description: null,
      lat: null,
      lng: null,
      date: null,
      group_id: null,
      rsvps: []
    }
  };

export const EventReducer = (state = _defaultState, action) => {
  Object.freeze(state);
};
