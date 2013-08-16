class Collaboration < ActiveRecord::Base

  belongs_to :project, :inverse_of => :collaborations
  belongs_to :user, :inverse_of => :collaborations

  validates :project, :presence => true
  validates :user, :presence => true

end
