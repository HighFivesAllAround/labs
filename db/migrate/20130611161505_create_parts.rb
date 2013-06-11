class CreateParts < ActiveRecord::Migration
  def change
    create_table :parts do |t|
      t.string :title
      t.text :content

      t.references :project

      t.timestamps
    end

    add_index :parts, :project_id
  end
end
