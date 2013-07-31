class Part < ActiveRecord::Base

  belongs_to :project

  has_many :comments, -> { where(:archived => false) }, :as => :commentable, :dependent => :destroy
  has_many :suggestions, :dependent => :destroy
  has_many :versions, :dependent => :destroy

  validates :title, :presence => true

  def cut_version!
    version = versions.create!(:content => content)
    comments.where(:version_id => nil).update_all(:version_id => version)
    version
  end

end
