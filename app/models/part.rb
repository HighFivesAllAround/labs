class Part < ActiveRecord::Base

  belongs_to :project
  belongs_to :user

  has_many :comments, :as => :commentable, :dependent => :destroy
  has_many :suggestions, :dependent => :destroy

  validates :title, :presence => true

end
