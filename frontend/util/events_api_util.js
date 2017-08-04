export const getAllEvents = (success) => {
  $.ajax({
    url: 'api/events',
    success
  });
};

export const getEvent = (id, success, errors) => {
  $.ajax({
    url: `api/events/${id}`,
    success,
    errors
  });
};

export const createEvent = (event, success, errors) => {
  $.ajax({
    method: 'POST',
    url: `api/events`,
    data: {event},
    success,
    errors
  });
};

export const updateEvent = (event, success, errors) => {
  $.ajax({
    method: 'PATCH',
    url: `api/events/${event.id}`,
    data: {event},
    success,
    errors
  });
};

export const deleteEvent = (id, success, errors) => {
  $.ajax({
    method: 'DELETE',
    url: `api/events/${id}`,
    success,
    errors
  });
};

export const addAttendee = (user, success, eventId) => {
  $.ajax({
    method: "PATCH",
    url: `api/events/${eventId}`,
    data: {event: {attendees: {user}}},
    success
  });
};

export const deleteAttendee = (user, success, eventId) => {
  $.ajax({
    method: "PATCH",
    url: `api/events/${eventId}`,
    data: {event: {attendees: {user}}},
    success
  });
};
