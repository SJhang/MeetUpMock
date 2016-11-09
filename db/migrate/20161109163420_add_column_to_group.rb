class AddColumnToGroup < ActiveRecord::Migration[5.0]
  def change
    add_column :groups, :banner_img_url, :string
    add_column :groups, :background_img_url, :string
    add_column :groups, :thumbnail_img_url, :string
    remove_column :groups, :image, :string
    add_column :users, :description, :text
    add_column :events, :thumbnail_img_url, :string
  end
end
