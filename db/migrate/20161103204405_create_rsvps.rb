class CreateRsvps < ActiveRecord::Migration[5.0]
  def change
    create_table :rsvps do |t|
      t.integer :attendee_id, null: false
      t.integer :event_id, null: false
      t.timestamps
    end
    add_index :rsvps, :attendee_id, unique: true
    add_index :rsvps, :event_id, unique: true
  end
end
