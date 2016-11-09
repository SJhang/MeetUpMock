import {
  RECEIVE_ALL_EVENTS,
  RECEIVE_EVENT,
  DELETE_EVENT,
  RECEIVE_ERRORS
} from '../actions/event_actions';

import {merge} from 'lodash';

let _defaultState = {
    events: {},
    errors: []
  };

export const EventReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALL_EVENTS:
      newState.events = action.events;
      return newState;
    case RECEIVE_EVENT:
      let newEvent = {[action.event.id]: action.event};
      newState.events = newEvent;
      return newState;
    case DELETE_EVENT:
      newState.events = _defaultState;
      return newState;
    case RECEIVE_ERRORS:
      let errors = action.errors;
      newState.errors = errors;
      return newState;
    default:
      return state;
  }
};

export default EventReducer;
