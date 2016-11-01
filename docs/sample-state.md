```js
{
  currentUser: {
    id: 1,
    username: "sonik",
    profile_img: "path/to/img"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createGroup: {errors: ["Invalid input"]},
    createEvent: {errors: ["Invalid input"]}
  },
  groups: {
    1: {
      name: "app Academy",
      description: "keep it chill",
      city: "San Francisco",
      state: "CA",
      organizer_id: 1,
      creation_date: 2016-10-31,
      image: "path/to/img",
      groupMemebers: [
        {
          1: {
            name: "sonik",
            profile_img: "path/to/img"
          },
          2: {
            name: "Max",
            profile_img: "path/to/img"
          }
          ...users
        }
      ],
      reviews: {
        1: {
          body: "14th floor has great views",
          reviewer_id: 2,
          group_id: 1
        }
      }
    },
    ...groups
  },
  events: {
    1: {
      title: "Halloween",
      description: "dress up to win 15 bucks!",
      date: 2016-10-31,
      start_time: 19:00 PST
      lat: 37.7913765,
      lng: -122.3936249,
      group_id: 1,
      rsvps: [
        ...attendee_id
      ]
    }

  }
}
