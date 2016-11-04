class RemoveIndex < ActiveRecord::Migration[5.0]
  def change
    remove_index :memberships, :group_id
    remove_index :memberships, :member_id
    remove_index :rsvps, :attendee_id
    remove_index :rsvps, :event_id
  end
end
