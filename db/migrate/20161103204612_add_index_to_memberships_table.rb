class AddIndexToMembershipsTable < ActiveRecord::Migration[5.0]
  def change
    add_index :memberships, :member_id, unique: true
    add_index :memberships, :group_id, unique: true
  end
end
