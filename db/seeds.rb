# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(username: "sonikjhang", password: "asdfasdf", email: 'sonik4595@gmail.com', name: "Sonik Jhang",
  description: "I own this website. I am a software developer, currently a full time job seeker.",
  profile_img: 'https://res.cloudinary.com/dvob94x30/image/upload/c_thumb,w_277/v1501879901/18813508_10213006758387395_5751299461158664626_n_xetpq5.png')
User.create!(username: "hyad", password: "asdfasdf", email: 'hypark1107@hotmail.com', name: "Christine Park",
  description: "Add me on Instagram hyparkx1107", profile_img: 'https://res.cloudinary.com/dsetpdsls/image/upload/v1478643214/z0hkrqrqdwcjyv0mbyww.jpg')
User.create!(username: "sunday", password: "12342134", email: 'sunday1122@naver.com', name: "Sunday Park",
  description: "I am a Russian Blue with green eyes.", profile_img: 'https://res.cloudinary.com/dsetpdsls/image/upload/v1478303948/cat_xur7c4.gif')
User.create!(username: "Max", password: "12342134", email: 'maxsoondae1@gmail.com', name: "Max Jhang",
  description: "I am a black mini-Poodle", profile_img: 'https://res.cloudinary.com/dsetpdsls/image/upload/v1484813999/1238036_10201991481652361_1800958299_n_edt93u.jpg')
User.create!(username: "sonik", password: "12342134", email: 'sonik.jhang@utexas.edu', name: "Sonik Jhang",
  )
User.create!(username: "Guest", password: "12342134", email: 'guestlogin@guest.com', name: "Guest")
User.create!(username: "David", password: "12342134", email: 'david.lee22@naver.com', name: "David Lee")
User.create!(username: "Paul", password: "12342134", email: 'paul_kim0101@hotmail.com', name: "Paul Kim")
User.create!(username: "bbongg", password: "12342134", email: 'bbongg@league.com', name: "Ahri")
User.create!(username: "nutcrack", password: "12342134", email: 'nutcrack@overtrack.io', name: "Dae Park")
User.create!(username: "jdrag", password: "12342134", email: 'jdrag@hotmail.com', name: "Juyong Park")
User.create!(username: "korea", password: "12342134", email: 'ilovebusan@busan.ac.kr', name: "Yeonsan Dong")
User.create!(username: "busan", password: "12342134", email: 'iloveseoul@seoul.ac.kr', name: "Suyeong Gu")
User.create!(username: "austinFarwest", password: "12342134", email: 'austin_west@campus.edu', name: "Hart lane")
User.create!(username: "Seoul", password: "12342134", email: 'farwest2500@austin.edu', name: "Gangnam gu")
User.create!(username: "iphone", password: "12342134", email: 'ihpone7@apple.com', name: "Domain")
User.create!(username: "smartwater", password: "12342134", email: 'evian@water.cup', name: "Sparkling Water")
User.create!(username: "tonic", password: "59381234", email: 'gin@and.tonic', name: "Gin Tonic")
User.create!(username: "video", password: "12341234", email: 'netflix@chill.now', name: "Jae Hyun")
User.create!(username: "ruby", password: "590381243", email: 'rails@back.end', name: "Epic High")
User.create!(username: "javascript", password: "09218531235", email: 'java@framework.js', name: "Joon Park")
User.create!(username: "benq", password: "77889900", email: 'benq@projector.com', name: "Ips Cooler")
User.create!(username: "nikeshoes", password: "198237482", email: 'just@do.it', name: "Yeezy Boost")

Group.create!(name: "app Academy", description: "Number one bootcamp",
  city: "San Francisco", state: "CA", organizer_id: 1,
  thumbnail_img_url: 'https://res.cloudinary.com/dsetpdsls/image/upload/v1484797377/28983bbc0ac0a12cde1c0dc3fc818b4b_gk3udx.png',
  banner_img_url: 'https://res.cloudinary.com/dsetpdsls/image/upload/v1484797192/Screen_Shot_2017-01-18_at_9.39.15_PM_s1ikhl.png')
Group.create!(name: "New Parents Meetup", description: "Please join us in our different adventures that offer the opportunity to meet other moms, gather information, form friendships and build a network of resources.

We look forward to welcoming you into our group.",
  city: "San Francisco", state: "CA", organizer_id: 2,
  thumbnail_img_url: "https://res.cloudinary.com/dsetpdsls/image/upload/v1484802560/global_12844783_sptq3e.jpg")
Group.create!(name: "San Jose Cat Meetup", description: "Dogs have masters; cats have servants. If this sounds like your house, let's get catty! Share tips, tricks and stories about life with our cute, curious and, yes, often crazy cats. Everyone welcome, but residents of the five boroughs of San Jose and nearby suburbs especially encouraged to join!", city: "San Jose", state: "CA", organizer_id: 3, thumbnail_img_url: 'https://res.cloudinary.com/dsetpdsls/image/upload/v1484802856/global_20957497_p5zub6.jpg')
Group.create!(name: "Austin Dog House", description: "This is a social club for responsible dog lovers and their social dogs. Membership is free we have no monthly fee's.  Only members can participate in any of the events posted on this page. Some play dates are off leash and divided into size specific categories. We have four themed off leash mixers at Austin Party Animals loft venue, Valentines day, St. Patrick's day, Halloween & Christmas. We have pool parties at a nearby facility in the summer.

CHICAGO PARTY ANIMALS OFF LEASH RULES

* 21+ to join

*Dogs must be UTD on vaccinations. please email vaccine records to info@chicagopartyanimals.com

*No unaltered dogs if the dog is over 9 months

* No humping

* No personal toys

* No personal treats

* Dogs must be social with new dogs

* No excessive barking

* No harsh corrections

* Do not leave your pup unattended

* Clean up after your dog

* Curb your dog before you enter

..* Have fun!

Josie & Mr. Big", city: "Austin", state: "TX", organizer_id: 3, thumbnail_img_url: 'https://res.cloudinary.com/dsetpdsls/image/upload/v1484813999/1238036_10201991481652361_1800958299_n_edt93u.jpg')
Group.create!(name: "UT parties", description: "drink up", city: "Austin", state: "TX", organizer_id: 4,
  thumbnail_img_url: 'https://res.cloudinary.com/dsetpdsls/image/upload/v1484820882/university-of-texas-longhorns-ncaa-logo-wall-poster-rp6137_mamvm0.jpg')
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
city: "San Francisco", state: "CA", organizer_id: 5, thumbnail_img_url: 'https://res.cloudinary.com/dsetpdsls/image/upload/v1484830127/ruby-on-rails_ntaowg.jpg')
Group.create!(name: "SnowBoard Dummies", description: "Starbucks meeting", city: "Austin", state: "TX",
  organizer_id: 5, thumbnail_img_url: 'https://res.cloudinary.com/dsetpdsls/image/upload/v1484830202/snowboarding_w01ecq.jpg')
Group.create!(name: "Free Yoga Austin", description: "Find free yoga classes throughout Austin! I started this group because I'd like members to be aware of all the free yoga going on around town. It's an easy way to try out different styles of yoga, taught by different instructors, and see what you like!

Notify me of other free community classes and I'll add them; also if you are a fellow yoga instructor who teaches a sponsored class (free for students) in Austin, join the group and I'll add it!", city: "Austin", state: "TX", organizer_id: 10, thumbnail_img_url: "https://res.cloudinary.com/dsetpdsls/image/upload/v1484571880/global_433283783_lspab4.jpg")
Group.create!(name: "Youtube Partners", description: "This networking event is for anyone who is or is interested in becoming a Youtube Partner; a creator of professional video content published onto Youtube. We are open to anyone looking to meet fellow users of Youtube, and we're also open to discussion about other video-sharing websites, too. We really want these events to be a friendly atmosphere that can facilitate the emerging Austin web television scene.

We will hold an event once a month in Austin, TX for our members to socialize and network with one another.

Feel free to join the Facebook group https://www.facebook.com/groups/1376933885880962/", city: "Austin", state: "TX", organizer_id: 9, banner_img_url: "https://a248.e.akamai.net/secure.meetupstatic.com/photos/theme_head/3/7/8/4/full_3134212.jpeg", thumbnail_img_url: "https://res.cloudinary.com/dsetpdsls/image/upload/v1484572119/global_268579612_gle2tj.png")


Event.create!(
  title: "Happy Hour", description: "Super Duper 15 dollar pitcher",
  date: DateTime.new(2016, 8, 10, 18, 30), lat: "37.7913765", lng: "-122.3936249", group_id: 1,
  thumbnail_img_url: 'https://res.cloudinary.com/dsetpdsls/image/upload/v1484567464/Happy-Hour_hc7dar.jpg')
Event.create!(title: "League", description: "hit diamond again",
  date: DateTime.new(2016, 10, 30, 20, 30), lat: "37.7913765", lng: "-122.3936249", group_id: 2,
  thumbnail_img_url: 'https://res.cloudinary.com/dsetpdsls/image/upload/v1484743370/Vayne-League-of-Legends-Wallpaper-full-HD-3_ggi1rp.jpg')
Event.create!(title: "Movie night", description: "For this week, we will be showing the Godfather",
  date: DateTime.new(2016, 12, 24, 21), lat: "37.7913765", lng: "-122.3936249", group_id: 2,
  thumbnail_img_url: 'https://res.cloudinary.com/dsetpdsls/image/upload/v1484744409/korona-world-theater_10deaeb3_L___Selected_tyv6ss.jpg')
Event.create!(title: "PingPong", description: "cleaniness matters",
  date: DateTime.new(2017, 1, 3, 15), lat: "37.7913765", lng: "-122.3936249", group_id: 4,
  thumbnail_img_url: 'https://res.cloudinary.com/dsetpdsls/image/upload/v1484567466/untitled_text_yybgsm.jpg')
Event.create!(title: "Golf", description: "cleaniness matters",
  date: DateTime.new(2017, 2, 5, 10), lat: "37.7913765", lng: "-122.3936249", group_id: 4,
  thumbnail_img_url: 'https://res.cloudinary.com/dsetpdsls/image/upload/v1484567464/psx001tg004859_urfhfl.jpg')
Event.create!(title: "Swimming", description: "cleaniness matters",
  date: DateTime.new(2017, 3, 14, 7), lat: "37.7913765", lng: "-122.3936249", group_id: 4,
  thumbnail_img_url: 'https://res.cloudinary.com/dsetpdsls/image/upload/v1484567468/swimming_xv8sah.jpg')
Event.create!(title: "Beer Pong", description: "Are you good at Beer Pong? Beer pong Challenge, this Friday starting at 10 P.M. Winner gets a Airpad mini",
  date: DateTime.new(2017, 8, 8, 9, 30), lat: "37.7913765", lng: "-122.3936249", group_id: 5,
thumbnail_img_url: "https://res.cloudinary.com/dsetpdsls/image/upload/v1484814140/beer_pong_logo_nobg_i84niy.png")

rand_arr = Array.new(23) { rand(0...23) }
rand_arr.each do |num|
  rand_num = Integer(rand * 23)
  if rand_num != num
    Membership.create(member_id: rand_num, group_id: num)
    Rsvp.create(attendee_id: rand_num, event_id: num)
  end
end
