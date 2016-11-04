class AddIndex < ActiveRecord::Migration[5.0]
  def change
    add_index :groups, :organizer_id
    add_index :events, :group_id
    add_index :memberships, [:member_id, :group_id], unique: true
    add_index :rsvps, [:attendee_id, :event_id], unique: true
  end
end
