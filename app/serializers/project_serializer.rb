class ProjectSerializer < ActiveModel::Serializer

  embed :ids, :include => true

  attributes :id, :name

  has_many :parts

end
