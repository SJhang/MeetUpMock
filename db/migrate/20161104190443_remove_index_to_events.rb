class RemoveIndexToEvents < ActiveRecord::Migration[5.0]
  def change
    remove_index :events, :date
    add_index :events, :date
  end
end
