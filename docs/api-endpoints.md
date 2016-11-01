# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Groups

- `GET /api/groups`
- `POST /api/groups`
- `GET /api/groups/:id`
- `PATCH /api/groups/:id`
- `GET /api/groups/:id/events`
  - index of all events for a group
- `GET /api/groups/:id/reviews`
  - index of all reviews for a group
- `DELETE /api/groups/:id`

### Events

- `GET /api/events`
- `POST /api/events`
- `GET /api/events/:id`
- `GET /api/events/:id/rsvps`
  - index of all RSVPs for an event
- `DELETE /api/events/:id`


### RSVPs

- `POST /api/rsvps`
- `GET /api/rsvps/:id`
- `DELETE /api/rsvps/:id`

### Locations

- `GET /api/locations`
- `GET /api/locations/:id`

### Reviews

- `GET /api/reviews`
- `POST /api/reviews`
- `GET /api/reviews/:id`
- `DELETE /api/reviews/:id`
- `PATCH /api/reviews/:id`
