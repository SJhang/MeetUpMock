json.extract! event, :title, :description, :date, :lat, :lng, :group_id, :id, :thumbnail_img_url

json.attendees do
  json.partial! 'api/user', collection: event.attendees, as: :user
end

# json.start_time event.start_time.strftime("%A, %B %e, %Y, %l:%M %p")
# json.end_time event.end_time.strftime("%A, %B %e, %Y, %l:%M %p")
# json.created_at event.created_at.strftime("%A, %B %e, %Y")
