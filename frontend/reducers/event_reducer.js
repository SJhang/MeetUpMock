import {
  RECEIVE_ALL_EVENTS,
  RECEIVE_EVENT,
  DELETE_EVENT,
  RECEIVE_ERRORS
} from '../actions/event_actions';

import {merge} from 'lodash';

let _defaultState = {
    events: {},
    currentEvent: {},
    errors: []
  };

export const EventReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_EVENTS:
      return merge({}, state, {events: action.events});
    case RECEIVE_EVENT:
      let currentEvent = action.event;
      return merge({}, state, { currentEvent });
    case DELETE_EVENT:
      return merge({}, _defaultState);
    default:
      return state;
  }
};

export default EventReducer;
