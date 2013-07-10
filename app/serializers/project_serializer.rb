class ProjectSerializer < ActiveModel::Serializer

  attributes :id, :name
  embed :ids, include: true

  has_many :parts

end
