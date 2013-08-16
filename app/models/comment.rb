class Comment < ActiveRecord::Base

  belongs_to :commentable, inverse_of: :comments, polymorphic: true
  belongs_to :user

  validates :commentable, :presence => true
  validates :content, :presence => true, :allow_blank => false
  validates :user, :presence => true

end
