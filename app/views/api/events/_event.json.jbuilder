json.extract! event, :title, :description, :date, :lat, :lng, :group_id, :id, :thumbnail_img_url

json.attendees do
  json.partial! 'api/user', collection: event.attendees, as: :user
end
