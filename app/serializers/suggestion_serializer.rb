class SuggestionSerializer < ActiveModel::Serializer

  has_many :comments

  embed :ids, :include => true

  attributes :id, :content, :part_id # Remove part_id when you upgrade ember-data

end
