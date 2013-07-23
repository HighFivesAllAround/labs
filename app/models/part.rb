class Part < ActiveRecord::Base

  belongs_to :project

  has_many :comments, :as => :commentable, :dependent => :destroy
  has_many :suggestions, :dependent => :destroy
  has_many :versions, :class_name => "PartVersion"

  validates :title, :presence => true

  def versioning_update!(msg, attrs)
    transaction do
      versions.create!(:content => content, :message => msg)
      update_attributes!(attrs)
    end
  end

end
