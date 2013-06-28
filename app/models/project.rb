class Project < ActiveRecord::Base

  has_many :parts, :dependent => :destroy
  has_many :posts, :dependent => :destroy

  validates :name, :presence => true

end
