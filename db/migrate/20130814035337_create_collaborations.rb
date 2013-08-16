class CreateCollaborations < ActiveRecord::Migration
  def change
    create_table :collaborations do |t|
      t.references :user
      t.references :project

      t.timestamps
    end

    add_index :collaborations, [:user_id, :project_id], :unique => true
  end
end
