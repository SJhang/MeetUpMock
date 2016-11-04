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
  validates_uniqueness_of :group_id, scope: :member_id

  belongs_to :member,
    primary_key: :id,
    foreign_key: :member_id,
    class_name: :User

  belongs_to :group
end
