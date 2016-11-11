json.extract! group, :id, :name, :description, :city, :state, :organizer_id, :created_at, :banner_img_url, :background_img_url, :thumbnail_img_url

json.members do
  json.partial! "api/user", collection: group.members, as: :user
end

json.events do
  json.partial! "api/events/event", collection: group.events, as: :event
end

# json.created_at @group.created_at.strftime("%A %B %e %Y")
