# Meetups

[Heroku link][heroku]

[Trello link][trello]

[heroku]: https://meet-ups.herokuapp.com/#/
[trello]: https://trello.com/b/1cF0AeDr/meetups

## Minimum Viable Product

Meetups is a web application inspired by Meetup built using Ruby on Rails
and React/Redux.  By the end of Week 9, this app will, at a minimum, satisfy the
following criteria with smooth, bug-free navigation, adequate seed data and
sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Groups and joining groups
- [ ] Events and RSVPs
- [ ] Calendar (on group page)
- [ ] Search by location and group info (name, description)
- [ ] Production README [sample](../production_readme.md)

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: ./wireframes
[components]: ./component-hierarchy.md
[sample-state]: ./sample-state.md
[api-endpoints]: ./api-endpoints.md
[schema]: ./schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Group Model, API, and components (2 days)

**Objective:** Groups can be created, read, joined and destroyed through the API

### Phase 3: Event Model, API, and components (2 days)

**objective:** Events can be created, read, joined and destroyed through the API

### Phase 4: RSVP (1 days)

**Objective:** RSVP can be read through the API, user can say yes to a rsvp

### Phase 5: Location (2 day)

**Objective:** Groups and events can be searched by the location

### Phase 6: Event Calendar (1 day)

**Objective:** events displayed in the time sequence and searchable with the calendar

### Phase 6: Data Seed (1 day)

**objective:** Splash page with more than 20 groups, upcoming events with
a whole month calendar filled for different locations

### Bonus Features (TBD)
- [ ] Calendar (for all groups in search results)
- [ ] Categories
