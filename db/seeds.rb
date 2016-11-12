# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(username: "sonikjhang", password: "asdfasdf")
User.create!(username: "hyad", password: "asdfasdf")
User.create!(username: "sunday", password: "12342134")
User.create!(username: "Max", password: "12342134")
User.create!(username: "sonik", password: "12342134")
User.create!(username: "Guest", password: "12342134")
User.create!(username: "David", password: "12342134")
User.create!(username: "Paul", password: "12342134")
User.create!(username: "bbongg", password: "12342134")
User.create!(username: "nutcrack", password: "12342134")
User.create!(username: "jdrag", password: "12342134")
User.create!(username: "korea", password: "12342134")
User.create!(username: "busan", password: "12342134")
User.create!(username: "austinFarwest", password: "12342134")
User.create!(username: "Seoul", password: "12342134")
User.create!(username: "iphone", password: "12342134")
User.create!(username: "smartwater", password: "12342134")

Group.create!(name: "app Academy", description: "Best coding boot camp",
  city: "Austin", state: "TX", organizer_id: 1)
Group.create!(name: "Sonik House", description: "Ivette's basement",
  city: "SF", state: "CA", organizer_id: 2)
Group.create!(name: "Hy House", description: "meow", city: "Austin", state: "TX",
  organizer_id: 3)
Group.create!(name: "Bernal Heights", description: "woof woof", city: "Austin", state: "TX",
  organizer_id: 3)
Group.create!(name: "WestCampus", description: "drink up", city: "Austin", state: "TX",
  organizer_id: 4)
Group.create!(name: "FarWest", description: "Starbucks meeting", city: "Austin", state: "TX",
  organizer_id: 5)

Event.create!(title: "Happy Hour", description: "Super Duper 15 dollar pitcher",
  date: '18-06-12 10:34:09 PM', lat: "37.7913765", lng: "-122.3936249", group_id: 1)
Event.create!(title: "League", description: "hit diamond again",
  date: '20-05-10 08:21:59 PM', lat: "37.7913765", lng: "-122.3936249", group_id: 2)
Event.create!(title: "Shower", description: "cleaniness matters",
  date: '80-01-03 11:59:59 AM', lat: "37.7913765", lng: "-122.3936249", group_id: 2)
Event.create!(title: "PingPong", description: "cleaniness matters",
  date: '80-01-03 11:59:59 AM', lat: "37.7913765", lng: "-122.3936249", group_id: 4)
Event.create!(title: "Golf", description: "cleaniness matters",
  date: '80-01-03 11:59:59 AM', lat: "37.7913765", lng: "-122.3936249", group_id: 4)
Event.create!(title: "Swimming", description: "cleaniness matters",
  date: '80-01-03 11:59:59 AM', lat: "37.7913765", lng: "-122.3936249", group_id: 4)

rand_arr = Array.new(15) { rand(1...9) }
rand_arr.each do |num|
  rand_num = Integer(rand * 6)
  if rand_num != num
    Membership.create(member_id: rand_num, group_id: num)
    Rsvp.create(attendee_id: rand_num, event_id: num)
  end
end
