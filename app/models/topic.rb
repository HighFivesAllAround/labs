class Topic < ActiveRecord::Base

  belongs_to :part
  has_many :comments

  validates :content, :presence => true

end
