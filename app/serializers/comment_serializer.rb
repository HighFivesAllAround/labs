class CommentSerializer < ActiveModel::Serializer

  has_one :user

  embed :ids, :include => true

  attributes :id, :content, :archived, :commentable_type, :commentable_id, :created_at

  def user
    object.user
  end

end
