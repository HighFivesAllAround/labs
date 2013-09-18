class PartSerializer < ActiveModel::Serializer

  has_many :comments
  has_many :suggestions
  has_many :versions
  has_one :user

  embed :ids, :include => true

  attributes :id, :title, :content, :project_id

  def user
    object.user
  end

end
