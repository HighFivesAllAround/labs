class ProjectSerializer < ActiveModel::Serializer

  attributes :id, :name
  embed :ids, :include => true

  has_many :parts
  has_one :user

  def user
    object.user
  end

end
