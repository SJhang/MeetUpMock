@users.each do |user|
  json.set! user.id do
    json.partial! "api/user", user: user
  end
end
