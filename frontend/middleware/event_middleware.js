import {
  receiveAllEvents,
  receiveEvent,
  removeEvent,
  FETCH_ALL_EVENTS,
  FETCH_EVENT,
  CREATE_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
  ADD_ATTENDEE,
  DELETE_ATTENDEE
} from '../actions/event_actions';
import {
  createEvent,
  deleteEvent,
  updateEvent,
  getAllEvents,
  getEvent,
  addAttendee,
  deleteAttendee
} from '../util/events_api_util';
import {
  UPDATE_EVENT_SEARCH_PARAM
} from '../actions/event_search_actions';
import { createBrowserHistory }  from 'history';

export default ({dispatch}) => next => action => {
  const history = createBrowserHistory();
  let success;
  let receiveAllEventsSuccess = events => dispatch(receiveAllEvents(events));
  let receiveEventSuccess = event => dispatch(receiveEvent(event));
  let removeEventSuccess = event => dispatch(removeEvent(event));
  let failure = errors => dispatch(receiveErrors(errors.responseJSON));

  switch (action.type) {
    case FETCH_ALL_EVENTS:
      getAllEvents(receiveAllEventsSuccess, failure);
      return next(action);
    case FETCH_EVENT:
      getEvent(action.id, receiveEventSuccess);
      return next(action);
    case CREATE_EVENT:
      createEvent(action.event, receiveEventSuccess);
      return next(action);
    case UPDATE_EVENT:
      success = event => {
        dispatch(receiveEvent(event));
        history.push('events/:eventId');
      };
      updateEvent(action.event, success);
      return next(action);
    case DELETE_EVENT:
      deleteEvent(action.id, removeEventSuccess);
      return next(action);
    case ADD_ATTENDEE:
      addAttendee(action.user, receiveEventSuccess, action.eventId);
      return next(action);
    case DELETE_ATTENDEE:
      deleteAttendee(action.user, receiveEventSuccess, action.eventId);
      return next(action);
    case UPDATE_EVENT_SEARCH_PARAM:
      dispatch(getAllEvents());
      return next(action);
    default:
      return next(action);
  }
};
