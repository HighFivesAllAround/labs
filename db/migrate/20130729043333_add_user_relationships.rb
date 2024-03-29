class AddUserRelationships < ActiveRecord::Migration
  def change
    add_reference :comments, :user, index: true
    add_reference :parts, :user, index: true
    add_reference :posts, :user, index: true
    add_reference :projects, :user, index: true
    add_reference :suggestions, :user, index: true
  end
end
