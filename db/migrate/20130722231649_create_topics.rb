class CreateTopics < ActiveRecord::Migration
  def change
    create_table :topics do |t|
      t.references :part

      t.text :content

      t.timestamps
    end

    add_index :topics, :part_id

    add_column :comments, :topic_id, :integer
    add_index :comments, :topic_id
  end
end
