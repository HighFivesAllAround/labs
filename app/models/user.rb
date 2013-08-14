class User < ActiveRecord::Base
  has_secure_password

  has_many :comments
  has_many :parts
  has_many :posts
  has_many :suggestions
  has_many :collaborations
  has_many :projects, :through => :collaborations

end
