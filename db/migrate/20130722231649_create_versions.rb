class CreateVersions < ActiveRecord::Migration
  def change
    create_table :versions do |t|
      t.references :part

      t.text :content

      t.timestamps
    end

    add_index :versions, :part_id

    add_column :comments, :version_id, :integer
    add_index :comments, :version_id
  end
end
