class PartSerializer < ActiveModel::Serializer

  has_many :comments
  has_many :suggestions

  embed :ids, :include => true

  attributes :id, :title, :content

end
