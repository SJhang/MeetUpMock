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
  validates_uniqueness_of :event_id, scope: :attendee_id

  belongs_to :attendee,
    primary_key: :id,
    foreign_key: :attendee_id,
    class_name: :User

  belongs_to :event
end
