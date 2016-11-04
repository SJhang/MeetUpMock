# == Schema Information
#
# Table name: memberships
#
#  id         :integer          not null, primary key
#  member_id  :integer          not null
#  group_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Membership < ApplicationRecord
  validates :member_id, :group_id, uniqueness: true

  belongs_to :member
  belongs_to :group
end
