# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161104185118) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "events", force: :cascade do |t|
    t.string   "title",       null: false
    t.text     "description", null: false
    t.datetime "date",        null: false
    t.float    "lat",         null: false
    t.float    "lng",         null: false
    t.integer  "group_id",    null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["date"], name: "index_events_on_date", unique: true, using: :btree
    t.index ["group_id"], name: "index_events_on_group_id", using: :btree
  end

  create_table "groups", force: :cascade do |t|
    t.string   "name",         null: false
    t.text     "description",  null: false
    t.string   "city",         null: false
    t.string   "state",        null: false
    t.integer  "organizer_id", null: false
    t.string   "image"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.index ["name"], name: "index_groups_on_name", unique: true, using: :btree
    t.index ["organizer_id"], name: "index_groups_on_organizer_id", using: :btree
  end

  create_table "memberships", force: :cascade do |t|
    t.integer  "member_id",  null: false
    t.integer  "group_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["member_id", "group_id"], name: "index_memberships_on_member_id_and_group_id", unique: true, using: :btree
  end

  create_table "rsvps", force: :cascade do |t|
    t.integer  "attendee_id", null: false
    t.integer  "event_id",    null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["attendee_id", "event_id"], name: "index_rsvps_on_attendee_id_and_event_id", unique: true, using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.string   "email"
    t.string   "profile_img"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
