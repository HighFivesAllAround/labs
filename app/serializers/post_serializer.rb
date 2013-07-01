class PostSerializer < ActiveModel::Serializer

  has_many :comments

  embed :ids, :include => true

  attributes :id, :content, :project_id

end
