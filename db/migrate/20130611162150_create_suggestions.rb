class CreateSuggestions < ActiveRecord::Migration

  def change

    create_table :suggestions do |t|
      t.text :content

      t.integer :part_id

      t.timestamps
    end

    add_index :suggestions, :part_id

  end

end
