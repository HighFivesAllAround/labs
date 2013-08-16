class User < ActiveRecord::Base
  has_secure_password

  has_many :comments, :dependent => :destroy
  has_many :parts, :dependent => :destroy
  has_many :posts, :dependent => :destroy
  has_many :suggestions, :dependent => :destroy
  has_many :collaborations, :dependent => :destroy
  has_many :projects, :through => :collaborations

  validates :username, :uniqueness => true
  validates :email,
    :format => { :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/ },
    :uniqueness => true

end
