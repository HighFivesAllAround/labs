class Suggestion < ActiveRecord::Base

  belongs_to :part

  has_many :comments, :as => :commentable, :dependent => :destroy

end
