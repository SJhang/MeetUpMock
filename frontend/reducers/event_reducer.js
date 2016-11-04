import {
  RECEIVE_ALL_EVENTS,
  RECEIVE_EVENT,
  DELETE_EVENT,
  RECEIVE_ERRORS
} from '../actions/session_actions.js';

import {merge} from 'lodash';

let _defaultState = {
    event: {
      title: null,
      description: null,
      lat: null,
      lng: null,
      group_id: null,
      rsvps: {}
    },
    errors: []
  };

export const EventReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_EVENTS:
      return merge({}, action.events);
    case RECEIVE_EVENT:
      let currentEvent = action.event;
      return merge({}, state, { currentEvent });
    case DELETE_EVENT:
      return merge({}, _defaultState);
    case RECEIVE_ERRORS:
      let errors = action.errors;
      return merge({}, state, { errors });
    default:
      return state;
  }
};

export default EventReducer;
