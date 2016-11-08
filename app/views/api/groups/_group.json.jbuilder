json.extract! group, :id, :name, :description, :city, :state, :organizer_id, :created_at, :image

json.members do
  json.partial! "api/user", collection: group.members, as: :user
end
