class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.timestamp :date, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.integer :group_id, null: false
      t.timestamps
    end
    add_index :events, :date, unique: true
  end
end
