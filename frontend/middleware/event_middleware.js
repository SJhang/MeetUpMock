import {
  receiveAllEvents,
  receiveEvent,
  removeEvent,
  FETCH_ALL_EVENTS,
  FETCH_EVENT,
  CREATE_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
  receiveErrors
} from '../actions/event_actions';
import {
  createEvent,
  deleteEvent,
  updateEvent,
  fetchEvents,
  fetchEvent
} from '../util/events_api_util';
import { hashHistory } from 'react-redux';

export default ({dispatch}) => next => action => {
  let success;
  let receiveAllEventsSuccess = events => dispatch(receiveAllEvents(events));
  let receiveEventSuccess = event => dispatch(receiveEvent(event));
  let removeEventSuccess = event => dispatch(removeEvent(event));
  let failure = errors => dispatch(receiveErrors(errors.responseJSON));

  switch (action.type) {
    case FETCH_ALL_EVENTS:
      fetchEvents(receiveAllEventsSuccess, failure);
      return next(action);
    case FETCH_EVENT:
      fetchEvent(action.id, receiveEventSuccess);
      return next(action);
    case CREATE_EVENT:
      createEvent(action.event, receiveEventSuccess);
      return next(action);
    case UPDATE_EVENT:
      success = event => {
        dispatch(receiveEvent(event));
        hashHistory.push('/events/:eventId');
      };
      updateEvent(action.event, success);
      return next(action);
    case DELETE_EVENT:
      deleteEvent(action.id, removeEventSuccess);
      return next(action);
    default:
      return next(action);
  }
};
