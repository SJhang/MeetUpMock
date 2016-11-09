json.extract! event, :title, :description, :date, :lat, :lng, :group_id, :id

json.attendees do
  json.partial! 'api/user', collection: event.attendees, as: :user
end
