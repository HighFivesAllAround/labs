class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.text :content

      t.references :project

      t.timestamps
    end
  end
end
