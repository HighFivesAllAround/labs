class Part < ActiveRecord::Base

  belongs_to :project

  has_many :comments, :as => :commentable, :dependent => :destroy
  has_many :topical_comments, -> { where(:topic_id => nil) }, :as => :commentable, :class_name => "Comment"
  has_many :suggestions, :dependent => :destroy
  has_many :topics, :dependent => :destroy

  validates :title, :presence => true

  def reset_topic!(attrs)
    topics.create!(attrs).tap do |t|
      topical_comments.update_all(:topic_id => t.id)
    end
  end

end
