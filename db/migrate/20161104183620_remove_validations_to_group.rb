class RemoveValidationsToGroup < ActiveRecord::Migration[5.0]
  def change
    remove_index :groups, :organizer_id
  end
end
