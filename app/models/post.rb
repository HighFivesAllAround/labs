class Post < ActiveRecord::Base

  belongs_to :project

  has_many :comments, :as => :commentable

  validates :content, :presence => true

  store :metadata,
    :accessors => [:title, :description, :original_url, :thumbnail_url, :html],
    :coder => JSON

end
