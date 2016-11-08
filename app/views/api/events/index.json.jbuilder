@events.each do |event|
  json.set! event.id do
    json.partial! "event", event: event
    json.rsvps do
      json.partial! 'api/user', collection: event.attendees, as: :user
    end
  end
end
