import {
  RECEIVE_ALL_EVENTS,
  RECEIVE_EVENT,
  DELETE_EVENT
} from '../actions/event_actions';

import {merge} from 'lodash';

let _defaultState = {};

export const EventReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALL_EVENTS:
      newState = action.events;
      return newState;
    case RECEIVE_EVENT:
      let newEvent = {[action.event.id]: action.event};
      return merge({}, state, newEvent);
    case DELETE_EVENT:
      return newState;
    default:
      return state;
  }
};

export default EventReducer;
