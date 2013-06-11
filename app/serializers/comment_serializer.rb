class CommentSerializer < ActiveModel::Serializer

  embed :ids, :include => true

  attributes :id, :content, :commentable_type, :commentable_id

end
