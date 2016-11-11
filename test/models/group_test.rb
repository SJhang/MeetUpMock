# == Schema Information
#
# Table name: groups
#
#  id                 :integer          not null, primary key
#  name               :string           not null
#  description        :text             not null
#  city               :string           not null
#  state              :string           not null
#  organizer_id       :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  banner_img_url     :string
#  background_img_url :string
#  thumbnail_img_url  :string
#

require 'test_helper'

class GroupTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
