class CreatePartVersions < ActiveRecord::Migration
  def change
    create_table :part_versions do |t|
      t.references :part

      t.text :content
      t.string :message

      t.timestamps
    end

    add_index :part_versions, :part_id

    add_column :comments, :part_version_id, :integer
    add_index :comments, :part_version_id
  end
end
