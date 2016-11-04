json.partial! 'api/groups/group', group: @group

@members
# json.extract! group, :id, :name, :description, :city, :state, :organizer_id, :creation_date, :image, :group_members
#
# json.extract! @group, :id, :title, :description, :location, :banner_url,
# :organizer, :users, :user_groups, :events, :updated_at
# json.created_at @group.created_at.strftime("%A, %B %e, %Y")

# json.array! @groups do |group|
# groups: {
#   1: {
#     name: "app Academy",
#     description: "keep it chill",
#     city: "San Francisco",
#     state: "CA",
#     organizer_id: 1,
#     creation_date: 2016-10-31,
#     image: "path/to/img",
#     groupMemebers: [
#       {
#         1: {
#           name: "sonik",
#           profile_img: "path/to/img"
#         },
#         2: {
#           name: "Max",
#           profile_img: "path/to/img"
#         }
#         ...users
#       }
#     ],
#     reviews: {
#       1: {
#         body: "14th floor has great views",
#         reviewer_id: 2,
#         group_id: 1
#       }
#     }
#   },
#   ...groups
# },
