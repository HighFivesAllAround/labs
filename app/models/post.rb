class Post < ActiveRecord::Base

  belongs_to :project

  has_many :comments, :as => :commentable

  validates :content, :presence => true

end
