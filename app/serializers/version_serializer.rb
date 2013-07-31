class VersionSerializer < ActiveModel::Serializer

  has_many :comments

  embed :ids, :include => true

  attributes :id, :content, :part_id

end
