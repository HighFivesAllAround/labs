class Project < ActiveRecord::Base

  has_many :parts, :dependent => :destroy

  validates :name, :presence => true

end
