class SuggestionSerializer < ActiveModel::Serializer

  has_many :comments
  has_one :user

  embed :ids, :include => true

  attributes :id, :content, :part_id # Remove part_id when you upgrade ember-data

  def user
    object.user
  end

end
