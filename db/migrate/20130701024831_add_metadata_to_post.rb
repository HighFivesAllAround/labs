class AddMetadataToPost < ActiveRecord::Migration
  def change
    add_column :posts, :metadata, :text
  end
end
