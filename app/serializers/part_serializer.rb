class PartSerializer < ActiveModel::Serializer

  has_many :comments
  has_many :suggestions
  has_many :versions

  embed :ids, :include => true

  attributes :id, :title, :content, :project_id

end
