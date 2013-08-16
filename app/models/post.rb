class Post < ActiveRecord::Base

  belongs_to :project
  belongs_to :user

  has_many :comments, :as => :commentable

  validates :content, :presence => true
  validates :user, :presence => true

  store :metadata,
    :accessors => [:title, :description, :original_url, :thumbnail_url, :html],
    :coder => JSON

end
