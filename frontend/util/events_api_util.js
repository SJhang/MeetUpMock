export const fetchEvents = (params={}, success, errors) => {
  $.ajax({
    url: '/api/events',
    data: params,
    success,
    errors
  });
};

export const fetchEvent = (id, success, errors) => {
  $.ajax({
    url: `/api/events/${id}`,
    success,
    errors
  });
};

export const createEvent = (event, success, errors) => {
  $.ajax({
    method: 'POST',
    url: `/api/events`,
    data: {event},
    success,
    errors
  });
};

export const updateEvent = (event, success, errors) => {
  $.ajax({
    method: 'PATCH',
    url: `/api/events/${event.id}`,
    data: {event},
    success,
    errors
  });
};

export const deleteEvent = (id, success, errors) => {
  $.ajax({
    method: 'DELETE',
    url: `/api/events/${id}`,
    success,
    errors
  });
};
