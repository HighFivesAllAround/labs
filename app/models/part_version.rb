class PartVersion < ActiveRecord::Base

  belongs_to :part

  has_many :comments

  validates :content, :presence => true
  validates :message, :presence => true

end
