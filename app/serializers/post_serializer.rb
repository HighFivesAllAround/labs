class PostSerializer < ActiveModel::Serializer

  has_many :comments
  has_one :user

  embed :ids, :include => true

  attributes :id, :content, :project_id

  # oembed metadata
  attributes :title, :description, :original_url, :thumbnail_url, :html

  def user
    object.user
  end

end
