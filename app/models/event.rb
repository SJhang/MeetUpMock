# == Schema Information
#
# Table name: events
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :text             not null
#  date        :datetime         not null
#  lat         :float            not null
#  lng         :float            not null
#  group_id    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Event < ApplicationRecord
  validates :title, :description, :date, :lat, :lng, presence: true
  validates :date, uniqueness: true

  has_many :rsvps,
    primary_key: :id,
    foreign_key: :event_id,
    class_name: :Rsvp
  has_many :attendees, through: :rsvps, source: :attendee

  belongs_to :group
end
