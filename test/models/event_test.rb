# == Schema Information
#
# Table name: events
#
#  id                :integer          not null, primary key
#  title             :string           not null
#  description       :text             not null
#  date              :datetime         not null
#  lat               :float            not null
#  lng               :float            not null
#  group_id          :integer          not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  thumbnail_img_url :string
#  start_time        :datetime
#  end_time          :datetime
#

require 'test_helper'

class EventTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
