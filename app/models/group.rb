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
  validates :name, :organizer_id, uniqueness: true

  has_many :memberships
  has_many :users, through: :memberships
  has_one :organizer, through: :memberships
end
