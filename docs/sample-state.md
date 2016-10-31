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
    createGroup: {errors: ["Invalid type"]},
    leaveReview: {}
  },
  group: {
    1: {
      name: "app Academy",
      profile_img: "path/to/img",
      attendee_name: "coders"
    }
  }
  groupDetail: {
    1: {
      name: "app Academy",
      description: "keep it chill",
      location_id: 1,
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
      ]
    },
    reviews: {
      body: "14th floor has great views",
      reviewer_id: 2,
      group_id: 1
    }
  },
  event: {
    title: "Halloween",
    location: "San Francisco",
    date: 2016-10-31
  }
  eventDetail: {
    title: "Halloween",
    description: "dress up to win 15 bucks!",
    date: 2016-10-31,
    start_time: 19:00 PST
    location_lat: 37.7913765,
    location_lng: -122.3936249,
    group_id: 1,
    rsvp_yes_count: 70
  },
  locations: [
    {
      1: {
        city: "San Francisco",
        state: "CA"
      },
      2: {
        city: "Austin",
        state: "TX"
      },
      ...locations
    }
  ]

}
