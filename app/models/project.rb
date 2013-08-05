class Project < ActiveRecord::Base

  belongs_to :user

  has_many :parts, :dependent => :destroy
  has_many :posts, :dependent => :destroy

  validates :name, :presence => true

end
