class Group < ApplicationRecord
  validates :name, :description, :city, :state, :organizer_id, presence: true
  validates :name, :organizer_id, uniqueness: true

  has_many :memberships
  has_many :users, through: :memberships
  has_one :organizer, through: :memberships
end
