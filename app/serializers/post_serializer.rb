class PostSerializer < ActiveModel::Serializer

  embed :ids, :include => true

  attributes :content

end
