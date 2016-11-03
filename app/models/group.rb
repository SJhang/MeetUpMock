class Group < ApplicationRecord
  validates :name, :description, :city, :state, :organizer_id, presence: true
  validates :name, :organizer_id, uniqueness: true
end
