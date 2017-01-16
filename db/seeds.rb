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
User.create!(username: "tonic", password: "59381234")
User.create!(username: "video", password: "12341234")
User.create!(username: "ruby", password: "590381243")
User.create!(username: "javascript", password: "09218531235")
User.create!(username: "benq", password: "77889900")
User.create!(username: "nikeshoes", password: "198237482")

Group.create!(name: "app Academy", description: "Number one bootcamp",
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
Group.create!(name: "Ruby on Rails", description: "What I have to know Ruby to join this group?

If you are interested in designing better software, you are welcome to join us. But you are expected to learn the basics of Ruby on your own if you don't already know a lot of Ruby.

What is this group about?

This group is for Ruby developers in San Francisco to come together, socialize, make new friends, improve their skills and discuss software designs and collaborate in projects. We welcome new and experienced software engineers alike.

What activities should you expect?

• Social gatherings/happy hour for fellow Rubyists.

• Ruby clinic/group code review on code samples of peers.
• Discussion on design patterns.

• Deep dive/case study of open source Ruby projects.

• Work on open source libraries together.

• Discussion of Meta-programming Techniques and when to use them.

• Sharing session from well-known Rubyists in San Francisco.

• Tips on learning iOS, RubyMotion, Javascript frameworks, Node.js from a Ruby background.",
city: "San Francisco", state: "CA", organizer_id: 5)
Group.create!(name: "SnowBoard Dummies", description: "Starbucks meeting", city: "Austin", state: "TX",
  organizer_id: 5)
Group.create!(name: "Free Yoga Austin", description: "Find free yoga classes throughout Austin! I started this group because I'd like members to be aware of all the free yoga going on around town. It's an easy way to try out different styles of yoga, taught by different instructors, and see what you like!

Notify me of other free community classes and I'll add them; also if you are a fellow yoga instructor who teaches a sponsored class (free for students) in Austin, join the group and I'll add it!", city: "Austin", state: "TX", organizer_id: 10, thumbnail_img_url: "https://res.cloudinary.com/dsetpdsls/image/upload/v1484571880/global_433283783_lspab4.jpg")
Group.create!(name: "Youtube Partners", description: "This networking event is for anyone who is or is interested in becoming a Youtube Partner; a creator of professional video content published onto Youtube. We are open to anyone looking to meet fellow users of Youtube, and we're also open to discussion about other video-sharing websites, too. We really want these events to be a friendly atmosphere that can facilitate the emerging Austin web television scene.

We will hold an event once a month in Austin, TX for our members to socialize and network with one another.

Feel free to join the Facebook group https://www.facebook.com/groups/1376933885880962/", city: "Austin", state: "TX", organizer_id: 9, banner_img_url: "https://a248.e.akamai.net/secure.meetupstatic.com/photos/theme_head/3/7/8/4/full_3134212.jpeg", thumbnail_img_url: "https://res.cloudinary.com/dsetpdsls/image/upload/v1484572119/global_268579612_gle2tj.png")
# Group.create!(name: , description: , city: , state: , organizer_id: , banner_img_url: , background_img_url: , thumbnail_img_url: )
# Group.create!(name: , description: , city: , state: , organizer_id: , banner_img_url: , background_img_url: , thumbnail_img_url: )
# Group.create!(name: , description: , city: , state: , organizer_id: , banner_img_url: , background_img_url: , thumbnail_img_url: )



Event.create!(title: "Happy Hour", description: "Super Duper 15 dollar pitcher",
  date: '18-06-12 10:34:09 PM', lat: "37.7913765", lng: "-122.3936249", group_id: 1,
  thumbnail_img_url: 'https://res.cloudinary.com/dsetpdsls/image/upload/v1484567464/Happy-Hour_hc7dar.jpg')
Event.create!(title: "League", description: "hit diamond again",
  date: '20-05-10 08:21:59 PM', lat: "37.7913765", lng: "-122.3936249", group_id: 2)
Event.create!(title: "Shower", description: "cleaniness matters",
  date: '80-01-03 11:59:59 AM', lat: "37.7913765", lng: "-122.3936249", group_id: 2)
Event.create!(title: "PingPong", description: "cleaniness matters",
  date: '80-01-03 11:59:59 AM', lat: "37.7913765", lng: "-122.3936249", group_id: 4,
  thumbnail_img_url: 'https://res.cloudinary.com/dsetpdsls/image/upload/v1484567466/untitled_text_yybgsm.jpg')
Event.create!(title: "Golf", description: "cleaniness matters",
  date: '80-01-03 11:59:59 AM', lat: "37.7913765", lng: "-122.3936249", group_id: 4,
  thumbnail_img_url: 'https://res.cloudinary.com/dsetpdsls/image/upload/v1484567464/psx001tg004859_urfhfl.jpg')
Event.create!(title: "Swimming", description: "cleaniness matters",
  date: '80-01-03 11:59:59 AM', lat: "37.7913765", lng: "-122.3936249", group_id: 4,
  thumbnail_img_url: 'https://res.cloudinary.com/dsetpdsls/image/upload/v1484567468/swimming_xv8sah.jpg')

rand_arr = Array.new(22) { rand(1...9) }
rand_arr.each do |num|
  rand_num = Integer(rand * 6)
  if rand_num != num
    Membership.create(member_id: rand_num, group_id: num)
    Rsvp.create(attendee_id: rand_num, event_id: num)
  end
end
