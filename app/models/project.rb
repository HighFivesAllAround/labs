class Project < ActiveRecord::Base

  belongs_to :user

  has_many :parts, :dependent => :destroy
  has_many :posts, :dependent => :destroy
  has_many :collaborations, :dependent => :destroy
  has_many :users, :through => :collaborations

  validates :name, :presence => true, :uniqueness => true
  validates :user, :presence => true

end
