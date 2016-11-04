# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(username: "hy", password: "asdfasdf")
User.create!(username: "sunday", password: "12342134")

Group.create!(name: "app Academy", description: "Best coding boot camp",
  city: "Austin", state: "TX", organizer_id: 1)
Group.create!(name: "Sonik House", description: "Ivette's basement",
  city: "SF", state: "CA", organizer_id: 1)
Group.create!(name: "Hy House", description: "West Campus", city: "Austin", state: "TX",
  organizer_id: 2)

Event.create!(title: "Happy Hour", description: "Super Duper 15 dollar pitcher",
  date: '18-06-12 10:34:09 PM', lat: "37.7913765", lng: "-122.3936249", group_id: 1)
Event.create!(title: "League", description: "hit diamond again",
  date: '20-05-10 08:21:59 PM', lat: "37.7913765", lng: "-122.3936249", group_id: 2)
Event.create!(title: "Shower", description: "cleaniness matters",
  date: '80-01-03 11:59:59 AM', lat: "37.7913765", lng: "-122.3936249", group_id: 2)
