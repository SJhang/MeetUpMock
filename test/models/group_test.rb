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

require 'test_helper'

class GroupTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
