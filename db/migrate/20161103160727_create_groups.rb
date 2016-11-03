class CreateGroups < ActiveRecord::Migration[5.0]
  def change
    create_table :groups do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.integer :organizer_id, null: false
      t.timestamps
    end
    add_index :groups, :name, unique: true
    add_index :groups, :organizer_id, unique: true
  end
end
