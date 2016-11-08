```js
{
  currentUser: {
    id: 1,
    username: "sonik",
    profile_img_url: "img_url"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createGroup: {errors: ["Invalid input"]},
    createEvent: {errors: ["Invalid input"]}
  },
  groups: {
    groupId: {
      name: "app Academy",
      description: "keep it chill",
      city: "San Francisco",
      state: "CA",
      organizer_id: 1,
      creation_date: 2016-10-31,
      banner_image_url: "img_url",
      background_image_url: "img_url",
      thumbnail_image_url: "img_url",
      members: {
        {
          1: {
            name: "sonik",
            profile_img_url: "path/to/img"
          },
          2: {
            name: "Max",
            profile_img_url: "path/to/img"
          }
          ...users
        }
      },
      reviews: {
        1: {
          body: "14th floor has great views",
          reviewer_id: 2,
          group_id: 1
        },

        2: {
          body: "asdfsdf",
          reviewer_id: 3,
          group_id: 1
        },
        ...reviews
      }
    },
    ...groups
  },
  events: {
    1: {
      id: 1,
      title: "Halloween",
      description: "dress up to win 15 bucks!",
      date: 2016-10-31 19:00 PST,
      lat: 37.7913765,
      lng: -122.3936249,
      group_id: 1,
      rsvps: [
        {
          id: 1,
          username: "sonik",
          email: "hi@hi.com",
          profile_img_url: "image_url"
        }
        ...attendee_id
      ]
    }
  },
  users: {
    id: 1,
    username: "sonik",
    email: "asdf@asdf.com",
    profile_img_url: "image_url"
  }
}
