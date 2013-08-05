class Suggestion < ActiveRecord::Base

  belongs_to :part
  belongs_to :user

  has_many :comments, :as => :commentable, :dependent => :destroy

end
