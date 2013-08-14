class Collaboration < ActiveRecord::Base

  belongs_to :project, :inverse_of => :collaboration
  belongs_to :user, :inverse_of => :collaboration

end
