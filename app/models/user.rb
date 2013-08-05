class User < ActiveRecord::Base
  has_secure_password

  has_many :comments
  has_many :parts
  has_many :posts
  has_many :projects
  has_many :suggestions

end
