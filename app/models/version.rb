class Version < ActiveRecord::Base

  belongs_to :part
  has_many :comments

  validates :content, :presence => true
  validates :part, :presence => true

end
