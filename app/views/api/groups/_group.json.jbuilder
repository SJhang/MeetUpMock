json.extract! group, :name, :description, :city, :state, :organizer_id, :creation_date, :image

json.members do
  json.partial! "api/user", collection: group.members, as: :user
end
