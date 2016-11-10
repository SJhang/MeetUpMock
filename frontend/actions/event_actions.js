export const RECEIVE_ALL_EVENTS = "RECEIVE_ALL_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const FETCH_ALL_EVENTS = "FETCH_ALL_EVENTS";
export const FETCH_EVENT = "FETCH_EVENT";
export const CREATE_EVENT = "CREATE_EVENT";
export const UPDATE_EVENT = "UPDATE_EVENT";
export const DELETE_EVENT = "DELETE_EVENT";
export const REMOVE_EVENT = "REMOVE_EVENT";
export const ADD_ATTENDEE = "ADD_ATTENDEE";
export const DELETE_ATTENDEE = "DELETE_ATTENDEE";

export const receiveAllEvents = events => ({
  type: RECEIVE_ALL_EVENTS,
  events
});

export const receiveEvent = event => ({
  type: RECEIVE_EVENT,
  event
});

export const fetchEvent = id => ({
  type: FETCH_EVENT,
  id
});

export const fetchEvents = () => ({
  type: FETCH_ALL_EVENTS
});

export const createEvent = event => ({
  type: CREATE_EVENT,
  event
});

export const updateEvent = event => ({
  type: UPDATE_EVENT,
  event
});

export const deleteEvent = id => ({
  type: DELETE_EVENT,
  id
});

export const removeEvent = post => ({
  type: REMOVE_EVENT,
  post
});

export const addAttendee = (user, eventId) => ({
  type: ADD_ATTENDEE,
  user,
  eventId
});

export const deleteAttendee = (user, eventId) => ({
  type: DELETE_ATTENDEE,
  user,
  eventId
})
