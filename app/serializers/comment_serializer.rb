class CommentSerializer < ActiveModel::Serializer

  embed :ids, :include => true

  attributes :id, :content, :archived, :commentable_type, :commentable_id, :created_at

end
