# == Schema Information
#
# Table name: groups
#
#  id           :integer          not null, primary key
#  name         :string           not null
#  description  :text             not null
#  city         :string           not null
#  state        :string           not null
#  organizer_id :integer          not null
#  image        :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Group < ApplicationRecord
  validates :name, :description, :city, :state, :organizer_id, presence: true
  validates :name, uniqueness: true

  attr_reader :location

  has_many :events
  has_many :memberships
  has_many :members, through: :memberships, source: :member

  belongs_to :organizer,
    primary_key: :id,
    foreign_key: :organizer_id,
    class_name: :User
end
