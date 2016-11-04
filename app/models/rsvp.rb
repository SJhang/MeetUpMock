# == Schema Information
#
# Table name: rsvps
#
#  id          :integer          not null, primary key
#  attendee_id :integer          not null
#  event_id    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Rsvp < ApplicationRecord
  validates :attendee_id, :event_id, uniqueness: true

  belongs_to :user
  belongs_to :event
end
