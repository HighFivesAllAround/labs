class Comment < ActiveRecord::Base

  belongs_to :commentable, inverse_of: :comments, polymorphic: true
  belongs_to :part_version

  validates :commentable, :presence => true
  validates :content, :presence => true, :allow_blank => false

end
